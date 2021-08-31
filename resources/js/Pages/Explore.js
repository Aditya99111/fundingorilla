import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import Post from "../Components/Post"
import "../../css/explore.css"

function Explore() {
    return (
        <div className="maincontent">
            <h1 className="heading">Explore</h1>
            
            <div className="posts">
                
            <Post image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  heading="i am the heading of the 1st box"
                  description="i am the description of the first box so di you liked it ?"
            />
            </div>
            

        </div>
    )
}
Explore.layout = (page) => <Sidebar title="Explore" children={page} />;

export default Explore


