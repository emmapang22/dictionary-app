export const showError = (message: string) => {
  const wordSection = document.getElementById("wordSection");

  if (wordSection) {
    wordSection.innerHTML = "";
  }

  const errorText = document.createElement("p");

  errorText.className = "text-red-400 text-center font-bold text-lg mt-5";
  errorText.innerHTML = message;

  wordSection?.appendChild(errorText);
};
