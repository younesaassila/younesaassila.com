import "./style.css"
import locales from "./lib/locales"
import rot13 from "./lib/rot13"

const language = navigator.language.substring(0, 2).toLowerCase()
const locale =
  locales.find(locale => locale.identifier === language) ?? locales[0]

document.documentElement.setAttribute("lang", locale.identifier)

const bioElement = document.getElementById("bio") as HTMLHeadingElement
const socialEmailLinkElement = document.getElementById(
  "ya-social-email-link"
) as HTMLAnchorElement
const socialEmailElement = document.getElementById(
  "ya-social-email"
) as HTMLSpanElement

bioElement.textContent = locale.getMessage("bio")
socialEmailLinkElement.href = `mailto:${rot13("pbagnpg@nnffvyn.pbz")}` // Spam protection
socialEmailElement.textContent = locale.getMessage("social-email")
