import React from 'react';

const LeftArrow = (props: any) => {
  return (
    <svg
      width="50"
      height="30"
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="49.0781"
        y="28.6547"
        width="48.0787"
        height="27.6912"
        rx="7.5"
        transform="rotate(-180 49.0781 28.6547)"
        fill="#010C15"
        stroke="#1E2D3D"
      />
      <path
        d="M22.0391 14.8091L28.0391 10.5591L28.0391 19.0592L22.0391 14.8091Z"
        fill="white"
      />
    </svg>
  );
};

export default LeftArrow;