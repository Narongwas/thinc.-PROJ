import React,{useState} from 'react';
import Header from '../Components/header_if_sign.js';
import Input from '../Components/input.js';
import commenticon from '../Assets/commenticon.png';
import './comment.css';
 function Comment(){
    const [comment, setComment] = useState([]);

    function addComment(newComment) {
       setComment([newComment,...comment]);
    }

    const commentElement = comment.map((comment) => {
        return (
            <div className='commentbox'>
                <p className="commentName">{comment.name}</p>
                <p className="commentText">{comment.text}</p>
            </div>
        )
    })

    return (
        <div className="comment">
            <Header />
            <main>
            <div className="post">
                <p className='Head'>alias of poster</p>
                <p className='postcontent'>content of post</p>
                <div className='Numberofcomment'>
                <div className='number'>
                    <img src={commenticon} className='commenticon'/>
                    <p><b>{commentElement.length}ง</b></p>
                    </div>
                </div>
            </div>
            <Input addCommnent={addComment}/>
            <div className='commentList'>
                {commentElement}
            </div>
            </main>
        </div>
    )
}

export default Comment;