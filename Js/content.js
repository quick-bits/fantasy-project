'use strict'

var darkarry = ['BabaYaga', 'Death', 'Dracula', 'Joker', 'Thanos'];
var historicalArray = ['Zues', 'TempleGuard', 'Medusa', 'Loki', 'RA', 'SleepParalysis']
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'PeterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
var animeArray = ['AllForOne', 'Naruto', 'Pikatchu', 'Saitama'];
var historicalDiscreption = ['Zeus is the God of lighting, God of all Gods and ruler of Olympus. In Greek Mythology, Zeus is the one who defeated Cronus. He is the youngest brother of Hades and Poseidon, and married to Hera. Zeus is described as being cheeky, bossy and overly sensitive, which causes his temper to rise. He cares dearly about his brothers, and although he teases them a lot, he is also a source of reason. Zeus is a member of the 6 Traitors Dynasty.',
    'Anubis or Inpu, Anpu in Ancient Egyptian is the Greek name of the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head. Archeologists have identified Anubis\'s sacred animal as an Egyptian canid, the African golden wolf.', 'In Greek mythology, Medusa was a monster, a Gorgon, generally described as a winged human female with living venomous snakes in place of hair. Those who gazed upon her face would turn to stone. Most sources describe her as the daughter of Phorcys and Ceto, though the author Hyginus makes her the daughter of Gorgon and Ceto. According to Hesiod and Aeschylus, she lived and died on an island named Sarpedon, somewhere near Cisthene. The 2nd-century BCE novelist Dionysios Skytobrachion puts her somewhere in Libya, where Herodotus had said the Berbers originated her myth, as part of their religion.Medusa was beheaded by the hero Perseus, who thereafter used her head, which retained its ability to turn onlookers to stone, as a weapon until he gave it to the goddess Athena to place on her shield', 'In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.', 'Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind',
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
    this.descreption = ['Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, several films (including Conan the Barbarian and Conan the Destroyer), television programs (animated and live-action), video games, role-playing games, and other media. The character was created by writer Robert E. Howard in 1932 for a series of fantasy stories published in Weird Tales magazine. appearance: Conan has \'sullen\', \'smoldering\', and \'volcanic\'blue eyes with a black \'square-cut mane\'. Howard once describes him as having a hairy chest and, while comic book interpretations often portray Conan as wearing a loincloth or other minimalist clothing to give him a more barbaric image, Howard describes the character as wearing whatever garb is typical for the kingdom and culture in which Conan finds himself.ten miles. books:The Phoenix on the Sword (novelette; vol. 20, #6, December 1932) "The Scarlet Citadel" (novelette; vol. 21, #1, January 1, 1933) The Tower of the Elephant" (novelette; vol. 21, #3, March 1933) "Black Colossus" (novelette; vol. 21, #6, June 1933)"The Slithering Shadow" (novelette; vol. 22, #3, September 1933, alternate title "Xuthal of the Dusk") "The Pool of the Black One" (novelette; vol. 22, #4, October 1933) "Rogues in the House" (novelette; vol. 23, #1, January 1934) "Iron Shadows in the Moon" (novelette; vol. 23, #4, April 1934, published as "Shadows in the Moonlight") "Queen of the Black Coast" (novelette; vol. 23, #5, May 1934) "The Devil in Iron" (novelette; vol. 24, #2, August 1934) "The People of the Black Circle" (novella; vol. 24, #3–5, September–November 1934) "A Witch Shall Be Born" (novelette; vol. 24, #6, December 1934) "Jewels of Gwahlur" (novelette; vol. 25, #3, March 1935, author\'s original title "The Servants of Bit-Yakin") "Beyond the Black River"(novella; vol. 25, #5–6, May–June 1935) "Shadows in Zamboula" (novelette; vol. 26, #5, November 1935, author\'s original title "The Man-Eaters of Zamboula") "The Hour of the Dragon" (novel; vol. 26, #6 & vol. 27, #1–4, December 1935, January–April 1936) (Red Nails) (novella; vol. 28, #1–3, July, September, October 1936) Films .Conan the Barbarian (1982) and Conan the Destroyer (1984) .Conan the Barbarian (2011) .The Legend of Conan.', "Emma Woodhouse is the 21-year-old protagonist of Jane Austen's novel Emma. She is described in the novel's opening sentence as \"handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her.\" Jane Austen, while writing the novel, called Emma, \"a heroine whom no-one but myself will much like.\" Emma is an independent, wealthy woman who lives with her father in their home Hartfield in the English countryside near the village of Highbury. The novel concerns her attempts to be a matchmaker among her acquaintances and her own romantic misadventures. Emma professes that she does not ever wish to marry (unless she falls very much in love), as she has no financial need to, having a large inheritance and she doesn't wish to leave her father alone. After series of new engagements, visits at Highbury, and lots of miscommunication, Emma finds herself in love with her neighbour and sister's brother in law George Knightley. Personality Emma often behaves in a frivolous or selfish way, and shows a lack of consideration for her friends and neighbours. She carelessly manipulates the life of her friend Harriet Smith, neglects her acquaintance Jane Fairfax, and insults the poor and dependent Miss Bates. However, her friends, especially Mrs. Weston and George Knightley, see potential in her to improve herself and bec me a better person. books: the main novel : \"Emma\" by Jane Austen, The Boy in the Tree. Jul-2013. General Fiction. Kelly-Ann and the Mermaids of the North. Jul-2013. General Fiction. The Fallen Ones. Feb-2013. General Fiction. The Changeling. Oct-2011. General Fiction. Kelly-Ann's Mermaid. Oct-2011. General Fiction. Rising Star. Oct-2011. ... Never Love a Stranger. Aug-1978. ... On Wings of Love. Jun-1978.Films: Clueless(1995). Emma(1996). Aisha(2010). Emma(2020). Television: Emma(1972). Clueless(1996). Emma(1996). Emma(2009). ", "Harry James Potter is the titular protagonist of J. K. Rowling's Harry Potter series. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practice magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The film and book series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort. Harry is considered a fictional icon and has been described by many critics, readers, and audiences as one of the greatest literary and film characters of all time. According to Rowling, Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong. Having .very limited access to truly caring adults. Rowling said, Harry is forced to make his own decisions from an early age on.[28] He does make mistakes, she conceded, but in the end, he does what his conscience tells him to do. According to Rowling, one of Harry's pivotal scenes came in the fourth book when he protects his dead schoolmate Cedric Diggory's body from Voldemort, because it shows he is brave and selfless.books Harry Potter and the Philosopher's Stone Harry first appears in Harry Potter and the Philosopher's Stone. Starting in 1981 Harry Potter and the Chamber of Secrets Harry Potter and the Prisoner of Azkaban Harry Potter and the Goblet of Fire Harry Potter and the Order of the Phoenix Harry Potter and the Half-Blood Prince Harry Potter and the Deathly Hallows Film appearances In the eight Harry Potter films screened from 2001 to 2011, Harry Potter has been portrayed by British actor Daniel Radcliffe. Radcliffe was asked to audition for the role of Harry in 2000 by producer David Heyman, while in attendance at a play titled Stones in His Pockets in London. Throughout the series, Harry Potter is described as a gifted wizard apprentice. He has a particular talent for flying, which manifests itself in Harry Potter and the Philosopher's Stone the first time he tries it, and gets him a place on a Quidditch team one year before the normal minimum joining age. He captains it in his sixth year. In his fourth year (Harry Potter and the Goblet of Fire), Harry is able to confront a dragon on his broomstick.", "Jay Gatsby (originally named James \"Jimmy\" Gatz) is the title character of the 1925 F. Scott Fitzgerald novel The Great Gatsby. Gatsby is in fact a fictional character, a millionaire and the owner of a luxurious mansion where extravagant parties are often hosted, is described by the novel's narrator, Nick Carraway, as being \"the single most hopeful person I've ever met\". Television :Toby Stephens played Gatsby in the 2000 television adaptation. In The Simpsons episode \"The Great Phatsby\", Mr. Burns assumes Jay Gatsby's role,[12] with the storyline spoofing the 2013 film adaptation.\\Brian Griffin is portrayed as Gatsby in the Family Guy episode \"High School English\" with Peter playing Tom, Lois playing Daisy, Stewie playing Nick, Meg playing Jordan Baker and Joe and Bonnie Swanson playing George and Myrtle Wilson Film Jay Gatsby has been portrayed by several actors in film adaptations of Fitzgerald's novel. Warner Baxter first played the role in the lost 1926 silent film. Gatsby was later portrayed by Alan Ladd in the 1949 film adaptation, Robert Redford in the 1974 film adaptation, Leonardo DiCaprio in director Baz Luhrmann's 2013 film adaptation, and Gregg Sulkin (as \"Dylan Carson\") in Kevin Asch's 2014 drama film Affluenza, billed as a loose re-telling of the novel set among a group of rich and privileged teenagers in Long Island before the 2008 financial crash. ", "Miss Havisham is a character in the Charles Dickens novel Great Expectations (1861). She is a wealthy spinster, once jilted at the altar, who insists on wearing her wedding dress for the rest of her life. She lives in a ruined mansion with her adopted daughter, Estella. Dickens describes her as looking like \"the witch of the place\". Although she has often been portrayed in film versions as very elderly, Dickens's own notes indicate that she is only in her mid-thirties at the start of the novel. However, it is indicated in the novel that her long life away from the sunlight has aged her. in books: Charles Dickens novel Great Expectations (1861).in films adaptations: Florence Reed (1934) Martita Hunt (1946) Margaret Leighton (1974) Joan Hickson (1981) Jean Simmons (who had previously played Estella in 1946 opposite Hunt) (1989) Anne Bancroft (1998) (a version which modernised the story to the twentieth century and changed the names of several characters) Charlotte Rampling (1999) Gillian Anderson (2011, 3-part TV movie adaptation)\ Helena Bonham Carter (2012) (in this version the character is given the first name \"Eleanor\" but no one addresses her by it) Tuppence Middleton (2015) (in the multiplot TV series Dickensian; in this version the character is given the first name \"Amelia\" and referenced as such) Tabu (2016) (in Fitoor, a Hindi version; as Begum Hazrat) Mentioned in 'P.S. I Love You' (2007). ", 'Peter Pan is a fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland. Barrie never described Peter\'s appearance in detail, even in his novel, leaving it to the imagination of the reader and the interpretation of anyone adapting the character. In the play, Peter\'s outfit is made of autumn leaves and cobwebs.[3] His name and playing the flute or pipes suggest the mythological character Pan. Barrie mentions in Peter and Wendy that Peter Pan still had all his "first teeth".[4] He describes him as a beautiful boy with a beautiful smile, \'clad in skeleton leaves and the juices that flow from trees".[4] Peter is an exaggerated stereotype of a boastful and careless boy. He claims greatness, even when such claims are questionable (such as congratulating himself when Wendy re-attaches his shadow). In the play and book, Peter symbolises the selfishness of childhood, and is portrayed as being forgetful and self-centred. Peter\'s archetypal quality is his unending youth. In Peter and Wendy, it is explained that Peter must forget his own adventures and what he learns about the world in order to stay childlike. Peter\'s ability to fly is explained, but inconsistently. In The Little White Bird, books: Peter Pan, or The Boy Who Wouldn\'t Grow Up (1904 play), Peter Pan in Kensington Gardens (1906) When Wendy Grew Up – An Afterthought (1908), Barrie\'s sequel play. Peter and Wendy (1911), a novel Barrie adapted from the 1904 play films: Peter Pan (1953) G | 77 min | Animation, Adventure, Family. Hook (1991) PG | 142 min | Adventure, Comedy, Family. Peter Pan (2003) PG | 113 min | Adventure, Family, Fantasy Finding Neverland (2004) PG | 106 min | Biography, Drama, Family. Pan (2015) PG | 111 min | Adventure, Comedy, Family.', "Roland Deschain of Gilead is a fictional character and the protagonist of Stephen King's The Dark Tower series. He is the son of Steven and Gabrielle Deschain and is descended from a long line of \"gunslingers\", peacekeepers and diplomats of Roland's society. Roland becomes a gunslinger at the unheard-of age of 14 after being manipulated into taking the \"trial of manhood\" by Marten Broadcloak, his father's adviser and an alias of Randall Flagg. Marten has an affair with Roland's mother and makes sure Roland finds out about it, prompting Roland to request his trial in order to gain his guns and exact revenge on Marten. In the trial, Roland must defeat his teacher, Cort, using a weapon of his choosing. He chooses a hawk named David and defeats Cort. Roland sacrifices David to win the fight, setting the tone for Roland's future choices in life. Despite Roland's victory, Cort and Roland's father convince Roland to bide his time before seeking retribution", "1. small describtion:Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.  Referring to himself as a 'consulting detective' in the stories, Holmes is known for his proficiency. details:   Creator: Arthur Conan Doyle   Books: Novels:   A Study in Scarlet (published November 1887 in Beeton's Christmas Annual)     The Sign of the Four (published February 1890 in Lippincott's Monthly Magazine)    The Hound of the Baskervilles (serialised 1901–1902 in The Strand)   The Valley of Fear (serialised 1914–1915 in The Strand)   Short story collections:  The Adventures of Sherlock Holmes (stories published 1891–1892 in The Strand)  The Memoirs of Sherlock Holmes (stories published 1892–1893 in The Strand)   The Return of Sherlock Holmes (stories published 1903–1904 in The Strand)  His Last Bow: Some Later Reminiscences of Sherlock Holmes (stories published 1908–1917)  The Case-Book of Sherlock Holmes (stories published 1921–1927) Movies and TV shows: Sherlock(4 sesones) , Sherlock Holmes, MORE  Siblings: Mycroft Holmes, Eurus Holmes, Enola Holmes Play: Sherlock Holmes", 'Victor Frankenstein is the main character in Mary Shelleys 1818 novel Frankenstein; or, The Modern Prometheus. He is a Swiss scientist (born in Naples, Italy) who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature, often referred to as Frankensteins monster, or often colloquially referred to as simply "Frankenstein".'];
}


