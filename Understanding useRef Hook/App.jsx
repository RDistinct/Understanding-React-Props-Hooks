import { useRef } from "react";
import "./App.css";

function App() {
  const refVal = useRef(0);
  console.log(refVal);
  console.log(refVal.current);
  console.log((refVal.current = "React session"));
  /* const obj = useRef("react session");
  console.log(obj); */
  /* const [clickRef, setClickRef] = useState(0); */
  /* const clickRef = useRef(0);
  console.log(clickRef.current); */
  const fieldRef = useRef();
  // console.log(fieldRef);
  /*console.log(refVal); */

  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0);

  // const [textVal, setTextVal] = useState("");
  // console.log(textVal); //event gets updated

  /* useEffect(() => {
    refVal.current = refVal.current + 1;
  }, []); */
  /* function handleClick() {
    clickRef.current = clickRef.current + 1; // clickRef.current += 1;
    console.log(`Clicked ${clickRef.current} times`);
  } */

  function focusInput() {
    fieldRef.current.focus();
  }
  return (
    <div>
      <h1>Using useRef</h1>

      {/* <button onClick={handleClick}>Click Here</button> */}
      {/* <p>You have clicked {clickRef.current} times</p>*/}
      <br />
      <input ref={fieldRef} />
      <button onClick={focusInput}>Click</button>
    </div>
  );
}

export default App;
