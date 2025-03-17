import React, { useState, useEffect } from 'react';
import popcatImage from '../Assets/popcat.jpg'; // Ensure you have the popcat image in the assets folder
import popcatClickedImage from '../Assets/popcat-clicked.png'; // Ensure you have the clicked image in the assets folder
import './PopcatPage.css';

const PopcatPage = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const savedClickData = localStorage.getItem('clickData');
        if (savedClickData) {
            const { count, date } = JSON.parse(savedClickData);
            const today = new Date().toISOString().split('T')[0];
            if (date === today) {
                setClickCount(count);
            } else {
                localStorage.setItem('clickData', JSON.stringify({ count: 0, date: today }));
            }
        } else {
            const today = new Date().toISOString().split('T')[0];
            localStorage.setItem('clickData', JSON.stringify({ count: 0, date: today }));
        }

        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                handleClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('clickData', JSON.stringify({ count: clickCount, date: today }));
    }, [clickCount]);

    const handleClick = () => {
        setIsClicked(true);
        setClickCount(prevCount => Math.min(prevCount + 1, 1000));
        setTimeout(() => {
            setIsClicked(false);
        }, 200); // Duration for which the clicked state is active
    };

    const progress = (clickCount / 1000) * 100;

    return (
        <div>
            <div onClick={handleClick} className="popcat-container">
                <img 
                    src={isClicked ? popcatClickedImage : popcatImage} 
                    alt="Popcat" 
                    className="popcat-image" 
                />
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <div className="progress-text">{clickCount} / 1,000 clicks</div>
            </div>
        </div>
    );
};

export default PopcatPage;