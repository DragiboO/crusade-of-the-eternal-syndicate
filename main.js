// Function for local storage

function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

function getAllLocalData() {
    const localData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localData[key] = localStorage.getItem(key)
    }
    return localData;
}

// ------------------------------

// Set Local Data - First Time + Save Data

function randomName(length) {
    const vowels = "aeiouy";
    const consonants = "bcdfghjklmnpqrstvwxz";
    let name = "";
    let useConsonant = Math.random() < 0.5;
    
    for (let i = 0; i < length; i++) {
        if (useConsonant) {
            name += consonants[Math.floor(Math.random() * consonants.length)];
        } else {
            name += vowels[Math.floor(Math.random() * vowels.length)];
        }
        useConsonant = !useConsonant;
    }
    
    return name.charAt(0).toUpperCase() + name.slice(1);
}

//removeLocalStorage('dataIdle')

function createGameData() {
    if (getLocalStorage('dataIdle') === null) {
        setLocalStorage('dataIdle', {
            "playerName": randomName(6),
            "playerLevel": 1,
            "playerExp": 0,
            "inventory": [
            ],
            "chapter": 1,
            "chapterMax": 50,
            "chapterDisplay": 1,
            "chapterLevelMax": 22,
            "beer": 0,
            "diamond": 0,
            "dollar": 0,
            "gold": 0,
            "lastConnection": Date.now(),
        })
    }
}

let dataIdle = getLocalStorage('dataIdle')
console.log(dataIdle)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function saveIdle() {
    while (true) {
        await sleep(5000)
        dataIdle.lastConnection = Date.now()
        setLocalStorage('dataIdle', dataIdle)
        dataIdle = getLocalStorage('dataIdle')
        console.log('saved')
    }
}

// Game Data

let rarityTable = {
    "rare" : 68,
    "epic" : 24,
    "legendary" : 7,
    "mythic" : 1,
}

