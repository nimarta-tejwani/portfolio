import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Developer",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
          "Machine Learning Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
