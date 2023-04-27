import { useState } from "react";

function StateExample() {
  const [color, setColor] = useState("red");

  return (
    <>
      <p>My color is {color}</p>
      <button onClick={() => setColor("purple")}>Purple</button>{" "}
    </>
  );
}

export default StateExample;
