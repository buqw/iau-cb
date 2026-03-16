import { GoDependabot } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home(props){
    const [messages,setMessages] = useState([]);
    const [inpValue,setInpValue] = useState("");

    const handleChange = e =>{
        setInpValue(e.target.value)
    }

    const send = ()=>{
        if(inpValue == ""){return;}
        const message = {
            value:inpValue,
            sender:"user"
        }
        const reply = {
            value:`Hello! I’m the IAU Chatbot, your virtual assistant for Imam Abdulrahman Bin Faisal University.
                I apologize, but I’m currently unable to generate a response because the AI model is unavailable. Please try again later.`,
            sender:"chat-bot"
        }

        setMessages(prev => [message,...prev])
        setInpValue("");
        setMessages(prev => [reply,...prev])
    }
    return(
        <>
            <nav>
                <div id="nameNicon">
                    <div id="icon">
                        <GoDependabot />
                    </div>
                    <div id="name">
                        <p>Guide Mate</p>
                    </div>
                </div>

                <div id="nav-list">
                    <p>Contact</p>
                    <p>Help</p>
                </div>

                <div id="logout">
                    <button> <Link className="logoutBtn" to="/">Log out</Link></button>
                </div>
            </nav>

            <main>
                <div id="messagesCont">
                    {messages.length >0 && (messages.map(child =>{
                        if(child.sender == "user"){
                            return(
                                <div className="userMessage">
                                    <p>{child.value}</p>
                                </div>
                            )}
                        return(
                            <div className="cbMessage">
                                <p>{child.value}</p>
                            </div>                            
                        )
                    }))}                    
                </div>
            </main>

            <footer>
                <div className="cont">
                    <input value={inpValue} onChange={handleChange} placeholder="Enter Your Message." type="text" />
                    <button onClick={send}><p><IoSend/></p></button>
                </div>
            </footer>
        </>
    )
}