import { useState } from "react";
import "./App.css";
import MyProduct from "./MyProduct";
import AdditionalDescription from "./AdditionalDescription";
import StateExample from "./StateExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Props & Hooks</h1>
      <MyProduct
        name="Laptop"
        description="Zen 5 powered laptop"
        price={1000}
      />
      <MyProduct
        name="Samsum S23"
        description="Most powerful android phone"
        price={800}
      />
      <MyProduct /> {/* default prop values */}
      <AdditionalDescription name="RX 7800xt" description="best budget gpu" />
      <StateExample />
      <br />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
