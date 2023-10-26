import { FC } from "react";
import { useLanguage } from "../../contexts/Language";
import { useWord } from "../../contexts/WordContext";
import styles from "./Keyboard.module.css";

type KeyboardProps = {
  giveup: boolean;
  word: string;
};
const Keyboard: FC<KeyboardProps> = ({ giveup, word }) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const ArabicAlphabet = [
    "ء",
    "ا",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "ه",
    "و",
    "ي",
    "ى",
    "ة",
  ];
  const { language } = useLanguage();
  const {
    guessedChar,
    wrongGuesses,
    numberOfGuesses,
    setWrongGuesses,
    setGuessedChar,
  } = useWord();
  const handleKeyClick = (char: string) => {
    if (word.split("").includes(char)) {
      setGuessedChar([...guessedChar, char]);
    } else {
      const uniqueCharsArray = [...new Set(word?.replace(/\s/g, ""))];
      if (uniqueCharsArray.length === guessedChar.length) {
        return;
      } else setWrongGuesses([...wrongGuesses, char]);
    }
  };
  return (
    <div
      style={{ direction: language === "en" ? "ltr" : "rtl" }}
      className={styles.keyboard}
    >
      {language === "en"
        ? alphabet.map((char, index) => {
            const charClass = guessedChar.includes(char)
              ? styles.correct
              : wrongGuesses.includes(char)
              ? styles.wrong
              : styles.regularChar;
            return (
              <button
                disabled={
                  giveup ||
                  numberOfGuesses >= 6 ||
                  wrongGuesses.includes(char) ||
                  guessedChar.includes(char)
                }
                onClick={() => {
                  handleKeyClick(char);
                }}
                style={{
                  cursor: giveup || numberOfGuesses >= 6 ? "not-allowed" : "",
                }}
                key={index}
                className={`${charClass} ${styles.char}`}
              >
                {char}
              </button>
            );
          })
        : ArabicAlphabet.map((char, index) => {
            const charClass = guessedChar.includes(char)
              ? styles.correct
              : wrongGuesses.includes(char)
              ? styles.wrong
              : styles.regularChar;
            return (
              <button
                disabled={
                  giveup ||
                  numberOfGuesses >= 6 ||
                  wrongGuesses.includes(char) ||
                  guessedChar.includes(char)
                }
                onClick={() => {
                  handleKeyClick(char);
                }}
                style={{
                  cursor: giveup || numberOfGuesses >= 6 ? "not-allowed" : "",
                }}
                key={index}
                className={`${charClass} ${styles.char}`}
              >
                {char}
              </button>
            );
          })}
    </div>
  );
};
export default Keyboard;
