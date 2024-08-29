import {useState} from "react"
function Array(){
    const [array,setArray]=useState(["python","javascript"])
    
    function addLanguage(){
        let languages=prompt("Add your languages")
        setArray([...array,[...languages]])
    }
    
    return(
        <>
        <div className="w-[100vw] h-[80vh] flex justify-center">
        <div className="h-[100%] w-[50%] border flex justify-center items-center flex-col ">
            <ul>
                {
                    array.map((val,i)=>{
                        return <li key={i}>{val}</li>
                    })
                }
            </ul>
            <button onClick={addLanguage} className="bg-blue-800 text-2xl text-white p-2 rounded-lg">Add Your Languages</button>
        </div>
        </div>
        </>
    )
}
export default Array