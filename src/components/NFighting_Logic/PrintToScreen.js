import React from "react";
/*import determineAttack from "./DetermineAttack";
import isGameOver from "./IsGameOver";
import endGame from "./EndGame_Logic";
import primaryAttackFunction from "./PrimaryAttack";
import restart from "./Restart";
import secondaryAttackFunction from "./SecondaryAttack";
import MediaCard from "../fighterCard";
import MediaCard2 from "../fighterCard2";*/
/* eslint-disable no-use-before-define */
import character from "../Character";
import opponent from "./Enemy";


export default printToScreen();
const printToScreen = () => {///// modify to set where Adam wants them
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = character.health;
    printToScreen();
};