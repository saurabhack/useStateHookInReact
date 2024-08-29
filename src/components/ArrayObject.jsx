import {useState} from "react"
function ArrayObject(){
    const [institutes,setInstitute]=useState([
        {
            name:"dahiwadi college dahiwadi",
            courses:"master in computer application",
            place:"dahiwadi"
        }
    ])
    function AddInstituteDetails(){
        let instituteName=prompt("enter your institute name = ")
        let courseName=prompt("enter your institutes course name = ")
        let placeName=prompt("enter your place name = ")
        setInstitute([...institutes,{name:instituteName,courses:courseName,place:placeName}])
    }
    return(
        <>
         <div className="w-[100vw] h-[80vh] flex justify-center">
        <div className="h-[100%] w-[50%] border flex justify-center items-center flex-col ">
            <ul>
                {
                    institutes.map((val,i)=>{
                        return <>
                        <li>{val.name}</li>
                        <li>{val.courses}</li>
                        <li>{val.place}</li>
                        </>
                    })
                }
            </ul>
            <button onClick={AddInstituteDetails} className="bg-blue-800 text-2xl text-white p-2 rounded-lg">Add your institutes name and course</button>
        </div>
        </div>
        </>
    )
}
export default ArrayObject