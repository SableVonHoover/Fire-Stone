import React from "react";
import determineAttack from "./DetermineAttack";
import isGameOver from "./IsGameOver";
import endGame from "./EndGame_Logic";
import printToScreen from "./PrintToScreen";
//import restart from "./Restart";
//import secondaryAttackFunction from "./SecondaryAttack";
//import MediaCard from "../fighterCard";
//import MediaCard2 from "../fighterCard2";
/* eslint-disable no-use-before-define */

export default primaryAttackFunction();
const primaryAttackFunction = () => {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    //let gameMessage = document.getElementById('game-message');
    ////////////////////////////////
    let primaryAttack = determineAttack(character.attack, opponent.defense, character.level, character.baseDamage[0]);//trade in atk stat and add in move.basedmg as param MORE PARAMS TO BE ADDED
    opponent.health -= primaryAttack;
    printToScreen();////Replace with component ref
    if (isGameOver(opponent.health)) {
        endGame("Player wins.")///Change to whatever fail screen state they want/TBL/
        return;
    };
    primaryButton.disabled = true;
    secondaryButton.disabled = true; /// so you can't attack until opponent attack has gone through
    gameMessage.innerText = "Opponent is about to wreck your shit."
    /////////////////////////////////
    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.attack, character.defense, opponent.level, opponent.baseDamage[0]);///same as playerAttack
        character.health -= opponentAttack;
        printToScreen();
        if (isGameOver(character.health)) {
            endGame("Opponent wins.");
            return;
        }
        primaryButton.disabled = false;
        secondaryButton.disabled = false;
    }, 300);//////// ASK ADAM HOW LONG ANIMATIONS WILL LAST FOR CHARACTERS WILL LAST
};