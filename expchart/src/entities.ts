import { EnemyDefinition, ExpStarDefinition, LevelThreshold } from "./types";

export const bosses: EnemyDefinition[] = [
  { name: "Hammer Bro", exp: 3 },
  { name: "Croco (1)", exp: 16 },
  { name: "Mack", switch_name: "Claymorton", exp: 24 },
  { name: "Bodyguard", exp: 0 },
  { name: "Belome (1)", exp: 30 },
  { name: "Bowyer", exp: 60 },
  { name: "Croco (2)", exp: 30 },
  { name: "Punchinello", exp: 0 },
  { name: "Microbomb", exp: 0 },
  { name: "Mezzo Bomb", exp: 0 },
  { name: "Knife Guy", exp: 40, switch_exp: 50 },
  { name: "Grate Guy", exp: 50, switch_exp: 40 },
  { name: "Booster", exp: 60 },
  { name: "Snifit", switch_name: "Snifster", exp: 2 },
  { name: "Bundt", exp: 25, switch_exp: 75 },
  { name: "Raspberry", exp: 50, switch_exp: 0 },
  { name: "Tentacles (Left)", exp: 0 },
  { name: "Tentacles (Right)", exp: 0 },
  { name: "King Calamari", exp: 100 },
  { name: "Johnny", exp: 90 },
  { name: "Bandana Blue", exp: 20 },
  { name: "Johnny (Solo)", exp: 0 },
  { name: "Yaridovich", switch_name: "Speardovich", exp: 120 },
  { name: "Yaridovich (Mirage)", switch_name: "Speardovich (Mirage)", exp: 0 },
  { name: "Belome (2)", exp: 80, switch_exp: 84 },
  { name: "Mario Clone", exp: 10, switch_exp: 9 },
  { name: "Mallow Clone", exp: 60 },
  { name: "Geno Clone", exp: 40, switch_exp: 39 },
  { name: "Bowser Clone", exp: 100, switch_exp: 99 },
  { name: "Toadstool 2", switch_name: "Peach Clone", exp: 1 },
  { name: "Jagger", exp: 0 },
  { name: "Jinx (1)", exp: 0 },
  { name: "Jinx (2)", exp: 0 },
  { name: "Jinx (3)", exp: 0 },
  { name: "Culex", exp: 600, switch_exp: 732 },
  { name: "Fire Crystal", exp: 40, switch_exp: 0 },
  { name: "Water Crystal", exp: 30, switch_exp: 0 },
  { name: "Earth Crystal", exp: 50, switch_exp: 0 },
  { name: "Wind Crystal", exp: 10, switch_exp: 0 },
  { name: "Smilax", exp: 0 },
  { name: "Megasmilax", exp: 120 },
  { name: "Dodo (1)", exp: 70 },
  { name: "Shelly", exp: 0 },
  { name: "Birdo", exp: 60 },
  { name: "Eggbert", exp: 0 },
  { name: "Valentina", exp: 120 },
  { name: "Dodo (2)", exp: 40 },
  { name: "Czar Dragon", exp: 100 },
  { name: "Helio", exp: 0 },
  { name: "Zombone", exp: 50 },
  { name: "Axem Pink", exp: 10, switch_exp: 0 },
  { name: "Axem Black", exp: 40, switch_exp: 0 },
  { name: "Axem Red", exp: 40, switch_exp: 0 },
  { name: "Axem Yellow", exp: 40, switch_exp: 0 },
  { name: "Axem Green", exp: 20, switch_exp: 0 },
  { name: "Axem Rangers", switch_name: "The Blade", exp: 50 },
  { name: "Magikoopa", switch_name: "Wizakoopa", exp: 30 },
  { name: "Bahamutt", exp: 0 },
  { name: "Jinx Clone", exp: 0 },
  { name: "King Bomb", exp: 0 },
  { name: "Boomer", exp: 55, switch_exp: 57 },
  { name: "Exor", exp: 100 },
  { name: "Right Eye", exp: 30, switch_exp: 0 },
  { name: "Left Eye", exp: 30, switch_exp: 0 },
  { name: "Neosquid", switch_name: "Mouth", exp: 40 },
  { name: "Count Down", exp: 140 },
  { name: "Ding-A-Ling", switch_name: "Ring-A-Ding", exp: 30 },
  {
    name: "Machine Made (Yaridovich)",
    switch_name: "Machine Made (Speardovich)",
    exp: 180,
  },
  { name: "Machine Made (Drill Bit)", exp: 0 },
  { name: "Cloaker (1)", exp: 60, switch_exp: 0 },
  { name: "Domino (1)", exp: 60, switch_exp: 0 },
  { name: "Cloaker (2)", exp: 60, switch_exp: 0 },
  { name: "Earth Link", switch_name: "Bad Adder", exp: 200, switch_exp: 120 },
  { name: "Domino (2)", exp: 60, switch_exp: 0 },
  { name: "Mad Adder", exp: 200, switch_exp: 120 },
  { name: "Clerk", exp: 50 },
  { name: "Manager", exp: 60 },
  { name: "Director", exp: 70 },
  { name: "Factory Chief", exp: 80 },
  { name: "Gunyolk", exp: 100 },
  { name: "Smithy", exp: 0 },
  { name: "Smelter", exp: 0 },
  { name: "Shyper", exp: 0 },
  { name: "Smithy (Head)", exp: 0 },
  { name: "Smithy (Body)", exp: 0 },
  { name: "Smithy (Tank Head)", exp: 0 },
  { name: "Smithy (Magic Head)", exp: 0 },
  { name: "Smithy (Treasure Head)", exp: 0 },
  { name: "Smithy (Mask Head)", exp: 0 },
  { name: "Scratchy-Throat Belome", exp: 0, switch_exp: 84 },
  { name: "Strong Mario Clone", exp: 0, switch_exp: 9 },
  { name: "Strong Mallow Clone", exp: 0, switch_exp: 60 },
  { name: "Strong Geno Clone", exp: 0, switch_exp: 39 },
  { name: "Strong Bowser Clone", exp: 0, switch_exp: 99 },
  { name: "Strong Peach Clone", exp: 0 },
  { name: "Leveled-Up Punchinello", exp: 0 },
  { name: "Strong Bob-omb", exp: 0 },
  { name: "Engine 023 Booster", exp: 0, switch_exp: 60 },
  { name: "Strong Snifster", exp: 0, switch_exp: 2 },
  { name: "Exhausted Torte", exp: 0 },
  { name: "Extra-Fancy Bundt", exp: 0, switch_exp: 75 },
  { name: "Extra-Fancy Raspberry", exp: 0 },
  { name: "Mario-Style Jinx", exp: 0 },
  { name: "Duel-Ready Johnny", exp: 0, switch_exp: 90 },
  { name: "Culex 3D", exp: 0, switch_exp: 72 },
  { name: "Fire Crystal 3D", exp: 0 },
  { name: "Water Crystal 3D", exp: 0 },
  { name: "Earth Crystal 3D", exp: 0 },
  { name: "Wind Crystal 3D", exp: 0 },
];

