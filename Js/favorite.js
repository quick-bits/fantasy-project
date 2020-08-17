// when this code was created only i and god knew what was going on 
// now only god knows 

var newFav = [];
var newFav1 = [];
var newFav2 = [];
var newFav3 = [];
var newFav4 = [];

var darkarry = ['BabaYaga', 'Death', 'Dracula', 'Joker', 'Thanos'];
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
// console.log('thjsddddddddddd', darkObj);

function renderStorage() {
    var newContent = JSON.parse(localStorage.getItem('favStore'));
    newFav[0] = newContent;
    console.log(newFav[0]);
    var newContent1 = JSON.parse(localStorage.getItem('favorite2'));
    newFav1[0] = newContent1;
    console.log(newFav1[0]);
    var newContent2 = JSON.parse(localStorage.getItem('favorite3'));
    newFav2[0] = newContent2;
    console.log(newFav2[0]);
    var newContent3 = JSON.parse(localStorage.getItem('favorite4'));
    newFav3[0] = newContent3;
    console.log(newFav3[0]);
    var newContent4 = JSON.parse(localStorage.getItem('favorite5'));
    newFav4[0] = newContent4;
    console.log(newFav4[0]);
}
renderStorage();

var favoriteCharacter1 = document.getElementById('yourFavotite1');

