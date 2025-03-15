import { Link } from "react-router-dom";
import React  from "react";

function Footer(){
    return(
        <section className="footer">
            <div id="col">
                <div id="innercol">
                    <h4 id="footerh4">Don't hesitate – join us right now!</h4>
                    <Link to="/post">
                        <button className="footerButton">JOIN NOW</button>
                    </Link>
                </div>
            </div>
        </section> )
}

export default Footer;