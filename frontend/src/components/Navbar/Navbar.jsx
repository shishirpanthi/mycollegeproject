import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import decode from "jwt-decode";

import { LOGOUT } from "../../constants/actionTypes";
import useStyles from "./styles";
import mainImg from "../../Images/icon.jpg";
import name from "../../Images/name.jpg";

function Navbar() {
	const classes = useStyles();
	const user = useSelector((state) => state.auth.authData);
	console.log(user);
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
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Link to="/" className={classes.brandContainer}>
				<img src={name} alt="icon" height="50px" />
				<img className={classes.image} src={mainImg} alt="icon" height="40px" />
			</Link>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						{user.result.isAdmin && (
							<Link to="/dashboard">Admin Dashboard</Link>
						)}
						<Avatar
							className={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{" "}
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant="h6">
							{user.result.name}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={logout}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
