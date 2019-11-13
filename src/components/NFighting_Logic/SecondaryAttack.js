import React from "react";
import determineAttack from "./DetermineAttack";
import isGameOver from "./IsGameOver";
import endGame from "./EndGame_Logic";
//import primaryAttackFunction from "./PrimaryAttack";
import printToScreen from "./PrintToScreen";
//import restart from "./Restart";
//import MediaCard from "../fighterCard";
//import MediaCard2 from "../fighterCard2";
import character from "./Character";
import opponent from "./Enemy";

// eslint-disable-next-line no-use-before-define
export default secondaryAttackFunction();

const secondaryAttackFunction = () => {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    //let gameMessage = document.getElementById('game-message');///for win/lose  /opponent about to attack messages/TBL/
    ////////////////////////////////
    let playerAttack2 = determineAttack(character.attack, opponent.defense, character.level, character.baseDamage[1]);
    opponent.health -= playerAttack2;
    printToScreen();
    if (isGameOver(opponent.health)) {
        endGame("Player wins.")///Change to whatever fail screen state they want
        return;
    };
    primaryButton.disabled = true;
    secondaryButton.disabled = true; /// so you can't attack until opponent attack has gone through
    //gameMessage.innerText = "Opponent is about to wreck your shit."
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
    }, 1000);
};