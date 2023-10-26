import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Hangman",
        subTitle: "Can you guess the word before you get hung?",
        start:"Start Playing",
        choose: "Choose a topic",
        general:"🔮 General",
        food:"🍕 Food",
        movies:"📽️ Movies",
        countries:"🌍 Countries",
        giveup: "Give Up",
        quit:"Quit",
        playagain:'Play Again',
        win:"Victory! You've solved the hangman puzzle!",
        lose:"Oh no! The hangman got you ... the word is ",
        chances:'Chances Left: ',
      },
    },
    ar: {
      translation: {
        title: "هانج مان",
        subTitle: "هل تستطيع تخمين الكلمة قبل شنقك؟",
        start:"ابدأ اللعب",
        choose: "اختار موضوع",
        general:"عام 🔮",
        food:"طعام 🍕",
        movies:"أفلام 📽️",
        countries:"بلدان 🌍",
        giveup: "استسلم",
        quit:"خروج",
        playagain:'العب مجددًا',
        win:" تهانينا! لقد قمت بحل لغز هانج مان بنجاح",
        lose:" للأسف! لقد تمكن هانج مان منك... الكلمة هي ",
        chances:'الفرص المتبقية: ',
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
