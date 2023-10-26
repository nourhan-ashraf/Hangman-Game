import { useColor } from "../../contexts/ColorMode";
import { useWord } from "../../contexts/WordContext";
import { useTranslation } from "react-i18next";
import styles from "./Hangman.module.css";

type HangmanProps = {
  giveup: boolean;
};

const Hangman = ({ giveup }: HangmanProps) => {
  const { color } = useColor();
  const { t } = useTranslation();
  const HEAD = <img src="/head2.png" className={styles.head} />;

  const BODY = <img src="/Lhand.png" className={styles.body} />;

  const RIGHT_ARM = <img src="/Lhand.png" className={styles.rightArm} />;

  const LEFT_ARM = <img src="/Lhand.png" className={styles.leftArm} />;

  const RIGHT_LEG = <img src="/Lhand.png" className={styles.rightLeg} />;

  const LEFT_LEG = (
    <>
      <img src="/Lhand.png" className={styles.leftLeg} />
      <img src="/eye.png" className={styles.leftEye} />
      <img src="/eye.png" className={styles.rightEye} />
      <img src="/tongue.png" className={styles.tongue} />
    </>
  );
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
  const { numberOfGuesses } = useWord();
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.chances}>
        {t("chances")} {giveup ? 0 : 6 - numberOfGuesses}
      </div>
      <br />

      {BODY_PARTS.slice(0, giveup ? 6 : numberOfGuesses)}

      <div
        className={styles.hanger1}
        style={{ background: color === "dark" ? "#0074e4" : "#0074e4" }}
      />
      <div
        className={styles.hanger2}
        style={{ background: color === "dark" ? "#0074e4" : "#0074e4" }}
      />
      <div
        className={styles.hanger3}
        style={{ background: color === "dark" ? "#0074e4" : "#0074e4" }}
      />
      <div
        className={styles.hanger4}
        style={{ background: color === "dark" ? "#0074e4" : "#0074e4" }}
      />

    </div>
  );
};
export default Hangman;
