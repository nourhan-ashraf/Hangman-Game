import { FC } from "react";
import styles from "./HangmanWord.module.css";
import { useColor } from "../../contexts/ColorMode";
import { useWord } from "../../contexts/WordContext";
import { useLanguage } from "../../contexts/Language";

type HangmanWordProps = {
  giveup: boolean;
  word: string
};
const HangmanWord: FC<HangmanWordProps> = ({ giveup, word }) => {
  const { color } = useColor();
  const { guessedChar, numberOfGuesses } = useWord();
  const { language } = useLanguage();
  return (
    <>
      <div className={styles.flex}>
        {language === "en"
          ? word && word.split("").map((char, index) => {
              return (
                <span
                  key={index}
                  style={{
                    borderColor:
                      color === "dark" ? "rgba(255, 255, 255, 0.87)" : "black",
                  }}
                  className={styles.dash}
                >
                  {giveup || numberOfGuesses === 6 ? (
                    <span style={{ visibility: "visible", color: "red" }}>
                      {char}
                    </span>
                  ) : (
                    <span
                      style={{
                        visibility: guessedChar.includes(char)
                          ? "visible"
                          : "hidden",
                      }}
                    >
                      {char}
                    </span>
                  )}
                </span>
              );
            })
          : word && word
              .split("")
              .reverse()
              .map((char, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      borderColor:
                        color === "dark"
                          ? "rgba(255, 255, 255, 0.87)"
                          : "black",
                    }}
                    className={styles.dash}
                  >
                    {giveup || numberOfGuesses === 6 ? (
                      <span style={{ visibility: "visible", color: "red" }}>
                        {char}
                      </span>
                    ) : (
                      <span
                        style={{
                          visibility: guessedChar.includes(char)
                            ? "visible"
                            : "hidden",
                        }}
                      >
                        {char}
                      </span>
                    )}
                  </span>
                );
              })}
      </div>
    </>
  );
};

export default HangmanWord;
