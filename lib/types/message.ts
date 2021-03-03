/**
 * Typings for messages
 */

// import { WilmaGroup } from "./group";
// import { WilmaTeacher } from "./teacher"

/**
 * Wilma message entity
 */

export type WilmaMessageLocation = "sent"|"archive"|"inbox"|"drafts"

interface MessageSender {
    role: 1 | 2 | 3 | 4 | 5 | 6 | 7,
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
