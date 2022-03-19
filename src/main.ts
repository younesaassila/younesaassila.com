import "./style.css"
import locales from "./lib/locales"

const language = navigator.language.substring(0, 2).toLowerCase()
const locale =
  locales.find(locale => locale.identifier === language) ?? locales[0]

document.documentElement.setAttribute("lang", locale.identifier)

const bioElement = document.getElementById("bio") as HTMLHeadingElement
const socialEmailElement = document.getElementById(
  "social-email"
) as HTMLSpanElement

bioElement.textContent = locale.getMessage("bio")
socialEmailElement.textContent = locale.getMessage("social-email")
