import { useColor } from "../../contexts/ColorMode";
import { useLanguage } from "../../contexts/Language";
import i18n from "../../i18n";
import SwitchButton from "../SwitchButton/SwitchButton";
import styles from "./Header.module.css";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { color, setColor } = useColor();

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("ar");
      i18n.changeLanguage("ar");
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  };

  const handleColorChange = () => {
    if (color === "dark") setColor("light");
    else setColor("dark");
  };

  return (
    <header className={styles.header}>
      <SwitchButton
        SelectedValue={language === "en" ? "عربي" : "English"}
        onClick={() => handleLanguageChange()}
      />
      <SwitchButton
        SelectedValue={color === "light" ? "dark" : "light"}
        onClick={() => handleColorChange()}
      />
    </header>
  );
};

export default Header;
