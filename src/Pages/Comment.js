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
            //console.log("Sending comment data:", { user: userId, content: newComment.content });
            await api.post(`/posts/${id}/comments`, {
                user: userId,
                content: newComment.content
            });
            const response = await api.get(`/posts/${id}`);
            //console.log("Updated post after comment:", response.data);
            //console.log("Comment data:", response.data.user); 
            setComments(response.data.comments);
        } catch (err) {
            console.error("Error adding comment:", err);
            alert('Error adding comment');
        }
    };

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then(response => {
                setPosts(response.data); 
                console.log("Post data:", response.data.user[0].username); 
                setComments(response.data.comments);
            })
            .catch(error => {
                alert("Error fetching posts");
            });
    }, [id]); 

    const commentElement = comments.map((comment) => {
        console.log("Comment Data:", comment.user);
        return (
            <div className='commentbox' key={comment._id}>
                <p className="commentName">{comment.user[0].username}</p>
                <p className="commentText">{comment.content}</p>
            </div>
        )
    })

    return (
        <div className="comment">
            <Header />
            <main>
            <div className="post_comment">
                <p className='Head'>{post.title}</p>
                <p className='postcontent'>{post.content}</p>
                <p className='username'>by {post.user[0].username}</p>
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