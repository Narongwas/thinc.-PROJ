import React, { useState, useEffect } from "react";

const CircleProgress = ({ percentage, imageUrl }) => {
  const [progress, setProgress] = useState(0);
  const radius = 50; // รัศมีของวงกลม
  const circumference = 2 * Math.PI * radius; // คำนวณเส้นรอบวง
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= percentage) {
        clearInterval(interval);
      } else {
        current++;
        setProgress(current);
      }
    }, 10);
  }, [percentage]);

  return (
    <svg width="250" height="250" viewBox="0 -10 100 120">
      {/* วงกลมพื้นหลัง */}
      <circle cx="50" cy="50" r={radius} stroke="#ddd" strokeWidth="15" fill="none" />
      {/* วงกลมเปอร์เซ็นต์ */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#5b3fd2"
        strokeWidth="20"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      />
      {/* ใส่รูปตรงกลาง */}
      <defs>
        <clipPath id="circleMask">
          <circle cx="50" cy="50" r="30" />
        </clipPath>
      </defs>
      <image
        href={imageUrl}
        x="25"
        y="25"
        width="50"
        height="50"
        clipPath="url(#circleMask)"
      />
    </svg>
  );
};

export default CircleProgress;