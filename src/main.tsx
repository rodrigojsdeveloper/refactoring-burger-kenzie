import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./styles/global";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { Providers } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
