import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

//This is the function that prevents unauthorized users from accessing pages
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    // Context is a tool that allows us to access data from other components
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                // If currentUser exists (i.e. user is logged in) it evaluates to true
                !!currentUser ? (
                    //If user is logged in, then redirect to whatever route they were trying to access
                    <RouteComponent {...routeProps} />
                ) : (
                        //If the user is not logged in, then they will be ridirected to this route
                        <Redirect to={"/signin"} />
                    )
            }
        />
    );
};


export default PrivateRoute;