let persoTableData = {
    // HP 90 - 150  ATK 10 - 25  SPD 2 - 4  CRIT 1 - 2.5  CRIT_DMG 50  // Score 500 - 1500
    "rare": [
        {
            name: "Le tripoteur",
            type: "Sorcerer",
            url: " (3)",
            rarity: "rare",
            stats: { HP: 120, DEF: 0, ATK: 18, SPD: 3, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 22 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Colosse-copie colossale",
                    description: "Le tripoteur utilise ses mains pour t'enculer",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.5 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 4.5 },
                                ],
                            }
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 5.5 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 6.5 },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Petitekip",
            type: "Brawler",
            url: " (7)",
            rarity: "rare",
            stats: { HP: 150, DEF: 0, ATK: 23, SPD: 2.4, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 1 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Les bro Leurs",
                    description: "Petitekip te colmate",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 3, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                cooldown: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 3.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Fon Bou",
            type: "Fiend",
            url: "fon_bou",
            rarity: "rare",
            stats: { HP: 122, DEF: 0, ATK: 16, SPD: 3.9, CRIT: 1.6, CRIT_DMG: 50, MAGIC: 5 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Piklecu",
                    description: "Fon Bou te pique",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.5 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Toc Arr",
            type: "CosmicThreat",
            url: "toc_arr",
            rarity: "rare",
            stats: { HP: 120, DEF: 0, ATK: 15, SPD: 3.6, CRIT: 1.9, CRIT_DMG: 50, MAGIC: 12 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Petite comète",
                    description: "Toc Arr t'applatit",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.7 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.9 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.3 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.7 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Tad Merde",
            type: "Undead",
            url: "tad_merde",
            rarity: "rare",
            stats: { HP: 121, DEF: 0, ATK: 14, SPD: 3.4, CRIT: 2.4, CRIT_DMG: 50, MAGIC: 7 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Jeté de KK",
                    description: "Tad Merde te tue",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Pauv' Type",
            type: "Brawler",
            url: "pauv_type",
            rarity: "rare",
            stats: { HP: 121, DEF: 0, ATK: 12, SPD: 2.9, CRIT: 1, CRIT_DMG: 50, MAGIC: 0 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Surprise du chef",
                    description: "Pauv' Type te fait déguster sa bite",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Klo Charr",
            type: "Sorcerer",
            url: "klo_charr",
            rarity: "rare",
            stats: { HP: 118, DEF: 0, ATK: 17, SPD: 4, CRIT: 1, CRIT_DMG: 50, MAGIC: 19 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Armagedon",
                    description: "Klo Charr pète sur un briquet",
                    cooldown: 10,
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Raph G. J.",
            type: "Undead",
            url: "raph_g_j",
            rarity: "rare",
            stats: { HP: 140, DEF: 0, ATK: 19, SPD: 2.8, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 0 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Travaux",
                    description: "Raph G. J. te suce",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DOT",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Gro Baton",
            type: "Brawler",
            url: " (19)",
            rarity: "rare",
            stats: { HP: 130, DEF: 0, ATK: 25, SPD: 3.1, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 3 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Coup de bâton",
                    description: "Gro Baton te donne un gros coup de baton",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
    ],
    // HP 150 - 400  ATK 25 - 45  SPD 2 - 4  CRIT 2.5 - 5  CRIT_DMG 50 // Score 3000 - 6000
    "epic": [
        {
            name: "Mad Chrees",
            type: "Sorcerer",
            url: " (2)",
            rarity: "epic",
            stats: { HP: 238, DEF: 0, ATK: 42, SPD: 3, CRIT: 5, CRIT_DMG: 50, MAGIC: 40 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Tempête de St-Môret",
                    description: "Mad Chrees t'en met plein la vue",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DEBUFF_SPEED",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Filip",
            type: "Sorcerer",
            url: " (4)",
            rarity: "epic",
            stats: { HP: 400, DEF: 0, ATK: 26, SPD: 3, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 25 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Profanation",
                    description: "Filip réveil tes ancêtres",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DOT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "MagicNilmar",
            type: "Fiend",
            url: " (5)",
            rarity: "epic",
            stats: { HP: 301, DEF: 0, ATK: 39, SPD: 2.5, CRIT: 3, CRIT_DMG: 50, MAGIC: 10 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Insulte déchirante",
                    description: "MagicNilmar te dit que t'es nul",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Le Vivi",
            type: "Brawler",
            url: " (16)",
            rarity: "epic",
            stats: { HP: 170, DEF: 0, ATK: 45, SPD: 2, CRIT: 5, CRIT_DMG: 50, MAGIC: 0 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Prise du lapin",
                    description: "Le Vivi te fait un gros câlin",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_EQUIP",
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Ren'Par",
            type: "CosmicThreat",
            url: "ren_par",
            rarity: "epic",
            stats: { HP: 284, DEF: 0, ATK: 44, SPD: 3.7, CRIT: 4, CRIT_DMG: 50, MAGIC: 31 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Pompe",
                    description: "Ren'Par te fait des trous",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Atchoom",
            type: "Brawler",
            url: " (18)",
            rarity: "epic",
            stats: { HP: 152, DEF: 0, ATK: 31, SPD: 4, CRIT: 5, CRIT_DMG: 50, MAGIC: 1 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Beauté",
                    description: "Atchoom t'éblouis",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "STUN",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 50 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Fiddle Stock",
            type: "Undead",
            url: " (24)",
            rarity: "epic",
            stats: { HP: 365, DEF: 0, ATK: 35, SPD: 2.5, CRIT: 5, CRIT_DMG: 50, MAGIC: 20 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Cauchemar",
                    description: "Fiddle Stock te fait transpirer",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DEBUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
            ],
        },
    ],
    // HP 400 - 850  ATK 45 - 85  SPD 1.5 - 2.5  CRIT 5 - 8  CRIT_DMG 50 // Score 10000 - 25000
    "legendary": [
        {
            name: "John Doe",
            type: "CosmicThreat",
            url: " (1)",
            rarity: "lendendary",
            stats: { HP: 595, DEF: 0, ATK: 51, SPD: 2.2, CRIT: 8, CRIT_DMG: 50, MAGIC: 80 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Propulsion Astrale",
                    description: "John Doe te fait voyager",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Many Moutmout",
            type: "Brawler",
            url: " (6)",
            rarity: "lendendary",
            stats: { HP: 750, DEF: 0, ATK: 49, SPD: 2.4, CRIT: 5, CRIT_DMG: 50, MAGIC: 34 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Fontaine dans la bouche",
                    description: "Many Moutmout te remet du Mi Amor",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "SHIELD",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED", ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ]
                    ],
                },
            ],
        },
        {
            name: "Pouri D. Groll",
            type: "Undead",
            url: " (20)",
            rarity: "lendendary",
            stats: { HP: 407, DEF: 0, ATK: 85, SPD: 2.3, CRIT: 5, CRIT_DMG: 50, MAGIC: 70 },
            spell: [
                {
                    type: "PASSIVE",
                    name: "Pompeur",
                    description: "Pouri D. Groll est infatigable !",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Pakt",
            type: "Fiend",
            url: "pakt",
            rarity: "lendendary",
            stats: { HP: 666, DEF: 0, ATK: 59, SPD: 2.1, CRIT: 7, CRIT_DMG: 50, MAGIC: 40 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Un mal pour un bien",
                    description: "Pakt te met la misère",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "SACRIFICE",
                                ratio: [
                                    { HP: 50, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Vadh L.B.",
            type: "Fiend",
            url: "vadh_l_b",
            rarity: "lendendary",
            stats: { HP: 777, DEF: 0, ATK: 62, SPD: 2, CRIT: 5, CRIT_DMG: 50, MAGIC: 20 },
            spell: [
                {
                    type: "PASSIVE",
                    name: "Retour du champion",
                    description: "Vadh L.B. est trop dur",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "REVIVE",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
    ],
    // HP 850 - 1000  ATK 85 - 100  SPD 1 - 1.5  CRIT 8 - 10  CRIT_DMG 50 // Score 35000 - 70000
    "mythic": [
        {
            name: "Necroloss",
            type: "Undead",
            url: "necroloss",
            rarity: "mythic",
            stats: { HP: 911, DEF: 5, ATK: 95, SPD: 1.35, CRIT: 8, CRIT_DMG: 50, MAGIC: 110 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Seigneur de la crypte",
                    description: "Necroloss te dépose aux pompes funèbres",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 0,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 1,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 2,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 3,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 4,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_ATK",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10,
                            },
                            {
                                evolution: 5,
                                type: "BUFF_CRIT",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10,
                            },
                        ],
                    ],
                },
                {
                    type: "PASSIVE",
                    name: "",
                    description: "",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30,
                                multiplier: 2,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "QuadSpace",
            type: "CosmicThreat",
            url: "quad_space",
            rarity: "mythic",
            stats: { HP: 900, DEF: 6, ATK: 90, SPD: 1.5, CRIT: 20, CRIT_DMG: 50, MAGIC: 215 },
            spell: [
                {
                    type: "PASSIVE",
                    name: "Apéritif corsé",
                    description: "QuadSpace te fait une salade de phalanges",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_STACK",
                                interval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],
                    ],
                },
                {
                    type: "PASSIVE",
                    name: "Cocktail mystère",
                    description: "QuadSpace te fait déguster",
                    effect: [
                        [
                            {
                                evolution: 0,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        time: 1,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Saka Vyand",
            type: "Fiend",
            url: "saka_vyand",
            rarity: "mythic",
            stats: { HP: 1000, DEF: 20, ATK: 85, SPD: 1.5, CRIT: 8, CRIT_DMG: 50, MAGIC: 50 },
            spell: [
                {
                    type: "PASSIVE",
                    name: "Tailler dans la viande",
                    description: "Saka Vyand t'enlève le gras que t'as sur le cul",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                buff: 1.5,
                            },
                        ],
                    ],
                },
                {
                    type: "PASSIVE",
                    name: "Armoire à glace",
                    description: "Saka Vyand se met à la diète",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_DEF_@_+50%_HP",
                                value: 20,
                            },
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_@_-50%_HP",
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],
                    ],
                },
            ],
        },
    ],
}

function DPS() {
    let rarity = [persoTableData.rare, persoTableData.rare, persoTableData.legendary, persoTableData.mythic]
    rarity.forEach((rarity) => {
        for (let i = 0; i < rarity.length; i++) {
            let invoc = rarity[i]

            let hit = invoc.stats.ATK
            let hitCrit = hit * (invoc.stats.CRIT_DMG / 100)

            let dmg1000hit = (hit * (1000 - invoc.stats.CRIT * 10)) + (hitCrit * invoc.stats.CRIT * 10)
            let time1000hit = 1000 * invoc.stats.SPD

            let dps = Math.round((dmg1000hit / time1000hit) * 100) / 100

            let score = Math.round(dps * invoc.stats.HP)

            console.log(`${invoc.name} - HP: ${invoc.stats.HP}, AvgDPS: ${dps}/s , SCORE: ${score}`)
            
            let baseStat = invoc.stats
            console.log(baseStat)

            invoc.spell.forEach((spell) => {
                spell.effect.forEach((effectList) => {
                    effectList.forEach((effect) => {
                        if (effect.type === 'DAMAGE') {
                            let ratioDMG = effect.ratio[0]
                            //console.log(ratioDMG)

                            dmgATK = Math.round(ratioDMG.ATK * baseStat.ATK * 100) / 100
                            dmgDEF = Math.round(ratioDMG.DEF * baseStat.DEF * 100) / 100
                            dmgSPD = Math.round(ratioDMG.SPD * baseStat.SPD * 100) / 100
                            dmgCRIT = Math.round(ratioDMG.CRIT * baseStat.CRIT * 100) / 100
                            dmgCRIT_DMG = Math.round(ratioDMG.CRIT_DMG * baseStat.CRIT_DMG * 100) / 100
                            dmgMAGIC = Math.round(ratioDMG.MAGIC * baseStat.MAGIC * 100) / 100

                            let dmgPerHit = dmgATK + dmgDEF + dmgSPD + dmgCRIT + dmgCRIT_DMG + dmgMAGIC
                            let SpellDPS = Math.round(dmgPerHit / effect.cooldown * 1000) / 1000

                            let cumulDPS = Math.round((SpellDPS + dps) * 100) / 100

                            console.log(`${spell.name} LVL ${effect.evolution} : SpellDPS: ${SpellDPS} | ${dmgPerHit} = ${dmgATK} + ${dmgDEF} + ${dmgSPD} + ${dmgCRIT} + ${dmgCRIT_DMG} + ${dmgMAGIC}`)
                            //console.log(`SpellDPS: ${SpellDPS}, DPH: ${dmgPerHit}`)
                            console.log(`Culmul DPS: ${cumulDPS}, SCORE: ${Math.round(cumulDPS * invoc.stats.HP)}`)
                        }
                    })
                })
            })
            console.log('-----------------')
        }
    })
}

DPS()

// ------------------------------

// Set Element Size + Glow + Click

function setElementSize() {
    window.addEventListener('load', () => {
        sizeItem()
    })
    
    window.addEventListener('resize', () => {
        sizeItem()
    })
}

let mainScreen = document.querySelector('.main-screen')

let forge = document.querySelector('.main-screen__forge')
let auberge = document.querySelector('.main-screen__auberge')
let guilde = document.querySelector('.main-screen__guilde')
let taverne = document.querySelector('.main-screen__taverne')
let puit = document.querySelector('.main-screen__puit')
let inventaire = document.querySelector('.main-screen__inventaire')

let forgeOver = document.querySelector('.main-screen__forge-over')
let aubergeOver = document.querySelector('.main-screen__auberge-over')
let guildeOver = document.querySelector('.main-screen__guilde-over')
let taverneOver = document.querySelector('.main-screen__taverne-over')
let puitOver = document.querySelector('.main-screen__puit-over')
let inventaireOver = document.querySelector('.main-screen__inventaire-over')

let guiLayer0 = document.querySelector('.gui__layer-0')
let guiAuberge = document.querySelector('.gui__auberge')
let guiForge = document.querySelector('.gui__forge')
let guiGuilde = document.querySelector('.gui__guilde')
let guiTaverne = document.querySelector('.gui__taverne')
let guiPuit = document.querySelector('.gui__puit')
let guiInventaire = document.querySelector('.gui__inventaire')

let guiBorderTop = document.querySelector('.gui__border-top')
let guiBorderLeft = document.querySelector('.gui__border-left')
let guiBorderBottom = document.querySelector('.gui__border-bottom')
let guiBorderRight = document.querySelector('.gui__border-right')

let guiInAuberge = document.querySelector('.gui__in-auberge')
let guiInForge = document.querySelector('.gui__in-forge')
let guiInGuilde = document.querySelector('.gui__in-guilde')
let guiInTaverne = document.querySelector('.gui__in-taverne')
let guiInInventaire = document.querySelector('.gui__in-inventaire')


function sizeItem() {
    const baseWidth = 3840
    const baseHeight = 2160

    let actualWidth = window.innerWidth
    let actualHeight = window.innerHeight
    let scaleWidth = actualWidth / baseWidth
    let scaleHeight = actualHeight / baseHeight
    let scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight

    document.querySelector(':root').style = `font-size: ${scale * 32}px;`

    mainScreen.style = `width: ${baseWidth * scale}px; height: ${baseHeight * scale}px;`

    forge.style = `width: ${scale * 3322}px; height: ${scale * 2435}px; left: ${scale * -1189}px; top: ${scale * -223}px;`
    auberge.style = `width: ${scale * 1580}px; height: ${scale * 1721}px; left: ${scale * 958}px; top: ${scale * 44}px;`
    guilde.style = `width: ${scale * 1312}px; height: ${scale * 1509}px; left: ${scale * 2134}px; top: ${scale * 289}px;`
    taverne.style = `width: ${scale * 1743}px; height: ${scale * 2170}px; left: ${scale * 2705}px; top: ${scale * -236}px;`
    puit.style = `width: ${scale * 1776}px; height: ${scale * 707}px; left: ${scale * 1189}px; bottom: ${scale * -138}px;`
    inventaire.style = `width: ${scale * 740}px; height: ${scale * 741}px; right: ${scale * -38}px; bottom: ${scale * -38}px;`

    forgeOver.style = `width: ${scale * 1027}px; height: ${scale * 1580}px; left: ${scale * 0}px; top: ${scale * 407}px;`
    aubergeOver.style = `width: ${scale * 723}px; height: ${scale * 996}px; left: ${scale * 1420}px; top: ${scale * 625}px;`
    guildeOver.style = `width: ${scale * 601}px; height: ${scale * 783}px; left: ${scale * 2323}px; top: ${scale * 861}px;`
    taverneOver.style = `width: ${scale * 906}px; height: ${scale * 1266}px; left: ${scale * 2931}px; top: ${scale * 328}px;`
    puitOver.style = `width: ${scale * 1139}px; height: ${scale * 432}px; left: ${scale * 1505}px; bottom: ${scale * 0}px;`
    inventaireOver.style = `width: ${scale * 465}px; height: ${scale * 466}px; right: ${scale * 100}px; bottom: ${scale * 100}px;`

    guiAuberge.style = `width: ${scale * 3831}px; height: ${scale * 2106}px;`
    guiPuit.style = `width: ${scale * 2083}px; height: ${scale * 1146}px;`
}

let classList = [forge, auberge, guilde, taverne, inventaire, puit]
let classListOver = [forgeOver, aubergeOver, guildeOver, taverneOver, inventaireOver, puitOver]
let guiInList = [guiInForge, guiInAuberge, guiInGuilde, guiInTaverne, guiInInventaire]

function renderMainScreenOver() {
    classListOver.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            classList[index].setAttribute('glow', 'true')
        })
        item.addEventListener('mouseout', () => {
            classList[index].setAttribute('glow', 'false')
        })
    })
}

function addMainScreenMenuBtn() {
    classListOver.forEach((item, index) => {
        item.addEventListener('click', () => {
            guiLayer0.setAttribute('visible', 'true')
            if (index >= 0 && index <= 4) {
                guiAuberge.setAttribute('visible', 'true')

                guiBorderTop.setAttribute('visible', 'true')
                guiBorderTop.setAttribute('type', 'auberge')

                guiBorderLeft.setAttribute('visible', 'true')
                guiBorderLeft.setAttribute('type', 'auberge')

                guiBorderBottom.setAttribute('visible', 'true')
                guiBorderBottom.setAttribute('type', 'auberge')

                guiBorderRight.setAttribute('visible', 'true')
                guiBorderRight.setAttribute('type', 'auberge')

                guiInList.forEach((item) => {
                    item.setAttribute('active', 'false')
                })
                guiInList[index].setAttribute('active', 'true')
            } else if (index == 5) {
                guiPuit.setAttribute('visible', 'true')

                guiBorderTop.setAttribute('visible', 'true')
                guiBorderTop.setAttribute('type', 'puit')

                guiBorderLeft.setAttribute('visible', 'true')
                guiBorderLeft.setAttribute('type', 'puit')

                guiBorderBottom.setAttribute('visible', 'true')
                guiBorderBottom.setAttribute('type', 'puit')

                guiBorderRight.setAttribute('visible', 'true')
                guiBorderRight.setAttribute('type', 'puit')
            }
        })
    })
}

let classListBorder = [guiBorderTop, guiBorderLeft, guiBorderBottom, guiBorderRight, document.querySelector('body')]

function closeAllMainScreenMenu() {
    classListBorder.forEach((item) => {
        item.addEventListener('click', () => {
            guiLayer0.setAttribute('visible', 'false')
            guiAuberge.setAttribute('visible', 'false')
            guiPuit.setAttribute('visible', 'false')
    
            guiBorderTop.setAttribute('visible', 'false')
            guiBorderLeft.setAttribute('visible', 'false')
            guiBorderBottom.setAttribute('visible', 'false')
            guiBorderRight.setAttribute('visible', 'false')
        })
    })
    
    document.querySelector('.main-screen').addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

// -----------------------------------------------

// Menu Guilde

let guiGuildeMenuQuete = document.querySelector('.gui__in-guilde-menu__quete')
let guiGuildeMenuDonjon = document.querySelector('.gui__in-guilde-menu__donjon')
let guiGuildeMenuND = document.querySelector('.gui__in-guilde-menu__ND')
let guiGuildeMenuSucces = document.querySelector('.gui__in-guilde-menu__succes')

let guiGuildeQuete = document.querySelector('.gui__in-guilde__quete')
let guiGuildeDonjon = document.querySelector('.gui__in-guilde__donjon')
let guiGuildeND = document.querySelector('.gui__in-guilde__ND')
let guiGuildeSucces = document.querySelector('.gui__in-guilde__succes')

let guiGuildeMenuBtnList = [guiGuildeMenuQuete, guiGuildeMenuDonjon, guiGuildeMenuND, guiGuildeMenuSucces]
let guiGuildeContentList = [guiGuildeQuete, guiGuildeDonjon, guiGuildeND, guiGuildeSucces]

function renderGuildeMenu() {
    guiGuildeMenuBtnList.forEach((item, index) => {
        item.addEventListener('click', () => {
            guiGuildeMenuBtnList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            guiGuildeContentList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            item.setAttribute('active', 'true')
            guiGuildeContentList[index].setAttribute('active', 'true')
        })
    })
}

// -----------------------------------------------

// Menu Guilde - Quete

let guiGuildeQueteChapitreName = document.querySelector('.chapitre')

let guiGuildeQueteChapitreLeft = document.getElementsByClassName('arrow')[0]
let guiGuildeQueteChapitreRight = document.getElementsByClassName('arrow')[1]

let guiGuildeQueteChapitreContent = document.querySelector('.chapitre-content')

function renderChapter() {
    for (let i = 1; i <= 50; i++) {
        let chapter = document.createElement('div')
        chapter.classList.add(`chapitre-${i}`)
        chapter.style.transform = `translateX(${(i - 1) * 100}%)`
        let chapterContainer = document.createElement('div')
        chapterContainer.classList.add('chapitre-container')
        chapterContainer.classList.add(`chapter-template-${Math.round(Math.random() * 9) + 1}`)
    
        for (let j = 1; j <= 10; j++) {
            let point = document.createElement('button')
            point.innerText = j
            point.classList.add(`point-${j + (i - 1) * 10}`)
            chapterContainer.appendChild(point)
        }
    
        for (let j = 0; j <= 10; j++) {
            let line = document.createElement('div')
            line.classList.add(`line-${j + (i - 1) * 10}-${j + (i - 1) * 10 + 1}`)
            chapterContainer.appendChild(line)
        }
    
        chapter.appendChild(chapterContainer)
        guiGuildeQueteChapitreContent.appendChild(chapter)
    }
}

function swapChapter(orientation) {
    switch (orientation) {
        case 'left':
            if (dataIdle.chapterDisplay > 1) {
                dataIdle.chapterDisplay--
            }
            break
        case 'right':
            if (dataIdle.chapterDisplay < dataIdle.chapterMax) {
                dataIdle.chapterDisplay++
            }
            break
    }
    for (let i = 1; i <= 50; i++) {
        let guiGuildeQueteChapitre = document.querySelector(`.chapitre-${i}`)
        guiGuildeQueteChapitre.style.transform = `translateX(${(-dataIdle.chapterDisplay + i) * 100}%)`
    }
    guiGuildeQueteChapitreLeft.setAttribute('clickable', 'true')
    guiGuildeQueteChapitreRight.setAttribute('clickable', 'true')
    if (dataIdle.chapterDisplay == 1) {
        guiGuildeQueteChapitreLeft.setAttribute('clickable', 'false')
    }
    if (dataIdle.chapterDisplay == dataIdle.chapterMax) {
        guiGuildeQueteChapitreRight.setAttribute('clickable', 'false')
    }
    guiGuildeQueteChapitreName.innerHTML = `Chapitre ${dataIdle.chapterDisplay}`
}

function renderChapterLevelMax() {
    for (let i = 1; i <= dataIdle.chapterMax * 10; i++) {
        let point = document.querySelector(`.point-${i}`)
        point.setAttribute('state', 'not-passed')

        let line = document.querySelectorAll(`.line-${i - 1}-${i}`)
        line[0].setAttribute('state', 'not-passed')
        if(i != 1) {
            if (i % 10 == 1) {
                line[1].setAttribute('state', 'not-passed')
            }
        }

        if (i == dataIdle.chapterLevelMax * 10) {
            document.querySelector(`.line-${dataIdle.chapterMax * 10}-${dataIdle.chapterMax * 10 + 1}`).setAttribute('state', 'not-passed')
        }
    }
    
    for (let i = 1; i <= dataIdle.chapterLevelMax; i++) {
        let point = document.querySelector(`.point-${i}`)
        point.setAttribute('state', 'passed')

        let line = document.querySelectorAll(`.line-${i - 1}-${i}`)
        line[0].setAttribute('state', 'passed')
        if (i != 1) {
            if (i % 10 == 1) {
                line[1].setAttribute('state', 'passed')
            }
        }
    }

    document.querySelector(`.point-${dataIdle.chapterLevelMax + 1}`).setAttribute('state', 'to-pass')
    document.querySelectorAll(`.line-${dataIdle.chapterLevelMax}-${dataIdle.chapterLevelMax + 1}`)[0].setAttribute('state', 'to-pass')
    if (dataIdle.chapterLevelMax != 1) {
        if (dataIdle.chapterLevelMax % 10 == 1) {
            document.querySelectorAll(`.line-${dataIdle.chapterLevelMax}-${dataIdle.chapterLevelMax + 1}`)[1].setAttribute('state', 'to-pass')
        }
    }
}

// -----------------------------------------------

// Menu Taverne

let guiInTaverneMenuInvoc = document.querySelector('.gui__in-taverne-menu__invoc')
let guIInTaverneMenuShop = document.querySelector('.gui__in-taverne-menu__shop')

let guiInTaverneInvoc = document.querySelector('.gui__in-taverne__invoc')
let guiInTaverneShop = document.querySelector('.gui__in-taverne__shop')

let guiTaverneMenuBtnList = [guiInTaverneMenuInvoc, guIInTaverneMenuShop]
let guiTaverneContentList = [guiInTaverneInvoc, guiInTaverneShop]

function renderTaverneMenu() {
    guiTaverneMenuBtnList.forEach((item, index) => {
        item.addEventListener('click', () => {
            guiTaverneMenuBtnList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            guiTaverneContentList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            item.setAttribute('active', 'true')
            guiTaverneContentList[index].setAttribute('active', 'true')
        })
    })
}

// -----------------------------------------------

//Menu Taverne - Invoc

function randomLoot(lootChances) {
    // Calculer la somme des chances
    const sum = Object.values(lootChances).reduce((acc, chance) => acc + chance, 0);

    // Générer un nombre aléatoire entre 0 et la somme des chances
    const randomNum = Math.random() * sum;

    // Parcourir le tableau des chances et soustraire les valeurs jusqu'à ce que le nombre aléatoire soit inférieur à 0
    let cumulativeChance = 0;
    for (const [lootType, chance] of Object.entries(lootChances)) {
        cumulativeChance += chance;
        if (randomNum < cumulativeChance) {
            return lootType; // Renvoyer le type de loot correspondant
        }
    }
}

function randomLootByRarity(rarity) {
    const lootList = persoTableData[rarity]; // Récupérer le tableau de loot correspondant à la rareté

    if (!lootList || lootList.length === 0) {
        throw new Error(`Impossible de trouver des loots pour la rareté ${rarity}`);
    }

    const randomIndex = Math.floor(Math.random() * lootList.length); // Générer un index aléatoire dans le tableau de loot
    return lootList[randomIndex]; // Renvoyer l'élément correspondant à l'index généré
}

function renderInvoc(rarity, hero) {
    let guiInTavernInvoc = document.querySelector('.gui__in-taverne-invoc')

    let card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('rarity', rarity)
    card.style.backgroundImage = `url("./assets/img/hero/${hero.url}.webp")`
    card.innerHTML = `
        <div></div>
        <img src="./assets/img/hero/type/${hero.type}.webp" alt="">
        <p>${hero.name}</p>

        <div class="mouse-position-tracker">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`
    
    guiInTavernInvoc.appendChild(card)
}

async function invocation(number) {
    let guiInTavernBtnInvoc = document.querySelectorAll('.gui__in-taverne-btn-invoc button')

    for (let i = 0; i < guiInTavernBtnInvoc.length; i++) {
        if (guiInTavernBtnInvoc[i].getAttribute('clickable') == 'false') {
            return
        }

        guiInTavernBtnInvoc[i].setAttribute('clickable', 'false')
    }

    let allCard = document.querySelectorAll('.card')

    if (allCard.length != 0) {
        if (allCard.length == 1) {
            allCard[0].style = `transform: translate(50rem, 20rem) scale(0.2);`
            allCard[0].addEventListener('transitionend', () => {
                allCard[0].remove()
            })
            await sleep(75)
        } else {
            for (let i = allCard.length - 1; i >= 0; i--) {
                allCard[i].style = `transform: translate(${-(i * 15) + 95}rem, 20rem) scale(0.2);`
                allCard[i].addEventListener('transitionend', () => {
                    allCard[i].remove()
                })
                await sleep(75)
            }
        }
    }

    await sleep(525)

    let guiInTavernInvoc = document.querySelector('.gui__in-taverne-invoc')
    guiInTavernInvoc.innerHTML = ''

    switch (number) {
        case 1:
            guiInTavernInvoc.setAttribute('type', 'single')
            let loot = randomLoot(rarityTable)
            let hero = randomLootByRarity(loot)

            renderInvoc(loot, hero)
            break
        case 7:
            guiInTavernInvoc.setAttribute('type', 'multi')
            for (let i = 1; i < 8; i++) {
                let loot = randomLoot(rarityTable)
                let hero = randomLootByRarity(loot)

                renderInvoc(loot, hero)
                await sleep(1000 / (i + 1))
            }
            break
        default:
            break
    }

    await sleep(400)

    for (let i = 0; i < guiInTavernBtnInvoc.length; i++) {
        guiInTavernBtnInvoc[i].setAttribute('clickable', 'true')
    }
}

// -----------------------------------------------

// Game Initialization

createGameData()
saveIdle()

setElementSize()
renderMainScreenOver()
addMainScreenMenuBtn()
closeAllMainScreenMenu()

renderGuildeMenu()

    renderChapter()
    swapChapter()
    renderChapterLevelMax()

renderTaverneMenu()

// -----------------------------------------------
