import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/Language";
import i18n from "../../i18n";
import { useEffect } from "react";
import styles from "./Game.module.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Keyboard from "../../components/Keyboard/Keyboard";
import Hangman from "../../components/Hangman/Hangman";
import HangmanWord from "../../components/HangmanWord/HangwordWord";
import Footer from "../../components/Footer/Footer";
import { useWord } from "../../contexts/WordContext";
import Alert from "../../components/Alert/Alert";
import { HOME_ROUTE } from "../../constants/Routes";
const GamePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const {
    word,
    guessedChar,
    numberOfGuesses,
    setGuessedChar,
    setWrongGuesses,
  } = useWord();
  const [giveup, setGiveup] = useState(false);
  const [alertStatus, setAlertStatus] = useState<"success" | "fail" | "none">(
    "none"
  );
  const handleGiveUp = () => {
    if (alertStatus === "success" || alertStatus === "fail") return;
    setGiveup(true);
    setAlertStatus("fail");
  };

  const handleAlertStatus = () => {
    const uniqueCharsArray = [...new Set(word?.replace(/\s/g, ""))];

    if (
      uniqueCharsArray.length === guessedChar.length &&
      uniqueCharsArray.length
    ) {
      setAlertStatus("success");
    } else if (numberOfGuesses >= 6) {
      setAlertStatus("fail");
    }
  };
  useEffect(() => {
    handleAlertStatus();
  }, [guessedChar, numberOfGuesses]);
  useEffect(() => {
    i18n.changeLanguage(language);
    setGuessedChar([]);
    setWrongGuesses([]);
    setGiveup(false);
    setAlertStatus("none");
  }, [language]);
  return (
    <div className={styles.body}>
      <Header />
      <Alert variant={alertStatus ? alertStatus : "none"} />
      <div className={styles.grid}>
        <section className={styles.hangman}>
          <Hangman giveup={giveup} />
        </section>
        <section className={styles.keyboard}>
          <section>
            <HangmanWord giveup={giveup} word={word} />
          </section>

          <Keyboard giveup={giveup} word={word} />
          <section
            style={{ direction: language === "ar" ? "ltr" : "rtl" }}
            className={styles.btns}
          >
            <Button
              name={t("quit")}
              variant="error"
              onClick={() => {
                navigate(HOME_ROUTE);
              }}
            />
            <Button
              name={t("giveup")}
              variant="primary"
              onClick={() => {
                handleGiveUp();
              }}
            />
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;
