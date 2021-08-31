import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import "../../css/dashboard.css"
import Box from '../Components/Box';
function Dashboard() {
    return (
        <div className="maincontent">
        <h1 className="greeting">Hey, Aditya </h1>
        <div className="boxes">
            <div className="box"><i className="fas fa-chart-line"></i>
                <h1>Invested</h1>
                <h2>4000$</h2>
            </div>
            <div className="box1"><i className="fas fa-list"></i>
                <h1>Invested in</h1>
                <ul>
                    <li> lorem inc.<span className="amount">$300</span></li>
                    <li>lorem inc.<span className="amount">$200</span></li>
                    <li>lorem inc.<span className="amount">$200</span></li>
                    <li>lorem inc.<span className="amount">$200</span></li>
                </ul>
            </div>
            <div className="box2"><i className="fas fa-dollar-sign"></i>
                <h1>Profit</h1>
                <h2>4200$</h2>
            </div>
        </div>

        <div className="recent">
            <div className="recent_heading"><h1>Recent Activity</h1></div>
            <div className="list">
            
            <div className="cards">
            <Box
                company_name="company1 lorem impsum"
                amount="100"
            />
            </div>

            </div>
        </div>
    </div>
    )
}

Dashboard.layout = (page) => <Sidebar title="Dashboard" children={page} />;
export default Dashboard
