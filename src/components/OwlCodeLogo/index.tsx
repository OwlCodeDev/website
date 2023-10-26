import React from "react";

import "./index.css";
interface propsLogo {
  width?: number;
  height?: number;
}

function OwlCodeLogoComponent(props: propsLogo): JSX.Element {
  return (
    <div className="border-b-2">
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        className="relative -bottom-2"
      >
        <g fill="#c7e755">
          <ellipse cx="32" cy="33.5" rx="22.3" ry="25.9"></ellipse>

          <path d="M52 43.5H12l20-27.4z"></path>
        </g>

        <g fill="#a3bf2c">
          <path d="M47.1 51l-3.8 4.2l-3.8-4.2l3.8-4.3z"></path>

          <path d="M32 51l-3.8 4.2l-3.7-4.2l3.7-4.3z"></path>

          <path d="M24.5 51l-3.8 4.2l-3.8-4.2l3.8-4.3z"></path>

          <path d="M39.5 51l-3.7 4.2L32 51l3.8-4.3z"></path>
        </g>

        <g fill="#c7e755">
          <path d="M43.3 46.7L39.5 51l-3.7-4.3l3.7-4.3z"></path>

          <path d="M50.8 46.7L47.1 51l-3.8-4.3l3.8-4.3z"></path>

          <path d="M28.2 46.7L24.5 51l-3.8-4.3l3.8-4.3z"></path>

          <path d="M20.7 46.7L16.9 51l-3.7-4.3l3.7-4.3z"></path>

          <path d="M35.8 46.7L32 51l-3.8-4.3l3.8-4.3z"></path>
        </g>

        <g fill="#a3bf2c">
          <path d="M47.1 42.4l-3.8 4.3l-3.8-4.3l3.8-4.2z"></path>

          <path d="M32 42.4l-3.8 4.3l-3.7-4.3l3.7-4.2z"></path>

          <path d="M24.5 42.4l-3.8 4.3l-3.8-4.3l3.8-4.2z"></path>

          <path d="M39.5 42.4l-3.7 4.3l-3.8-4.3l3.8-4.2z"></path>
        </g>

        <g fill="#c28fef">
          <path d="M7 30S5.5 47 18.1 54.5c4.1 2.4-2.5-3.6-.8-18.4L7 30z"></path>

          <path d="M57 30s1.5 17-11.1 24.5c-4.1 2.4 2.5-3.6.8-18.4L57 30"></path>
        </g>

        <g fill="#9450e0">
          <path d="M32 2c-7.1 7-15 .9-15 .9c4.9 8.8 15 10.4 15 10.4s10.1-1.6 15-10.4c0 0-7.9 6.1-15-.9"></path>

          <path d="M18.8 39.4C9.5 39.4 2 31.9 2 22.6S9.5 5.9 18.8 5.9s16.8 7.5 16.8 16.8S28 39.4 18.8 39.4z"></path>

          <path d="M45.2 39.4c-9.2 0-16.8-7.5-16.8-16.8S36 5.9 45.2 5.9S62 13.4 62 22.6s-7.5 16.8-16.8 16.8z"></path>
        </g>

        <circle cx="45.1" cy="22.6" r="13.1" fill="#c7e755"></circle>

        <circle cx="45.1" cy="22.6" r="9.4" fill="#ffffff"></circle>

        <circle cx="45.1" cy="22.6" r="5.6" fill="#3e4347"></circle>

        <g fill="#c7e755">
          <path d="M32.5 9.5c0 3.1-.5 5.6-.5 5.6s-.5-2.5-.5-5.6s.5-5.6.5-5.6s.5 2.5.5 5.6"></path>

          <path d="M29.7 10.3c1 2.1 1.3 3.9 1.3 3.9s-1.4-1.5-2.4-3.6s-1.3-3.9-1.3-3.9s1.4 1.5 2.4 3.6"></path>

          <path d="M34.3 10.3c-1 2.1-1.3 3.9-1.3 3.9s1.4-1.5 2.4-3.6s1.3-3.9 1.3-3.9s-1.4 1.5-2.4 3.6"></path>

          <circle cx="18.9" cy="22.6" r="13.1"></circle>
        </g>

        <circle cx="18.9" cy="22.6" r="9.4" fill="#ffffff"></circle>

        <circle cx="18.9" cy="22.6" r="5.6" fill="#3e4347"></circle>

        <path
          d="M28.2 31.1c0 3.2 1.5 6.1 3.8 8c2.3-1.9 3.8-4.8 3.8-8s-1.5-6.1-3.8-8c-2.3 1.9-3.8 4.7-3.8 8"
          fill="#ffce31"
        ></path>

        <g fill="#f2b200">
          <path d="M32 23.1v16c2.3-1.9 3.8-4.8 3.8-8s-1.5-6.1-3.8-8"></path>

          <path d="M18.8 54.9c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></path>

          <path d="M25.4 54.9c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></path>

          <path d="M22.1 54.3c0 3.1-2 7.7-2 7.7s-2-4.6-2-7.7s4-3.1 4 0"></path>

          <path d="M42.6 54.9c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></path>

          <path d="M49.2 54.9c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></path>

          <path d="M45.9 54.3c0 3.1-2 7.7-2 7.7s-2-4.6-2-7.7s4-3.1 4 0"></path>
        </g>
      </svg>
    </div>
  );
}

export default OwlCodeLogoComponent;
