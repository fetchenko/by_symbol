export const getLanguage = () => {
  const language = navigator.language.split(/[-_]/)[0]; // language without region code

  if (language.includes("ru")) {
    return "ru";
  } else if (language.includes("be")) {
    return "be";
  } else {
    return "en";
  }
};
