import { FC, ButtonHTMLAttributes } from "react";
import styles from "./SwitchButton.module.css";
import { useColor } from "../../contexts/ColorMode";
type SwitchButtonProps = {
  SelectedValue: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const SwitchButton: FC<SwitchButtonProps> = ({ SelectedValue, ...rest }) => {
  const { color } = useColor();
  return (
    <button
      className={styles.button}
      style={{
        borderColor: color === "dark" ? "white" : "black",
        color: color === "dark" ? "rgba(255, 255, 255, 0.87)" : "black",
      }}
      {...rest}
    >
      {SelectedValue === "light"
        ? "☀️"
        : SelectedValue === "dark"
        ? "🌙"
        : SelectedValue === "English"
        ? "English"
        : "عربي"}
    </button>
  );
};

export default SwitchButton;
