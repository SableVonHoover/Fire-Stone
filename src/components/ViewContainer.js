import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import App from './Story' 
import AboutApp from "./AboutApp"
import Instructions from "./Instructions"
import Game from "./Game"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ViewContainer() {
  const classes = useStyles();
  export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          <App />
        <AboutApp /> 
        <Instructions />
        <Game />
        </Container>
      </React.Fragment>
    );
  }
}


