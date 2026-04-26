import type { DictionaryResponse } from "../models/DictionaryResponse";

export const createHtml = (words: DictionaryResponse[]) => {
  const wordSection = document.getElementById("wordSection");

  if (wordSection) {
    wordSection.innerHTML = "";
  }

  words.forEach((word) => {
    const wordContainer = document.createElement("div");
    wordContainer.className =
      "rounded-lg bg-white text-black mb-5 py-5 px-6 border-2";

    const searchedWord = document.createElement("h2");
    searchedWord.innerHTML = word.word;
    searchedWord.className = "text-2xl font-bold";

    const phonetic = document.createElement("p");
    phonetic.innerHTML = word.phonetic || "No phonetics avalaible";
    phonetic.className = "text-gray-600 mb-2";

    wordContainer.appendChild(searchedWord);
    wordContainer.appendChild(phonetic);

    // find item that has an audio file
    const phoneticWithAudio = word.phonetics.find((p) => p.audio);

    if (phoneticWithAudio?.audio) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.className = "mb-3";
      audio.src = phoneticWithAudio.audio;
      wordContainer.appendChild(audio);
    }

    word.meanings.forEach((meaning) => {
      const meaningContainer = document.createElement("div");
      meaningContainer.className = "mb-3";

      const partOfSpeech = document.createElement("h3");
      partOfSpeech.className = "text-xl font-semibold mb-2";
      partOfSpeech.innerHTML = meaning.partOfSpeech;

      const definitionsList = document.createElement("ul");
      definitionsList.className = "list-disc ml-5";

      meaning.definitions.forEach((definition, i) => {
        if (i < 5) {
          const definitionItem = document.createElement("li");
          definitionItem.className = "mb-2";
          definitionItem.innerHTML = "Definition: " + definition.definition;

          if (definition.example) {
            const example = document.createElement("p");
            example.className = "text-gray-700 italic ml-4";
            example.innerHTML = "Example: " + definition.example;
            definitionItem.appendChild(example);
          }
          definitionsList.appendChild(definitionItem);
        }
      });

      meaningContainer.appendChild(partOfSpeech);
      meaningContainer.appendChild(definitionsList);
      wordContainer.appendChild(meaningContainer);
    });

    wordSection?.appendChild(wordContainer);
  });
};
