import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../css/App.css";
import Knight from "../images/knight.gif";
import Wizard from "../images/wizard.gif";
import FighterCard1 from "./fighterCard";

const useStyles = makeStyles({
  card: {
    // maxWidth: 200,
    // Height: 700,
    // marginLeft: 50,
    // margintop: 50,
    // backgroundColor: "red",
  }
});

export default class FighterCard2 extends FighterCard1 {
  render() {
    let enDmg = this.state.enDamage;
    let myNewHp = this.state.myTotalHealth - enDmg;
    let myBarWidth = (myNewHp / this.state.myTotalHealth) * 100;
    let myDmgWidth = (enDmg / this.state.myCurrentHealth) * 100;

    return (
      <Card className="card" class="FC1">
        <div className="health-bar">
          <div class="bar" style={{ width: myBarWidth + "%" }}>
            {this.state.myCurrentHealth}
            <div class="hit" style={{ width: myDmgWidth + "%" }}></div>
          </div>
        </div>
        {/* <CardActionArea> */}
        <CardMedia
          // className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />

        <CardContent>
          <img
            src={Knight}
            style={{
              textAlign: "center",
              height: "15.625rem",
              width: "15.625rem",
              transform: "rotatey(180deg)"
            }}
            alt=""
          />

          {/* <img src={Wizard}
        style={{
        textAlign: "center",
        height: 250,
        width: 250,

        }}/> */}
        </CardContent>

        <CardActions style={{ textAlign: "center" }}>
          {/* <Button size="small" color="primary">
          Attack 1
        </Button>
        <Button size="small" color="primary">
          Attack 2
        </Button> */}
          <Button id="lava-lance" onClick={this.addDamage.bind(this, 107)}>
            Lava Lance
          </Button>
          <Button id="shield-bash" onClick={this.addDamage.bind(this, 78)}>
            Shield Bash
          </Button>
          <Button id="execute" onClick={this.addDamage.bind(this, 999)}>
            Execute
          </Button>
          <Button id="restart-button" onClick={this.addDamage.bind(this, 0)}>
            Restart game
          </Button>
        </CardActions>
        {/* </CardActionArea> */}

        <h3 id="game-message"></h3>
      </Card>
    );
  }
}
