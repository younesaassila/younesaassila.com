import { Messages } from "../types"

export default class Locale {
  identifier: string
  private messages: Messages

  constructor(identifier: string, messages: Messages) {
    this.identifier = identifier
    this.messages = messages
  }

  getMessage(message: string): string {
    if (!this.messages[message]) {
      console.error(
        `Message "${message}" not found in locale "${this.identifier}"`
      )
      return message // Fallback to the message key if not found
    }
    return this.messages[message].message
  }
}
