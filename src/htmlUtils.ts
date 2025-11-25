import type { Word } from "./models/Word";

export const createHtml = (words: Word[]) => {
  const wordSection = document.getElementById("wordSection");

  if (wordSection) {
    wordSection.innerHTML = "";
  }

  words.forEach((word) => {
    const wordContainer = document.createElement("div");
    const searchedWord = document.createElement("h2");

    searchedWord.innerHTML = word.word;

    wordSection?.appendChild(wordContainer);
    wordContainer.appendChild(searchedWord);
  });
};
