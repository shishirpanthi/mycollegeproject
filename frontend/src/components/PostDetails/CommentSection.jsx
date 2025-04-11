import React, {useState, useRef} from 'react';
import {Typography, TextField,Button} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import {commentPost} from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({post}) => {
      const classes = useStyles();
      const [comments, setComments] = useState(post?.comments);

      // const {post, posts, isLoading} = useSelector((state) => state.posts);
      const commentRef = useRef();

      const [comment, setComment] = useState('');
      const dispatch = useDispatch();

      const user = useSelector((state) => state.auth.authData);

      const handleClick = async () =>  {
            const commentFinal = `${user.result.name}: ${comment}`;
            const newComment = await dispatch(commentPost(commentFinal, post._id));
            setComments(newComment);
            setComment('');
            
            commentRef.current.scrollIntoView({behavior: 'smooth'});
      }

      const CommentsComp = () => {
            return (
                  comments.map((c, i) => (
                        <Typography variant="subtitle1" gutterBottom key={i}>
                              <strong > {c?.split(': ')[0]} </strong>
                              {c?.split(':')[1]}
                        </Typography>

                  ))
            )
      }

      return (
            <div>
                <div className={classes.commentsOuterContainer}>
                    <div className={classes.commentsInnerContainer}>
                        <Typography variant="h6" gutterBottom>Comments</Typography>
                        <CommentsComp />
                        <div ref={commentRef} />
                     </div>
                     {user?.result?.name && (
                        <div style={{width: '60%'}} >
                              <Typography variant="h6" gutterBottom>Write a comment</Typography>
                              <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)}/>
                              <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" onClick={handleClick} color="primary">
                                    Comment
                              </Button>
                        </div>
                        )}
                </div>
            </div>
      )
}

export default CommentSection;
