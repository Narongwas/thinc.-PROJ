import React,{useEffect,useState} from 'react';
import Header from '../Components/header_if_sign.js';
import Input from '../Components/input.js';
import api from '../Assets/axiosConfig.js';
import commenticon from '../Assets/commenticon.png';
import './comment.css';
import { useParams } from 'react-router-dom';

function Comment(){
    const [post, setPosts] = useState([]);
    const [comment, setComments] = useState([]);
    const {id} = useParams();

    function addComment(newComment) {
       setComments([newComment,...comment]);
    }

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then(response => {
                setPosts(response.data); 
                setComments(response.data.comments || []);
            })
            .catch(error => {
                alert("Error fetching posts");
            });
    }, [id]); 

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
            <div className="post_comment">
                <p className='Head'>{post.name}</p>
                <p className='postcontent'>{post.content}</p>
                <div className='Numberofcomment'>
                    <div className='number'>
                        <img src={commenticon} className='commenticon'/>
                        <p><b>{commentElement.length}</b></p>
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