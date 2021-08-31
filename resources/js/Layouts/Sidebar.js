import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import "../../css/sidebar.css"
function Sidebar({children}) {
    return (
        
        <div>
            <div className="sidebar">

<h1 className="heading">Fundingorilla</h1>
<div className="userimg">
    <img height={140} src="https://img.icons8.com/bubbles/50/000000/user.png" alt="" />
</div>
<h1 className="username">aditya</h1>
<div className="menu">
    <div className="cards">
        <ul className="ul">
            <Link className="ul" href="/dashboard"><li className="active">Dashboard</li></Link>
            <Link className="ul" href="/explore"><li>Explore </li></Link>
            <Link className="ul" href="/create"><li>Create</li></Link>
            <Link className="ul" href="/chat"><li>Chat</li></Link>
            <li>Logout</li>
        </ul>

    </div>
</div>
</div>
<input className="searchbar" type="text" placeholder="Search.." />
<button className="btn">Logout</button>

        {children}
        </div>
    )
}

export default Sidebar
