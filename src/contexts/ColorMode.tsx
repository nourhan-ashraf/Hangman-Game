import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";

type ColorContextType = {
  color: string;
  setColor: (color: string) => void;
};

type ColorProviderProps = {
  children: ReactNode;
};
//context which contains color and set color that i can access them from any component in the app
const ColorContext = createContext<ColorContextType | undefined>(undefined);

//hook to use the context
export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined)
    throw new Error("the context shouldn't be undefined");
  return context;
};

export const ColorProvider: FC<ColorProviderProps> = ({ children }) => {
  const storedColor = localStorage.getItem("color");
  const [color, setColor] = useState(storedColor || "dark");

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
