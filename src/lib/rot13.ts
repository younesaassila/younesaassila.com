export default function rot13(str: string): string {
  return str
    .replace(/[a-z]/g, (char: string) => {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97)
    })
    .replace(/[A-Z]/g, (char: string) => {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
    })
}
