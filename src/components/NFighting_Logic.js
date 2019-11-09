import React from "react";
const 
let character = {////Will add all the other stats
    health: 100,
    attackStat: 20,
    defense:10,
    //level: 45,
    baseDamage: [
        1, 1000000
    ]
};

let opponent = {
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
 const secondaryAttackFunction = () => {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    let gameMessage = document.getElementById('game-message');///for win/lose  /opponent about to attack messages/TBL/
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
    }, 1000);
 };
 
const determineAttack = (attack, defense, level, damage) => {
    return Math.floor(Math.random() * ((2 * level + 10) / 250) * (attack/defense) *  damage + 2);
 };
 const isGameOver = (health) => {///pretty straightforward
    return health/TBL/ <= 0;
 };
 const printToScreen = () => {///// modify to set where Adam wants them
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('character-health').innerText = character.health;
 }
 printToScreen();