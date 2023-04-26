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

dataIdle = ''

function createGameData() {
    if (getLocalStorage('dataIdle') === null) {
        setLocalStorage('dataIdle', {
            "playerData": {
                "playerName": randomName(6),
                "playerLevel": 1,
                "playerExp": 0,
                "lastConnection": Date.now(),
                "firstLogin": `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
                "playtime": 0,
                "lastClaim": null,
            },
            "chapterProgression": {
                "chapterLevelMax": 51,
                "chapterDisplay": 1,
            },
            "currency": {
                "beer": 0,
                "diamond": 0,
                "dollar": 0,
                "gold": 0,
            },
            "itemInventory": [
            ],
            "persoInventory": [
                [],[],[],[],
            ],
        })

        window.location.reload()
    }
    
    dataIdle = getLocalStorage('dataIdle')
    console.log(dataIdle)
    persoInventoryCheck()
}

function persoInventoryCheck() {
    let persoInventory = dataIdle.persoInventory
    const rarityList = ['mythic', 'legendary', 'epic', 'rare']

    persoInventory.forEach((arrayRarity, index) => {
        let rarity = rarityList[index]
        persoTableData[rarity].forEach((perso) => {

            let inInv = false
            
            for (let i = 0; i <= arrayRarity.length; i++) {

                if (arrayRarity[i]?.name === perso.name) {
                    inInv = true
                    break
                }
            }

            if (inInv === false) {
                let persoToAdd = {
                    "name": perso.name,
                    "owned": 0,
                    "level": 1,
                    "prestige": 0,
                    "exp": 0,
                    "stuff": [],
                    "spell": [],
                }
                persoInventory[index].push(persoToAdd)
            }

            while (persoInventory[index][persoInventory[index].length - 1].spell.length !== perso.spell.length) {
                persoInventory[index][persoInventory[index].length - 1].spell.push(0)
            }
        })
    })

    setLocalStorage('dataIdle', dataIdle)
    dataIdle = getLocalStorage('dataIdle')
    console.log(dataIdle)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function saveIdle() {
    let saveN = 0
    while (true) {
        await sleep(5000)
        //console.log(Date.now() - dataIdle.playerData.lastConnection)
        if (saveN !== 0) {
            dataIdle.playerData.playtime += Date.now() - dataIdle.playerData.lastConnection
        }
        dataIdle.playerData.lastConnection = Date.now()
        setLocalStorage('dataIdle', dataIdle)
        dataIdle = getLocalStorage('dataIdle')
        console.log('saved')
        console.log(dataIdle)
        saveN++
    }
}

// Game Calculation

function DPS() {
    let rarity = [persoTableData.rare, persoTableData.epic, persoTableData.legendary, persoTableData.mythic]
    rarity.forEach((rarity) => {
        for (let i = 0; i < rarity.length; i++) {
            let invoc = rarity[i]

            let hit = invoc.stats.ATK
            let hitCrit = hit * (invoc.stats.CRIT_DMG / 100)

            let dmg1000hit = (hit * (1000 - invoc.stats.CRIT * 10)) + (hitCrit * invoc.stats.CRIT * 10)
            let time1000hit = 1000 * invoc.stats.SPD

            let dps = Math.round((dmg1000hit / (time1000hit / 1000)) * 100) / 100

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

                            let dmgBase = effect.base

                            dmgHP = Math.round(ratioDMG.HP * baseStat.HP * 100) / 100
                            dmgATK = Math.round(ratioDMG.ATK * baseStat.ATK * 100) / 100
                            dmgDEF = Math.round(ratioDMG.DEF * baseStat.DEF * 100) / 100
                            dmgSPD = Math.round(ratioDMG.SPD * baseStat.SPD * 100) / 100
                            dmgCRIT = Math.round(ratioDMG.CRIT * baseStat.CRIT * 100) / 100
                            dmgCRIT_DMG = Math.round(ratioDMG.CRIT_DMG * baseStat.CRIT_DMG * 100) / 100
                            dmgMAGIC = Math.round(ratioDMG.MAGIC * baseStat.MAGIC * 100) / 100

                            let dmgPerHit = dmgBase + dmgHP + dmgATK + dmgDEF + dmgSPD + dmgCRIT + dmgCRIT_DMG + dmgMAGIC
                            let SpellDPS = Math.round((dmgPerHit / (effect.cooldown / 1000)) * 100) / 100

                            let cumulDPS = Math.round((SpellDPS + dps) * 100) / 100

                            console.log(`${spell.name} LVL ${effect.evolution} : SpellDPS: ${SpellDPS} | ${dmgPerHit} = ${dmgBase} + ${dmgHP} + ${dmgATK} + ${dmgDEF} + ${dmgSPD} + ${dmgCRIT} + ${dmgCRIT_DMG} + ${dmgMAGIC}`)
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

//DPS()

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
    let chapterMax = Math.ceil(dataIdle.chapterProgression.chapterLevelMax / 10 + 0.1)

    switch (orientation) {
        case 'left':
            if (dataIdle.chapterProgression.chapterDisplay > 1) {
                dataIdle.chapterProgression.chapterDisplay--
            }
            break
        case 'right':
            if (dataIdle.chapterProgression.chapterDisplay < chapterMax) {
                dataIdle.chapterProgression.chapterDisplay++
            }
            break
    }
    for (let i = 1; i <= 50; i++) {
        let guiGuildeQueteChapitre = document.querySelector(`.chapitre-${i}`)
        guiGuildeQueteChapitre.style.transform = `translateX(${(-dataIdle.chapterProgression.chapterDisplay + i) * 100}%)`
    }
    guiGuildeQueteChapitreLeft.setAttribute('clickable', 'true')
    guiGuildeQueteChapitreRight.setAttribute('clickable', 'true')
    if (dataIdle.chapterProgression.chapterDisplay == 1) {
        guiGuildeQueteChapitreLeft.setAttribute('clickable', 'false')
    }
    if (dataIdle.chapterProgression.chapterDisplay == chapterMax) {
        guiGuildeQueteChapitreRight.setAttribute('clickable', 'false')
    }
    guiGuildeQueteChapitreName.innerHTML = `Chapitre ${dataIdle.chapterProgression.chapterDisplay}`
}

function renderChapterLevelMax() {
    let chapterMax = Math.ceil(dataIdle.chapterProgression.chapterLevelMax / 10 + 0.1)

    for (let i = 1; i <= chapterMax * 10; i++) {
        let point = document.querySelector(`.point-${i}`)
        point.setAttribute('state', 'not-passed')

        let line = document.querySelectorAll(`.line-${i - 1}-${i}`)
        line[0].setAttribute('state', 'not-passed')
        if(i != 1) {
            if (i % 10 == 1) {
                line[1].setAttribute('state', 'not-passed')
            }
        }

        if (i == chapterMax * 10) {
            document.querySelector(`.line-${chapterMax * 10}-${chapterMax * 10 + 1}`).setAttribute('state', 'not-passed')
        }
    }
    
    for (let i = 1; i <= dataIdle.chapterProgression.chapterLevelMax; i++) {
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

    document.querySelector(`.point-${dataIdle.chapterProgression.chapterLevelMax + 1}`).setAttribute('state', 'to-pass')
    document.querySelectorAll(`.line-${dataIdle.chapterProgression.chapterLevelMax}-${dataIdle.chapterProgression.chapterLevelMax + 1}`)[0].setAttribute('state', 'to-pass')
    if (dataIdle.chapterProgression.chapterLevelMax != 1) {
        if (dataIdle.chapterProgression.chapterLevelMax % 10 == 0) {
            document.querySelectorAll(`.line-${dataIdle.chapterProgression.chapterLevelMax}-${dataIdle.chapterProgression.chapterLevelMax + 1}`)[1].setAttribute('state', 'to-pass')
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
    const sum = Object.values(lootChances).reduce((acc, chance) => acc + chance, 0)

    const randomNum = Math.random() * sum

    let cumulativeChance = 0
    for (const [lootType, chance] of Object.entries(lootChances)) {
        cumulativeChance += chance
        if (randomNum < cumulativeChance) {
            return lootType
        }
    }
}

function randomLootByRarity(rarity) {
    const lootList = persoTableData[rarity]

    if (!lootList || lootList.length === 0) {
        throw new Error(`Impossible de trouver des loots pour la rareté ${rarity}`)
    }

    const randomIndex = Math.floor(Math.random() * lootList.length)
    return lootList[randomIndex]
}

function calculLootProbability(value, rarity) {
    let proba = Math.round(value * rarity * 100) / 10000
    let writeProba = document.querySelector(`.gui__in-taverne-percent-loot`)
    writeProba.innerHTML = `${proba}%`
    return proba
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

    console.log(hero)
    addInvocToInventory(hero)
}

function addInvocToInventory(hero) {
    let rarityPosition = 0
    switch (hero.rarity) {
        case "rare":
            rarityPosition = 3
            break
        case "epic":
            rarityPosition = 2
            break
        case "legendary":
            rarityPosition = 1
            break
        default:
            rarityPosition = 0
            break
    }

    let heroName = hero.name

    dataIdle.persoInventory[rarityPosition].find((item) => item.name == heroName).owned += 1
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
    let writeProba = document.querySelector(`.gui__in-taverne-percent-loot`)
    writeProba.innerHTML = ''
    let proba = 100

    switch (number) {
        case 1:
            guiInTavernInvoc.setAttribute('type', 'single')
            let loot = randomLoot(rarityTable)
            let hero = randomLootByRarity(loot)

            calculLootProbability(proba, rarityTable[loot])

            renderInvoc(loot, hero)
            break
        case 7:
            guiInTavernInvoc.setAttribute('type', 'multi')
            for (let i = 1; i < 8; i++) {
                let loot = randomLoot(rarityTable)
                let hero = randomLootByRarity(loot)

                let newProba = calculLootProbability(proba, rarityTable[loot])
                proba = newProba

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

function taverneInvocCleanOpen() {
    taverneOver.addEventListener('click', () => {
        let guiInTavernInvoc = document.querySelector('.gui__in-taverne-invoc')
        guiInTavernInvoc.innerHTML = ''
        let writeProba = document.querySelector(`.gui__in-taverne-percent-loot`)
        writeProba.innerHTML = ''
    })
}

// -----------------------------------------------

// Menu Auberge

let guiInAubergeMenuPerso = document.querySelector('.gui__in-auberge-menu__perso')
let guiInAubergeMenuTeam = document.querySelector('.gui__in-auberge-menu__team')

let guiInAubergePerso = document.querySelector('.gui__in-auberge__perso')
let guiInAubergeTeam = document.querySelector('.gui__in-auberge__team')

let guiAubergeMenuBtnList = [guiInAubergeMenuPerso, guiInAubergeMenuTeam]
let guiAubergeContentList = [guiInAubergePerso, guiInAubergeTeam]

function renderAubergeMenu() {
    guiAubergeMenuBtnList.forEach((item, index) => {
        item.addEventListener('click', () => {
            guiAubergeMenuBtnList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            guiAubergeContentList.forEach((item) => {
                item.setAttribute('active', 'false')
            })
            item.setAttribute('active', 'true')
            guiAubergeContentList[index].setAttribute('active', 'true')
        })
    })
}

// -----------------------------------------------

// Menu Auberge - Perso

function updateRenderAubergePerso() {
    aubergeOver.addEventListener('click', () => {
        renderAubergePerso()
    })
}

function renderAubergePerso() {
    console.log('renderAubergePerso')
    guiInAubergePerso.innerHTML = ''

    rarityList = [persoTableData.mythic, persoTableData.legendary, persoTableData.epic, persoTableData.rare]

    dataIdle.persoInventory.forEach((rarity, index) => {
        let listRarityData = rarityList[index]

        rarity.forEach((hero) => {
            let heroData = listRarityData.find(data => data.name === hero.name)
            // console.log(hero)
            // console.log(heroData)

            if (hero.owned > 0) {
                let card = document.createElement('div')
                card.classList.add('perso-card')
                card.setAttribute('owned', 'true')
                card.setAttribute('who', heroData.url)
                card.innerHTML = `
                    <img src="./assets/img/hero-card/cadre_${heroData.type}.webp" alt="">
                    <img class="rarity" src="./assets/img/hero-card/gemme_${heroData.rarity}.webp" alt="">    
                    <p class="name">${heroData.name}</p>
                    <div class="bottom">
                        <div class="star">
                            ${heroEvolution(hero.evolution)}
                        </div>
                        <div class="info">
                            <div class="spell">
                                ${heroSpell(hero.spell)}
                            </div>
                            <div class="level">
                                <p>Niv ${hero.level}</p>
                            </div>
                        </div>
                    </div>
                    `
                guiInAubergePerso.appendChild(card)
            }
        })
    })

    dataIdle.persoInventory.forEach((rarity, index) => {
        let listRarityData = rarityList[index]

        rarity.forEach((hero) => {
            let heroData = listRarityData.find(data => data.name === hero.name)
            console.log(hero)
            // console.log(heroData)

            if (hero.owned == 0) {
                let card = document.createElement('div')
                card.classList.add('perso-card')
                card.setAttribute('owned', 'false')
                card.setAttribute('who', heroData.url)
                card.innerHTML = `
                    <img src="./assets/img/hero-card/cadre_${heroData.type}.webp" alt="">
                    <img class="rarity" src="./assets/img/hero-card/gemme_${heroData.rarity}.webp" alt="">    
                    <p class="name">${heroData.name}</p>
                    <div class="bottom">
                        <div class="star">
                            ${heroEvolution(hero.evolution)}
                        </div>
                        <div class="info">
                            <div class="spell">
                                ${heroSpell(hero.spell)}
                            </div>
                            <div class="level">
                                <p>Niv ${hero.level}</p>
                            </div>
                        </div>
                    </div>
                    `
                guiInAubergePerso.appendChild(card)
            }
        })
    })
}

function heroEvolution(number) {
    let star = ''
    for (let i = 0; i < number; i++) {
        star += '<img src="./assets/img/hero-card/star.webp" alt="">'
    }
    return star
}

function heroSpell(spellArrayLevel) {
    let spell = ''
    spellArrayLevel.forEach((level) => {
        spell += `<img src="./assets/img/hero-card/spell_lvl_${level}.webp" alt="">`
    })
    return spell
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
    taverneInvocCleanOpen()

renderAubergeMenu()
    updateRenderAubergePerso()


// -----------------------------------------------
