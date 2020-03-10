'use strict'

var darkarry = ['Baba Yaga', 'Death', 'Dracula', 'Joker', 'thanos aud'];
var historicalArray = ['Zues', 'Temple Guard', 'Medusa', 'Lokipic', 'RA', 'Sleep Paralysis']
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'peterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
var animeArray = [];


var darkObj = [];
var historicalObj = [];
var novelObj = [];
var animeObj = [];


var darkConstructor = function(name) {

    this.name = name;
    this.audio = `aud/darkfantasy/${name}.mp3`;
    this.img = `img/darkfantasy/${name}.png`;
    this.descreption = ['In March 1964, Hellboy first encountered Baba Yaga while investigating a string of children disappearing.The disappearances were Baba Yagas doing as she napped the children to satisfy  her cannibalistic hunger.When Baba Yaga was counting the fingersof the dead in a cemetery, she attempted to use a skull(that once belonged to a former devotee named Katayev)to lead her to the Sabbath.',
        ' He does ride a noble, living steed named Binky, after all.The way Death sees it, his job isn’t to kill, but to collect dead souls and wait for them to be reborn. Death is a fictional character in Terry Pratchett Discworld series and a parody of several other personifications of death.Like most Grim Reapers, he is a black-robed skeleton usually carrying a scythe. His jurisdiction is specifically the Discworld itself; he is only a part, or minion, of Azrael, the universal Death. He has been generally used by Pratchett to explore the problems of human existence, and has become more sympathetic throughout the series.',
        ' sinister figures who use their supernatural powers to hunt humans and drink their blood. Born in Transylvania as the second son of the nobleman Vlad II Dracul, he took the name Dracula, meaning “son of Dracul,” when he was initiated into a secret order of Christian knights known as the Order of the Dragon. Dracula is a member of an ancient family of warriors,some of whom fought against the Huns, the Turks',
        'The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skinruby-red lips permanently fixed in a demonic grin,and bright green hair. ', 'Thanos is a mutant member of the race of superhumans known as the Titanian Eternals.Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe To complete this goal, Thanos set about tracking down the Infinity Stones, as the combined efforts might wipe out half the universe.apper:            (the avengers end game 2019.)                                                                                      (the avengers infinity war 2018.)                                                                                  (the avengers age of ultron 2015..Guardians of the Galaxy 2014)'
    ];
    darkObj.push(this);
}

var historicalConstructor = function(name) {

    this.name = name;
    this.audio = `aud/historicalfantasy/${name}.mp3`;
    this.img = `img/historicalfantasy/${name}.png`;
    historicalObj.push(this);
}

var novelConstructor = function(name) {

    this.name = name;
    this.audio = `aud/novlsfantasy/${name}.mp3`;
    this.img = `img/novlsfantasy/${name}.png`;
    novelObj.push(this);
    this.descreption = [];
}

var anmieConstructor = function(name) {

    this.name = name;
    this.audio = `aud/animefsntsdy/${name}.mp3`;
    this.img = `img/animefsntsdy/${name}.png`;
    animeObj.push(this);
}




var DarkfantasyObject;

function createDarkObject() {
    for (var i = 0; i < darkarry.length; i++) {
        DarkfantasyObject = new darkConstructor(darkarry[i]);
    }
}

createDarkObject();
console.log(DarkfantasyObject);


var HistoricalfantasyObject;

function createHistoricalObject() {
    for (var i = 0; i < historicalArray.length; i++) {
        HistoricalfantasyObject = new historicalConstructor(historicalArray[i]);
    }
}
createHistoricalObject();
console.log(HistoricalfantasyObject);




var novelFantasyObject;

function createNovelObject() {
    for (var i = 0; i < novleArray.length; i++) {
        novelFantasyObject = new novelConstructor(novleArray[i]);
        console.log(novelFantasyObject);
    }
}
createNovelObject();




var anmieFantasyObject;

function createAnmieObject() {
    for (var i = 0; i < animeArray.length; i++) {
        anmieFantasyObject = new anmieConstructor(animeArray[i]);

    }
}
createAnmieObject();
console.log(anmieFantasyObject);


var contentForm = document.getElementById('contnet-form');
contentForm.addEventListener('submit', handleSbmit);

