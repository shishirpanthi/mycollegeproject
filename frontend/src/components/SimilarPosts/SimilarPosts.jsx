import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Box,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getSimilarPosts, trackPostView } from "../../actions/posts";
import moment from "moment";

const SimilarPosts = ({ postId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { similarPosts } = useSelector((state) => state.posts);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("traveller-profile"))
  );

  useEffect(() => {
    if (postId) {
      dispatch(getSimilarPosts(postId, 5));
    }
  }, [dispatch, postId]);

  const handleViewPost = (similarPostId) => {
    if (user?.token) {
      dispatch(trackPostView(similarPostId));
    }
    history.push(`/posts/${similarPostId}`);
  };

  if (!similarPosts || similarPosts.length === 0) {
    return null;
  }

  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Similar Posts
      </Typography>
      <List>
        {similarPosts.map((post, index) => (
          <ListItem
            key={post._id}
            divider={index < similarPosts.length - 1}
            style={{ cursor: "pointer" }}
            onClick={() => handleViewPost(post._id)}
          >
            <ListItemAvatar>
              <Avatar src={post.selectedFile || "/default-avatar.png"}>
                {post.title.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  {post.title}
                </Typography>
              }
              secondary={
                <Box>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {post.message.substring(0, 80)}...
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    By {post.name} • {moment(post.createdAt).fromNow()}
                  </Typography>
                  <Box style={{ marginTop: "5px" }}>
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        style={{ margin: "2px", fontSize: "10px" }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="caption"
                    style={{
                      color: "#1976d2",
                      fontWeight: "bold",
                      display: "block",
                      marginTop: "5px",
                    }}
                  >
                    Similarity: {(post.similarityScore * 100).toFixed(0)}%
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SimilarPosts;
