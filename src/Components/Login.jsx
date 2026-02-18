import { GoDependabot } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { MdLocalPharmacy } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";

import { Link } from "react-router-dom";
export default function Login(){
    const colleges = [
    {
        name: "CCSIT",
        logo:<FaCode />,
    },
    {
        name:"Engineering",
        logo:<MdEngineering />
    },
    {
        name:"Pharmacy",
        logo:<MdLocalPharmacy />
    },
    {
        name:"Business",
        logo:<FaBusinessTime />
    },
    {
        name:"Health",
        logo:<GiHealthNormal />
    }]

    return(
        <div id="loginBody">
            <div id="logoCont">
                <GoDependabot />
            </div>
            <div id="login-title">
                <p>IAU Chatbot</p>
                <p>Select your college</p>
            </div>
            <div id="collegs">
                {colleges.map(child =>{
                    return(          
                        <Link className="link" to="home">
                                <div className="logoBtn">
                                    {child.logo}
                                </div>
                                <div>
                                    <p>{child.name}</p>
                                </div>
                        </Link>    
                    )
                })}
            </div>

            <div id="guest">
                <div id="enterAs">
                    <p>Enter As Guest</p>
                </div>
                <div>
                    <Link className="link" to="home">
                            <div className="logoBtn">
                                {<IoMdPerson />}
                            </div>
                            <div>
                                <p>Guest</p>
                            </div>
                    </Link>                    
                </div>
                
            </div>
         </div>          

    )
}