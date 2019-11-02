
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../css/App.css';
import Arena from "../images/arena.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function AboutApp() {
  const classes = useStyles();
  
  return (
       <div class="sideBG" style={{backgroundColor: "lightgray",}}>
          
    <Paper style={{height: 450, width: 750, marginTop: 20, margin: "auto", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url(" + Arena + ")", 
    backgroundRepeat: 'no-repeat' }} className="paper">
        <br></br>
      <Typography variant="h5" component="h3" style={{marginTop: 10, textAlign: "center", color: "orange"}}>
        
      </Typography>
      
      <Typography component="p" style={{marginTop: 10, color: "white", textAlign: "center"}}>
        


        <p style={{marginTop: 100, fontSize: 60}}>Battle!</p>
      </Typography>
      {/* <img src={Arena}></img> */}
    </Paper>
    </div>
  );
}