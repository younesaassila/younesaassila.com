export type Message = {
  message: string
  description?: string
}

export type Messages = {
  [message: string]: Message
}
