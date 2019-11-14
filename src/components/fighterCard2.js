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
import FighterCard1 from "./fighterCard";
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

export default class FighterCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTotalHealth: 999,
      myCurrentHealth: 999,
      enTotalHealth: 999,
      enCurrentHealth: 999,
      myDamage: 0,
      enDamage: 0
    };
    // this.setDamage = this.setDamage.bind(this);
    // this.restartGame = this.restartGame.bind(this);
  }

  addDamage(amount) {
    this.setState({ damage: amount });
  }

  restartGame() {
    this.setState({
      myTotalHealth: 999,
      myCurrentHealth: 999,
      enTotalHealth: 999,
      enCurrentHealth: 999,
      myDamage: 0,
      enDamage: 0
    });
  }

  render() {
    let dmg = this.state.myDamage;
    let enNewHp = this.state.enTotalHealth - dmg;
    let enBarWidth = (enNewHp / this.state.enTotalHealth) * 100;
    let enDmgWidth = dmg / this.state.enCurrentHealth;

    return (
      <Card className="card" class="FC2">
        <div className="health-bar" id="opponent-health">
          <div
            class="bar"
            id="opponent-bar"
            style={{ width: enBarWidth + "%" }}
          >
            {this.state.enCurrentHealth}
            <div
              class="hit"
              id="opponent-hit"
              style={{ width: enDmgWidth + "%" }}
            ></div>
          </div>
        </div>
        {/* <CardActionArea> */}
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
              height: "14.6875rem",
              width: "15.625rem"
            }}
            alt=""
          />
          {/* <img src={Forest } className="forest"
        style={{
          height: 200, 
          width: 150, 
          
          }} /> */}
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions style={{ textAlign: "center" }}></CardActions>

        <h3 id="game-message"></h3>
      </Card>
    );
  }
}
