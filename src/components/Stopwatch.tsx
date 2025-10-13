import React, { useState } from 'react'
import { Button } from './Button';
import type { JSX } from 'react/jsx-runtime';
// import { countReset } from 'console';

    let id;

function Stopwatch():JSX.Element {



    const [count,setCount] = useState(0);
    const [running,setRuning] = useState(false);

    const HandleStart = ()=>{
        if(!running){
            console.log('RUNNING IS ',running);
            setRuning(true);
            
            id = setInterval(function() {
            setCount(prev=>prev+1)
            },1000);
            console.log(id);
        }
        // return
        
        

    }
    const HandlePause = ()=>{
        if(running){
            setRuning(false);
            console.log('sdsdsadasdasdasda  '+typeof running);
            let run = clearInterval(id);
            console.log('FUFUFUFU   ',run);
            
            let countres = count;
            
            setCount(countres);
            return
        }
    }

    const HandleReset = ()=>{
        
    }
    const HandleResume = ()=>{
        
    }

  return (
    <div className='text-5xl flex items-center justify-center w-screen h-screen flex-col'>
        <h1>{count}</h1>
        <div className='flex gap-4 mt-10'>
            <Button fun={HandleStart} class="bg-white" btname='Start'/>
            <Button fun={HandlePause} class="bg-red-500/70 text-white" btname='Pause'/>
        </div>
        
    </div>
  )
}

export default Stopwatch;



    // start [pause,reset]
    // resume [pause,reset]
    // reset [start]