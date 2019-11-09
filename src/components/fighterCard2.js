import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import Dragon from "../images/dragon.gif";
import Zombie from "../images/zombie.gif";
import Forest from "../images/forest.gif";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    // maxWidth: 200,
    // Height: 700,
    // marginLeft: 50,
    // margintop: 50,
    // backgroundColor: "red",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} class="FC2">
      <CardActionArea>
        <CardMedia
        // className={classes.media}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // title="Contemplative Reptile"
        />
        <CardContent>
          {/* <img src={Dragon } className="dragon"
        style={{
          height: 200, 
          width: 190, 
          transform: "rotatey(180deg)"
          }} /> */}
          <img
            src={Zombie}
            className="zombie"
            style={{
              height: 200,
              width: 190
            }}
            alt=""
          />
          {/* <img src={Forest } className="forest"
        style={{
          height: 200, 
          width: 150, 
          
          }} /> */}
        </CardContent>
      </CardActionArea>
      <CardActions style={{ textAlign: "center" }}></CardActions>
      <h3>
        Opponent Health <span id="opponent-health"></span>
      </h3>

      <h3 id="game-message"></h3>
    </Card>
  );
}
