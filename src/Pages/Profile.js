import './Profile.css';
import React from "react";
import Header from "../Components/header_if_sign";

function Profile(){
    return (
        <div>
            <Header/>
            <main className="ProfileMain">
                <section className="Profileicon">
                    <h2>LUCK</h2>
                    <img></img>
                    <h2>{}%</h2>
                </section>
                <section className="ProfileStats">
                    <p>PROFILE NAME</p>
                    <p>PROFILE NAME</p>
                    <div>
                        <button>CHANGE NAME</button>
                        <button>CHANGE PICTURE</button>
                    </div>
                    <hr/>
                    <p>EXPLORE POST FOR MORE LUCK!</p>
                    <button>VIEW OTHER</button>
                    <div>
                        <div>
                            <p>POST HISTORY</p>
                            <p>COMMENT HISTORY</p>
                        </div>
                        <div>
                            <button>VIEW OTHER</button>
                            <button>VIEW OTHER</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Profile;