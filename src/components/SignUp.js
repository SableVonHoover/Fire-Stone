import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../js/firebaseConfig";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                //This is Firebase's function that create's a new user in the db
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);

            //####################  NOTE  ##########################
            //If account successfully created, redirect to this Route
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);
