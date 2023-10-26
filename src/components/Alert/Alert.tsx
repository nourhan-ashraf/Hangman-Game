import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useWord } from "../../contexts/WordContext";
import styles from './Alert.module.css'
import { GAME_ROUTE } from "../../constants/Routes";
import { useLanguage } from "../../contexts/Language";

type AlertProps = {
  variant: "success" | "fail" | "none";
};

const Alert: FC<AlertProps> = ({ variant = "none" }) => {
  const { word } = useWord();
  const {t} = useTranslation()
  const {language} = useLanguage()
  const AlertClass = styles[variant]
  return (
    <div className={`${styles.alert} ${AlertClass}`} style={{ visibility: variant === "none" ? "hidden" : "visible", direction:language==='en' ? 'ltr' : 'rtl' }}>
      <div>{variant === "fail" ? `☠️ ${t('lose')} ${word}` : `🏆 ${t('win')}` }
      <button
      className={styles.btn}
        onClick={() => {
          window.location.replace(GAME_ROUTE);
        }}
      >
        {t('playagain')}
      </button>
       </div>
  
    </div>
  );
};

export default Alert;
