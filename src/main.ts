import { createHtml } from "./utils/htmlUtils";
import { getWords } from "./services/dictionaryService";
import "./style.css";
import { showError } from "./utils/errorHtmlUtils";

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

  const words = await getWords(searchText);

  if (!words) {
    return showError(`Could not find the word "${searchText}"`);
  }

  createHtml(words);

  theInput.value = "";
});
