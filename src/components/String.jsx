import {useState} from "react"
function String(){
    const [name,setName]=useState("Saurabh")

    return(
        <>
        <div className="w-[100vw] h-[80vh] flex justify-center">
        <div className="h-[100%] w-[50%] border flex justify-center items-center flex-col ">
            <h1 className="text-5xl text-red-700 p-2">{name}</h1>
            <button onClick={()=>{setName("Saurabh Vikas kamane")}} className="bg-blue-800 text-2xl text-white p-2 rounded-lg">Change your name</button>
        </div>
        </div>
        </>
    )
}
export default String