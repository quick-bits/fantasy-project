'use strict'

var darkarry = ['BabaYaga', 'Death', 'Dracula', 'Joker', 'Thanos'];
var historicalArray = ['Zues', 'TempleGuard', 'Medusa', 'Loki', 'RA', 'SleepParalysis']
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'PeterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
var animeArray = ['AllForOne', 'Naruto', 'Pikatchu', 'Saitama', "Kaneki"];
var historicalDiscreption = ['Zeus is the God of lighting, God of all Gods and ruler of Olympus. In Greek Mythology, Zeus is the one who defeated Cronus. He is the youngest brother of Hades and Poseidon, and married to Hera. Zeus is described as being cheeky, bossy and overly sensitive, which causes his temper to rise. He cares dearly about his brothers, and although he teases them a lot, he is also a source of reason. Zeus is a member of the 6 Traitors Dynasty.',
    'Anubis or Inpu, Anpu in Ancient Egyptian is the Greek name of the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head. Archeologists have identified Anubis\'s sacred animal as an Egyptian canid, the African golden wolf.', 'In Greek mythology, Medusa was a monster, a Gorgon, generally described as a winged human female with living venomous snakes in place of hair. Those who gazed upon her face would turn to stone. Most sources describe her as the daughter of Phorcys and Ceto, though the author Hyginus makes her the daughter of Gorgon and Ceto. According to Hesiod and Aeschylus, she lived and died on an island named Sarpedon, somewhere near Cisthene. ', 'In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.', 'Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind',
    'Sleep paralysis is a feeling of being unable to move, it is most likely to occur during adolescence, the episodes last from a few seconds to a few minutes. Stress, sleep deprivation, and panic disorder may trigger it, an inability to move or speak is an essential feature, and there may be hallucinations.',
    ''
];

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

var historicalConstructor = function(name, historicalDiscreption) {

    this.name = name;
    this.audio = `aud/historicalfantasy/${name}.mp3`;
    this.img = `img/historicalfantasy/${name}.png`;
    this.descreption = historicalDiscreption;
    historicalObj.push(this);
}

