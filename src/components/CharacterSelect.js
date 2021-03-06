import React, { useCallback } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router";
import app from "../js/firebaseConfig";
import API from "../utils/API";
import SelectChoice from "./Selection";
import characters from "./Characters.js";
// import Card from "@material-ui/core/Card";
import Game from "./Game";
import Game2 from "./Game2";
import * as firebase from "firebase/app";

characters.forEach(character => {
  character.image = require("../images/" + character.image);
});

let redirectCounter = false;
let selectedCharacter;

const CharacterSelect = ({ history }) => {
  const handleCharacter = useCallback(
    async event => {
      event.preventDefault();
      //const { email, password, username } = event.target.elements;
      try {
        await app;

        //TODO: Populate with user's character choice and associate it with user id from collection
        let currentFBUserEmail = firebase.auth().currentUser.email;
        console.log(currentFBUserEmail);

        //####################  NOTE  ##########################
        //If account successfully created, redirect to this Route
        redirectCounter = true;
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (redirectCounter === true && selectedCharacter === 2) {
    redirectCounter = false;
    return <Game2 />;
  } else if (redirectCounter === true && selectedCharacter === 1) {
    redirectCounter = false;
    return <Game />;
  }

  const characterOptions = () => {
    return characters.map(character => (
      <Button
        type="submit"
        onClick={() => {
          selectedCharacter = character.id;
        }}
      >
        <SelectChoice
          key={character.id}
          id={character.id}
          image={character.image}
        />
        Select this character
      </Button>
    ));
  };

  const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      paddingTop: theme.spacing(3),
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      justifyContent: "center"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles;

  return (
    // <div>
    //     <h1>Sign Up</h1>
    //     <form onSubmit={handleSignUp}>
    //         <label>
    //             Email
    //         <input name="email" type="email" placeholder="Email" />
    //         </label>
    //         <label>
    //             Password
    //         <input name="password" type="password" placeholder="Password" />
    //         </label>
    //         <button type="submit">Sign Up</button>
    //     </form>
    // </div>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Select a Character!
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleCharacter}>
          {/*render character options*/}
          {characterOptions()}
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Make Selection
          </Button> */}
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
};

export default withRouter(CharacterSelect);
