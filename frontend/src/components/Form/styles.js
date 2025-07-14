import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#fef9f5", // Off white
        "& fieldset": {
          borderColor: "#0c342c", // Dark green
        },
        "&:hover fieldset": {
          borderColor: "#affa01", // Light green on hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#0c342c", // Dark green when focused
        },
      },
      "& .MuiInputLabel-root": {
        color: "#333333", // Black
        "&.Mui-focused": {
          color: "#0c342c", // Dark green when focused
        },
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#fef9f5", // Off white
    borderRadius: "15px",
    border: "1px solid #0c342c", // Dark green border
    boxShadow: "0 8px 25px rgba(12, 52, 44, 0.15)",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    "& .MuiOutlinedInput-root": {
      borderColor: "#0c342c", // Dark green
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#affa01", // Light green
    color: "#333333", // Black text
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#9ee100", // Darker light green
    },
  },
}));
