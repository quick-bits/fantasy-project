'use strict'

var darkarry = ['Baba Yaga', 'Death', 'Dracula', 'Joker'];
var historicalArray = ['Zues', 'Temple Guard', 'Medusa', 'Loki', 'RA-pic', 'Sleep Paralysis']
var novleArray = [];
var animeArray = [];


var darkObj = [];
var historicalObj = [];
var novelObj = [];
var animeObj = [];


var darkConstructor = function (name) {

    this.name = name;
    this.audio = `aud/darkfantasy/${name}.mp3`;
    this.img = `img/darkfantasy/${name}.png`;
    darkObj.push(this);
}

var historicalConstructor = function (name) {

    this.name = name;
    this.audio = `aud/historicalfantasy/${name}.mp3`;
    this.img = `img/historicalfantasy/${name}.png`;
    historicalObj.push(this);
}

var novelConstructor = function (name) {

    this.name = name;
    this.audio = `aud/novlsfantasy/${name}.mp3`;
    this.img = `img/novlsfantasy/${name}.png`;
    novelObj.push(this);
}

var anmieConstructor = function (name) {

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
    }
    else if (selectCategory === "Historical Fantasy") {

        HistoricalfantasyObject.renderHistorical();
    }
    else if (selectCategory === "Novels Fantasy") {

        novelFantasyObject.renderNovels();
    }
    else if (selectCategory === "Anime Fantasy") {

        anmieFantasyObject.renderAnime();
    }
}



var imageSection = document.getElementById('dark');
darkConstructor.prototype.renderDark = function () {
    for (var i = 0; i < 4; i++) {
        var image1 = document.createElement('img');
        image1.setAttribute('src', darkObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = darkObj[i].name;
    }

}



var imageSection = document.getElementById('history');
historicalConstructor.prototype.renderHistorical = function () {

    for (var i = 0; i < 4; i++) {
        var image1 = document.createElement('img');
        image1.setAttribute('src', historicalObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = historicalObj[i].name;
    }
    // var header = document.createElement('h1');
    // imageSection.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // imageSection.appendChild(par);
    // par.textContent = 'history'
}



novelConstructor.prototype.renderNovels = function () {
    var imageSection = document.getElementById('novel');
    for (var i = 0; i < 4; i++) {
        var image1 = document.createElement('img');
        image1.setAttribute('src', novelObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = novelObj[i].name;
    }
    // var header = document.createElement('h1');
    // imageSection.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // imageSection.appendChild(par);
    // par.textContent = 'novel'
}

var imageSection = document.getElementById('renderAnime');
anmieConstructor.prototype.renderAnime = function () {

    for (var i = 0; i < 4; i++) {
        var image1 = document.createElement('img');
        image1.setAttribute('src', animeObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = animeObj[i].name;
    // var header = document.createElement('h1');
    // imageSection.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // imageSection.appendChild(par);
    // par.textContent = 'renderAnimedsdgsd'
}
}