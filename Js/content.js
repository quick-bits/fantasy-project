'use strict'

var darkarry = ['Baba Yaga', 'Death', 'Dracula', 'Joker','thanos aud'];
var historicalArray = ['Zues', 'Temple Guard', 'Medusa', 'Lokipic', 'RA', 'Sleep Paralysis']
var novleArray = ['conan','emma','harryPotter','jayGatsby','missHavisham','peterPan','RolandDeschain','sherlok','victorFrankenstien'];
var animeArray = ['AllForOne','Naruto','Pikatchu','Saitama'];


var darkObj = [];
var historicalObj = [];
var novelObj = [];
var animeObj = [];


var darkConstructor = function (name) {

    this.name = name;
    this.audio = `aud/darkfantasy/${name}.mp3`;
    this.img = `img/darkfantasy/${name}.png`;
    this.descreption=['In March 1964, Hellboy first encountered Baba Yaga while investigating a string of children disappearing.The disappearances were Baba Yagas doing as she napped the children to satisfy  her cannibalistic hunger.When Baba Yaga was counting the fingersof the dead in a cemetery, she attempted to use a skull(that once belonged to a former devotee named Katayev)to lead her to the Sabbath.',
    ' He does ride a noble, living steed named Binky, after all.The way Death sees it, his job isn’t to kill, but to collect dead souls and wait for them to be reborn. Death is a fictional character in Terry Pratchett Discworld series and a parody of several other personifications of death.Like most Grim Reapers, he is a black-robed skeleton usually carrying a scythe. His jurisdiction is specifically the Discworld itself; he is only a part, or minion, of Azrael, the universal Death. He has been generally used by Pratchett to explore the problems of human existence, and has become more sympathetic throughout the series.',
    ' sinister figures who use their supernatural powers to hunt humans and drink their blood. Born in Transylvania as the second son of the nobleman Vlad II Dracul, he took the name Dracula, meaning “son of Dracul,” when he was initiated into a secret order of Christian knights known as the Order of the Dragon. Dracula is a member of an ancient family of warriors,some of whom fought against the Huns, the Turks',
    'The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skinruby-red lips permanently fixed in a demonic grin,and bright green hair. ','Thanos is a mutant member of the race of superhumans known as the Titanian Eternals.Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe To complete this goal, Thanos set about tracking down the Infinity Stones, as the combined efforts might wipe out half the universe.apper:            (the avengers end game 2019.)                                                                                      (the avengers infinity war 2018.)                                                                                  (the avengers age of ultron 2015..Guardians of the Galaxy 2014)'];
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
    this.descreption=[];
}

var anmieConstructor = function (name) {

    this.name = name;
    this.audio = `aud/animefsntsdy/${name}.mp3`;
    this.img = `img/animefantasy/${name}.png`;
    this.descreption=["After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen. As a result of having no eyes, he cannot see properly, but “sees” by using an infrared vision Quirk and by sensing the directions of vibrations in the area around him, similar to echolocation. He has various tubes sticking out of his neck and jaw, presumably to help him with his breathing. There are small holes in the palms of his hands.  All For One is a megalomaniac and an expedient psychopath. His brother gave insights on his personality to Izuku Midoriya in a dream. While All For One did use his powers to help people, it was done with ulterior motives and he asked for their aid in exchange for his help. Those who resisted his will were purged. Aware of the feud between civilians and Quirk users, All For One encouraged it to acquire more Quirks and supporters. All For One committed all these crimes, claiming he was bringing order to the world. All For One did care for his younger brother, albeit in a condescending manner. He has the belief that without power, one cannot assert his ideals, and he does not believe in justice or morality, claiming that they do not conform to reality.", "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, Literally meaning: Seventh Fire Shadow)." , "Naruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Serving as the eponymous protagonist of the series, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage. His carefree, optimistic and boisterous personality enables him to befriend other Konohagakure ninja, as well as ninja from other villages. Naruto appears in the series' films and in other media related to the franchise, including video games and original video animations (OVA), as well as the sequel Boruto: Naruto Next Generations, where his son, Boruto Uzumaki, is the protagonist." , "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle. Initially just a hero for fun, Saitama later registers to be a professional hero for the Hero Association[5] and defends his home in Z-City from monsters, villains, and other threats. Under the Hero Association, he is assigned the hero name Caped Baldy (ハゲマント, Hagemanto; Viz: Bald Cape) and is currently ranked 7 in the B-Class. One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero webcomic created by the artist One in early 2009. It has a manga adaptation illustrated by Yusuke Murata, as well as an anime adaptation. Following its publication, the webcomic quickly went viral, surpassing 7.9 million hits in June 2012. One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.", " Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur. They have long yellow ears that are tipped with black. A Pikachu's back has two brown stripes, and its large tail is notable for being shaped like a lightning bolt. On its cheeks are two circle-shaped red pouches used for storing electricity. They turn yellow and spark with electricity when its about to use an Electric attack, such as Thunderbolt. It has also been known to generate small surges of electrical energy in anger or for protection, like in the anime.  Pikachu (ピカチュウ Pikachuu) is an Electric-type Pokémon, which was introduced in Generation I. Pikachu is renowned for being the most well-known and recognizable Pokémon. Over the years, Pikachu has become so popular that it serves as the Pokémon franchise mascot. It is the Version Mascot and Starter Pokémon for the game Pokémon Yellow and its remake, Pokémon: Let's Go, Pikachu!. It is also well known from the anime, where Ash Ketchum, the protagonist, owns a Pikachu. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. When in Alola, it evolves into its Alolan Form. It can also Gigantamax into Gigantamax Pikachu."] ;
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
        imageSection.innerHTML="";
        DarkfantasyObject.renderDark();
        
        
    }
    else if (selectCategory === "Historical Fantasy") {
      
        imageSection.innerHTML="";

        HistoricalfantasyObject.renderHistorical();
    }
    else if (selectCategory === "Novels Fantasy") {
     
        imageSection.innerHTML="";

        novelFantasyObject.renderNovels();
    }
    else if (selectCategory === "Anime Fantasy") {
      
        imageSection.innerHTML="";

        anmieFantasyObject.renderAnime();
    }
}


///////////////////////////////////////////////////////////////////////////////
var imageSection = document.getElementById('dark');
console.log(imageSection)
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
    for (var i = 0; i < animeArray.length; i++) {
        
        var image1 = document.createElement('img');
        image1.setAttribute('src', animeObj[i].img)
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = animeObj[i].name;

        var audio1 = document.createElement('audio');
        audio1.setAttribute('src', animeObj[i].audio) ;
        imageSection.appendChild(audio1);
        audio1.controls = true;
        audio1.load();


        var namesCharacter = document.createElement('p');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = this.descreption[i];

    }
}
