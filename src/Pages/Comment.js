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
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    const handleLike = (commentId) => {
        setComments((prevComments) =>
            prevComments.map((comment) => {
                if (comment._id === commentId) {
                    if (!comment.isLiked) {
                        return {
                            ...comment,
                            likeCount: comment.likeCount + 1,
                            isLiked: true,
                            isDisliked: false,
                            dislikeCount: comment.isDisliked ? comment.dislikeCount - 1 : comment.dislikeCount,
                        };
                    } else {
                        return {
                            ...comment,
                            likeCount: comment.likeCount - 1,
                            isLiked: false,
                        };
                    }
                }
                return comment;
            })
        );
    };

    const handleDislike = (commentId) => {
        setComments((prevComments) =>
            prevComments.map((comment) => {
                if (comment._id === commentId) {
                    if (!comment.isDisliked) {
                        return {
                            ...comment,
                            dislikeCount: comment.dislikeCount + 1,
                            isDisliked: true,
                            isLiked: false,
                            likeCount: comment.isLiked ? comment.likeCount - 1 : comment.likeCount,
                        };
                    } else {
                        return {
                            ...comment,
                            dislikeCount: comment.dislikeCount - 1,
                            isDisliked: false,
                        };
                    }
                }
                return comment;
            })
        );
    };

    const handleCommentSubmit = async (newComment) => {
        try {
            const userId = localStorage.getItem('userId');
            await api.post(`/posts/${id}/comments`, {
                user: userId,
                content: newComment.content,
            });
            const response = await api.get(`/posts/${id}`);
            setComments(
                response.data.comments.map((comment) => ({
                    ...comment,
                    likeCount: 0,
                    dislikeCount: 0,
                    isLiked: false,
                    isDisliked: false,
                }))
            );
        } catch (err) {
            console.error("Error adding comment:", err);
            alert("Error adding comment");
        }
    };

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then((response) => {
                setPosts(response.data);
                setComments(
                    response.data.comments.map((comment) => ({
                        ...comment,
                        likeCount: 0,
                        dislikeCount: 0,
                        isLiked: false,
                        isDisliked: false,
                    }))
                );
            })
            .catch((error) => {
                alert("Error fetching posts");
            });
    }, [id]);

    const commentElement = comments.map((comment) => {
        return (
            <div className="commentbox" key={comment._id}>
                <p className="commentName">{comment.user[0].username}</p>
                <p className="commentText">{comment.content}</p>
                <div className="icon-group-comment">
                    <div className="number" onClick={() => handleLike(comment._id)}>
                        <img src={upper} className="voteimg" alt="Upvote" />
                        <p>{comment.likeCount}</p>
                    </div>
                    <div className="number" onClick={() => handleDislike(comment._id)}>
                        <img src={lower} className="voteimg" alt="Downvote" />
                        <p>{comment.dislikeCount}</p>
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
                <p className='username'> by {post.user && post.user.length > 0 ? post.user[0].username : "Unknown"}</p>
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
    );
}

export default Comment;