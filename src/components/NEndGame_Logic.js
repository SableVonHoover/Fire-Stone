import React from "react";
import fightingLogic from "./NFighting_Logic";

export default endGame();
const endGame = (message) => {
    document.getElementById('attack-button-1').hidden = true;
    document.getElementById('attack-button-2').hidden = true;
    document.getElementById('restart-button').hidden = false;
};

export default restart();
const restart = () => {
    let primaryButton = document.getElementById('attack-button-1');
    let secondaryButton = document.getElementById('attack-button-2');
    player.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = '';
    primaryButton.disabled = false;
    primaryButton.hidden = false;
    secondaryButton.disabled = false;
    secondaryButton.hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
};