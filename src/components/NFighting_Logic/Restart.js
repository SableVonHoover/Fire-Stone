/* eslint-disable no-use-before-define */
import React from "react";
//import determineAttack from "./DetermineAttack";
//import isGameOver from "./IsGameOver";
//import endGame from "./EndGame_Logic";
//import primaryAttackFunction from "./PrimaryAttack";
import printToScreen from "./PrintToScreen";
//import secondaryAttackFunction from "./SecondaryAttack";
//import MediaCard from "../fighterCard";
//import MediaCard2 from "../fighterCard2";
import character from "./Character";
import opponent from "./Enemy";


export default restart();
const restart = () => {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    character.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = '';
    primaryButton.disabled = false;
    primaryButton.hidden = false;
    secondaryButton.disabled = false;
    secondaryButton.hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
};