var novelConstructor = function(name) {
    this.name = name;
    this.audio = `aud/novlsfantasy/${name}.mp3`;
    this.img = `img/novlsfantasy/${name}.png`;
    novelObj.push(this);
    this.descreption = ['Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, several films (including Conan the Barbarian and Conan the Destroyer), television programs (animated and live-action), video games, role-playing games, and other media. The character was created by writer Robert E. Howard in 1932 for a series of fantasy stories published in Weird Tales magazine. appearance: Conan has \'sullen\', \'smoldering\', and \'volcanic\'blue eyes with a black \'square-cut mane\'.', "Emma Woodhouse is the 21-year-old protagonist of Jane Austen's novel Emma. She is described in the novel's opening sentence as \"handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her.\" Jane Austen, while writing the novel, called Emma, \"a heroine whom no-one but myself will much like.\" Emma is an independent, wealthy woman who lives with her father in their home Hartfield in the English countryside near the village of Highbury. The novel concerns her attempts to be a matchmaker among her acquaintances and her own romantic misadventures. Emma professes that she does not ever wish to marry (unless she falls very much in love), as she has no financial need to, having a large inheritance and she doesn't wish to leave her father alone. After series of new engagements, visits at Highbury, and lots of miscommunication, Emma finds herself in love with her neighbour and sister's brother in law George Knightley. ", "Harry James Potter is the titular protagonist of J. K. Rowling's Harry Potter series. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practice magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The film and book series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort. Harry is considered a fictional icon and has been described by many critics, readers, and audiences as one of the greatest literary and film characters of all time. According to Rowling, Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong. Having .very limited access to truly caring adults. Rowling said, Harry is forced to make his own decisions from an early age on.", "Jay Gatsby (originally named James \"Jimmy\" Gatz) is the title character of the 1925 F. Scott Fitzgerald novel The Great Gatsby. Gatsby is in fact a fictional character, a millionaire and the owner of a luxurious mansion where extravagant parties are often hosted, is described by the novel's narrator, Nick Carraway, as being \"the single most hopeful person I've ever met\". Television :Toby Stephens played Gatsby in the 2000 television adaptation. In The Simpsons episode \"The Great Phatsby\", Mr. Burns assumes Jay Gatsby's role,[12] with the storyline spoofing the 2013 film adaptation.\\Brian Griffin is portrayed as Gatsby in the Family Guy episode \"High School English\" with Peter playing Tom, Lois playing Daisy, Stewie playing Nick, Meg playing Jordan Baker and Joe and Bonnie Swanson playing George and Myrtle Wilson Film Jay Gatsby has been portrayed by several actors in film adaptations of Fitzgerald's novel. Warner Baxter first played the role in the lost 1926 silent film. Gatsby was later portrayed by Alan Ladd in the 1949 film. ", "Miss Havisham is a character in the Charles Dickens novel Great Expectations (1861). She is a wealthy spinster, once jilted at the altar, who insists on wearing her wedding dress for the rest of her life. She lives in a ruined mansion with her adopted daughter, Estella. Dickens describes her as looking like \"the witch of the place\". Although she has often been portrayed in film versions as very elderly, Dickens's own notes indicate that she is only in her mid-thirties at the start of the novel. However, it is indicated in the novel that her long life away from the sunlight has aged her. in books: Charles Dickens novel Great Expectations (1861).in films adaptations: Florence Reed (1934) Martita Hunt (1946) Margaret Leighton (1974) Joan Hickson (1981) Jean Simmons (who had previously played Estella in 1946 opposite Hunt). ", 'Peter Pan is a fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland. Barrie never described Peter\'s appearance in detail, even in his novel, leaving it to the imagination of the reader and the interpretation of anyone adapting the character. In the play, Peter\'s outfit is made of autumn leaves and cobwebs.[3] His name and playing the flute or pipes suggest the mythological character Pan. Barrie mentions in Peter and Wendy that Peter Pan still had all his "first teeth".[4] He describes him as a beautiful boy with a beautiful smile, \'clad in skeleton leaves and the juices that flow from trees".[4] Peter is an exaggerated stereotype of a boastful and careless boy. He claims greatness, even when such claims are questionable (such as congratulating himself when Wendy re-attaches his shadow). In the play and book, Peter symbolises the selfishness of childhood, and is portrayed as being forgetful and self-centred. Peter\'s archetypal quality is his unending youth. In Peter and Wendy, it is explained that Peter must forget his own adventures and what he learns about the world in order to stay childlike. Peter\'s ability to fly is explained, but inconsistently. ', "Roland Deschain of Gilead is a fictional character and the protagonist of Stephen King's The Dark Tower series. He is the son of Steven and Gabrielle Deschain and is descended from a long line of \"gunslingers\", peacekeepers and diplomats of Roland's society. Roland becomes a gunslinger at the unheard-of age of 14 after being manipulated into taking the \"trial of manhood\" by Marten Broadcloak, his father's adviser and an alias of Randall Flagg. ", "Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.  Referring to himself as a 'consulting detective' in the stories, Holmes is known for his proficiency. details:   Creator: Arthur Conan Doyle   Books: Novels:   A Study in Scarlet (published November 1887 in Beeton's Christmas Annual)     The Sign of the Four (published February 1890 in Lippincott's Monthly Magazine)    The Hound of the Baskervilles (serialised 1901–1902 in The Strand)   The Valley of Fear (serialised 1914–1915 in The Strand)   Short story collections:  The Adventures of Sherlock Holmes (stories published 1891–1892 in The Strand)  The Memoirs of Sherlock Holmes (stories published 1892–1893 in The Strand)   The Return of Sherlock Holmes (stories published 1903–1904 in The Strand)  His Last Bow: Some Later Reminiscences of Sherlock Holmes (stories published 1908–1917)  The Case-Book of Sherlock Holmes (stories published 1921–1927) Movies and TV shows: Sherlock(4 sesones) , Sherlock Holmes, MORE  Siblings: Mycroft Holmes, Eurus Holmes, Enola Holmes Play: Sherlock Holmes", 'Victor Frankenstein is the main character in Mary Shelleys 1818 novel Frankenstein; or, The Modern Prometheus. He is a Swiss scientist (born in Naples, Italy) who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature, often referred to as Frankensteins monster, or often colloquially referred to as simply "Frankenstein".'];
}


