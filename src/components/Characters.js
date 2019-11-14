import React from "react";

const characters = [
  {
    "id": 1,
    "image": "knight.gif",
    "name": "Blackest Knight",
    "level": 20,
    "hitpoints": 666,
    "attack": 40,
    "defense": 400,
    "speed": 28,
    "attacks": ["Lava Lance", "Shield Bash", "Execute"],
    "baseDamage": [75, 65, 1000000000000]
  },
  {
    "id": 2,
    "image": "wizard.gif",
    "name": "Grumpzo",
    "level": 20,
    "hitpoints": 250,
    "attack": 100,
    "defense": 25,
    "speed": 28,
    "attacks": ["Summon Meteors", "Mjolnir", "Ice Age"],
    "baseDamage" : [ 1, 120, 300]
  }
]

export default characters;