function darkRender() {
    if (newFav[0] == 'BabaYaga') {
        // document.getElementsByClassName('sp-container').innrHTML = '';
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = darkObj[0].name;
        var newImg = document.getElementById('vava');
        newImg.setAttribute('src', darkObj[0].img);
        newImg.setAttribute('id', 'babaYaga');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = darkObj[0].descreption[0];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', darkObj[0].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav1[0] == 'Death') {
        //     // document.getElementsByClassName('sp-container').innrHTML = '';
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', darkObj[1].img);
        newImg.setAttribute('id', 'death');
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = darkObj[1].name;
        // console.log(darkObj[1].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = darkObj[1].descreption[1];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', darkObj[1].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav2[0] == 'Dracula') {
        //     // document.getElementsByClassName('sp-container').innrHTML = '';
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', darkObj[2].img);
        newImg.setAttribute('id', 'dracula');
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = darkObj[2].name;
        // console.log(darkObj[2].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = darkObj[2].descreption[2];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', darkObj[2].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav3[0] == 'Joker') {
        //     // document.getElementsByClassName('sp-container').innrHTML = '';
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', darkObj[3].img);
        newImg.setAttribute('id', 'joker');
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = darkObj[3].name;
        // console.log(darkObj[3].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = darkObj[3].descreption[3];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', darkObj[3].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav4[0] == 'Thanos') {
        //     // document.getElementsByClassName('sp-container').innrHTML = '';
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', darkObj[4].img);
        newImg.setAttribute('id', 'thanos')
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = darkObj[4].name;
        console.log(darkObj[4].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = darkObj[4].descreption[4];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', darkObj[4].audio);
        audE1.controls = true;
        audE1.load();
    }
}

darkRender();

//////////////////history
var newFav = [];
var newFav1 = [];
var newFav2 = [];
var newFav3 = [];
var newFav4 = [];
var newFav5 = [];
var newFav6 = [];
var historicalArray = ['Zues', 'TempleGuard', 'Medusa', 'Loki', 'RA', 'SleepParalysis']
var historicalConstructor = function(name, historicalDiscreption) {

    this.name = name;
    this.audio = `aud/historicalfantasy/${name}.mp3`;
    this.img = `img/historicalfantasy/${name}.png`;
    this.descreption = ['Zeus is the God of lighting, God of all Gods and ruler of Olympus. In Greek Mythology, Zeus is the one who defeated Cronus. He is the youngest brother of Hades and Poseidon, and married to Hera. Zeus is described as being cheeky, bossy and overly sensitive, which causes his temper to rise. He cares dearly about his brothers, and although he teases them a lot, he is also a source of reason. Zeus is a member of the 6 Traitors Dynasty.',
        'Anubis or Inpu, Anpu in Ancient Egyptian is the Greek name of the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head. Archeologists have identified Anubis\'s sacred animal as an Egyptian canid, the African golden wolf.', 'In Greek mythology, Medusa was a monster, a Gorgon, generally described as a winged human female with living venomous snakes in place of hair. Those who gazed upon her face would turn to stone. Most sources describe her as the daughter of Phorcys and Ceto, though the author Hyginus makes her the daughter of Gorgon and Ceto. According to Hesiod and Aeschylus, she lived and died on an island named Sarpedon, somewhere near Cisthene. The 2nd-century BCE novelist Dionysios Skytobrachion puts her somewhere in Libya, where Herodotus had said the Berbers originated her myth, as part of their religion.Medusa was beheaded by the hero Perseus, who thereafter used her head, which retained its ability to turn onlookers to stone, as a weapon until he gave it to the goddess Athena to place on her shield', 'In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.', 'Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind',
        'Sleep paralysis is a feeling of being unable to move, it is most likely to occur during adolescence, the episodes last from a few seconds to a few minutes. Stress, sleep deprivation, and panic disorder may trigger it, an inability to move or speak is an essential feature, and there may be hallucinations.'
    ];
    historicalObj.push(this);
}
historicalObj = [];

function createHistoricalObject() {
    for (var i = 0; i < historicalArray.length; i++) {
        HistoricalfantasyObject = new historicalConstructor(historicalArray[i]);
    }
}
createHistoricalObject();


function renderStorage7() {
    var newContent = JSON.parse(localStorage.getItem('favStoreHistory'));
    newFav = newContent;
    console.log('sdfs', newContent);
    var newContent1 = JSON.parse(localStorage.getItem('favStoreHistory1'));
    newFav1[0] = newContent1;

    var newContent2 = JSON.parse(localStorage.getItem('favStoreHistory2'));
    newFav2[0] = newContent2;

    var newContent3 = JSON.parse(localStorage.getItem('favStoreHistory3'));
    newFav3[0] = newContent3;

    var newContent4 = JSON.parse(localStorage.getItem('favStoreHistory4'));
    newFav4[0] = newContent4;

    var newContent5 = JSON.parse(localStorage.getItem('favStoreHistory5'));
    newFav5[0] = newContent5;

}
renderStorage7();


// ['Zues', 'TempleGuard', 'Medusa', 'Loki', 'RA', 'SleepParalysis']

function histoRender() {

    if (newFav == 'Zues') {


        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[0].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[0].img);
        newImg.setAttribute('id', 'Zues');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[0].descreption[0];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[0].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav1[0] == 'TempleGuard') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[1].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[1].img);
        newImg.setAttribute('id', 'TempleGuard');
        console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[1].descreption[1];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[1].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav2[0] == 'Medusa') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[2].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[2].img);
        newImg.setAttribute('id', 'Medusa');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[2].descreption[2];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[2].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav3[0] == 'Loki') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[3].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[3].img);
        newImg.setAttribute('id', 'Loki');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[3].descreption[3];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[3].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav4[0] == 'RA') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[4].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[4].img);
        newImg.setAttribute('id', 'RA');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[4].descreption[4];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[4].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav5[0] == 'SleepParalysis') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = historicalObj[5].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', historicalObj[5].img);
        newImg.setAttribute('id', 'SleepParalysis');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = historicalObj[5].descreption[5];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', historicalObj[5].audio);
        audE1.controls = true;
        audE1.load();
    }

}
histoRender();

//////////////////Anime
var newFav = [];
var newFav1 = [];
var newFav2 = [];
var newFav3 = [];
var newFav4 = [];

var animeArray = ['AllForOne', 'Naruto', 'Pikatchu', 'Saitama', "Kaneki"];
var anmieConstructor = function(name) {
    this.name = name;
    this.audio = `aud/animefsntsdy/${name}.mp3`;
    this.img = `img/animefantasy/${name}.png`;
    this.descreption = ["After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen.", "Naruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Serving as the eponymous protagonist of the series, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage..", "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series.", " Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur. They have long yellow ears that are tipped with black. A Pikachu's back has two brown stripes, and its large tail is notable for being shaped like a lightning bolt.", "Originally born as a human, his encounter with a female ghoul under the name of Kamishiro Rize forced him to undergo emergency surgery procedures after his assault by her. "];
    animeObj.push(this);
}
animeObj = [];
var anmieFantasyObject;

