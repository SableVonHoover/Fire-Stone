import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../css/App.css";
import Knight from "../images/knight.gif";
import Wizard from "../images/wizard.gif"

const useStyles = makeStyles({
  card: {
    // maxWidth: 200,
    // Height: 700,
    // marginLeft: 50,
    // margintop: 50,
    
    // backgroundColor: "red",
    
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} class="FC1">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <img src={Knight}
        style={{
        textAlign: "center",
        height: 250,
        width: 250,
        transform: "rotatey(180deg)"

        }}/>

        {/* <img src={Wizard}
        style={{
        textAlign: "center",
        height: 250,
        width: 250,

        }}/> */}
        

       
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{textAlign: "center"}}>
        {/* <Button size="small" color="primary">
          Attack 1
        </Button>
        <Button size="small" color="primary">
          Attack 2
        </Button> */}
      </CardActions>
         
    <h3>Your Health <span id="player-health"></span></h3>
    <button id="attack-button-1" onclick="attack()">hit em</button>
    <button id="attack-button-2" onclick="attack()">hit em</button>
    <button id="restart-button" hidden="true" onclick="restart()">Restart game</button>
    <h3 id="game-message"></h3>
    </Card>
  );
}