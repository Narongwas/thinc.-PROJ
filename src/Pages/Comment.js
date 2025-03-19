import React, { useEffect, useState } from 'react';
import Header from '../Components/header_if_sign.js';
import Input from '../Components/input.js';
import api from '../Assets/axiosConfig.js';
import commenticon from '../Assets/commenticon.png';
import './comment.css';
import { useParams } from 'react-router-dom';
import upper from '../Assets/Arrowup.png';
import lower from '../Assets/Arrowdown.png';

function Comment() {
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [isDisliked, setIsDisliked] = useState(false);
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    const handleLike = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
            if (isDisliked) {
                setDislikeCount(dislikeCount - 1);
                setIsDisliked(false);
            }
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    };

    const handleDislike = () => {
        if (!isDisliked) {
            setDislikeCount(dislikeCount + 1);
            if (isLiked) {
                setLikeCount(likeCount - 1);
                setIsLiked(false);
            }
        } else {
            setDislikeCount(dislikeCount - 1);
        }
        setIsDisliked(!isDisliked);
    };

    const handleCommentSubmit = async (newComment) => {
        try {
            const userId = localStorage.getItem('userId');
            await api.post(`/posts/${id}/comments`, {
                user: userId,
                content: newComment.content
            });
            const response = await api.get(`/posts/${id}`);
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
        return (
            <div className='commentbox' key={comment._id}>
                <p className="commentName">{comment.user[0].username}</p>
                <p className="commentText">{comment.content}</p>
                <div className='icon-group-comment'>
                    <div className='number' onClick={handleLike}>
                        <img src={upper} className='voteimg' alt="Upvote" />
                        <p>{likeCount}</p>
                    </div>
                    <div className='number' onClick={handleDislike}>
                        <img src={lower} className='voteimg' alt="Downvote" />
                        <p>{dislikeCount}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="comment">
            <Header />
            <main>
                <div className="post_comment">
                    <p className='Head'>{post.title}</p>
                    <p className='postcontent'>{post.content}</p>
                    <p className='username'>by {post.user && post.user.length > 0 ? post.user[0].username : "Unknown"}</p>
                    <div className='Numberofcomment'>
                        <div className='number'>
                            <img src={commenticon} alt='commenticon' className='commenticon' />
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
    );
}

export default Comment;