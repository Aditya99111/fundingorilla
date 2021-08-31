import React from 'react'
import "../../css/dashboard.css"
function Box({company_name,amount}) {

    return (
        
        <div className="card">
            <div className="card_heading">
                <h1>{company_name}</h1>
            </div>
            <div className="card_content">
                <h1>{amount}$</h1>
            </div>
        </div>
          
    )
}
export default Box
