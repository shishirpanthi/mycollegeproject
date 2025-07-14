import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Box,
  Chip,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import decode from "jwt-decode";

import { LOGOUT } from "../../constants/actionTypes";
import useStyles from "./styles";
import mainImg from "../../Images/icon.jpg";
import name from "../../Images/name.jpg";

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const user = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, user?.token]);

  return (
    <AppBar className={classes.appBar} position="sticky" elevation={2}>
      <Toolbar className={classes.toolbar}>
        {/* Brand Section */}
        <Box className={classes.brandContainer}>
          <Link to="/" className={classes.brandLink}>
            <img src={name} alt="brand name" className={classes.brandName} />
            <img src={mainImg} alt="brand icon" className={classes.brandIcon} />
          </Link>
        </Box>

        {/* Navigation Section */}
        <Box className={classes.navSection}>
          {user ? (
            <Box className={classes.userSection}>
              {/* Admin Dashboard Link */}
              {user.result.isAdmin && (
                <Button
                  component={Link}
                  to="/dashboard"
                  className={classes.adminButton}
                  variant="text"
                  color="inherit"
                >
                  Dashboard
                </Button>
              )}

              {/* Recommendations Button */}
              <Button
                component={Link}
                to="/recommendations"
                className={classes.recommendationButton}
                variant="outlined"
                color="primary"
                size={isMobile ? "small" : "medium"}
              >
                For You
              </Button>

              {/* User Profile Section */}
              <Box className={classes.userProfile}>
                <Avatar
                  className={classes.avatar}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.charAt(0).toUpperCase()}
                </Avatar>

                {!isMobile && (
                  <Typography className={classes.userName} variant="subtitle1">
                    {user.result.name}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  className={classes.logoutButton}
                  color="secondary"
                  onClick={logout}
                  size={isMobile ? "small" : "medium"}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
              className={classes.signInButton}
              size={isMobile ? "small" : "medium"}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
