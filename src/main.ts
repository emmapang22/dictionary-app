import { createWordDefinitionCard } from "./utils/createWordDefinitionCard";
import { getWords } from "./services/dictionaryService";
import "./style.css";
import { showError } from "./utils/errorHtmlUtils";
import type { DictionaryResponse } from "./models/DictionaryResponse";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText") as HTMLInputElement;

  let searchText = "";

  if (theInput) {
    searchText = theInput.value.trim();
  }

  if (!searchText) {
    return showError("Please write a word");
  }

  const words: DictionaryResponse[] | undefined = await getWords(searchText);

  if (!words) {
    return showError(`Could not find the word "${searchText}"`);
  }

  createWordDefinitionCard(words);

  theInput.value = "";
});
