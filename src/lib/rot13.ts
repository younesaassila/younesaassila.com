export default function rot13(str: string): string {
  const rotValue = 13
  return str
    .replace(/[a-z]/g, (char: string) => {
      return String.fromCharCode(
        ((char.charCodeAt(0) - 97 + rotValue) % 26) + 97
      )
    })
    .replace(/[A-Z]/g, (char: string) => {
      return String.fromCharCode(
        ((char.charCodeAt(0) - 65 + rotValue) % 26) + 65
      )
    })
}