function createAnmieObject() {
    for (var i = 0; i < animeArray.length; i++) {
        anmieFantasyObject = new anmieConstructor(animeArray[i]);
    }
}
createAnmieObject();

function renderStorage3() {
    var newContent = JSON.parse(localStorage.getItem('favStoreanime'));
    newFav[0] = newContent;
    console.log(newFav[0]);
    var newContent1 = JSON.parse(localStorage.getItem('favorite2anime'));
    newFav1[0] = newContent1;
    console.log(newFav1[0]);
    var newContent2 = JSON.parse(localStorage.getItem('favorite3anime'));
    newFav2[0] = newContent2;
    console.log(newFav2[0]);
    var newContent3 = JSON.parse(localStorage.getItem('favorite4anime'));
    newFav3[0] = newContent3;
    console.log(newFav3[0]);
    var newContent4 = JSON.parse(localStorage.getItem('favorite4anime'));
    newFav4[0] = newContent4;


}
renderStorage3();



function animeRender() {

    if (newFav[0] == 'AllForOne') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = animeObj[0].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', animeObj[0].img);
        newImg.setAttribute('id', 'Zues');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = animeObj[0].descreption[0];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', animeObj[0].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav1[0] == 'Naruto') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = animeObj[1].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', animeObj[1].img);
        newImg.setAttribute('id', 'TempleGuard');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = animeObj[1].descreption[1];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', animeObj[1].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav2[0] == 'Pikatchu') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = animeObj[2].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', animeObj[2].img);
        newImg.setAttribute('id', 'Medusa');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = animeObj[2].descreption[3];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', animeObj[2].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav3[0] == 'Saitama') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = animeObj[3].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', animeObj[3].img);
        newImg.setAttribute('id', 'Loki');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = animeObj[3].descreption[2];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', animeObj[3].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav4[0] == 'Kaneki') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = animeObj[4].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', animeObj[4].img);
        newImg.setAttribute('id', 'Loki');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = animeObj[4].descreption[4];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', animeObj[4].audio);
        audE1.controls = true;
        audE1.load();
    }
}
animeRender();

//////////////////////////////novls
var newFav = [];
var newFav1 = [];
var newFav2 = [];
var newFav3 = [];
var newFav4 = [];
var newFav5 = [];
var newFav6 = [];
var newFav7 = [];
var newFav8 = [];

var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'PeterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];

var novelConstructor = function(name) {

    this.name = name;
    this.audio = `aud/novlsfantasy/${name}.mp3`;
    this.img = `img/novlsfantasy/${name}.png`;
    this.descreption = ['Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, several films (including Conan the Barbarian and Conan the Destroyer).', "Emma Woodhouse is the 21-year-old protagonist of Jane Austen's novel Emma. She is described in the novel's opening sentence as \"handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her.\" Jane Austen, while writing the novel, called Emma, \"a heroine whom no-one but myself will much like.\" Emma is an independent, wealthy woman who lives with her father in their home Hartfield in the English countryside near the village of Highbury.", "Harry James Potter is the titular protagonist of J. K. Rowling's Harry Potter series. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practice magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger.", "Jay Gatsby (originally named James \"Jimmy\" Gatz) is the title character of the 1925 F. Scott Fitzgerald novel The Great Gatsby. Gatsby is in fact a fictional character, a millionaire and the owner of a luxurious mansion where extravagant parties are often hosted, is described by the novel's narrator, Nick Carraway, as being \"the single most hopeful person I've ever met\". ", "Miss Havisham is a character in the Charles Dickens novel Great Expectations (1861). She is a wealthy spinster, once jilted at the altar, who insists on wearing her wedding dress for the rest of her life. She lives in a ruined mansion with her adopted daughter, Estella. ", 'Peter Pan is a fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland. ', "Roland Deschain of Gilead is a fictional character and the protagonist of Stephen King's The Dark Tower series. He is the son of Steven and Gabrielle Deschain and is descended from a long line of \"gunslingers\", peacekeepers and diplomats of Roland's society. Roland becomes a gunslinger at the unheard-of age of 14 after being manipulated into taking the \"trial of manhood\" by Marten Broadcloak, his father's adviser and an alias of Randall Flagg.", "Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.  Referring to himself as a 'consulting detective' in the stories, Holmes is known for his proficiency.", 'Victor Frankenstein is the main character in Mary Shelleys 1818 novel Frankenstein; or, The Modern Prometheus. He is a Swiss scientist (born in Naples, Italy) who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature, often referred to as Frankensteins monster, or often colloquially referred to as simply "Frankenstein".'];
    novelObj.push(this);
}
novelObj = [];

