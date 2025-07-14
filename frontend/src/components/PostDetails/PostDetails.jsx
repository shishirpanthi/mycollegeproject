import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

import useStyles from "./styles";
import {
  getPostById,
  getPostsBySearch,
  trackPostView,
} from "../../actions/posts";
import CommentSection from "./CommentSection";
import SimilarPosts from "../SimilarPosts/SimilarPosts";

function PostDetails() {
  const { post, posts, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    dispatch(getPostById(id));
    // Track post view when user visits post details
    dispatch(trackPostView(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags?.join(",") })
      );
    }
  }, [dispatch, post]);

  const recommendedPosts = posts.filter(
    (recommendedPost) => recommendedPost?._id !== post?._id
  );

  const openPost = (_id) => {
    history.push(`/posts/${_id}`);
  };

  const RecommendedPosts = () => {
    if (recommendedPosts.length === 0) return null;
    else
      return (
        <div className={classes.section}>
          <Typography variant="h5" gutterBottom style={{ margin: "25px" }}>
            You might also like :
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  className={classes.postWrap}
                  style={{ margin: "25px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  {/* <Typography gutterBottom variant="subtitle2" className={classes.postContent}>{message.split(' ').splice(0,25).join(' ')}...</Typography> */}
                  <LinesEllipsis
                    className={classes.postContent}
                    text={message}
                    maxLine="4"
                    style={{ fontFamily: "Helvetica" }}
                  />
                  <Typography gutterBottom variant="subtitle2">
                    Likes: {likes.length}
                  </Typography>
                  <img
                    src={
                      Array.isArray(selectedFile) && selectedFile.length > 0
                        ? selectedFile[0]
                        : selectedFile
                    }
                    height="120px"
                    alt="recommended_img"
                  />
                  {Array.isArray(selectedFile) && selectedFile.length > 1 && (
                    <Typography
                      variant="caption"
                      style={{ display: "block", marginTop: "4px" }}
                    >
                      +{selectedFile.length - 1} more images
                    </Typography>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      );
  };

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="3em" />
      </Paper>
    );
  }

  return (
    <div>
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant={matches ? "h5" : "h3"} component="h2">
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {post.message}
            </Typography>
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <CommentSection post={post} />
            <Divider style={{ margin: "20px 0" }} />
          </div>
          <div className={classes.imageSection}>
            {Array.isArray(post.selectedFile) &&
            post.selectedFile.length > 0 ? (
              <div>
                {post.selectedFile.map((image, index) => (
                  <img
                    key={index}
                    className={classes.media}
                    src={image}
                    alt={`${post.title} - ${index + 1}`}
                    style={{
                      marginBottom:
                        index < post.selectedFile.length - 1 ? "10px" : "0",
                    }}
                  />
                ))}
              </div>
            ) : (
              <img
                className={classes.media}
                src={
                  post.selectedFile ||
                  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                alt={post.title}
              />
            )}
          </div>
        </div>

        <Grid container alignItems="stretch" spacing={6}>
          <RecommendedPosts />
        </Grid>

        {/* Add content-based similar posts */}
        <SimilarPosts postId={post._id} />
      </Paper>
    </div>
  );
}

export default PostDetails;
