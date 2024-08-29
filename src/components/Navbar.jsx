import {NavLink} from "react-router-dom"
function Navbar(){
    return(
        <>
        < div className="bg-blue-700 w-[100vw] h-[10vh] flex justify-center gap-10 items-center text-white">
            <NavLink to="/" className="hover:text-black hover:bg-white p-2 rounded-md transition-all ease-in">Count</NavLink>
            <NavLink to="/string" className="hover:text-black hover:bg-white p-2 rounded-md transition-all ease-in">String</NavLink>
            <NavLink to="/array" className="hover:text-black hover:bg-white p-2 rounded-md transition-all ease-in">Array</NavLink>
            <NavLink to="/object" className="hover:text-black hover:bg-white p-2 rounded-md transition-all ease-in">Object</NavLink>
            <NavLink to="/arrayobject" className="hover:text-black hover:bg-white p-2 rounded-md transition-all ease-in">ArrayObject</NavLink>
        </div>
        </>
    )
}
export default Navbar