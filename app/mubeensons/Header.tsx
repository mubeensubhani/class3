export default Header;
import link from "next/link"
import Image from "next/image";
import logo from "./Images/logo.jpg"

function Header(){
    return(
        <div>
            <nav className="flex w-full bg-black h-18">
                <Image src={logo} alt={"my image"}  className=" w-10"/>
            
            

<div className="flex justify end item centre w-8/12 "></div>
                
<div className="bg-red-600 h-10 w-44 flex justify-center items-center"> TILAWAT</div>
<div className="bg-yellow-500 h-10 w-44 flex justify-center items-center">HAMD</div>
<div className="bg-blue-500 h-10 w-44 flex justify-center items-center">NAAT</div>
<div className="bg-green-700 h-10 w-44 flex justify-center items-center">MANQABAT</div>
<div className="bg-pink-500 h-10 w-44 flex justify-center items-center">HADEES</div>
<div className="bg-purple-400 h-10 w-44 flex justify-center items-center">WAQIAT</div>

            
            </nav>
        </div>


    )
}
