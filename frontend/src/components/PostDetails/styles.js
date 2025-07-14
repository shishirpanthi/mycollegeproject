import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
    border: "2px solid #0c342c", // Dark green border
  },
  card: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fef9f5", // Off white
    borderRadius: "20px",
    border: "1px solid #affa01", // Light green border
    boxShadow: "0 8px 25px rgba(12, 52, 44, 0.15)",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
    backgroundColor: "#fef9f5", // Off white
    color: "#333333", // Black text
  },
  imageSection: {
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "start",
    backgroundColor: "rgba(175, 250, 1, 0.05)", // Light green tint
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #affa01", // Light green border

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  postWrap: {
    maxWidth: "20%",
    [theme.breakpoints.down("xl")]: {
      maxWidth: "15%",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "25%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },

  postContent: {
    padding: "10px 0 0 0",
    fontSize: "0.875rem",
    letterSpacing: "0.00714em",
    color: "#333333", // Black text
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "77vh",
    backgroundColor: "#fef9f5", // Off white
    border: "2px solid #0c342c", // Dark green border
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(175, 250, 1, 0.05)", // Light green tint
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #affa01", // Light green border
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
    backgroundColor: "#fef9f5", // Off white
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #0c342c", // Dark green border
  },
}));
