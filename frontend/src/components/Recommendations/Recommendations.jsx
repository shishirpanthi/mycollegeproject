import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Box,
} from "@material-ui/core";
import { ThumbUp, Comment, Visibility } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {
  getRecommendations,
  trackPostView,
  likePost,
} from "../../actions/posts";
import moment from "moment";

const Recommendations = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { recommendations, isLoading } = useSelector((state) => state.posts);
  const { authData } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("traveller-profile"))
  );

  useEffect(() => {
    if (user?.token) {
      dispatch(getRecommendations(10));
    }
  }, [dispatch, user]);

  const handleViewPost = (postId) => {
    if (user?.token) {
      dispatch(trackPostView(postId));
    }
    history.push(`/posts/${postId}`);
  };

  const handleLike = (postId) => {
    if (user?.token) {
      dispatch(likePost(postId));
    }
  };

  if (!user?.token) {
    return (
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6">
          Please sign in to see personalized recommendations
        </Typography>
      </Paper>
    );
  }

  if (isLoading) {
    return (
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6">Loading recommendations...</Typography>
      </Paper>
    );
  }

  if (!recommendations || recommendations.length === 0) {
    return (
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6">No recommendations available</Typography>
        <Typography variant="body2">
          Start interacting with posts to get personalized recommendations!
        </Typography>
      </Paper>
    );
  }

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Recommended for You
      </Typography>
      <Grid container spacing={3}>
        {recommendations.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card
              elevation={3}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {post.selectedFile && (
                <CardMedia
                  component="img"
                  height="200"
                  image={post.selectedFile}
                  alt={post.title}
                  style={{ objectFit: "cover" }}
                />
              )}
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {post.message.substring(0, 100)}...
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  By {post.name} • {moment(post.createdAt).fromNow()}
                </Typography>

                {/* Tags */}
                <Box style={{ marginTop: "10px", marginBottom: "10px" }}>
                  {post.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      style={{ margin: "2px" }}
                      variant="outlined"
                    />
                  ))}
                </Box>

                {/* Recommendation Score */}
                <Typography
                  variant="caption"
                  style={{ color: "#1976d2", fontWeight: "bold" }}
                >
                  Match Score: {(post.recommendationScore * 100).toFixed(0)}%
                </Typography>
              </CardContent>

              <CardActions
                style={{ justifyContent: "space-between", padding: "16px" }}
              >
                <Box>
                  <Button
                    size="small"
                    startIcon={<ThumbUp />}
                    onClick={() => handleLike(post._id)}
                    color={
                      post.likes?.includes(user?.result?._id)
                        ? "primary"
                        : "default"
                    }
                  >
                    {post.likes?.length || 0}
                  </Button>
                  <Button size="small" startIcon={<Comment />}>
                    {post.comments?.length || 0}
                  </Button>
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<Visibility />}
                  onClick={() => handleViewPost(post._id)}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommendations;