function createNovelObject() {
    for (var i = 0; i < novleArray.length; i++) {
        var novelFantasyObject = new novelConstructor(novleArray[i]);

    }
}
createNovelObject();



function renderStorage2() {
    var newContent = JSON.parse(localStorage.getItem('favStorenovl1'));
    newFav[0] = newContent;

    var newContent1 = JSON.parse(localStorage.getItem('favStorenovl2'));
    newFav1[0] = newContent1;

    var newContent2 = JSON.parse(localStorage.getItem('favStorenovl3'));
    newFav2[0] = newContent2;

    var newContent3 = JSON.parse(localStorage.getItem('favStorenovl4'));
    newFav3[0] = newContent3;

    var newContent4 = JSON.parse(localStorage.getItem('favStorenovl5'));
    newFav4[0] = newContent4;

    var newContent5 = JSON.parse(localStorage.getItem('favStorenovl6'));
    newFav5[0] = newContent5;

    var newContent6 = JSON.parse(localStorage.getItem('favStorenovl7'));
    newFav6[0] = newContent6;

    var newContent7 = JSON.parse(localStorage.getItem('favStorenovl8'));
    newFav7 = newContent7;

    var newContent8 = JSON.parse(localStorage.getItem('favStorenovl9'));
    newFav8 = newContent8;
}
renderStorage2();


function novelsRender() {

    if (newFav[0] == 'conan') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[0].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[0].img);
        newImg.setAttribute('id', 'conan');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[0].descreption[0];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[0].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav1[0] == 'emma') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[1].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[1].img);
        newImg.setAttribute('id', 'emma');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[1].descreption[1];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[1].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav2[0] == 'harryPotter') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[2].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[2].img);
        newImg.setAttribute('id', 'harryPotter');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[2].descreption[2];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[2].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav3[0] == 'jayGatsby') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[3].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[3].img);
        newImg.setAttribute('id', 'jayGatsby');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[3].descreption[3];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[3].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav4[0] == 'missHavisham') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[4].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[4].img);
        newImg.setAttribute('id', 'missHavisham');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[4].descreption[4];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[4].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav5[0] == 'PeterPan') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[5].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[5].img);
        newImg.setAttribute('id', 'SleepParalysis');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[5].descreption[5];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[5].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav6[0] == 'RolandDeschain') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[6].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[6].img);
        newImg.setAttribute('id', 'RolandDeschain');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[6].descreption[6];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[6].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav7 == 'sherlok') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[7].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[7].img);
        newImg.setAttribute('id', 'sherlok');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[7].descreption[7];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[7].audio);
        audE1.controls = true;
        audE1.load();
    }
    if (newFav8 == 'victorFrankenstien') {
        var h2E1 = document.createElement('h2');
        favoriteCharacter1.appendChild(h2E1);
        h2E1.textContent = novelObj[8].name;
        var newImg = document.createElement('img');
        favoriteCharacter1.appendChild(newImg);
        newImg.setAttribute('src', novelObj[8].img);
        newImg.setAttribute('id', 'victorFrankenstien');
        // console.log(darkObj[0].img);
        var p1E1 = document.createElement('p');
        favoriteCharacter1.appendChild(p1E1);
        p1E1.textContent = novelObj[8].descreption[8];
        var audE1 = document.createElement('audio');
        favoriteCharacter1.appendChild(audE1);
        audE1.setAttribute('src', novelObj[8].audio);
        audE1.controls = true;
        audE1.load();
    }
}
novelsRender();