import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
	const user = useSelector((state) => state.auth.authData);
	return (
		<BrowserRouter>
			<Container maxWidth="xl">
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/posts" />} />
					<Route path="/posts" exact component={Home} />
					<Route path="/posts/search" exact component={Home} />
					<Route path="/posts/:id" component={PostDetails} />
					<Route path="/dashboard" component={Dashboard} />
					<Route
						path="/auth"
						exact
						component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
					/>
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
