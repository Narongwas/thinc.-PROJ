import './Profile.css';
import React from "react";
import Header from "../Components/header_if_sign";
import CircleProgress  from '../Components/Circle';
import icon from "../Assets/icon.png";

function Profile(){
    return (
        <div>
            <Header/>
            <main className="ProfileMain">
                <section className="Profileicon">
                    <h2 className='Luck'>LUCK</h2>
                    <CircleProgress percentage={73} imageUrl={icon} />
                    <h2 className='Luck'>{73}%</h2>
                </section>
                <section className="ProfileStats">
                    <p className='Name1'>PROFILE NAME</p>
                    <p className='Name2'>PROFILE NAME</p>
                    <div className='Change'>
                        <button className='profileBtn'>CHANGE NAME</button>
                        <button className='profileBtn'>CHANGE PICTURE</button>
                    </div>
                    <hr className='line'/>
                    <p className='Name2'>EXPLORE POST FOR MORE LUCK!</p>
                    <button className='profileBtn'>VIEW OTHER</button>
                    <div className='HistoryZone'>
                        <div>
                            <p className='Name2'>POST HISTORY</p>
                            <p className='Name2'>COMMENT HISTORY</p>
                        </div>
                        <div className='ViewOther'>
                            <button className='profileBtn topviewother'>VIEW OTHER</button>
                            <button className='profileBtn bottomviewother'>VIEW OTHER</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Profile;