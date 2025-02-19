import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount";
import Buton from "./components/Ui/Button1";
import { useStateContext } from "./context/myContext";
import Modal from "./components/Modal";
import Redux from "./components/Redux";

function App() {
  // const [count, setCount] = useState(0);
  const { count, setCount, name } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div>
      <div className="count-show">
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="button-desing"
          >
            SHOW MODAL
          </button>
        </div>

        {/* {isOpen == true ? <Modal /> : ""} */}
        {isOpen && <Modal />}

        <Buton name={"Click me"} />
        <Buton name={"Submit"} />
        <Buton />

        <Buton name={"Check it"}>
          <span>hello</span>
        </Buton>

        <h1>Vite + React</h1>
        <h2>{name}</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        {/* <ShowCount count={count}, setCount={setCount} name={name} /> */}
        <ShowCount />
      </div>
      <div className=" p-5">
        <h2 className="text-xl font-bold">Redux counter</h2>
        <Redux />
      </div>
    </div>
  );
}

export default App;
