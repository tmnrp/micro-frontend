import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonOutlined, ButtonText, ThemeSwitcher } from ".";

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>Libs</div>

      <div>
        <ButtonText>Text</ButtonText>
        <ButtonOutlined>Outlined</ButtonOutlined>
      </div>

      <div>
        <ThemeSwitcher />
      </div>
    </div>
  </React.StrictMode>
);
