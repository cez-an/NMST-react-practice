import { useEffect, useState } from "react"
import { Button } from "./Button";

export const Counter = () =>{
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    useEffect(()=>{
        document.title=`${count} ,${count1}`;
    },[count1,count])


    return (
        <>

        <div className="flex gap-10 justify-center items-center w-screen h-screen">

            <div className="p-10 flex gap-10 bg-black/30 rounded-4xl">

                <div className="flex bg-[#2f362f] py-[100px] px-[90px] flex-col items-center rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-lime-950">
                    
                    <h1 className="text-4xl text-[#f8faf9] mb-10">Counter - 1</h1>
                    <h1 className="text-8xl mb-8 text-[#f8faf9]">{count}</h1>

                    <div className="flex flex-col space-y-2">

                        <Button fun={()=>setCount(prev=>prev+1)} class={"bg-[#d9d3c6] "} btname="Increment"/>
                        <Button fun={()=>setCount(0)} class={"bg-[#788978] text-white "} btname="Reset"/>
                        <Button fun={()=>setCount(prev=>prev-1)} class={"bg-white "} btname="Decrement"/>

                    </div>
                </div>

                <div className="flex bg-[#DDF4E7] py-[100px] px-[90px] flex-col items-center rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-black">
                    <h1 className="text-4xl text-[#124170] mb-10">Counter - 2</h1>
                    <h1 className="text-8xl mb-8  text-[#124170]">{count1}</h1>

                    <div className="flex flex-col space-y-2">
                    
                        <Button fun={()=>setCount1(prev=>prev+1)} class={"bg-[#67C090]"} btname="Increment"/>
                        <Button fun={()=>setCount1(0)} class={"bg-[#26667F] text-white"} btname="Reset"/>
                        <Button fun={()=>setCount1(prev=>prev-1)} class={"bg-[#124170] text-white"} btname="Decrement"/>

                    </div>

                </div>

            </div>

        </div>
        
        </>
        
    )
}