export const monsters: EnemyDefinition[] = [
  { name: "Terrapin", exp: 0, switch_exp: 1 },
  { name: "Bowser", exp: 0 },
  { name: "Kinklink", switch_name: "Chaindelier", exp: 0 },
  { name: "Goomba", exp: 1 },
  { name: "Sky Troopa", switch_name: "Paratroopa", exp: 1 },
  { name: "Spikey", exp: 1 },
  { name: "K-9", exp: 2 },
  { name: "Frogog", exp: 3 },
  { name: "Shyster", switch_name: "Shymore", exp: 3 },
  { name: "Pandorite", switch_name: "Huhwhat", exp: 20 },
  { name: "Rat Funk", exp: 2 },
  { name: "Goby", switch_name: "Cheep Cheep", exp: 3 },
  { name: "The Big Boo", switch_name: "Boo", exp: 2 },
  { name: "Hobgoblin", exp: 4 },
  { name: "Shadow", exp: 3 },
  { name: "Starslap", exp: 2 },
  { name: "Snapdragon", exp: 4 },
  { name: "Arachne", exp: 6 },
  { name: "Shy Guy", exp: 2 },
  { name: "Crook", exp: 10 },
  { name: "Amanita", exp: 3 },
  { name: "Buzzer", exp: 4 },
  { name: "Octolot", exp: 6 },
  { name: "Wiggler", exp: 6 },
  { name: "Guerrilla", exp: 8 },
  { name: "Sparky", switch_name: "Lava Bubble", exp: 4 },
  { name: "Piranha Plant", exp: 5 },
  { name: "Shy Ranger", exp: 60 },
  { name: "Magmite", exp: 5 },
  { name: "Cluster", exp: 8 },
  { name: "Bob-omb", exp: 4 },
  { name: "Enigma", exp: 10 },
  { name: "Spikester", exp: 6 },
  { name: "Lakitu", exp: 10 },
  { name: "Carroboscis", exp: 10 },
  { name: "Artichoker", exp: 12 },
  { name: "Apprentice", exp: 1 },
  { name: "Spookum", switch_name: "Snifit", exp: 8 },
  { name: "Rob-omb", exp: 6 },
  { name: "Remo Con", switch_name: "Dollox", exp: 8 },
  { name: "Jester", exp: 10 },
  { name: "Fireball", switch_name: "Lava Blubble", exp: 8 },
  { name: "Blaster", exp: 12 },
  { name: "Orb User", exp: 5 },
  { name: "Chomp", switch_name: "Chain Chomp", exp: 10 },
  { name: "Torte", exp: 0 },
  { name: "Gecko", exp: 10 },
  { name: "Pulsar", exp: 15 },
  { name: "Mukumuku", switch_name: "Thropher", exp: 8 },
  { name: "Mastadoom", exp: 20 },
  { name: "Sackit", exp: 20 },
  { name: "Zeostar", exp: 10 },
  { name: "Mr. Kipper", exp: 8 },
  { name: "Bloober", switch_name: "Blooper", exp: 12 },
  { name: "Leuko", exp: 20 },
  { name: "Crusty", exp: 25 },
  { name: "Greaper", exp: 13 },
  { name: "Dry Bones", exp: 12 },
  { name: "Alley Rat", exp: 9 },
  { name: "Reacher", exp: 30 },
  { name: "Straw Head", exp: 17 },
  { name: "Gorgon", switch_name: "Enigmax", exp: 20 },
  { name: "Hidon", switch_name: "Whuhoh", exp: 50 },
  { name: "Goombette", switch_name: "Mini Goomba", exp: 0 },
  { name: "Bandana Red", exp: 18 },
  { name: "Chow", exp: 15 },
  { name: "Octovader", exp: 30 },
  { name: "Shogun", exp: 24 },
  { name: "Geckit", exp: 18 },
  { name: "Spinthra", exp: 30 },
  { name: "Stinger", exp: 13 },
  { name: "Fink Flower", exp: 20 },
  { name: "Kriffid", exp: 35 },
  { name: "Chewy", exp: 14 },
  { name: "Ribbite", exp: 22 },
  { name: "Shy Away", switch_name: "Beezo", exp: 1 },
  { name: "Formless", exp: 0 },
  { name: "Mokura", switch_name: "Gassox", exp: 90 },
  { name: "Chomp Chomp", exp: 12 },
  { name: "Box Boy", switch_name: "Pleaseno", exp: 100 },
  { name: "Fautso", switch_name: "Jinnie", exp: 0 },
  { name: "Birdy", exp: 16 },
  { name: "Heavy Troopa", switch_name: "Big Troopa", exp: 32 },
  { name: "Sling Shy", exp: 3 },
  { name: "Pinwheel", exp: 23 },
  { name: "Muckle", exp: 6 },
  { name: "Orbison", exp: 18 },
  { name: "Shaman", exp: 17 },
  { name: "Jawful", exp: 27 },
  { name: "Bluebird", exp: 14 },
  { name: "Magmus", exp: 18 },
  { name: "Oerlikon", switch_name: "Urspike", exp: 22 },
  { name: "Armored Ant", exp: 30 },
  { name: "Pyrosphere", switch_name: "Lava Babble", exp: 17 },
  { name: "Chained Kong", exp: 35 },
  { name: "Vomer", exp: 19 },
  { name: "Corkpedite", switch_name: "Stompillar", exp: 50 },
  { name: "Body", exp: 30 },
  { name: "Stumpet", exp: 70 },
  { name: "Terra Cotta", exp: 25 },
  { name: "Gu Goomba", switch_name: "Pro Goomba", exp: 15 },
  { name: "Star Cruster", exp: 36 },
  { name: "Malakoopa", exp: 23 },
  { name: "Tub-O-Troopa", switch_name: "Grand Troopa", exp: 40 },
  { name: "Forkies", switch_name: "Forkie", exp: 32 },
  { name: "Chester", switch_name: "Comeon", exp: 150 },
  { name: "Big Bertha", switch_name: "Big Blaster", exp: 35 },
  { name: "Glum Reaper", exp: 35 },
  { name: "Doppel", exp: 40 },
  { name: "Ameboid", exp: 10 },
  { name: "Machine Made (Axem Pink)", exp: 30 },
  { name: "Machine Made (Axem Red)", exp: 50 },
  { name: "Machine Made (Axem Green)", exp: 10 },
  { name: "Machine Made (Axem Black)", exp: 20 },
  { name: "Machine Made (Axem Yellow)", exp: 25 },
  { name: "Jabit", exp: 18 },
  { name: "Mad Mallet", exp: 20 },
  { name: "Pounder", exp: 24 },
  { name: "Poundette", exp: 28 },
  { name: "Springer", exp: 29 },
  { name: "Puppox", exp: 30 },
  {
    name: "Machine Made (Mack)",
    switch_name: "Machine Made (Claymorton)",
    exp: 120,
  },
  { name: "Machine Made (Bodyguard)", exp: 0 },
  { name: "Li'l Boo", switch_name: "High Boo", exp: 28 },
  { name: "Hippopo", exp: 80 },
  { name: "Machine Made (Bowyer)", exp: 150 },
  { name: "Ninja", exp: 32 },
];

