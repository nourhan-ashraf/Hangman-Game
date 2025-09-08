import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { GAME_ROUTE } from "../../constants/Routes";
import { useTranslation } from "react-i18next";
import styles from "./ChooseType.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useWord } from "../../contexts/WordContext";
import { growthbook } from '../../../growthBook'

const ChooseType = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setTopic } = useWord();
  const flagEnabled = growthbook.isOn("buttons-group")
 
  return (
    <div className={flagEnabled ? styles.bodyVertically : styles.body}>
      <Header />
      <div className={styles.innerBody}>
        {t("choose")}
        <div className={flagEnabled ? styles.verticalBtns : styles.btns}>
       
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseType;
