import { Cookies } from "react-cookie";

const cookie = new Cookies();

export function saveLanguageToCookie(language) {
  cookie.set("language", language);
}

export function getLanguageFromCookie() {
  return cookie.get("language");
}

export function getBrowserLanguage() {
  const language = navigator.language.split(/[-_]/)[0]; // language without region code

  if (language.includes("ru")) {
    return "ru";
  } else if (language.includes("be")) {
    return "be";
  } else {
    return "en";
  }
}

export function getLanguage() {
  return "en";
  // return getLanguageFromCookie() || getBrowserLanguage();
}
