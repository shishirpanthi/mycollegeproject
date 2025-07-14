import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { toast } from "react-toastify";

import useStyles from "./styles";
import Input from "./Input/Input";
import { signUp, signIn } from "../../actions/auth";

const Auth = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;

    if (isSignup) {
      if (!namePattern.test(formData.firstName)) {
        newErrors.firstName = "First Name must contain only letters.";
      }
      if (!namePattern.test(formData.lastName)) {
        newErrors.lastName = "Last Name must contain only letters.";
      }
    }

    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and start with an uppercase letter.";
    }

    if (isSignup && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    // Show toast for validation errors
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors before submitting.");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isSignup) {
        dispatch(signUp(formData, history));
      } else {
        const hello = dispatch(signIn(formData, history));
        console.log(hello);
      }
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
    setErrors({});
    setFormData(initialFormData);
    toast.info(`Switched to ${!isSignup ? "Sign Up" : "Sign In"} mode`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              error={!!errors.email}
              helperText={errors.email}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              error={!!errors.password}
              helperText={errors.password}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            <Grid container justify="center">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
