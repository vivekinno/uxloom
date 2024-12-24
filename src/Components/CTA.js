/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { SystemIconsBack3 } from "./Systemicon";
import "./cta.css";

export const Cta = ({ style, className, text = "Button" }) => {
  return (
    <div className={`CTA ${style} ${className}`}>
      <div className="text-wrapper" >{text}</div>

      {["primary-with-icon", "rounded", "text-with-icon"].includes(style) && (
        <SystemIconsBack3
          className="system-icons-back"
          color={style === "text-with-icon" ? "#494949" : "white"}
        />
      )}

      {style === "special-CTA" && (
        <div className="frame">
          <SystemIconsBack3 className="system-icons-back" color="white" />
          <SystemIconsBack3 className="system-icons-back-3" color="white" />
        </div>
      )}
    </div>
  );
};
