import React from "react";
import styled from "styled-components";
// import { useCookies } from "react-cookie";

const LANGUAGES = [
  { code: "ru", label: "Русский", icon: "" },
  { code: "en", label: "English", icon: "" },
  { code: "by", label: "Беларуская", icon: "" },
];

const Select = styled.select``;
const Option = styled.option``;

export default function LanguagePicker() {
  // const [cookies, setCookie, removeCookie] = useCookies(["language"]);

  return (
    <Select>
      {LANGUAGES.map((language) => {
        return <Option value={language.code}>{language.label}</Option>;
      })}
    </Select>
  );
}
