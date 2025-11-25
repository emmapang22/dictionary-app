import { createHtml } from "./htmlUtils";
import { getWords } from "./services/dictionaryService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");

  let searchText = "";

  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  const words = await getWords(searchText);

  createHtml(words);

  if (theInput) {
    (theInput as HTMLInputElement).value = "";
  }
});
