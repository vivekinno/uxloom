/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./webstyle.css";

export const DeviceWebStyle = ({ className, text = "Button" }) => {
  return (
    <div className={`device-web-style ${className}`}>
      <div className="button">{text}</div>
    </div>
  );
};
