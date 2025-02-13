import "./App.css";
import ShowCount from "./components/ShowCount";
import Buton from "./components/Ui/Button1";
import { useStateContext } from "./context/myContext";

function App() {
  // const [count, setCount] = useState(0);
  const { count, setCount, name } = useStateContext();

  return (
    <div>
      <div className="count-show">
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
    </div>
  );
}

export default App;
