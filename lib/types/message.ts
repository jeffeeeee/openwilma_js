/**
 * Typings for messages
 */


import { WilmaRole } from "./account"

/**
 * Wilma message entity
 */

export type WilmaMessageLocation = "sent"|"archive"|"inbox"|"drafts"

interface MessageSender {
    role: WilmaRole,
    id: string,
    name: string,
    callsign: string
}

export interface MessageReply {
  id: string,
  content: string,
  timestamp: Date,
  sender: MessageSender
}

export interface WilmaMessage extends WilmaListMessage {
  content: string,
  replies: [MessageReply?],
  permissions: {
    forward: boolean,
    reply: boolean
  }
}


export interface WilmaListMessage {
    id: string,
    subject: string,
    timestamp: Date,
    folder: string,
    sender: MessageSender
}
