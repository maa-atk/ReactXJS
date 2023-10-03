import React, { useState } from 'react'
import { data as defaultData} from '../Data/data'
import { people as ppl } from '../Data/data';


export const ListOfPeople = () => {
const [data,setData]=useState(defaultData);

// example in case of an object

const [person , setPerson] = useState({
    name:'ATK',
    age:4,
    hobby:'Sadness'
})


const removeElement=(id)=>{
  // set function is not synchronous it will not follow other logs here
    setData((currentState)=>{
       console.log(currentState)// the last state value before the change is about to occur given by react
       return data.filter((p)=>p.id!==id)})
}
const changeDisplay=()=>{
    setPerson({
      ...person,
        hobby:'Scream'

    })
}
    
  return (
    <React.Fragment>
<h3>name : {person.name}</h3>
<h3>age : {person.age}</h3>
<h3>hobby : {person.hobby}</h3>
<button onClick={changeDisplay} >Change {person.name}</button>

         <button onClick={()=>{setData([])}} >remove all from list</button>
    <div>{data.map((d)=>{
        return (<div key={d.id}>
            <button onClick={()=>{removeElement(d.id)}}>-</button>
            <div> {d.name}</div>
           
            </div>
        );

    })}</div>
    </React.Fragment>
  )
}
