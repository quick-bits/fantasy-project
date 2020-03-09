'use strict'

var darkarry = ['Baba Yaga', 'Death', 'Dracula', 'Joker', 'thanos aud'];
var historicalArray = ['Zues', 'Temple Guard', 'Medusa', 'Loki', 'RA', 'Sleep Paralysis']
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'peterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
var animeArray = [];
var historicalDiscreption = ['Zeus is the God of lighting, God of all Gods and ruler of Olympus. In Greek Mythology, Zeus is the one who defeated Cronus. He is the youngest brother of Hades and Poseidon, and married to Hera. Zeus is described as being cheeky, bossy and overly sensitive, which causes his temper to rise. He cares dearly about his brothers, and although he teases them a lot, he is also a source of reason. Zeus is a member of the 6 Traitors Dynasty.',
    'Anubis or Inpu, Anpu in Ancient Egyptian is the Greek name of the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head. Archeologists have identified Anubis\'s sacred animal as an Egyptian canid, the African golden wolf.', 'In Greek mythology, Medusa was a monster, a Gorgon, generally described as a winged human female with living venomous snakes in place of hair. Those who gazed upon her face would turn to stone. Most sources describe her as the daughter of Phorcys and Ceto, though the author Hyginus makes her the daughter of Gorgon and Ceto. According to Hesiod and Aeschylus, she lived and died on an island named Sarpedon, somewhere near Cisthene. The 2nd-century BCE novelist Dionysios Skytobrachion puts her somewhere in Libya, where Herodotus had said the Berbers originated her myth, as part of their religion.Medusa was beheaded by the hero Perseus, who thereafter used her head, which retained its ability to turn onlookers to stone, as a weapon until he gave it to the goddess Athena to place on her shield'
    , 'In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.', 'Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind',
    'Sleep paralysis is a feeling of being unable to move, it is most likely to occur during adolescence, the episodes last from a few seconds to a few minutes. Stress, sleep deprivation, and panic disorder may trigger it, an inability to move or speak is an essential feature, and there may be hallucinations.',
    ''];


var darkObj = [];
var historicalObj = [];
var novelObj = [];
var animeObj = [];


var darkConstructor = function (name) {

    this.name = name;
    this.audio = `aud/darkfantasy/${name}.mp3`;
    this.img = `img/darkfantasy/${name}.png`;
    this.descreption = ['In March 1964, Hellboy first encountered Baba Yaga while investigating a string of children disappearing.The disappearances were Baba Yagas doing as she napped the children to satisfy  her cannibalistic hunger.When Baba Yaga was counting the fingersof the dead in a cemetery, she attempted to use a skull(that once belonged to a former devotee named Katayev)to lead her to the Sabbath.',
        ' He does ride a noble, living steed named Binky, after all.The way Death sees it, his job isn’t to kill, but to collect dead souls and wait for them to be reborn. Death is a fictional character in Terry Pratchett Discworld series and a parody of several other personifications of death.Like most Grim Reapers, he is a black-robed skeleton usually carrying a scythe. His jurisdiction is specifically the Discworld itself; he is only a part, or minion, of Azrael, the universal Death. He has been generally used by Pratchett to explore the problems of human existence, and has become more sympathetic throughout the series.',
        ' sinister figures who use their supernatural powers to hunt humans and drink their blood. Born in Transylvania as the second son of the nobleman Vlad II Dracul, he took the name Dracula, meaning “son of Dracul,” when he was initiated into a secret order of Christian knights known as the Order of the Dragon. Dracula is a member of an ancient family of warriors,some of whom fought against the Huns, the Turks',
        'The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skinruby-red lips permanently fixed in a demonic grin,and bright green hair. ', 'Thanos is a mutant member of the race of superhumans known as the Titanian Eternals.Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe To complete this goal, Thanos set about tracking down the Infinity Stones, as the combined efforts might wipe out half the universe.apper:            (the avengers end game 2019.)                                                                                      (the avengers infinity war 2018.)                                                                                  (the avengers age of ultron 2015..Guardians of the Galaxy 2014)'];
    darkObj.push(this);
}

var historicalConstructor = function (name, historicalDiscreption) {

    this.name = name;
    this.audio = `aud/historicalfantasy/${name}.mp3`;
    this.img = `img/historicalfantasy/${name}.png`;
    this.descreption = historicalDiscreption;
    historicalObj.push(this);
}

var novelConstructor = function (name) {

    this.name = name;
    this.audio = `aud/novlsfantasy/${name}.mp3`;
    this.img = `img/novlsfantasy/${name}.png`;
    novelObj.push(this);
    this.descreption = [];
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
        HistoricalfantasyObject = new historicalConstructor(historicalArray[i], historicalDiscreption[i]);
        console.log(HistoricalfantasyObject);
    }
}
createHistoricalObject();





var novelFantasyObject;
function createNovelObject() {
    for (var i = 0; i < novleArray.length; i++) {
        novelFantasyObject = new novelConstructor(novleArray[i]);

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


////////////////////////////////////RENDERING///////////////////////////////////////////
var imageSection = document.getElementById('dark');
darkConstructor.prototype.renderDark = function () {
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
        image1.setAttribute('id', 'hey')
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
historicalConstructor.prototype.renderHistorical = function () {
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

        var audio1 = document.createElement('audio');
        audio1.setAttribute('src', historicalObj[i].audio)
        imageSection.appendChild(audio1);
        audio1.controls = true;
        audio1.load();


        var namesCharacter = document.createElement('p');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = historicalObj[i].descreption;
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////
var imageSection = document.getElementById('novel');
novelConstructor.prototype.renderNovels = function () {

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
anmieConstructor.prototype.renderAnime = function () {
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



var newFav = [];
var sec = document.getElementById('fav15');
// var imagea = document.getElementById('favorite1');
sec.addEventListener('click', addFav);
function addFav(event){
    console.log('ghhhj');

  
        if(event.target.id === 'favorite1'){
            console.log(event.target.id);
            
         newFav.push( darkarry[0])  ;
         console.log(newFav)
        }
        event.preventDefault();
  
}
// function storeData() {

  


//         var imgArrayStringed = JSON.stringify(darkObj)

//         localStorage.setItem('clicks data', imgArrayStringed)
//     }
// }


// storeData()