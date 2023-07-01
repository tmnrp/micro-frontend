import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonOutlined, ButtonText } from ".";

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>Libs</div>

      <div>
        <ButtonText>Text</ButtonText>
        <ButtonOutlined>Outlined</ButtonOutlined>
      </div>
    </div>
  </React.StrictMode>
);
