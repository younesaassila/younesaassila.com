import { Messages } from "../types"

export default class Locale {
  identifier: string
  private messages: Messages

  constructor(identifier: string, messages: Messages) {
    this.identifier = identifier
    this.messages = messages
  }

  getMessage(message: string) {
    return this.messages[message].message
  }
}
