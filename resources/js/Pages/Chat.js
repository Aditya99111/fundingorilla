import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import "../../css/chat.css"
import Contact from "../Components/Contact"
function Chat() {
    return (
        
        <div className="maincontent">
        <div className="contact_list">

            <div className="search">
                <input type="text" className="contact_search" placeholder="Search for people"/>
            </div>
            <div className="contacts">
                <Contact/>
                <Contact/>
                
            </div>


            </div>
            
            <div className="message_pannel">

            <div className="message_top_bar">

                <div className="profileimg">
                {/* <Image width={57} height={50} src={userimg} alt="" /> */}

                    <span className="message_name"> Aditya</span>
                    <span className="status"> online</span>
                </div>
            </div>
                <div className="message_container">
                <div className="chat_r">
					<div className="mess">
						<p>
                            hello
						</p>
						<div className="check">
							<span >4:00 PM</span>
						</div>
					<div className="sp"></div>
					</div>
				</div>
                <div className="chat_l">
					<div className="sp"></div>
					<div className="mess_r">
						<p>
                            hiii
						</p>
						<div className="check">
							<span>4:00 PM</span>
							{/* <Image src={Seen} alt="seen"/> */}

						</div>
					</div>
				</div>
                </div>

                <div className="text_area">
                    <input className="input" type="text" placeholder="hello" />
                    <button  className="send">Send</button>
                </div>

            </div>
        </div>
    )
}
Chat.layout = (page) => <Sidebar title="Chat" children={page} />;

export default Chat


