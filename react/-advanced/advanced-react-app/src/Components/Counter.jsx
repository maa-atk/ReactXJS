import React from 'react'
import { useState } from 'react';

const Counter = () => { 
    // value , function that can change the current state value 
    const [count,setCount]=useState(0);
   // hooks need to start with use and the component name must be uppercase
   //must be invoked inside the component body
   // conditional rendering not allowed with hooks
    const handleClickAdd=()=>{
        // re-render triggered when the value is changed preserves the value between render
        setCount(count+1)
        // /console.log(count)
    }
  return (
    <section>
    <button onClick={handleClickAdd}>+</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    <div>{count}</div>
    </section>
  )
}

export default Counter