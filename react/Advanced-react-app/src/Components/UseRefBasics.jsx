import React, { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  // declaring the variable name use ref acts like an invisible container
  //used for downloads
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
    //value stored for the variable from the form
  };

  useEffect(() => {
    // to see the value inside the container
    console.log(refContainer);
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name{" "}
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            // add reference here and pass
            ref={refContainer}
          ></input>
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </>
  );
};

export default UseRefBasics;
