import React, { useState } from "react";

function Input({ handleCommentSubmit, username }) {
    const [input, setInput] = useState('');

    const onClick = () => {
        if (input.trim() !== '') {
            const newComment = { name: username, content: input };
            handleCommentSubmit(newComment);
            setInput('');
        }
    };

    return (
        <div className="inputComment">
            <input
                type="text"
                placeholder="Write a comment..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button onClick={onClick}>Submit</button>
        </div>
    );
}

export default Input;