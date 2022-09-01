import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0)
   
    return(
        <div>
            <h1 data-testid='counter'>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export const increment=()=>{
    setCount(count+1)
}
export const decrement=()=>{
    setCount(count-1)
}
export default Counter