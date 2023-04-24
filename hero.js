const rarityTable = {
    "rare" : 68,
    "epic" : 24,
    "legendary" : 7,
    "mythic" : 1,
}

const persoTableData = {
    // HP 90 - 150  ATK 10 - 25  SPD 2 - 4  CRIT 1 - 2.5  CRIT_DMG 50  // Score 500 - 1500
    "rare": [
        {
            name: "Le tripoteur",
            type: "Sorcerer",
            url: "tripoteur",
            rarity: "rare",
            stats: { HP: 120, DEF: 0, ATK: 18, SPD: 3000, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 22 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.5 },
                                ],
                                cooldown: 9000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 4.5 },
                                ],
                                cooldown: 9000,
                            }
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 5.5 },
                                ],
                                cooldown: 8000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 6.5 },
                                ],
                                cooldown: 7000,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Petitekip",
            type: "Brawler",
            url: "petitekip",
            rarity: "rare",
            stats: { HP: 150, DEF: 0, ATK: 23, SPD: 2400, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 1 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 9000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 9000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 3, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 8000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 3.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 7000,
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
            stats: { HP: 122, DEF: 0, ATK: 16, SPD: 3900, CRIT: 1.6, CRIT_DMG: 50, MAGIC: 5 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.5 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 120, DEF: 0, ATK: 15, SPD: 3600, CRIT: 1.9, CRIT_DMG: 50, MAGIC: 12 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.7 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2.9 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.3 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 3.7 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 121, DEF: 0, ATK: 14, SPD: 3400, CRIT: 2.4, CRIT_DMG: 50, MAGIC: 7 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 121, DEF: 0, ATK: 12, SPD: 2900, CRIT: 1, CRIT_DMG: 50, MAGIC: 0 },
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
                                base: 30,
                                ratio: [
                                    { HP: 0.05, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0.07, DEF: 0, ATK: 1.2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0.1, DEF: 0, ATK: 1.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0.15, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0.2, DEF: 0, ATK: 2.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0.3, DEF: 0, ATK: 3, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 118, DEF: 0, ATK: 17, SPD: 4000, CRIT: 1, CRIT_DMG: 50, MAGIC: 19 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Armagedon",
                    description: "Klo Charr pète sur un briquet",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "DAMAGE",
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 45,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 90,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 105,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 140, DEF: 0, ATK: 19, SPD: 2800, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 0 },
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
                                base: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 10,
                                        tick: 1000,
                                        length: 3000,
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
                                base: 20,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 20,
                                        tick: 1000,
                                        length: 3200,
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
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 30,
                                        tick: 1000,
                                        length: 3400,
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
                                base: 40,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 40,
                                        tick: 1000,
                                        length: 3600,
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
                                base: 50,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 50,
                                        tick: 1000,
                                        length: 3800,
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
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DOT",
                                        base: 60,
                                        tick: 1000,
                                        length: 4000,
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
            stats: { HP: 130, DEF: 0, ATK: 25, SPD: 3100, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 3 },
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
                                base: 10,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 20,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 9000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 30,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2.3, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 9000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 40,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2.6, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 8000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 50,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2.9, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 8000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 60,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 3.2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 7000,
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
            url: "mads_chrees",
            rarity: "epic",
            stats: { HP: 238, DEF: 0, ATK: 42, SPD: 3000, CRIT: 5, CRIT_DMG: 50, MAGIC: 40 },
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
                                power: 0.1,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DEBUFF_SPEED",
                                power: 0.15,
                                length: 3500,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DEBUFF_SPEED",
                                power: 0.2,
                                length: 4000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DEBUFF_SPEED",
                                power: 0.25,
                                length: 4500,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DEBUFF_SPEED",
                                power: 0.3,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DEBUFF_SPEED",
                                power: 0.35,
                                length: 5500,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.25 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Filip",
            type: "Sorcerer",
            url: "filip",
            rarity: "epic",
            stats: { HP: 400, DEF: 0, ATK: 26, SPD: 3000, CRIT: 2.5, CRIT_DMG: 50, MAGIC: 25 },
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
                                base: 20,
                                tick: 1,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DOT",
                                base: 35,
                                tick: 900,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DOT",
                                base: 50,
                                tick: 800,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DOT",
                                base: 65,
                                tick: 700,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DOT",
                                base: 80,
                                tick: 600,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DOT",
                                base: 100,
                                tick: 500,
                                length: 5000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1.7, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 2 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0.08, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "MagicNilmar",
            type: "Fiend",
            url: "magic_nilmar",
            rarity: "epic",
            stats: { HP: 301, DEF: 0, ATK: 39, SPD: 2500, CRIT: 3, CRIT_DMG: 50, MAGIC: 10 },
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
                                base: 50,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 75,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 100,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 125,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 150,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 175,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 2, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Le Vivi",
            type: "Brawler",
            url: "vivi",
            rarity: "epic",
            stats: { HP: 170, DEF: 0, ATK: 45, SPD: 2000, CRIT: 5, CRIT_DMG: 50, MAGIC: 0 },
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
                                power: 0.1,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_EQUIP",
                                power: 0.2,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_EQUIP",
                                power: 0.3,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_EQUIP",
                                power: 0.4,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_EQUIP",
                                power: 0.5,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_EQUIP",
                                power: 0.75,
                                length: 5000,
                                ratio: [
                                    { HP: 0.06, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 284, DEF: 0, ATK: 44, SPD: 3700, CRIT: 4, CRIT_DMG: 50, MAGIC: 31 },
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
                                base: 100,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DAMAGE",
                                base: 120,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DAMAGE",
                                base: 140,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DAMAGE",
                                base: 160,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DAMAGE",
                                base: 180,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DAMAGE",
                                base: 250,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 1, CRIT: 0, CRIT_DMG: 0, MAGIC: 1.5 },
                                ],
                                cooldown: 10000,
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
            stats: { HP: 152, DEF: 0, ATK: 31, SPD: 4000, CRIT: 5, CRIT_DMG: 50, MAGIC: 1 },
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
                                length: 500,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "STUN",
                                length: 750,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "STUN",
                                length: 1000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "STUN",
                                length: 1250,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "STUN",
                                length: 1500,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "STUN",
                                length: 2000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0.05 },
                                ],
                                cooldown: 10000,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            name: "Fiddle Stock",
            type: "Undead",
            url: "fiddle_stock",
            rarity: "epic",
            stats: { HP: 365, DEF: 0, ATK: 35, SPD: 2500, CRIT: 5, CRIT_DMG: 50, MAGIC: 20 },
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
                                base: 5,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "DEBUFF_ATK",
                                base: 10,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "DEBUFF_ATK",
                                base: 15,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "DEBUFF_ATK",
                                base: 20,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "DEBUFF_ATK",
                                base: 25,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "DEBUFF_ATK",
                                base: 30,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 1, MAGIC: 0 },
                                ],
                                cooldown: 10000,
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
            url: "john_doe",
            rarity: "lendendary",
            stats: { HP: 595, DEF: 0, ATK: 51, SPD: 2200, CRIT: 8, CRIT_DMG: 50, MAGIC: 80 },
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
                                base: 111,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 10,
                                        length: 3000,
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
                                base: 222,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 20,
                                        length: 3000,
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
                                base: 333,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 30,
                                        length: 4000,
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
                                base: 444,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 40,
                                        length: 4000,
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
                                base: 555,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 50,
                                        length: 5000,
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
                                base: 666,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_ATK",
                                        power: 66,
                                        length: 6000,
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
            url: "many",
            rarity: "lendendary",
            stats: { HP: 750, DEF: 0, ATK: 49, SPD: 2400, CRIT: 5, CRIT_DMG: 50, MAGIC: 34 },
            spell: [
                {
                    type: "ACTIVE",
                    name: "Fontaine dans la bouche",
                    description: "Many Moutmout te remet du Mi Amor",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "SHIELD_WITH_EFFECT_ON_BREAK",
                                base: 300,
                                ratio: [
                                    { HP: 0.1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.2,
                                        length: 3000,
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
                                type: "SHIELD_WITH_EFFECT_ON_BREAK",
                                base: 450,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.3,
                                        length: 3000,
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
                                type: "SHIELD_WITH_EFFECT_ON_BREAK",
                                base: 600,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.4,
                                        length: 3000,
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
                                type: "SHIELD_WITH_EFFECT_ON_BREAK",
                                base: 750,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.5,
                                        length: 3000,
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
                                type: "SHIELD_WITH_EFFECT_ON_BREAK",
                                base: 1000,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.6,
                                        length: 3000,
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
                                type: "SHIELD",
                                base: 1250,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "DEBUFF_SPEED",
                                        power: 0.7,
                                        length: 3000,
                                        ratio: [
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
            stats: { HP: 407, DEF: 0, ATK: 85, SPD: 2300, CRIT: 5, CRIT_DMG: 50, MAGIC: 70 },
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
                                    { HP: 0, DEF: 0, ATK: 0.25, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.3, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.35, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.4, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.45, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "LIFESTEAL",
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.5, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
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
            stats: { HP: 666, DEF: 0, ATK: 59, SPD: 2100, CRIT: 7, CRIT_DMG: 50, MAGIC: 40 },
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
                                    { HP: 0.5, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
                                    { HP: 0.45, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
                                    { HP: 0.4, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
                                    { HP: 0.35, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
                                    { HP: 0.3, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
                                    { HP: 0.25, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                                effect: [
                                    {
                                        type: "BUFF_SPEED_EQUIP",
                                        power: 0.2,
                                        length: 3000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ]
                                    },
                                    {
                                        type: "BUFF_CRIT_EQUIP",
                                        power: 0.2,
                                        length: 3000,
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
            stats: { HP: 777, DEF: 0, ATK: 62, SPD: 2000, CRIT: 5, CRIT_DMG: 50, MAGIC: 20 },
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
                                base: 0.2,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.0005, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "REVIVE",
                                base: 0.22,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.0006, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "REVIVE",
                                base: 0.24,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.0007, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "REVIVE",
                                base: 0.26,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.0008, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "REVIVE",
                                base: 0.28,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.0009, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "REVIVE",
                                base: 0.3,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0.001, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
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
            stats: { HP: 911, DEF: 5, ATK: 95, SPD: 1350, CRIT: 8, CRIT_DMG: 50, MAGIC: 110 },
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
                                base: 100,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 0,
                                type: "BUFF_CRIT",
                                base: 0.05,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_ATK",
                                base: 110,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 1,
                                type: "BUFF_CRIT",
                                base: 0.06,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_ATK",
                                base: 120,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 2,
                                type: "BUFF_CRIT",
                                base: 0.07,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_ATK",
                                base: 130,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 3,
                                type: "BUFF_CRIT",
                                base: 0.08,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_ATK",
                                base: 140,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 4,
                                type: "BUFF_CRIT",
                                base: 0.09,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_ATK",
                                base: 150,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                                cooldown: 10000,
                            },
                            {
                                evolution: 5,
                                type: "BUFF_CRIT",
                                base: 0.1,
                                length: 3000,
                                ratio: [
                                    { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                    { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                ],
                                cooldown: 10000,
                            },
                        ],
                    ],
                },
                {
                    type: "PASSIVE",
                    name: "Echauffement",
                    description: "C'est la fin de la course, mais pas pour moi !",
                    effect: [
                        [
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
                                multiplier: 2,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_AFTER_TIME",
                                afterTime: 30000,
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
            stats: { HP: 900, DEF: 6, ATK: 90, SPD: 1500, CRIT: 20, CRIT_DMG: 50, MAGIC: 215 },
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
                                attackInterval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_STACK",
                                attackInterval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_STACK",
                                attackInterval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_STACK",
                                attackInterval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_STACK",
                                attackInterval: 3,
                                multiplier: 0.1,
                                cap: 1,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_STACK",
                                attackInterval: 3,
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
                                        base: 300,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 300,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        base: 400,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 400,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        base: 500,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 500,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        base: 600,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 600,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        base: 700,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 700,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
                                attackInterval: 10,
                                type: "ATTACK_INTERVAL_CHOOSE_RANDOM_IN_EFFECT",
                                effect: [
                                    {
                                        type: "DAMAGE",
                                        base: 800,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 1, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                        ],
                                    },
                                    {
                                        type: "HEAL",
                                        base: 800,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "STUN",
                                        length: 1000,
                                        ratio: [
                                            { HP: 0, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 1 },
                                        ],
                                    },
                                    {
                                        type: "BUFF_ATK_SOLO",
                                        base: 100,
                                        length: 3000,
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
            name: "Saka Vyand",
            type: "Fiend",
            url: "saka_vyand",
            rarity: "mythic",
            stats: { HP: 1000, DEF: 20, ATK: 85, SPD: 1500, CRIT: 8, CRIT_DMG: 50, MAGIC: 50 },
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
                                base: 1.5,
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                base: 1.75,
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                base: 2,
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                base: 2.25,
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                base: 2.5,
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_ATK_SOLO_PER_MISSING_HP",
                                base: 3,
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
                                base: 20,
                            },
                            {
                                evolution: 0,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 1,
                                type: "BUFF_DEF_@_+50%_HP",
                                base: 20,
                            },
                            {
                                evolution: 1,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 2,
                                type: "BUFF_DEF_@_+50%_HP",
                                base: 20,
                            },
                            {
                                evolution: 2,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 3,
                                type: "BUFF_DEF_@_+50%_HP",
                                base: 20,
                            },
                            {
                                evolution: 3,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 4,
                                type: "BUFF_DEF_@_+50%_HP",
                                base: 20,
                            },
                            {
                                evolution: 4,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
                                ratio: [
                                    { HP: 1, DEF: 0, ATK: 0, SPD: 0, CRIT: 0, CRIT_DMG: 0, MAGIC: 0 },
                                ],
                            },
                        ],[
                            {
                                evolution: 5,
                                type: "BUFF_DEF_@_+50%_HP",
                                base: 20,
                            },
                            {
                                evolution: 5,
                                type: "BUFF_SPEED_@_-50%_HP",
                                power: 0.1,
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