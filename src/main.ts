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
    showError("Please write a word");
    return;
  }

  try {
    const words = await getWords(searchText);

    if (!words) {
      showError("Word is not found");
      return;
    }

    createHtml(words);

    theInput.value = "";
  } catch (error) {
    console.log("Error in form submission:", error);
    showError("An error ocurred while searching");
  }
});
