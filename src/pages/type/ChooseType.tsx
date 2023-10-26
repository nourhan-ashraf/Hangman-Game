import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { GAME_ROUTE } from "../../constants/Routes";
import { useTranslation } from "react-i18next";
import styles from "./ChooseType.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useWord } from "../../contexts/WordContext";
const ChooseType = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setTopic } = useWord();
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.innerBody}>
        {t("choose")}
        <div className={styles.btns}>
          <Button
            name={t("general")}
            variant="primary"
            onClick={() => {
              localStorage.setItem("topic", "general");
              setTopic("general");
              navigate(GAME_ROUTE);
            }}
          />
          <Button
            name={t("food")}
            variant="primary"
            onClick={() => {
              localStorage.setItem("topic", "food");
              setTopic("food");
              navigate(GAME_ROUTE);
            }}
          />
          <Button
            name={t("movies")}
            variant="primary"
            onClick={() => {
              localStorage.setItem("topic", "movies");
              setTopic("movies");
              navigate(GAME_ROUTE);
            }}
          />
          <Button
            name={t("countries")}
            variant="primary"
            onClick={() => {
              localStorage.setItem("topic", "countries");
              setTopic("countries");
              navigate(GAME_ROUTE);
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseType;
