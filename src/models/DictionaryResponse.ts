import type { Meaning } from "./Meaning";
import type { Phonetic } from "./Phonetic";

export type DictionaryResponse = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};
