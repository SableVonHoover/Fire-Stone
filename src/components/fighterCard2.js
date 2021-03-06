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
    <Card
      className={classes.card}
      class="FC2"
      style={{
        position: "absolute",
        left: "90%",
        top: "70%",
        transform: "translate(-70%, -90%)"
      }}
    >
      <img
        src={Dragon}
        className="dragon"
        style={{
          height: "20rem",
          width: "15rem",
          transform: "rotatey(180deg)"
        }}
      />
    </Card>
  );
}
