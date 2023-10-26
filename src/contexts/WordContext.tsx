import {
  useContext,
  createContext,
  useEffect,
  FC,
  useState,
  ReactNode,
} from "react";
import enData from "../data/englishWords.json";
import arData from "../data/arabicWords.json";
import enFoodData from "../data/foodEN.json";
import arFoodData from "../data/foodAR.json";
import enMoviesData from "../data/moviesEN.json";
import arMoviesData from "../data/moviesAR.json";
import enCountriesData from "../data/countriesEN.json";
import arCountriesData from "../data/countriesAR.json";

import { useLanguage } from "./Language";

type WordContextType = {
  topic: string;
  setTopic: (topic: string) => void;
  word: string;
  setWord: (word: string) => void;
  guessedChar: string[];
  setGuessedChar: (guessedChar: string[]) => void;
  wrongGuesses: string[];
  setWrongGuesses: (wrongGuesses: string[]) => void;
  numberOfGuesses: number;
};

type WordProviderProps = {
  children: ReactNode;
};
const WordContext = createContext<WordContextType | undefined>(undefined);

export const useWord = () => {
  const context = useContext(WordContext);
  if (context === undefined)
    throw new Error("the context shouldn't be undefined");
  else return context;
};

export const WordProvider: FC<WordProviderProps> = ({ children }) => {
  const { language } = useLanguage();
  const wordIndex = Math.floor(Math.random() * enData.length);
  const enWord = enData[wordIndex];
  const arWord = arData[wordIndex];
  const storedTopic = localStorage.getItem("topic");
  const [word, setWord] = useState(language === "en" ? enWord : arWord);
  const [topic, setTopic] = useState(storedTopic || "general");

  const [guessedChar, setGuessedChar] = useState([] as string[]);
  const [wrongGuesses, setWrongGuesses] = useState([] as string[]);
  const numberOfGuesses = wrongGuesses.length;
  useEffect(() => {
    if (language === "ar") {
      localStorage.setItem("topic", topic);
      if (topic === "movies") {
        const MoviesIndex = Math.floor(Math.random() * arMoviesData.length);
        const arMovies = arMoviesData[MoviesIndex];
        setWord(arMovies);
      } else if (topic === "countries") {
        const countriesIndex = Math.floor(
          Math.random() * arCountriesData.length
        );
        const arCountries = arCountriesData[countriesIndex];
        setWord(arCountries);
      } else if (topic === "food") {
        const FoodIndex = Math.floor(Math.random() * arFoodData.length);
        const arFood = arFoodData[FoodIndex];
        setWord(arFood);
      } else {
        const wordIndex = Math.floor(Math.random() * arData.length);
        const arWord = arData[wordIndex];
        setWord(arWord);
      }
    } else {
      if (topic === "movies") {
        const MoviesIndex = Math.floor(Math.random() * enMoviesData.length);
        const enMovies = enMoviesData[MoviesIndex];
        setWord(enMovies);
      } else if (topic === "countries") {
        const countriesIndex = Math.floor(
          Math.random() * enCountriesData.length
        );
        const enCountries = enCountriesData[countriesIndex];
        setWord(enCountries);
      } else if (topic === "food") {
        const FoodIndex = Math.floor(Math.random() * enFoodData.length);
        const enFood = enFoodData[FoodIndex];
        setWord(enFood);
      } else {
        const wordIndex = Math.floor(Math.random() * enData.length);
        const enWord = enData[wordIndex];
        setWord(enWord);
      }
    }
  }, [language, topic]);
  return (
    <WordContext.Provider
      value={{
        topic,
        setTopic,
        word,
        setWord,
        guessedChar,
        setGuessedChar,
        wrongGuesses,
        setWrongGuesses,
        numberOfGuesses,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
