import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.tsx";
import { LanguageProvider } from "./contexts/Language.tsx";
import { ColorProvider } from "./contexts/ColorMode.tsx";
import { WordProvider } from "./contexts/WordContext.tsx";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import {growthbook} from '../growthBook.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrowthBookProvider growthbook={growthbook}>
    <ColorProvider>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <WordProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </WordProvider>
          </LanguageProvider>
        </I18nextProvider>
    </ColorProvider>
    </GrowthBookProvider>
  </React.StrictMode>
);
