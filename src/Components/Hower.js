/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./hower.css";

export const StyleWhatsappHoverWrapper = ({
  style,
  hover,
  className,
  imageClassName,
  image = "https://c.animaapp.com/g1v2RMFM/img/image-4459-1@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "whatsapp",

    hover: hover || true,
  });

  return (
    <div
      className={`style-whatsapp-hover-wrapper hover-${state.hover} ${state.style} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.hover && (
        <div className="group">
          <div className="overlap-group">
            <div className="div">
              {state.style === "chat" && <>Chat</>}

              {state.style === "call" && <>Call Us</>}

              {state.style === "email" && <>Email Us</>}

              {state.style === "whatsapp" && <>WhatsApp</>}
            </div>
          </div>
        </div>
      )}

      {state.hover && state.style === "whatsapp" && (
        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/g1v2RMFM/img/image-4459-1@2x.png"
        />
      )}

      {!state.hover && state.style === "whatsapp" && (
        <img className={`image ${imageClassName}`} alt="Image" src={image} />
      )}

      {state.hover && ["call", "chat", "email"].includes(state.style) && (
        <div className="group-2">
          {["call", "chat"].includes(state.style) && (
            <div className="sms">
              {state.style === "call" && (
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/g1v2RMFM/img/vector-3.svg"
                />
              )}

              <div className="sms-dp-f">
                {state.style === "chat" && (
                  <>
                    <div className="ellipse" />

                    <img
                      className="img"
                      alt="Vector"
                      src="https://c.animaapp.com/g1v2RMFM/img/vector-1.svg"
                    />
                  </>
                )}
              </div>
            </div>
          )}

          {state.style === "email" && (
            <img
              className="mail"
              alt="Mail"
              src="https://c.animaapp.com/g1v2RMFM/img/mail-24dp-5f6368-fill0-wght300-grad0-opsz24-1.svg"
            />
          )}
        </div>
      )}

      {!state.hover && ["call", "chat", "email"].includes(state.style) && (
        <div className={`group-3 ${imageClassName}`}>
          {["call", "chat"].includes(state.style) && (
            <div className="sms">
              {state.style === "call" && (
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/g1v2RMFM/img/vector-3.svg"
                />
              )}

              <div className="sms-dp-f">
                {state.style === "chat" && (
                  <>
                    <div className="ellipse" />

                    <img
                      className="img"
                      alt="Vector"
                      src="https://c.animaapp.com/g1v2RMFM/img/vector-1.svg"
                    />
                  </>
                )}
              </div>
            </div>
          )}

          {state.style === "email" && (
            <img
              className="mail"
              alt="Mail"
              src="https://c.animaapp.com/g1v2RMFM/img/mail-24dp-5f6368-fill0-wght300-grad0-opsz24-1.svg"
            />
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}
