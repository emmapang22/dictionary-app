import type { Meaning } from "./Meaning";
import type { PhoneticsDetails } from "./PhoneticsDetails";

export type Word = {
  word: string;
  phonetics: PhoneticsDetails[];
  origin: string;
  meanings: Meaning[];
};
