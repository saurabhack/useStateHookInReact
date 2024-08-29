import {useState} from "react"
function Counter(){
    let [count,setCount]=useState(0)
    return(
        <>
        <div className="w-[100vw] h-[80vh] flex justify-center">
        <div className="h-[100%] w-[50%] border flex justify-center items-center flex-col ">
            <h1 className="text-5xl text-red-700 p-2">{count}</h1>
            <button onClick={()=>{setCount(count+1)}} className="bg-blue-800 text-2xl text-white p-2 rounded-lg">Increament</button>
        </div>
        </div>
        </>
    )
};
export default Counter;