var anmieConstructor = function(name) {

    this.name = name;
    this.audio = `aud/animefsntsdy/${name}.mp3`;
    this.img = `img/animefantasy/${name}.png`;
    this.descreption = ["After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen. As a result of having no eyes, he cannot see properly, but “sees” by using an infrared vision Quirk and by sensing the directions of vibrations in the area around him, similar to echolocation. He has various tubes sticking out of his neck and jaw, presumably to help him with his breathing. There are small holes in the palms of his hands.  All For One is a megalomaniac and an expedient psychopath. His brother gave insights on his personality to Izuku Midoriya in a dream. While All For One did use his powers to help people, it was done with ulterior motives and he asked for their aid in exchange for his help. Those who resisted his will were purged. Aware of the feud between civilians and Quirk users, All For One encouraged it to acquire more Quirks and supporters. All For One committed all these crimes, claiming he was bringing order to the world. All For One did care for his younger brother, albeit in a condescending manner. He has the belief that without power, one cannot assert his ideals, and he does not believe in justice or morality, claiming that they do not conform to reality.", "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, Literally meaning: Seventh Fire Shadow).", "Naruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Serving as the eponymous protagonist of the series, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage. His carefree, optimistic and boisterous personality enables him to befriend other Konohagakure ninja, as well as ninja from other villages. Naruto appears in the series' films and in other media related to the franchise, including video games and original video animations (OVA), as well as the sequel Boruto: Naruto Next Generations, where his son, Boruto Uzumaki, is the protagonist.", "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle. Initially just a hero for fun, Saitama later registers to be a professional hero for the Hero Association[5] and defends his home in Z-City from monsters, villains, and other threats. Under the Hero Association, he is assigned the hero name Caped Baldy (ハゲマント, Hagemanto; Viz: Bald Cape) and is currently ranked 7 in the B-Class. One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero webcomic created by the artist One in early 2009. It has a manga adaptation illustrated by Yusuke Murata, as well as an anime adaptation. Following its publication, the webcomic quickly went viral, surpassing 7.9 million hits in June 2012. One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.", " Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur. They have long yellow ears that are tipped with black. A Pikachu's back has two brown stripes, and its large tail is notable for being shaped like a lightning bolt. On its cheeks are two circle-shaped red pouches used for storing electricity. They turn yellow and spark with electricity when its about to use an Electric attack, such as Thunderbolt. It has also been known to generate small surges of electrical energy in anger or for protection, like in the anime.  Pikachu (ピカチュウ Pikachuu) is an Electric-type Pokémon, which was introduced in Generation I. Pikachu is renowned for being the most well-known and recognizable Pokémon. Over the years, Pikachu has become so popular that it serves as the Pokémon franchise mascot. It is the Version Mascot and Starter Pokémon for the game Pokémon Yellow and its remake, Pokémon: Let's Go, Pikachu!. It is also well known from the anime, where Ash Ketchum, the protagonist, owns a Pikachu. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. When in Alola, it evolves into its Alolan Form. It can also Gigantamax into Gigantamax Pikachu."];
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
        imageSection.innerHTML = "";
        DarkfantasyObject.renderDark();


    } else if (selectCategory === "Historical Fantasy") {

        imageSection.innerHTML = "";

        HistoricalfantasyObject.renderHistorical();
    } else if (selectCategory === "Novels Fantasy") {

        imageSection.innerHTML = "";

        novelFantasyObject.renderNovels();
    } else if (selectCategory === "Anime Fantasy") {

        imageSection.innerHTML = "";

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
        image1.setAttribute('id', 'hey')
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
var imageSection = document.getElementById('novel');
novelConstructor.prototype.renderNovels = function() {

        var header = document.createElement('h1');
        imageSection.appendChild(header);
        header.textContent = "Novel fantasy section";
        for (var i = 0; i < 9; i++) {

            var image1 = document.createElement('img');
            image1.setAttribute('src', novelObj[i].img)
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





imageSection.addEventListener('click', addFavorit);

function addFavorit(event) {
    if (event.target.id === 'BabaYaga') {
        var newFav = [];
        newFav.push(darkarry[0]);
        var favDark = JSON.stringify(newFav);
        localStorage.setItem('favStore', favDark);
    }
    if (event.target.id === 'Death') {
        var newFav1 = [];
        newFav1.push(darkarry[1]);
        var favDark = JSON.stringify(newFav1);
        localStorage.setItem('favorite2', favDark);

    }
    if (event.target.id === 'Dracula') {
        var newFav2 = [];
        newFav2.push(darkarry[2]);
        var favDark = JSON.stringify(newFav2);
        localStorage.setItem('favorite3', favDark);
    }
    if (event.target.id === 'Joker') {
        var newFav3 = [];
        newFav3.push(darkarry[3]);
        var favDark = JSON.stringify(newFav3);
        localStorage.setItem('favorite4', favDark);
    }
    if (event.target.id === 'Thanos') {
        var newFav4 = [];
        newFav4.push(darkarry[4]);
        var favDark = JSON.stringify(newFav4);
        localStorage.setItem('favorite5', favDark);
    }
}

////////////history//////////////////



imageSection.addEventListener('click', FavoritHistory);

function FavoritHistory(event) {
    if (event.target.id === 'Zues') {
        var newFav = [];
        newFav.push(historicalArray[0]);
        var favDark = JSON.stringify(newFav);
        localStorage.setItem('favStoreHistory', favDark);
    }
    if (event.target.id === 'TempleGuard') {
        var newFav1 = [];
        newFav1.push(historicalArray[1]);
        var favDark = JSON.stringify(newFav1);
        localStorage.setItem('favStoreHistory1', favDark);

    }
    if (event.target.id === 'Medusa') {
        var newFav2 = [];
        newFav2.push(historicalArray[2]);
        var favDark = JSON.stringify(newFav2);
        localStorage.setItem('favStoreHistory2', favDark);
    }
    if (event.target.id === 'Loki') {
        var newFav3 = [];
        newFav3.push(historicalArray[3]);
        var favDark = JSON.stringify(newFav3);
        localStorage.setItem('favStoreHistory3', favDark);
    }
    if (event.target.id === 'RA') {
        var newFav4 = [];
        newFav4.push(historicalArray[4]);
        var favDark = JSON.stringify(newFav4);
        localStorage.setItem('favStoreHistory4', favDark);
    }
    if (event.target.id === 'SleepParalysis') {
        var newFav5 = [];
        newFav5.push(historicalArray[5]);
        var favDark = JSON.stringify(newFav5);
        localStorage.setItem('favStoreHistory5', favDark);
    }
}
/////////////////Anime
// var animeArray = ['AllForOne', 'Naruto', 'Pikatchu', 'Saitama'];
imageSection.addEventListener('click', addFavorit4);

function addFavorit4(event) {
    if (event.target.id === 'AllForOne') {
        var newFav = [];
        newFav.push(animeArray[0]);
        var favanime = JSON.stringify(newFav);
        localStorage.setItem('favStoreanime', favanime);
    }
    if (event.target.id === 'Naruto') {
        var newFav1 = [];
        newFav1.push(animeArray[1]);
        var favanime = JSON.stringify(newFav1);
        localStorage.setItem('favorite2anime', favanime);
    }
    if (event.target.id === 'Pikatchu') {
        var newFav2 = [];
        newFav2.push(animeArray[2]);
        var favanime = JSON.stringify(newFav2);
        localStorage.setItem('favorite3anime', favanime);
    }
    if (event.target.id === 'Saitama') {
        var newFav3 = [];
        newFav3.push(animeArray[3]);
        var favanime = JSON.stringify(newFav3);
        localStorage.setItem('favorite4anime', favanime);
    }

}
////////////////////////novles
var novleArray = ['conan', 'emma', 'harryPotter', 'jayGatsby', 'missHavisham', 'PeterPan', 'RolandDeschain', 'sherlok', 'victorFrankenstien'];
imageSection.addEventListener('click', novlFavorit);

function novlFavorit(event) {
    if (event.target.id === 'conan') {
        var newFav = [];
        newFav.push(novleArray[0]);
        var favanime = JSON.stringify(newFav);
        localStorage.setItem('favStorenovl1', favanime);
    }
    if (event.target.id === 'emma') {
        var newFav1 = [];
        newFav1.push(novleArray[1]);
        var favanime = JSON.stringify(newFav1);
        localStorage.setItem('favStorenovl2', favanime);
    }
    if (event.target.id === 'harryPotter') {
        var newFav2 = [];
        newFav2.push(novleArray[2]);
        var favanime = JSON.stringify(newFav2);
        localStorage.setItem('favStorenovl3', favanime);
    }
    if (event.target.id === 'jayGatsby') {
        var newFav3 = [];
        newFav3.push(novleArray[3]);
        var favanime = JSON.stringify(newFav3);
        localStorage.setItem('favStorenovl4', favanime);
    }
    if (event.target.id === 'missHavisham') {
        var newFav4 = [];
        newFav4.push(novleArray[4]);
        var favanime = JSON.stringify(newFav4);
        localStorage.setItem('favStorenovl5', favanime);
    }
    if (event.target.id === 'PeterPan') {
        var newFav5 = [];
        newFav5.push(novleArray[5]);
        var favanime = JSON.stringify(newFav5);
        localStorage.setItem('favStorenovl6', favanime);
    }
    if (event.target.id === 'RolandDeschain') {
        var newFav6 = [];
        newFav6.push(novleArray[6]);
        var favanime = JSON.stringify(newFav6);
        localStorage.setItem('favStorenovl7', favanime);
    }
    if (event.target.id === 'sherlok') {
        var newFav7 = [];
        newFav7.push(novleArray[7]);
        var favanime = JSON.stringify(newFav7);
        localStorage.setItem('favStorenovl8', favanime);
    }
    if (event.target.id === 'victorFrankenstien') {
        var newFav8 = [];
        newFav8.push(novleArray[8]);
        var favanime = JSON.stringify(newFav8);
        localStorage.setItem('favStorenovl9', favanime);
    }
}