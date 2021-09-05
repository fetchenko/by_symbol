import React from "react";
// import { useCookies } from "react-cookie";

const LANGUAGES = [
  { code: "ru", label: "Русский", icon: "" },
  { code: "en", label: "English", icon: "" },
  { code: "by", label: "Беларуская", icon: "" },
];

export default function LanguagePicker() {
  // const [cookies, setCookie, removeCookie] = useCookies(["language"]);

  return (
    <select>
      {LANGUAGES.map((language) => {
        return <option value={language.code}>{language.label}</option>;
      })}
    </select>
  );
}
