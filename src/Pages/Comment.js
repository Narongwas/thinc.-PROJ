import React,{useEffect,useState} from 'react';
import Header from '../Components/header_if_sign.js';
import Input from '../Components/input.js';
import api from '../Assets/axiosConfig.js';
import commenticon from '../Assets/commenticon.png';
import './comment.css';
import { useParams } from 'react-router-dom';

function Comment(){
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    const handleCommentSubmit = async (newComment) => {
        try {
            const userId = localStorage.getItem('userId');
            await api.post(`/posts/${id}/comments`, {
                content: newComment.content,
                user: userId
            });
            const response = await api.get(`/posts/${id}`);
            console.log("Updated post after comment:", response.data);
            setComments(response.data.comments || []);
        } catch (err) {
            console.error("Error adding comment:", err);
            alert('Error adding comment');
        }
    };

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then(response => {
                console.log("Post data:", response.data); 
                setPosts(response.data); 
                setComments(response.data.comments || []);
            })
            .catch(error => {
                alert("Error fetching posts");
            });
    }, [id]); 

    const commentElement = comments.map((comment) => {
        return (
            <div className='commentbox' key={comment._id}>
                <p className="commentName">{comment.user}</p>
                <p className="commentText">{comment.content}</p>
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
                        <img src={commenticon} alt='commenticon' className='commenticon'/>
                        <p><b>{commentElement.length}</b></p>
                    </div>
                </div>
            </div>
            <Input handleCommentSubmit={handleCommentSubmit} />
            <div className='commentList'>
                {commentElement}
            </div>
            </main>
        </div>
    )
}

export default Comment;