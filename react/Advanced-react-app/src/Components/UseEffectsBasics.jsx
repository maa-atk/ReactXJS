import React, { useEffect } from "react";
import { useState } from "react";
export const UseEffectsBasics = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("just called once");
    // cannot use async in useEffect
  }, []);
  // empty [] in the use effect make sures it is called only in the initial render
  // dependency array -> pass [count] -> then the useEffect is triggered when the count state is changed
  return (
    <section>
      <button onClick={handleClickAdd}>+</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <div>{count}</div>
    </section>
  );
};