export const stars: ExpStarDefinition[] = [
  { name: "Bandit's Way star", exp: 1 },
  { name: "Kero Sewers star", exp: 2 },
  { name: "Moleville Mines star", exp: 5 },
  { name: "Sea star", exp: 8 },
  { name: "Land's End (1) star", exp: 11 },
  { name: "Land's End (2) star", exp: 6 },
  { name: "Nimbus Castle star", exp: 5 },
  { name: "Barrel Volcano star", exp: 11 },
];

export const levelChart: LevelThreshold[] = [
  { level: 1, required: 0 },
  { level: 2, required: 16 },
  { level: 3, required: 48 },
  { level: 4, required: 84 },
  { level: 5, required: 130 },
  { level: 6, required: 200 },
  { level: 7, required: 290 },
  { level: 8, required: 402 },
  { level: 9, required: 538 },
  { level: 10, required: 700 },
  { level: 11, required: 890 },
  { level: 12, required: 1110 },
  { level: 13, required: 1360 },
  { level: 14, required: 1640 },
  { level: 15, required: 1950 },
  { level: 16, required: 2290 },
  { level: 17, required: 2660 },
  { level: 18, required: 3060 },
  { level: 19, required: 3490 },
  { level: 20, required: 3950 },
  { level: 21, required: 4440 },
  { level: 22, required: 4960 },
  { level: 23, required: 5510 },
  { level: 24, required: 6088 },
  { level: 25, required: 6692 },
  { level: 26, required: 7320 },
  { level: 27, required: 7968 },
  { level: 28, required: 8634 },
  { level: 29, required: 9315 },
  { level: 30, required: 9999 },
];

