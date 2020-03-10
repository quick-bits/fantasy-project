var newFav = [];
var newFav1 = [];
var newFav2 = [];
var newFav3 = [];
var newFav4 = [];
var darkarry = ['Baba Yaga', 'Death', 'Dracula', 'Joker', 'thanos aud'];
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
var darkObj = [];

function createDarkObject() {
    for (var i = 0; i < darkarry.length; i++) {
        DarkfantasyObject = new darkConstructor(darkarry[i]);
    }
}
createDarkObject();
console.log('thjsddddddddddd', darkObj);

function renderStorage() {
    var newContent = JSON.parse(localStorage.getItem('favStore'));
    newFav[0] = newContent;
    var newContent1 = JSON.parse(localStorage.getItem('favorite2'));
    newFav1[0] = newContent1;
    var newContent2 = JSON.parse(localStorage.getItem('favorite3'));
    newFav2[0] = newContent2;
    var newContent3 = JSON.parse(localStorage.getItem('favorite4'));
    newFav3[0] = newContent3;
    var newContent4 = JSON.parse(localStorage.getItem('favorite5'));
    newFav4[0] = newContent4;
}
renderStorage();

var favoriteCharacter = document.getElementById('yourFavotite');


if (newFav[0] == 1) {
    // document.getElementsByClassName('sp-container').innrHTML = '';
    var h2E1 = document.createElement('h2');
    favoriteCharacter.appendChild(h2E1);
    h2E1.textContent = darkObj[0].name;
    var newImg = document.getElementById('vava');
    newImg.setAttribute('src', darkObj[0].img);
    console.log(darkObj[0].img);
    var p1E1 = document.createElement('p');
    favoriteCharacter.appendChild(p1E1);
    p1E1.textContent = darkObj[0].descreption;
    var audE1 = document.createElement('audio');
    favoriteCharacter.appendChild(audE1);
    audE1.setAttribute('src', darkObj[0].audE1);
    audE1.controls = true;
    audE1.load();

}
if (newFav1[0] == 2) {
    //     // document.getElementsByClassName('sp-container').innrHTML = '';
    var h2E1 = document.createElement('h2');
    favoriteCharacter.appendChild(h2E1);
    h2E1.textContent = darkObj[1].name;
    var newImg = document.getElementById('vava1');
    newImg.setAttribute('src', darkObj[1].img);
    console.log(darkObj[1].img);
    var p1E1 = document.createElement('p');
    favoriteCharacter.appendChild(p1E1);
    p1E1.textContent = darkObj[1].descreption;
    var audE1 = document.createElement('audio');
    favoriteCharacter.appendChild(audE1);
    audE1.setAttribute('src', darkObj[1].audE1);
    audE1.controls = true;
    audE1.load();
}
if (newFav2[0] == 3) {
    //     // document.getElementsByClassName('sp-container').innrHTML = '';
    var h2E1 = document.createElement('h2');
    favoriteCharacter.appendChild(h2E1);
    h2E1.textContent = darkObj[2].name;
    var newImg = document.getElementById('vava2');
    newImg.setAttribute('src', darkObj[2].img);
    console.log(darkObj[2].img);
    var p1E1 = document.createElement('p');
    favoriteCharacter.appendChild(p1E1);
    p1E1.textContent = darkObj[2].descreption;
    var audE1 = document.createElement('audio');
    favoriteCharacter.appendChild(audE1);
    audE1.setAttribute('src', darkObj[2].audE1);
    audE1.controls = true;
    audE1.load();
}
if (newFav3[0] == 4) {
    //     // document.getElementsByClassName('sp-container').innrHTML = '';
    var h2E1 = document.createElement('h2');
    favoriteCharacter.appendChild(h2E1);
    h2E1.textContent = darkObj[3].name;
    var newImg = document.getElementById('vava3');
    newImg.setAttribute('src', darkObj[3].img);
    console.log(darkObj[3].img);
    var p1E1 = document.createElement('p');
    favoriteCharacter.appendChild(p1E1);
    p1E1.textContent = darkObj[3].descreption;
    var audE1 = document.createElement('audio');
    favoriteCharacter.appendChild(audE1);
    audE1.setAttribute('src', darkObj[3].audE1);
    audE1.controls = true;
    audE1.load();
}
if (newFav4[0] == 5) {
    //     // document.getElementsByClassName('sp-container').innrHTML = '';
    var h2E1 = document.createElement('h2');
    favoriteCharacter.appendChild(h2E1);
    h2E1.textContent = darkObj[4].name;
    var newImg = document.getElementById('vava4');
    newImg.setAttribute('src', darkObj[4].img);
    console.log(darkObj[4].img);
    var p1E1 = document.createElement('p');
    favoriteCharacter.appendChild(p1E1);
    p1E1.textContent = darkObj[4].descreption;
    var audE1 = document.createElement('audio');
    favoriteCharacter.appendChild(audE1);
    audE1.setAttribute('src', darkObj[4].audE1);
    audE1.controls = true;
    audE1.load();
}