function handleSbmit(event) {
    event.preventDefault();
    var selectCategory = event.target.category.value;

    var select = document.getElementById('category');

    if (selectCategory === "Dark Fantasy") {

        DarkfantasyObject.renderDark();
    } else if (selectCategory === "Historical Fantasy") {

        HistoricalfantasyObject.renderHistorical();
    } else if (selectCategory === "Novels Fantasy") {

        novelFantasyObject.renderNovels();
    } else if (selectCategory === "Anime Fantasy") {

        anmieFantasyObject.renderAnime();
    }
}


///////////////////////////////////////////////////////////////////////////////
var imageSection = document.getElementById('dark');
darkConstructor.prototype.renderDark = function() {
    var header = document.createElement('h1');
    imageSection.appendChild(header);
    header.textContent = "Dark fantasy section";
    for (var i = 0; i < 5; i++) {

        var image1 = document.createElement('img');
        image1.setAttribute('src', darkObj[i].img)
        imageSection.appendChild(image1);

        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = darkObj[i].name;

        var audio1 = document.createElement('audio');
        audio1.setAttribute('src', darkObj[i].audio)
        imageSection.appendChild(audio1);
        audio1.controls = true;
        audio1.load();


        var namesCharacter = document.createElement('p');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = this.descreption[i];


    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

var imageSection = document.getElementById('history');
historicalConstructor.prototype.renderHistorical = function() {
    var header = document.createElement('h1');
    imageSection.appendChild(header);
    header.textContent = "Historical fantasy section";

    for (var i = 0; i < 6; i++) {

        var image1 = document.createElement('img');
        image1.setAttribute('src', historicalObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = historicalObj[i].name;
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////
var imageSection = document.getElementById('novel');
novelConstructor.prototype.renderNovels = function() {

        var header = document.createElement('h1');
        imageSection.appendChild(header);
        header.textContent = "Novel fantasy section";
        for (var i = 0; i < 10; i++) {

            var image1 = document.createElement('img');
            image1.setAttribute('src', novelObj[i].img)
            imageSection.appendChild(image1);

            var namesCharacter = document.createElement('h2');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = novelObj[i].name;

            var audio1 = document.createElement('audio');
            audio1.setAttribute('src', novelObj[i].audio)
            imageSection.appendChild(audio1);
            audio1.controls = true;
            audio1.load();


            var namesCharacter = document.createElement('p');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = this.descreption[i];

        }

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
var imageSection = document.getElementById('renderAnime');
anmieConstructor.prototype.renderAnime = function() {
    var header = document.createElement('h1');
    imageSection.appendChild(header);
    header.textContent = "Anime fantasy section";
    for (var i = 0; i < 4; i++) {

        var image1 = document.createElement('img');
        image1.setAttribute('src', animeObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = animeObj[i].name;
    }
}

////////////////////////////////////////////////////////////////////////////



var contentButton = document.getElementById('drak');

contentButton.addEventListener('click', addFavorit);


// this.name = name;
// this.audio = `aud/darkfantasy/${name}.mp3`;
// this.img = `img/darkfantasy/${name}.png`;
// this.descreption
function addFavorit(event) {
    if (event.target.id === 'favorite1') {
        var newFav = [];
        newFav.push(1);
        var favDark = JSON.stringify(newFav);
        localStorage.setItem('favStore', favDark);
    }
    if (event.target.id === 'favorite2') {
        var newFav1 = [];
        newFav1.push(2);
        var favDark = JSON.stringify(newFav1);
        localStorage.setItem('favorite2', favDark);

    }
    if (event.target.id === 'favorite3') {
        var newFav2 = [];
        newFav2.push(3);
        var favDark = JSON.stringify(newFav2);
        localStorage.setItem('favorite3', favDark);
    }
    if (event.target.id === 'favorite4') {
        var newFav3 = [];
        newFav3.push(4);
        var favDark = JSON.stringify(newFav3);
        localStorage.setItem('favorite4', favDark);
    }
    if (event.target.id === 'favorite5') {
        var newFav4 = [];
        newFav4.push(5);
        var favDark = JSON.stringify(newFav4);
        localStorage.setItem('favorite5', favDark);
    }
}




// function setLocal() {
//     var favDark = JSON.stringify(newFav);
//     localStorage.setItem('favStore', favDark);
// }