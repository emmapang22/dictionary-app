import type { DictionaryResponse } from "../models/DictionaryResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getWords = async (searchText: string) => {
  try {
    const response = await get<DictionaryResponse[]>(
      `${BASE_URL}${encodeURIComponent(searchText)}`,
    );

    response.forEach((word) => {
      if (word.word === "No Definitions Found") {
        return null;
      }
    });

    return response;
  } catch (error) {
    console.log("Error in getting word:", error);
    return;
  }
};
