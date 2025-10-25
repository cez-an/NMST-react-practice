import { useState } from "react"
import { Button } from "./Button";


function Counter() {

  const [count,setCount] = useState(0);

  const handleIncrement = ()=>{
    setCount(prev=>prev+1);
  }
  const handleDcrement = ()=>{
    setCount(prev=>prev-1)
  }
  const handleReset = ()=>{
    setCount(0)
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen ">

      <div className="flex flex-col items-center gap-3 p-10 bg-gray-900/10 border">
        <Button fun={handleIncrement} btname="Intcrement" class=""/>
          <h1>{count}</h1>
        <Button fun={handleDcrement} btname="Decrement" class="bg-red-900/50"/>
        <Button fun={handleReset} btname="RESET" class="bg-white border-2"/>

      <div className="gap-3 flex flex-col items-center justify-center">

        {/* <h1>Change Color</h1>
        <div>
            <label htmlFor="">Red : </label> 
            <input type="radio" name="color"/>
            <label htmlFor="">Green : </label>
            <input type="radio" name="color"/>
            <label htmlFor="">Orange : </label>
            <input type="radio" name="color"/>
            <label htmlFor="">Yellow : </label>
            <input type="radio" name="color"/>
        </div> */}
       

      </div>

      </div>
      
      
     
        
    </div>
  )
}

export default Counter