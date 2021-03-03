/**
 * OpenWilma.JS Messages functionality
 *
 * By: @Esinko @jeffeeeee
 */

import apiRequest from "../../net/apiRequest"
import { WilmaSession } from "../../types"
import Errors from "../../utils/error"
import {
    WilmaListMessage,
    WilmaMessage,
    MessageReply,
    WilmaMessageLocation
} from "../../types/message"
import { WilmaRole } from "./../../types/account"
import { toUTF8 } from "../../utils/parser"
import { WilmaAccount } from "../../types/account"

export default class Messages {
    session: WilmaSession
    categories: WilmaMessageLocation[]
    roles: WilmaRole[]
    constructor(session: WilmaSession){
        this.session = session
        this.categories = ["inbox", "sent", "drafts", "archive"]
        this.roles = ["teacher", "student", "staff", "parent", "workplace-instructor", "management", "generic" ]
    }

    private toCallsign(data: string): string {
        if (data.includes(", ")){
            return data.split(", ")[1]
        } else if(data.includes(" (") && data.includes(")")){
            return data.split(" (")[1].replace(")", "")
        } else {
            return data
        }
    }

    private parseMessage(message: string): string {
        const final = toUTF8(message.replace(/(<(\/p|p)>)/g, "").replace(/(\\[a-z])/g, ""))

        return final
    }

    private getCategory(category: string) {
        if (category == "inbox") return "/"
        else return `/${category}`
    }

    private getRole(role: number): WilmaRole {
        return this.roles[role - 1]
    }

    /**
    * List all messages in a specific category
    * @param {WilmaMessageLocation} category The message category.
    */
    async list(category: WilmaMessageLocation): Promise<WilmaListMessage[]> {
        try {
            if (!this.categories.includes(category)) throw new Errors.WAPIError("No such message category")
            const messages = await apiRequest.get({
                session: this.session,
                endpoint: `/messages/list${this.getCategory(category)}`
            })
            if(messages.status == 200) {

                const messagesArray: WilmaListMessage[] = messages.data.Messages
                if (!messagesArray) return []

                const final = messagesArray.map((message: any): WilmaListMessage => {
                    return {
                        id: message.Id,
                        subject: message.Subject,
                        timestamp: message.TimeStamp,
                        folder: message.Folder,
                        sender: {
                            id: message.SenderId,
                            role: this.getRole(message.SenderType),
                            name: message.Sender.split(" (")[0],
                            callsign: this.toCallsign(message.Sender)
                        }
                    }
                })

                return final
            } else {
                throw new Errors.WAPIServerError(messages.data.error)
            }
        }
        catch(err){
            throw new Errors.WAPIError(err)
        }
    }

    /**
    * List all available recipients
    */
    async listRecipients(){
        try {
            // Note: This list is incomplete! Some stuff may be missing, but these are all we can get. API limitations are the root cause.
            const recipients = await apiRequest.get({
                session: this.session,
                endpoint: "/messages/recipients/?select_recipients"
            })
            if(recipients.status == 200){
                const built: WilmaAccount[] = []
                // Guardians
                if(recipients.data.GuardianRecords != undefined){
                    for(const guardian of recipients.data.GuardianRecords){
                        // TODO
                        // built.push({
                        //     id: guardian.Id,
                        //     name: guardian.Caption,
                        //     role:
                        // })
                    }
                }
            }else {
                throw new Errors.WAPIError("Unexpected response server response")
            }
        }
        catch(err){
            throw new Errors.WAPIError(err)
        }
    }

    /**
     * Get message by id
     */
    async get (messageId: number): Promise<WilmaMessage> { //TODO: (better parser. returns html as a message content) (Search functionality. search by teacher id or callsign timestamp subject etc.)
        try {
            const message = await apiRequest.get({
                session: this.session,
                endpoint: `/messages/${messageId}?format=json`
            })

            if (message.status == 200) {
                const messageObject: any = message.data.messages[0]
                console.log(messageObject)

                const replies = messageObject.ReplyList ? messageObject.ReplyList.map((reply: any): MessageReply => ({
                    id: reply.Id,
                    content: this.parseMessage(reply.ContentHtml),
                    timestamp: reply.TimeStamp,
                    sender: {
                        id: reply.SenderId,
                        role: this.getRole(reply.SenderType),
                        name: reply.Sender.split(" (")[0],
                        callsign: this.toCallsign(messageObject.Sender)
                    }
                })) : []

                const final: WilmaMessage = {
                    subject: messageObject.Subject,
                    timestamp: messageObject.TimeStamp,
                    folder: messageObject.Folder,
                    sender: {
                        id: messageObject.SenderId,
                        role: this.getRole(messageObject.SenderType),
                        name: messageObject.Sender.split(" (")[0],
                        callsign: this.toCallsign(messageObject.Sender)
                    },
                    permissions: {
                        forward: messageObject.AllowForward != undefined ? messageObject.AllowForward : true, //In drafts this is missing
                        reply: messageObject.AllowReply
                    },
                    replies: replies,
                    content: this.parseMessage(messageObject.ContentHtml),
                    id: messageObject.Id
                }

                return final
            } else {
                throw new Errors.WAPIServerError(message.data.error)
            }
        } catch(err){
            throw new Errors.WAPIError(err)
        }
    }

    /**
     * Create a new message draft
     */
    async create(){

    }

    /**
     * Send a message draft
     */
    async send(){

    }

}
