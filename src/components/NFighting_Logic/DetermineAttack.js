import React from "react";
/*import isGameOver from "./IsGameOver";
import endGame from "./EndGame_Logic";
import primaryAttackFunction from "./PrimaryAttack";
import printToScreen from "./PrintToScreen";
import restart from "./Restart";
import secondaryAttackFunction from "./SecondaryAttack";
import MediaCard from "../fighterCard";
import MediaCard2 from "../fighterCard2";*/
/* eslint-disable no-use-before-define */
import character from "./Character";
import opponent from "./Enemy";

const determineAttack = (attack, defense, level, damage) => {
    return Math.floor(Math.random() * ((2 * level + 10) / 250) * (attack / defense) * damage + 2);
};
export default determineAttack();