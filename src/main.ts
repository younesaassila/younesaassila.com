import "./style.css"
import locales from "./lib/locales"
import rot13 from "./lib/rot13"

// Get locale
const searchParams = new URLSearchParams(window.location.search)
const language = searchParams.has("lang")
  ? searchParams.get("lang")
  : navigator.language.substring(0, 2).toLowerCase()
const locale =
  locales.find(locale => locale.identifier === language) ?? locales[0]
// Set locale
document.documentElement.setAttribute("lang", locale.identifier)
const i18nElements = document.querySelectorAll("[data-i18n]")
i18nElements.forEach(element => {
  const message = element.getAttribute("data-i18n")
  if (message) {
    element.textContent = locale.getMessage(message)
  }
})

const socialEmailLinkElement = document.getElementById(
  "ya-social-email-link"
) as HTMLAnchorElement
socialEmailLinkElement.href = `mailto:${rot13("pbagnpg@nnffvyn.pbz")}` // Spam protection
