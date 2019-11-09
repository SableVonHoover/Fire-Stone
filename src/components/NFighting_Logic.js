import React from "react";
import "../utils/API";
import "withRouter(Login)" from "SignIn.js";


const opponent = {
    name: "Jerry",
    level: 2,
    hitpoints: 100,
    attack: 30,
    defense: 30,
    //Ask Sable how to link base damage for the character
    attacks: [{
        attack1 = {
            name: "Whimpering Slash",
            damage: 25
        },
        attack2 = {
            name: "Crying Firebreath",
            damage: 12
        }
    }]
};


export default primaryAttackFunction() {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    let gameMessage = document.getElementById('game-message');
 ////////////////////////////////
    let primaryAttack = determineAttack(character.attack/TBLD/, opponent.defense/TBLD/, character.level/TBLD/, character.baseDamage[0]/TBLD/);//trade in atk stat and add in move.basedmg as param MORE PARAMS TO BE ADDED
    opponent.health/TBLD/ -= primaryAttack;
    printToScreen();////Replace with component ref
    if (isGameOver(opponent.health/TBLD/)) {
        endGame("Player wins.")///Change to whatever fail screen state they want/TBL/
        return;
    };
    primaryButton.disabled/TBL/ = true;
    secondaryButton.disabled/TBL/ = true; /// so you can't attack until opponent attack has gone through
    gameMessage.innerText/TBL/ = "Opponent is about to wreck your shit."
 /////////////////////////////////
    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.attack/TBLD/, character.defense/TBLD/, opponent.level/TBLD/, opponent.baseDamage[0]/TBLD/);///same as playerAttack
        character.health/TBLD/ -= opponentAttack;
        printToScreen();
        if (isGameOver(character.health/TBLD/)) {
            endGame("Opponent wins.");
            return;
        }
        primaryButton.disabled /TBL/= false;
        secondaryButton.disabled/TBL/ = false;
    }, 300);//////// ASK ADAM HOW LONG ANIMATIONS WILL LAST FOR CHARACTERS WILL LAST
 };
 const secondaryAttackFunction = () => {
    let primaryButton = document.getElementById('attack-button-1');/TBL/
    let secondaryButton = document.getElementById('attack-button-2');/TBL/
    let gameMessage = document.getElementById('game-message');///for win/lose  /opponent about to attack messages/TBL/
 ////////////////////////////////
    let playerAttack2 = determineAttack(character.attack/TBLD/, opponent.defense/TBLD/, character.level/TBLD/, character.baseDamage[1]/TBLD/);
    opponent.health/TBLD/ -= playerAttack2;
    printToScreen();
    if (isGameOver(opponent.health/TBLD/)) {
        endGame("Player wins.")///Change to whatever fail screen state they want
        return;
    };
    primaryButton/TBL/.disabled = true;
    secondaryButton/TBL/.disabled = true; /// so you can't attack until opponent attack has gone through
    gameMessage.innerText/TBL/ = "Opponent is about to wreck your shit."
 /////////////////////////////////
    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.attack/TBLD/, character.defense/TBLD/, opponent.level/TBLD/, opponent.baseDamage[0]/TBLD/);///same as playerAttack
        character.health/TBLD/ -= opponentAttack;
        printToScreen();/TBL/
        if (isGameOver(character.health/TBLD/)) {
            endGame("Opponent wins.");
            return;
        }
        primaryButton.disabled = false;
        secondaryButton.disabled = false;
    }, 1000);
 };
 
const determineAttack = (attack, defense, level, damage) => {
    return Math.floor(Math.random() * ((2 * level + 10) / 250) * (attack/defense) *  damage + 2);
 };
 const isGameOver = (health/TBL/) => {///pretty straightforward
    return health/TBL/ <= 0;
 };
 const printToScreen = () => {///// modify to set where Adam wants them
    document.getElementById('opponent-health').innerText/TBL/ = opponent.health/TBLD/;
    document.getElementById('character-health').innerText /TBL/= character.health/TBLD/;
 }
 printToScreen();