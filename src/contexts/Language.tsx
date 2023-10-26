import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};
type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("the context shouldn't be undefined");
  }
  return context;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storedLanguage || "en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
