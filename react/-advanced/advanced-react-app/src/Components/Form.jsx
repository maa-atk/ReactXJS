import React, { useState } from "react";
import { data as defaultData } from "../Data/data";
const frameworks = ["a", "b", "c", "d"];
const Form = () => {
  const [data, setData] = useState(defaultData);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [frameWorkSelected, setframeWorkSelected] = useState("react");
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    // remove old data
    //event.currentTarget.reset();
  };
  const handleOptionRender = (event) => {
    console.log(event.target.value);
    setframeWorkSelected(event.target.value);
    // remove old data
    // event.currentTarget.reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    console.log(name, email);
    setData([...data, { name: name, email: email }]);
    // or use Object.fromEntries() -> all the data from the form

    // remove old data
    //e.currentTarget.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name{" "}
          </label>
          <input
            type="text"
            // don't forget name
            id="name"
            className="form-input"
            onChange={handleNameChange}
            value={name}
          ></input>
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-row">
          <label htmlFor="frameWork" className="form-label">
            FrameWork{" "}
          </label>
          <select
            name="framework"
            id="framework"
            value={frameWorkSelected}
            onChange={handleOptionRender}
          >
            {frameworks.map((op) => {
              return <option key={op}>{op}</option>;
            })}
          </select>
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {data.map((d) => {
        return (
          <div>
            <div> {d.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default Form;
