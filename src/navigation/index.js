import LoginScreen from "../screens/authentication/login";
import SignupScreen from "../screens/authentication/signup";
import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "./error-boundary";
import Profile from "../screens/user/profile";
import UpdateProfile from "../screens/user/update-profile";
import NotFound from "../screens/not-found";
import NavBar from "../components/nav-bar";

export const publicRoutes = [
  {
    key: "login",
    path: "/login",
    component: LoginScreen
  },
  {
    key: "signup",
    path: "/signup",
    component: SignupScreen
  }
];

export const privateRoutes = [
  {
    path: "/user/profile",
    component: Profile
  },
  {
    path: "/user/update-profile",
    component: UpdateProfile
  },
  {
    path: "/",
    component: Profile
  }
];

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === false ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        ) : (
          <Fragment>
            <NavBar />
            <Component {...props} />
          </Fragment>
        )
      }
    />
  );
};

const Navigation = (props) => {
  let isAuthenticated = true;
  const allOtherRoutes = privateRoutes.map((route, index) => {
    return (
      <PrivateRoute
        key={index}
        path={route.path}
        exact={true}
        component={route.component}
        isAuthenticated={isAuthenticated}
      />
    );
  });

  const PublicRoutes = publicRoutes.map(({ route, key, ...rest }) => (
    <Route {...rest} key={key} component={rest.component} exact={true} />
  ));

  return (
    <ErrorBoundary>
      <Switch>
        {PublicRoutes}
        {allOtherRoutes}
        <Route path="*" component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
};

export default Navigation;
