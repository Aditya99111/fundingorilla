import React from 'react'
import Sidebar from "../Layouts/Sidebar"
import "../../css/details.css"
function Details() {
    return (
        <div className="maincontent">
            <h1 className="heading">details
            </h1>
            <div className="details">
                <div className="personal_info">
                <h2 className="perso_head"><span>personal info</span></h2>
                    <div className="name">
                       <span>name-</span>
                        users name
                    </div>
                    <div className="about">
                       <span className="about_he">About-</span> about me Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas, omnis, quis expedita qui assumenda eum deserunt mollitia aut optio odio! Nemo laudantium sapiente dolorem, placeat tempora quibusdam labore officia, repudiandae excepturi optio ullam non, sint ducimus obcaecati hic fugiat?
                    </div>
                    <div className="age">
                        <span className="age_he">Age-</span> 33
                    </div>
                    <div className="location">
                        <span className="location_he">Location-</span> india
                    </div>
                </div>
                <div className="business_info">
                <h2 className="bus_head"><span>business Details</span></h2>

                    <div className="company_name">
                       <span className="location_he">Company Name-</span> Lorem.inc
                    </div>
                    <div className="description">
                       <span className="location_he">Discription-</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae necessitatibus consequatur, odio iusto porro, accusamus odit eius dolorum enim assumenda fugiat perferendis quis repellendus velit consequuntur nobis esse est incidunt officiis atque eligendi consectetur. Quo pariatur, tempore et magnam laboriosam in nobis provident sapiente distinctio. Repellat voluptates incidunt dolorum ex rerum sit officiis sequi, quisquam ad sunt pariatur at aspernatur nam ipsa in hic? Perferendis ipsum, esse facere, quos ullam eligendi fugiat asperiores cumque saepe suscipit explicabo incidunt numquam enim at deserunt dignissimos impedit pariatur sequi expedita veniam accusantium ex voluptatum! Dolorem, atque consequatur, ipsa dicta repudiandae aperiam cupiditate tempora delectus sapiente assumenda saepe at eveniet tempore consectetur quibusdam? Id esse accusamus expedita quod voluptas! Iusto, a quos qui illum fuga eligendi non minima libero temporibus ducimus nam quia quo suscipit, et voluptates adipisci asperiores aut voluptatem at aperiam ullam ipsa distinctio cupiditate quae. Error, esse! Fugiat dignissimos rem accusantium. Sunt voluptate ipsa veritatis voluptatibus animi quod aliquam atque vitae quo. Quas nostrum at exercitationem eaque rem quos consectetur, beatae id libero tenetur expedita voluptatem eum qui corrupti fuga nesciunt provident, molestiae illum veniam minus tempora? Commodi quisquam quo corporis. At incidunt atque aut ullam accusamus saepe tempore quam.

                    </div>
                    <div className="address">
                       <span className="location_he">Address-</span> india gurgaon haryana dlhi hno 12344444
                        
                    </div>
                    <div className="business_plan">
                    <span className="location_he">Business Plan-</span><button className="btn">➜</button>

                    </div>

                    <div className="stats">
                        <div className="company_valuation">
                       <span className="location_he">Company Valuation-</span> 1000000

                        </div>
                        <div className="previous_year_revenue">
                       <span className="location_he">Previous Year Revenue-</span> 200000

                        </div>
                        <div className="estimated_this_yr_rev">
                       <span className="location_he">Estimated This Year Revenue-</span> 2000000

                        </div>
                    </div>
                </div>
                <div className="make_offer">
                <h2 className="bus_head"><span>Make Offer</span></h2>

                    <div className="equity">
                       <span className="location_he">Equity-</span> 20%

                    </div>
                    <div className="want_to_raise">
                       <span className="location_he">Want to Raise-</span> 100000

                    </div>
                    <div className="make_offer">
                    <button className="btn">➜</button>

                    </div>
                    <div className="invest">
                    <button className="btn">➜</button>

                    </div>
                    <div className="ask_questions">
                <h2 className="bus_head"><span>Have Any Questions?</span></h2>
                <textarea name="questions" id="ques" cols="30" rows="10"></textarea>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
Details.layout = (page) => <Sidebar title="Details" children={page} />;

export default Details
