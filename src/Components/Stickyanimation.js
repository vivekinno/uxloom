/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StickyAnimationm = ({ className }) => {
  return (
    <svg
      className={`sticky-animationm ${className}`}
      fill="none"
      height="108"
      viewBox="0 0 228 108"
      width="228"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        window.open("mailto:hello@uxloom.in", "_blank"); 
      }}
    >
      <g className="g" filter="url(#filter0_d_69_1030)">
        <circle className="circle" cx="174" cy="50" fill="#1CB2B7" r="30" />
      </g>

      <path
        className="path"
        d="M163.103 60.625C162.387 60.625 161.781 60.3771 161.285 59.8813C160.79 59.3854 160.542 58.7797 160.542 58.064V41.936C160.542 41.2203 160.79 40.6146 161.285 40.1187C161.781 39.6229 162.387 39.375 163.103 39.375H184.897C185.613 39.375 186.219 39.6229 186.715 40.1187C187.21 40.6146 187.458 41.2203 187.458 41.936V58.064C187.458 58.7797 187.21 59.3854 186.715 59.8813C186.219 60.3771 185.613 60.625 184.897 60.625H163.103ZM185.333 43.5432L174.689 50.357C174.58 50.4186 174.468 50.4671 174.351 50.5026C174.235 50.538 174.118 50.5557 174 50.5557C173.882 50.5557 173.765 50.538 173.649 50.5026C173.532 50.4671 173.42 50.4186 173.311 50.357L162.667 43.5432V58.064C162.667 58.1913 162.708 58.2958 162.789 58.3775C162.871 58.4592 162.975 58.5 163.103 58.5H184.897C185.025 58.5 185.129 58.4592 185.211 58.3775C185.293 58.2958 185.333 58.1913 185.333 58.064V43.5432ZM174 48.5833L185.116 41.5H162.885L174 48.5833ZM162.667 43.8701V42.2505V42.2926V42.2476V43.8701Z"
        fill="white"
      />

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="108"
          id="filter0_d_69_1030"
          width="108"
          x="120"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" dy="4" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="12" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.027451 0 0 0 0 0.262745 0 0 0 0 0.639216 0 0 0 0.2 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_69_1030"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_69_1030"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
