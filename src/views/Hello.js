import React from "react";

function Hello(props) {
  return (
    <h1>
      The {isNaN(+props.id) ? "word" : "number"} is: {props.id}
    </h1>
  );
}

export default Hello;
