
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../css/App.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function AboutApp() {
  const classes = useStyles();
  
  return (
      
    <div class="sideBG" style={{backgroundColor: "lightgray",}}>

    <Paper style={{height: 450, width: 750, marginTop: 20, margin: "auto", backgroundColor: "blue" }} className="paper">
        <br></br>
      <Typography variant="h5" component="h3" style={{marginTop: 10, textAlign: "center", color: "orange"}}>
        Instructions.
      </Typography>
      
      <Typography component="p" style={{marginTop: 10, color: "white", textAlign: "center"}}>
        The world is in danger, and it needs YOUR help!


        <p style={{marginTop: 100, fontSize: 60}}>LOGO!</p>
      </Typography>
      
    </Paper>
    </div>
  );
}