import type { DictionaryResponse } from "../models/DictionaryResponse";

export const createHtml = (words: DictionaryResponse[]) => {
  const wordSection = document.getElementById("wordSection");

  if (wordSection) {
    wordSection.innerHTML = "";
  }

  // create html for each property in the DictionaryResponse array
  words.forEach((word) => {
    // make a container for each word
    const wordContainer = document.createElement("div");
    // make a title for the searched word
    const searchedWord = document.createElement("h2");
    // make a text for the phonetic spelling
    const phonetic = document.createElement("p");

    wordContainer.className = "rounded-lg bg-white text-black mt-5 py-2 px-3";

    searchedWord.innerHTML = word.word;
    searchedWord.className = "text-2xl font-bold";

    phonetic.innerHTML = word.phonetic || "No phonetics avalaible";
    phonetic.className = "text-gray-600 mb-2";

    wordContainer.appendChild(searchedWord);
    wordContainer.appendChild(phonetic);

    // .find goes through each item in the Phonetic array and returns with the first item that has an audio file
    const phoneticWithAudio = word.phonetics.find((p) => p.audio);

    // create html if there's an audio file
    if (phoneticWithAudio?.audio) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.className = "mb-3";
      audio.src = phoneticWithAudio.audio;
      wordContainer.appendChild(audio);
    }

    // create html for each property in the Meaning array
    word.meanings.forEach((meaning) => {
      // make a container for the properties in the Meaning array
      const meaningContainer = document.createElement("div");
      // make a title for the category, eg. noun, verb, adjective, adverb
      const partOfSpeech = document.createElement("h3");
      // make a ul tag, where we will store each definition
      const definitionsList = document.createElement("ul");

      meaningContainer.className = "mb-3";
      partOfSpeech.className = "text-xl font-semibold mb-2";
      partOfSpeech.innerHTML = meaning.partOfSpeech;
      definitionsList.className = "list-disc ml-5";

      // create html for each property in type Definition
      meaning.definitions.forEach((definition, i) => {
        // show only the first 5 definitions
        if (i < 5) {
          // make a li tag for each definition
          const definitionItem = document.createElement("li");
          definitionItem.className = "mb-2";
          definitionItem.innerHTML = "Definition: " + definition.definition;

          // if the property example exist, then create a p tag
          if (definition.example) {
            const example = document.createElement("p");
            example.className = "text-gray-700 italic ml-4";
            example.innerHTML = "Example: " + definition.example;
            // store this p tag inside the li list
            definitionItem.appendChild(example);
          }
          // store the li tags inside the ul tag
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
