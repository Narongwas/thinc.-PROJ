import React from "react";
import Header from "../Components/header_if_sign";

function Profile(){
    return (
        <div>
            <Header/>
            <main>
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
                    
                </section>
            </main>
        </div>
    );
}

export default Profile;