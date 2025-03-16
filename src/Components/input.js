import React,{useState} from "react";
function Input({addCommnent}){
    const [input, setInput] = useState('');

    const onClick = () => {
        const comment = {name: "Name" , text : input};
        addCommnent(comment);
        setInput('');
    }
    return (
        <div className="inputComment">
            <input type="text" placeholder="Write a comment..." onChange={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}

export default Input;