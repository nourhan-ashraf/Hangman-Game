import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/Language";
import i18n from "../../i18n";
import { useEffect } from "react";
import styles from "./Start.module.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { TYPE_ROUTE } from "../../constants/Routes";

const StartPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className={styles.body}>
      <Header />

      <main>
        <img className={styles.logo} alt="logo" src="/hangman.png" />

        <h1
          className={styles.title}
          style={{ direction: language === "en" ? "ltr" : "rtl" }}
        >
          {t("title")}
        </h1>
        <h2 className={styles.subTitle}>{t("subTitle")}</h2>

        <Button
          name={t("start")}
          variant="primary"
          onClick={() => {
            navigate(TYPE_ROUTE);
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default StartPage;
