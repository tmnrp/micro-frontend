import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonText, ButtonOutlined } from "libs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>Hosts</div>

      <div>
        <ButtonText>Host Text build</ButtonText>
        <ButtonOutlined>Host Outlined build</ButtonOutlined>
      </div>
    </div>
  </React.StrictMode>
);
