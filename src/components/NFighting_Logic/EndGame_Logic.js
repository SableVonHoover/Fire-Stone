/*import React from "react";
import determineAttack from "./DetermineAttack";
import isGameOver from "./IsGameOver";
import primaryAttackFunction from "./PrimaryAttack";
import printToScreen from "./PrintToScreen";
import restart from "./Restart";
import secondaryAttackFunction from "./SecondaryAttack";
import MediaCard from "../fighterCard";
import MediaCard2 from "../fighterCard2";*/
/* eslint-disable no-use-before-define */


export default endGame();
const endGame = (message) => {
    document.getElementById('attack-button-1').hidden = true;
    document.getElementById('attack-button-2').hidden = true;
    document.getElementById('restart-button').hidden = false;
};