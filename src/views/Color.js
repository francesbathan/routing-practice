import React from "react";

function Color({ word, color, backgroundColor }) {
  return (
    <div>
      <h1
        style={{
          backgroundColor,
          color: word ? color : "black"
        }}
      >
        The word is: {word}
      </h1>
    </div>
  );
}

export default Color;
