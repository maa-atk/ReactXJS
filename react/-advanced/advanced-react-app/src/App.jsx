import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter";
import { ListOfPeople } from "./Components/ListOfPeople";
import { UseEffectsBasics } from "./Components/UseEffectsBasics";
import FetchUsers from "./Components/FetchUsers";
import Form from "./Components/Form";
import UseRefBasics from "./Components/UseRefBasics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>First Project</h1>
      {/* <Counter></Counter> */}
      {/* <ListOfPeople></ListOfPeople> */}
      {/* <UseEffectsBasics></UseEffectsBasics> */}
      {/* <FetchUsers></FetchUsers> */}
      {/* <Form></Form> */}
      <UseRefBasics></UseRefBasics>
    </>
  );
}

export default App;
