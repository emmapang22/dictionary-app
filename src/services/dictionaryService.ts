import type { DictionaryResponse } from "../models/DictionaryResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getWords = async (searchText: string) => {
  const response = await get<DictionaryResponse[]>(
    `${BASE_URL}${encodeURIComponent(searchText)}`
  );

  return response;
};
