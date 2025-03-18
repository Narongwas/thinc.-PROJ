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
    const [username, setUsername] = useState('Anonymous');
    const {id} = useParams();

    const handleCommentSubmit = async (newComment) => {
        try {
            await api.post(`/posts/${id}/comments`, {
                name: newComment.name,
                content: newComment.content
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
                <p className="commentName">{comment.name}</p>
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
                        <img src={commenticon} className='commenticon'/>
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