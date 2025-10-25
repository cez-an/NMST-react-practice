import { useRef, useState } from "react"


export const Parent = ()=>{

    const [name,setName] = useState("");
    const handleMessage = (name:string)=>{
    console.log(name)
    setName(name)
    }
    return(
        <>
        <h1>{name}</h1>
        <UncontrolledComponent/>
        </>
    )
}

type child = {
    fun:(name:string)=>void;
    name :string;
}

// const Child = ({fun,name}:child)=>{

//     return (
//         <>
//         <h1>this message is from child {name}</h1>
//         <button className="bg-amber-200 p-3" onClick={()=>fun('hai i am from child')}> click here </button>
//         </>
        
//     )
// }

const UncontrolledComponent = () => {
    
//   const inputRef = useRef();

//   const handleSubmit = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
   const inputRef = useRef();

    function handdlefun (){
        alert(inputRef.current.value)
    }

    return (
        <>
        <input ref={inputRef} />
        <button onClick={handdlefun}> Submit</button>
        </>
    )
    
};