import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "20px",
    backgroundColor: "#fef9f5", // Off white
    minHeight: "100vh",
  },
  header: {
    marginBottom: "30px",
    textAlign: "center",
  },
  title: {
    color: "#0c342c", // Dark green
    fontWeight: "bold",
    marginBottom: "16px",
  },
  subtitle: {
    color: "#333333", // Black
    fontSize: "1.1rem",
  },
  cardGrid: {
    marginTop: "20px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fef9f5", // Off white
    border: "1px solid #0c342c", // Dark green border
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(12, 52, 44, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 25px rgba(12, 52, 44, 0.25)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundColor: "rgba(12, 52, 44, 0.1)",
  },
  cardContent: {
    flexGrow: 1,
    padding: "16px",
  },
  cardTitle: {
    color: "#0c342c", // Dark green
    fontWeight: "bold",
    marginBottom: "8px",
  },
  cardDescription: {
    color: "#333333", // Black
    marginBottom: "12px",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "12px",
  },
  tag: {
    backgroundColor: "#affa01", // Light green
    color: "#333333", // Black
    fontWeight: "500",
    fontSize: "0.75rem",
  },
  cardActions: {
    padding: "8px 16px 16px",
    backgroundColor: "rgba(175, 250, 1, 0.1)", // Light green tint
  },
  actionButton: {
    color: "#0c342c", // Dark green
    "&:hover": {
      backgroundColor: "rgba(175, 250, 1, 0.2)",
    },
  },
  iconButton: {
    color: "#0c342c", // Dark green
  },
  likedIcon: {
    color: "#ff3d11", // Orange for liked state
  },
  viewButton: {
    backgroundColor: "#affa01", // Light green
    color: "#333333", // Black
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#9ee100", // Darker light green
    },
  },
  dateText: {
    color: "#666666",
    fontSize: "0.875rem",
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#fef9f5", // Off white
    borderRadius: "15px",
    border: "2px dashed #affa01", // Light green dashed border
  },
  emptyTitle: {
    color: "#0c342c", // Dark green
    marginBottom: "12px",
  },
  emptyDescription: {
    color: "#333333", // Black
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
    backgroundColor: "#fef9f5", // Off white
  },
  loadingSpinner: {
    color: "#0c342c", // Dark green
  },
}));
