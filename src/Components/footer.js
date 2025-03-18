import React  from "react";
import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate(); 
    function handleSignupClick() {
        navigate('/Register'); 
    }
    return(
        <section className="footer">
            <div id="col">
                <div id="innercol">
                    <h4 id="footerh4">Don't hesitate – join us right now!</h4>
                    <button className="footerButton" onClick={handleSignupClick}>JOIN NOW</button>
                </div>
            </div>
        </section> )
}

export default Footer;