var anmieConstructor = function(name) {

    this.name = name;
    this.audio = `aud/animefsntsdy/${name}.mp3`;
    this.img = `img/animefantasy/${name}.png`;
    this.descreption = ["After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen. As a result of having no eyes, he cannot see properly, but “sees” by using an infrared vision Quirk and by sensing the directions of vibrations in the area around him, similar to echolocation. He has various tubes sticking out of his neck and jaw, presumably to help him with his breathing. There are small holes in the palms of his hands.  All For One is a megalomaniac and an expedient psychopath. His brother gave insights on his personality to Izuku Midoriya in a dream. While All For One did use his powers to help people, it was done with ulterior motives and he asked for their aid in exchange for his help. Those who resisted his will were purged. Aware of the feud between civilians and Quirk users, All For One encouraged it to acquire more Quirks and supporters. All For One committed all these crimes, claiming he was bringing order to the world. All For One did care for his younger brother, albeit in a condescending manner. He has the belief that without power, one cannot assert his ideals, and he does not believe in justice or morality, claiming that they do not conform to reality.", "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, Literally meaning: Seventh Fire Shadow).", " Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur. They have long yellow ears that are tipped with black. A Pikachu's back has two brown stripes, and its large tail is notable for being shaped like a lightning bolt. On its cheeks are two circle-shaped red pouches used for storing electricity. They turn yellow and spark with electricity when its about to use an Electric attack, such as Thunderbolt. It has also been known to generate small surges of electrical energy in anger or for protection, like in the anime.  Pikachu (ピカチュウ Pikachuu) is an Electric-type Pokémon, which was introduced in Generation I. Pikachu is renowned for being the most well-known and recognizable Pokémon. Over the years, Pikachu has become so popular that it serves as the Pokémon franchise mascot. It is the Version Mascot and Starter Pokémon for the game Pokémon Yellow and its remake, Pokémon: Let's Go, Pikachu!. It is also well known from the anime, where Ash Ketchum, the protagonist, owns a Pikachu. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. When in Alola, it evolves into its Alolan Form. It can also Gigantamax into Gigantamax Pikachu.", "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle. Initially just a hero for fun, Saitama later registers to be a professional hero for the Hero Association[5] and defends his home in Z-City from monsters, villains, and other threats. Under the Hero Association, he is assigned the hero name Caped Baldy (ハゲマント, Hagemanto; Viz: Bald Cape) and is currently ranked 7 in the B-Class. One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero webcomic created by the artist One in early 2009. It has a manga adaptation illustrated by Yusuke Murata, as well as an anime adaptation. Following its publication, the webcomic quickly went viral, surpassing 7.9 million hits in June 2012. One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.", "Originally born as a human, his encounter with a female ghoul under the name of Kamishiro Rize forced him to undergo emergency surgery procedures after his assault by her. Cunning and manipulative, Rize uses her charms and Kaneki's attraction toward her as a means of getting her next \"meal.\" After the attack, Kaneki is rushed to the hospital in a half-dead state with Rize. A doctor of the name Kanou, who secretly experiments with ghouls, humans, and half-ghouls, transplants what Kaneki believes to be a kidney into his body as a means of saving his life in the dire situation. Soon he learns that he had part of Rize's kagune transplanted into him, becoming the first of many human-ghoul experiments Kanou will conduct."];
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
        imageSection1.innerHTML = "";
        DarkfantasyObject.renderDark();


    } else if (selectCategory === "Historical Fantasy") {

        imageSection1.innerHTML = "";

        HistoricalfantasyObject.renderHistorical();
    } else if (selectCategory === "Novels Fantasy") {

        imageSection1.innerHTML = "";

        novelFantasyObject.renderNovels();
    } else if (selectCategory === "Anime Fantasy") {

        imageSection1.innerHTML = "";

        anmieFantasyObject.renderAnime();
    }
}


///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
var imageSection1 = document.getElementById('drak');
darkConstructor.prototype.renderDark = function() {

    var header = document.createElement('h3');
    imageSection1.appendChild(header);
    header.textContent = "Dark fantasy section";
    for (var i = 0; i < 5; i++) {

        var imageSection = document.createElement('div');
        imageSection1.appendChild(imageSection);

        var image1 = document.createElement('img');
        image1.setAttribute('src', darkObj[i].img)

        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = darkObj[i].name;
        image1.setAttribute('id', `id${darkObj[i].name}`)
        var audio1 = document.createElement('audio');
        audio1.setAttribute('src', darkObj[i].audio)
        imageSection.appendChild(audio1);
        var btnFav = document.createElement('button');
        imageSection.appendChild(btnFav);
        btnFav.setAttribute('id', darkObj[i].name);
        btnFav.textContent = 'Add To Favorite';
        audio1.controls = true;
        audio1.load();


        var namesCharacter = document.createElement('p');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = this.descreption[i];


    }
}

///////////////////////////////////////////////////////////////////////////////////////////////


