import {useState} from "react"
function Object(){
    const [institute,setInstitute] = useState({name:"dahiwadi college dahiwadi",course:"BSc"})
    function changeIntitute(){
        let name=prompt("enter your institute name = ")
        let course=prompt("enter your course name = ")
        setInstitute({name:name,course:course})
    }
    return(
        <>
        <div className="w-[100vw] h-[80vh] flex justify-center">
        <div className="h-[100%] w-[50%] border flex justify-center items-center flex-col ">
            <p className="text-5xl text-red-700 p-2">{institute.name}</p>
            <p className="text-5xl text-red-700 p-2">{institute.course}</p>
            <button onClick={changeIntitute} className="bg-blue-800 text-2xl text-white p-2 rounded-lg">Change Institute name and course</button>
        </div>
        </div>
        </>
    )
}
export default Object;