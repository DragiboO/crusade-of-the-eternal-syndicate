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

let invocTableRate = {
    "rare" : 68,
    "epic" : 24,
    "legendary" : 7,
    "mythic" : 1,
}

let invocTableName = {
    "rare" : [
        {name: "Le tripoteur", type: "Sorcerer", url : " (3)"},
        {name: "Petitekip", type: "Brawler", url : " (7)"},
        {name: "Fon Bou", type: "Fiend", url : "fon_bou"},
        {name: "Toc Arr", type: "CosmicThreat", url : "toc_arr"},
        {name: "Tad Merde", type: "Undead", url : "tad_merde"},
        {name: "Pauv' Type", type: "Brawler", url : "pauv_type"},
        {name: "Klo Charr", type: "Sorcerer", url : "klo_charr"},
        {name: "Raph G. J.", type: "Undead", url : " (15)"},
        {name: "Gro Baton", type: "Brawler", url : " (19)"},
    ],
    "epic" : [  
        {name: "Mad Chrees", type: "Sorcerer", url : " (2)"},
        {name: "Filip", type: "Sorcerer", url : " (4)"},
        {name: "MagicNilmar", type: "Fiend", url : " (5)"},
        {name: "Le Vivi", type: "Brawler", url : " (16)"},
        {name: "Ren'Par", type: "CosmicThreat", url : " (17)"},
        {name: "Atchoom", type: "Brawler", url : " (18)"},
        {name: "Fiddle Stock", type: "Undead", url : " (24)"},
    ],
    "legendary" : [
        {name: "John Doe", type: "CosmicThreat", url : " (1)"},
        {name: "Many Moutmout", type: "Brawler", url : " (6)"},
        {name: "Pouri D. Groll", type: "Undead", url : " (20)"},
        {name: "Pakt", type: "Fiend", url : " (22)"},
        {name: "Vadh L.B.", type: "Fiend", url : "vadh_l_b"},
    ],
    "mythic" : [
        {name: "Necroloss", type: "Undead", url : "necroloss"},
        {name: "QuadSpace", type: "CosmicThreat", url : " (14)"},
        {name: "Saka Vyand", type: "Fiend", url : "saka_vyand"},
    ],
}

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
    const lootList = invocTableName[rarity]; // Récupérer le tableau de loot correspondant à la rareté

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
            let loot = randomLoot(invocTableRate)
            let hero = randomLootByRarity(loot)

            renderInvoc(loot, hero)
            break
        case 7:
            guiInTavernInvoc.setAttribute('type', 'multi')
            for (let i = 1; i < 8; i++) {
                let loot = randomLoot(invocTableRate)
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