var imageSection1 = document.getElementById('history');
historicalConstructor.prototype.renderHistorical = function() {
    var header = document.createElement('h3');
    imageSection1.appendChild(header);
    header.textContent = "Historical fantasy section";

    for (var i = 0; i < 6; i++) {

        var imageSection = document.createElement('div');
        imageSection1.appendChild(imageSection);
        var image1 = document.createElement('img');
        image1.setAttribute('src', historicalObj[i].img);
        image1.setAttribute('id', `id${historicalObj[i].name}`);
        imageSection.appendChild(image1);
        var namesCharacter = document.createElement('h2');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = historicalObj[i].name;

        var audio1 = document.createElement('audio');
        audio1.setAttribute('src', historicalObj[i].audio)
        var btnFav = document.createElement('button');
        imageSection.appendChild(btnFav);
        btnFav.setAttribute('id', historicalObj[i].name);
        btnFav.textContent = 'Add To Favorite';
        imageSection.appendChild(audio1);
        audio1.controls = true;
        audio1.load();


        var namesCharacter = document.createElement('p');
        imageSection.appendChild(namesCharacter);
        namesCharacter.textContent = historicalObj[i].descreption;
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////
var imageSection1 = document.getElementById('novel');
novelConstructor.prototype.renderNovels = function() {

        var header = document.createElement('h3');
        imageSection1.appendChild(header);
        header.textContent = "Novel fantasy section";
        for (var i = 0; i < novleArray.length; i++) {

            var imageSection = document.createElement('div');
            imageSection1.appendChild(imageSection);
            var image1 = document.createElement('img');
            image1.setAttribute('src', novelObj[i].img)
            image1.setAttribute('id', `id${novelObj[i].name}`);
            imageSection.appendChild(image1);

            var namesCharacter = document.createElement('h2');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = novelObj[i].name;

            var audio1 = document.createElement('audio');
            audio1.setAttribute('src', novelObj[i].audio);
            var btnFav = document.createElement('button');
            imageSection.appendChild(btnFav);
            btnFav.setAttribute('id', novelObj[i].name);
            btnFav.textContent = 'Add To Favorite';
            imageSection.appendChild(audio1);
            audio1.controls = true;
            audio1.load();


            var namesCharacter = document.createElement('p');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = this.descreption[i];

        }

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
var imageSection1 = document.getElementById('renderAnime');
anmieConstructor.prototype.renderAnime = function() {
        var header = document.createElement('h3');
        imageSection1.appendChild(header);
        header.textContent = "Anime fantasy section";
        for (var i = 0; i < 5; i++) {

            var imageSection = document.createElement('div');
            imageSection1.appendChild(imageSection);
            var image1 = document.createElement('img');
            image1.setAttribute('src', animeObj[i].img)
            image1.setAttribute('id', `id${animeObj[i].name}`);
            imageSection.appendChild(image1);
            var namesCharacter = document.createElement('h2');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = animeObj[i].name;
            var btnFav = document.createElement('button');
            imageSection.appendChild(btnFav);
            btnFav.setAttribute('id', animeObj[i].name);
            btnFav.textContent = 'Add To Favorite';
            var audio1 = document.createElement('audio');
            audio1.setAttribute('src', animeObj[i].audio);
            imageSection.appendChild(audio1);
            audio1.controls = true;
            audio1.load();


            var namesCharacter = document.createElement('p');
            imageSection.appendChild(namesCharacter);
            namesCharacter.textContent = this.descreption[i];

        }
    }
    ////////////////////////////////////////////////////////////////////////////
var yourFav = 0;

var navigation = document.getElementById('favNum');
navigation.textContent = `Favorite (${yourFav})`;


imageSection1.addEventListener('click', addFavorit);

function addFavorit(event) {
    if (event.target.id === 'BabaYaga') {

        var newFav = [];
        newFav.push(darkarry[0]);
        var favDark = JSON.stringify(newFav);
        localStorage.setItem('favStore', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Death') {
        var newFav1 = [];
        newFav1.push(darkarry[1]);
        var favDark = JSON.stringify(newFav1);
        localStorage.setItem('favorite2', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Dracula') {
        var newFav2 = [];
        newFav2.push(darkarry[2]);
        var favDark = JSON.stringify(newFav2);
        localStorage.setItem('favorite3', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Joker') {
        var newFav3 = [];
        newFav3.push(darkarry[3]);
        var favDark = JSON.stringify(newFav3);
        localStorage.setItem('favorite4', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Thanos') {
        var newFav4 = [];
        newFav4.push(darkarry[4]);
        var favDark = JSON.stringify(newFav4);
        localStorage.setItem('favorite5', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
}

////////////history//////////////////



imageSection1.addEventListener('click', FavoritHistory);

function FavoritHistory(event) {
    if (event.target.id === 'Zues') {
        var newFav = [];
        newFav.push(historicalArray[0]);
        var favDark = JSON.stringify(newFav);
        localStorage.setItem('favStoreHistory', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'TempleGuard') {
        var newFav1 = [];
        newFav1.push(historicalArray[1]);
        var favDark = JSON.stringify(newFav1);
        localStorage.setItem('favStoreHistory1', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;

    }
    if (event.target.id === 'Medusa') {
        var newFav2 = [];
        newFav2.push(historicalArray[2]);
        var favDark = JSON.stringify(newFav2);
        localStorage.setItem('favStoreHistory2', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Loki') {
        var newFav3 = [];
        newFav3.push(historicalArray[3]);
        var favDark = JSON.stringify(newFav3);
        localStorage.setItem('favStoreHistory3', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'RA') {
        var newFav4 = [];
        newFav4.push(historicalArray[4]);
        var favDark = JSON.stringify(newFav4);
        localStorage.setItem('favStoreHistory4', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'SleepParalysis') {
        var newFav5 = [];
        newFav5.push(historicalArray[5]);
        var favDark = JSON.stringify(newFav5);
        localStorage.setItem('favStoreHistory5', favDark);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
}
/////////////////Anime
// var animeArray = ['AllForOne', 'Naruto', 'Pikatchu', 'Saitama'];
imageSection1.addEventListener('click', addFavorit4);

function addFavorit4(event) {
    if (event.target.id === 'AllForOne') {
        var newFav = [];
        newFav.push(animeArray[0]);
        var favanime = JSON.stringify(newFav);
        localStorage.setItem('favStoreanime', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Naruto') {
        var newFav1 = [];
        newFav1.push(animeArray[1]);
        var favanime = JSON.stringify(newFav1);
        localStorage.setItem('favorite2anime', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Pikatchu') {
        var newFav2 = [];
        newFav2.push(animeArray[2]);
        var favanime = JSON.stringify(newFav2);
        localStorage.setItem('favorite3anime', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Saitama') {
        var newFav3 = [];
        newFav3.push(animeArray[3]);
        var favanime = JSON.stringify(newFav3);
        localStorage.setItem('favorite4anime', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'Kaneki') {
        var newFav4 = [];
        newFav4.push(animeArray[4]);
        var favanime = JSON.stringify(newFav4);
        localStorage.setItem('favorite4anime', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }

}
////////////////////////novles
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'PeterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
imageSection1.addEventListener('click', novlFavorit);

function novlFavorit(event) {
    if (event.target.id === 'conan') {
        var newFav = [];
        newFav.push(novleArray[0]);
        var favanime = JSON.stringify(newFav);
        localStorage.setItem('favStorenovl1', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'emma') {
        var newFav1 = [];
        newFav1.push(novleArray[1]);
        var favanime = JSON.stringify(newFav1);
        localStorage.setItem('favStorenovl2', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'harryPotter') {
        var newFav2 = [];
        newFav2.push(novleArray[2]);
        var favanime = JSON.stringify(newFav2);
        localStorage.setItem('favStorenovl3', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'jayGatsby') {
        var newFav3 = [];
        newFav3.push(novleArray[3]);
        var favanime = JSON.stringify(newFav3);
        localStorage.setItem('favStorenovl4', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'missHavisham') {
        var newFav4 = [];
        newFav4.push(novleArray[4]);
        var favanime = JSON.stringify(newFav4);
        localStorage.setItem('favStorenovl5', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'PeterPan') {
        var newFav5 = [];
        newFav5.push(novleArray[5]);
        var favanime = JSON.stringify(newFav5);
        localStorage.setItem('favStorenovl6', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'RolandDeschain') {
        var newFav6 = [];
        newFav6.push(novleArray[6]);
        var favanime = JSON.stringify(newFav6);
        localStorage.setItem('favStorenovl7', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'sherlok') {
        var newFav7 = [];
        newFav7.push(novleArray[7]);
        var favanime = JSON.stringify(newFav7);
        localStorage.setItem('favStorenovl8', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
    if (event.target.id === 'victorFrankenstien') {
        var newFav8 = [];
        newFav8.push(novleArray[8]);
        var favanime = JSON.stringify(newFav8);
        localStorage.setItem('favStorenovl9', favanime);
        yourFav++;
        navigation.textContent = `Favorite (${yourFav})`;
    }
}