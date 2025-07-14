import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderBottom: "1px solid #e0e0e0",
    position: "sticky",
    top: 0,
    zIndex: 1100,
    minHeight: "64px",
    marginBottom: "24px",
    "&.MuiAppBar-root": {
      color: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    minHeight: "64px",
    maxWidth: "1800px",
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0 16px",
      minHeight: "56px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  brandLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.8,
    },
    transition: "opacity 0.2s ease",
  },
  brandName: {
    height: "40px",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "32px",
    },
  },
  brandIcon: {
    height: "36px",
    width: "auto",
    marginLeft: "8px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "28px",
    },
  },
  navSection: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
    },
  },
  adminButton: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    textTransform: "none",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  recommendationButton: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontWeight: 500,
    textTransform: "none",
    padding: "6px 16px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04)",
      borderColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "4px 12px",
      fontSize: "0.875rem",
    },
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
    },
  },
  avatar: {
    width: "36px",
    height: "36px",
    backgroundColor: deepPurple[500],
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "32px",
      height: "32px",
      fontSize: "0.875rem",
    },
  },
  userName: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    maxWidth: "120px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logoutButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    fontWeight: 500,
    textTransform: "none",
    padding: "6px 16px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "4px 12px",
      fontSize: "0.875rem",
    },
  },
  signInButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    fontWeight: 500,
    textTransform: "none",
    padding: "8px 24px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 16px",
      fontSize: "0.875rem",
    },
  },

  // Legacy styles for backward compatibility (can be removed later)
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  image: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: "20px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