export const GetBossById = (id: number) => bosses[id];

export const GetMonsterById = (id: number) => monsters[id];

export const GetStarById = (id: number) => stars[id];

export const leveledUp = (initialExp: number, newExp: number) => {
  let firstLevel = 0;
  let nextLevel = 0;
  for (let i = 0; i < levelChart.length; i++) {
    if (initialExp >= levelChart[i].required) firstLevel = levelChart[i].level;
    if (newExp >= levelChart[i].required) nextLevel = levelChart[i].level;
  }
  return firstLevel === nextLevel;
};
export const getLevel = (exp: number) => {
  var level = 0;
  for (let i = 0; i < levelChart.length; i++) {
    if (exp >= levelChart[i].required) level = levelChart[i].level;
  }
  return level;
};
export const expRemaining = (exp: number) => {
  var remaining = 0;
  var currentLevel = 0;
  for (let i = 0; i < levelChart.length; i++) {
    if (exp >= levelChart[i].required) currentLevel = levelChart[i].level;
    else {
      if (levelChart[i].level === currentLevel + 1)
        remaining = levelChart[i].required - exp;
    }
  }
  return remaining;
};
export const getLevelupStar = (
  startEXP: number,
  base: number,
  hits: number
) => {
  var levelups = [];
  for (var i = 1; i <= hits; i++) {
    if (getLevel(startEXP + base * (i - 1)) < getLevel(startEXP + base * i)) {
      levelups.push(i);
    }
  }
  return levelups;
};
