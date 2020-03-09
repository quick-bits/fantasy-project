'use strict'
var darkFantasy = ['Baba Yaga', 'Death', 'Dracula', 'Joker', 'Thanos'];
var Animes = ['Naruto', 'Pokemon', 'Saitama', 'Shigaraki'];
var Hitorical = ['lokipic', 'medusa', 'RA', 'Zues', 'sleep paralysis', 'Temple Guard'];
var novels = ['conan', 'emma', 'frankenstein', 'peterpan', 'jaygatsby', 'missHavisham', 'RolandDeschain', 'sherlok', 'haryypotter'];

function Novel(name, imagePath, sound) {
    this.name = name;
    this.imagePath = `img/novlsfantasdy/${this.name}.png`;
    this.soundPath = `aud/${name}.mp3`;
    Novel.all.push(this);
}
Novel.all = [];

function Anime(name, imagePath, sound) {
    this.name = name;
    this.imagePath = `img/animefsntsdy/${this.name}.png`;
    this.soundPath = `aud/${name}.mp3`;
    Anime.all.push(this);
}
Anime.all = [];

function Dark(name, imagePath, sound) {
    this.name = name;
    this.imagePath = `img/animefsntsdy/${this.name}.png`;
    this.soundPath = `aud/${name}.mp3`;
    Dark.all.push(this);
}
Dark.all = [];

function History(name, imagePath, sound) {
    this.name = name;
    this.imagePath = `img/animefsntsdy/${this.name}.png`;
    this.soundPath = `aud/${name}.mp3`;
    History.all.push(this);
}
History.all = [];

for (var i = 0; i < Animes.length; i++) {
    var AnimeCharacter = new Anime(Animes[i]);
}

for (var i = 0; i < novels.length; i++) {
    var novelsCharacter = new Novel(novels[i]);
    console.log(novelsCharacter);
}

for (var i = 0; i < darkFantasy.length; i++) {
    var darkCharacter = new Dark(darkFantasy[i]);
}

for (var i = 0; i < Hitorical.length; i++) {
    var historicalCharacter = new History(Hitorical[i]);
}

function randomPick(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var imageKlick = document.getElementById('category-images');
var img1 = document.getElementById('1');
var img2 = document.getElementById('2');
var img3 = document.getElementById('3');
var img4 = document.getElementById('4');
var message = document.getElementById('result-message');
var submitform = document.getElementById('formSet');

var describ = document.getElementById('character-desctintion');

var describtion = document.createElement('p');
describ.appendChild(describtion);

var audioClips = document.createElement('audio');
describ.appendChild(audioClips);

var spinner = document.createElement('div');
describ.appendChild(spinner);
spinner.setAttribute('class', 'double-spinner');

History.prototype.randomHistory = function() {
    var imgs = document.createElement('img');
    message.appendChild(imgs);
    // console.log(Hitorical[randomPick(0, History.all.length - 1)]);
    if (Hitorical[randomPick(0, History.all.length - 1)] === 'lokipic') {
        imgs.setAttribute('src', `img/historicalfantasy/lokipic.png`);
        describtion.textContent = " In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.  apper: 1. Thor ragnarok 2017 2. Thor 2011  3. the avengers end game 2019   4. the avengers 2012   5. Thor the dark world 2013 6. the avengers infinity war 2018 7. the avengers age of ultron 2015 8  lego marvel super hero: Maximum Overload (animition 2013) 9. Thor: Tales of Asgard (Fantasy / Action 2011)";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Medusa.mp3');
        audioClips.play();

    }
    if (Hitorical[randomPick(0, History.all.length - 1)] === 'RA') {
        imgs.setAttribute('src', `img/historicalfantasy/RA.png`);
        describtion.textContent = " Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind apper: 1. Gods Of Egypt 20162. Ra, The Sun God 2011 3. Yu-Gi-Oh Anime 1996";
        audioClips.setAttribute('src', 'aud/historicalfantasy/RA.mp3');
        audioClips.play();
    }
    if (Hitorical[randomPick(0, History.all.length - 1)] === 'Zues') {
        imgs.setAttribute('src', `img/historicalfantasy/Zues.png`);
        describtion.textContent = "ZEUUUUUUUUUs ed wee dw dlwj edlw edlw edlwe dlw wje dwje wje jwe djwed wjed wjed wjd wjed wjed wjed";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Vo_zuus_zuus_arc_spawn_05.mp3');
        audioClips.play();
    }
    if (Hitorical[randomPick(0, History.all.length - 1)] === 'sleep paralysis') {
        imgs.setAttribute('src', `img/historicalfantasy/sleep paralysis.png`);
        describtion.textContent = "Sleep paralysis is a feeling of being unable to move, it is most likely to occur during adolescence, the episodes last from a few seconds to a few minutes. Stress, sleep deprivation, and panic disorder may trigger it, an inability to move or speak is an essential feature, and there may be hallucinations. apper: 1.  Sleep-Paralysis (2004)  2.  Mara (I) (2018) 3. Slumber (I) (2017) 4. The X Files (1993–2018) Episode: Ghouli (2018). 5.  Lucid (2017)";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Sleep-paralysis.mp3');
        audioClips.play();
    }
    if (Hitorical[randomPick(0, History.all.length - 1)] === 'Temple Guard') {
        imgs.setAttribute('src', `img/historicalfantasy/Temple Guard.png`);
        describtion.textContent = "GUAAAAAAAAAAAAAAAAAARDU..... ed wee dw dlwj edlw edlw edlwe dlw wje dwje wje jwe djwed wjed wjed wjd wjed wjed wjed";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Temple Guard.mp3');
        audioClips.play();
    }

}


Anime.prototype.randomAnime = function() {
    var imgs = document.createElement('img');
    message.appendChild(imgs);
    if (Animes[randomPick(0, Anime.all.length - 1)] === 'Naruto') {
        imgs.setAttribute('src', `img/animefsntsdy/Naruto.png`);
        describtion.textContent = "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, Literally meaning: Seventh Fire Shadow). Naruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Serving as the eponymous protagonist of the series, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage. His carefree, optimistic and boisterous personality enables him to befriend other Konohagakure ninja, as well as ninja from other villages. Naruto appears in the series' films and in other media related to the franchise, including video games and original video animations (OVA), as well as the sequel Boruto: Naruto Next Generations, where his son, Boruto Uzumaki, is the protagonist.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Naruto.mp3');
        audioClips.play();

    }
    if (Animes[randomPick(0, Anime.all.length - 1)] === 'Pokemon') {
        imgs.setAttribute('src', `img/animefsntsdy/Pokemon.png`);
        describtion.textContent = " A young boy with his trusted Pikachu travel the region with different companions and Pokémon in a quest to become a Pokémon Master… it’s a classic story that we’ve all heard in bits & pieces. This is no conventional fantasy series, and the newer episodes feel more aimed at kids. But with its deep worldbuilding and crazy adventures it could be considered a modernized type of fantasy series. Pokémon: (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/),also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokémon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures.The franchise copyright and Japanese trademark is shared by all three companies,[5] but Nintendo is the sole owner of the trademark in other countries.[6] The franchise was created by Satoshi Tajiri in 1995,[7] and is centered on fictional creatures called 'Pokémon', which humans, known as Pokémon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is 'Gotta Catch 'Em All'. Works within the franchise are set in the Pokémon universe.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Pokemon.mp3');
        audioClips.play();
    }
    if (Animes[randomPick(0, Anime.all.length - 1)] === 'Saitama') {
        imgs.setAttribute('src', `img/animefsntsdy/Saitama.png`);
        describtion.textContent = "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle. Initially just a hero for fun, Saitama later registers to be a professional hero for the Hero Association and defends his home in Z-City from monsters, villains, and other threats Under the Hero Association, he is assigned the hero name Caped Baldy (ハゲマント, Hagemanto; Viz: Bald Cape)and is currently ranked 7 in the B-Class.One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero webcomic created by the artist One in early 2009. It has a manga adaptation illustrated by Yusuke Murata, as well as an anime adaptation. Following its publication, the webcomic quickly went viral, surpassing 7.9 million hits in June 2012. One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Satima.mp3');
        audioClips.play();
    }
    if (Animes[randomPick(0, Anime.all.length - 1)] === 'Shigaraki') {
        imgs.setAttribute('src', `img/animefsntsdy/Shigaraki.png`);
        describtion.textContent = "After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen. As a result of having no eyes, he cannot see properly, but “sees” by using an infrared vision Quirk and by sensing the directions of vibrations in the area around him, similar to echolocation. He has various tubes sticking out of his neck and jaw, presumably to help him with his breathing. There are small holes in the palms of his hands. All For One is a megalomaniac and an expedient psychopath. His brother gave insights on his personality to Izuku Midoriya in a dream. While All For One did use his powers to help people, it was done with ulterior motives and he asked for their aid in exchange for his help. Those who resisted his will were purged. Aware of the feud between civilians and Quirk users, All For One encouraged it to acquire more Quirks and supporters. All For One committed all these crimes, claiming he was bringing order to the world. All For One did care for his younger brother, albeit in a condescending manner. He has the belief that without power, one cannot assert his ideals, and he does not believe in justice or morality, claiming that they do not conform to reality.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Shigaraki.mp3');
        audioClips.play();
    }

}


Dark.prototype.randomDark = function() {
    var imgs = document.createElement('img');
    message.appendChild(imgs);

    if (darkFantasy[randomPick(0, Dark.all.length - 1)] === 'Baba Yaga') {
        imgs.setAttribute('src', `img/darkfantasy/Baba Yaga.png`);
        describtion.textContent = "Baba Yaga: In March 1964, Hellboy first encountered Baba Yaga  while investigating a string of children disappearing. The disappearances were Baba Yaga's doing as she  kidnapped the children to satisfy her cannibalistic hunger.When Baba Yaga was counting the fingers  of the dead in a cemetery, she attempted to use  a skull (that once belonged to a former devotee named Katayev) to lead her to the Sabbath.";
        audioClips.setAttribute('src', 'aud/darkfantasy/Baba Yaga.mp3');
        audioClips.play();
    }
    if (darkFantasy[randomPick(0, Dark.all.length - 1)] === 'Death') {
        imgs.setAttribute('src', `img/darkfantasy/Death.png`);
        describtion.textContent = "Death: He does ride a noble, living steed named Binky, after all. The way Death sees it, his job isn’t to kill, but to collect dead souls and wait for them to be reborn. Death is a fictional character in Terry Pratchett's Discworld series and a parody of several  other personifications of death. Like most Grim Reapers, he is a black-robed skeleton usually carrying a scythe. His jurisdiction is specifically the Discworld itself; he is only a part, or minion, of Azrael,  the universal Death. He has been generally used by Pratchett to explore the problems of human existence, and has become more sympathetic throughout the series.";
        audioClips.setAttribute('src', 'aud/darkfantasy/Death.mp3');
        audioClips.play();
    }
    if (darkFantasy[randomPick(0, Dark.all.length - 1)] === 'Dracula') {
        imgs.setAttribute('src', `img/darkfantasy/Dracula.png`);
        describtion.textContent = "Dracule: sinister figures who use their supernatural powers to hunt humans and drink their blood. Born in Transylvania as the second son of the nobleman Vlad II Dracul, he took the name Dracula,meaning “son of Dracul,”  when he was initiated into a secret order of  Christian knights known as the Order of the Dragon. Dracula is a member of an ancient family of warriors,  some of whom fought against the Huns, the Turks ";
        audioClips.setAttribute('src', 'aud/darkfantasy/Dracula.mp3');
        audioClips.play();
    }
    if (darkFantasy[randomPick(0, Dark.all.length - 1)] === 'Joker') {
        imgs.setAttribute('src', `img/darkfantasy/Joker.png`);
        describtion.textContent = "The Joker, initially portrayed as a small-time crook,  was disfigured and driven insane by an accident with toxic chemicals.  He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair. ";
        audioClips.setAttribute('src', 'aud/darkfantasy/juker.mp3');
        audioClips.play();
    }
    if (darkFantasy[randomPick(0, Dark.all.length - 1)] === 'Thanos') {
        imgs.setAttribute('src', `img/darkfantasy/Thanos.png`);
        describtion.textContent = "Thanos is a mutant member of the race of superhumans known as the Titanian Eternals.Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe To complete this goal, Thanos set about tracking down the Infinity Stones, as the combined efforts might wipe out half the universe.  apper:  1. the avengers end game 2019. 2. the avengers infinity war 2018.3. the avengers age of ultron 2015.4.Guardians of the Galaxy 2014";
        audioClips.setAttribute('src', 'aud/darkfantasy/thanos-aud.mp3');
        audioClips.play();
    }
}


Novel.prototype.renderImages = function() {

    var imgs = document.createElement('img');
    message.appendChild(imgs);
    if (novels[randomPick(0, Novel.all.length - 1)] === 'conan') {
        imgs.setAttribute('src', `img/novlsfantasy/conan.png`);
        describtion.textContent = 'Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, several films (including Conan the Barbarian and Conan the Destroyer), television programs (animated and live-action), video games, role-playing games, and other media. The character was created by writer Robert E. Howard in 1932 for a series of fantasy stories published in Weird Tales magazine. appearance: Conan has \'sullen\', \'smoldering\', and \'volcanic\'blue eyes with a black \'square-cut mane\'. Howard once describes him as having a hairy chest and, while comic book interpretations often portray Conan as wearing a loincloth or other minimalist clothing to give him a more barbaric image, Howard describes the character as wearing whatever garb is typical for the kingdom and culture in which Conan finds himself.ten miles. books:The Phoenix on the Sword (novelette; vol. 20, #6, December 1932) "The Scarlet Citadel" (novelette; vol. 21, #1, January 1, 1933) The Tower of the Elephant" (novelette; vol. 21, #3, March 1933) "Black Colossus" (novelette; vol. 21, #6, June 1933)"The Slithering Shadow" (novelette; vol. 22, #3, September 1933, alternate title "Xuthal of the Dusk") "The Pool of the Black One" (novelette; vol. 22, #4, October 1933) "Rogues in the House" (novelette; vol. 23, #1, January 1934) "Iron Shadows in the Moon" (novelette; vol. 23, #4, April 1934, published as "Shadows in the Moonlight") "Queen of the Black Coast" (novelette; vol. 23, #5, May 1934) "The Devil in Iron" (novelette; vol. 24, #2, August 1934) "The People of the Black Circle" (novella; vol. 24, #3–5, September–November 1934) "A Witch Shall Be Born" (novelette; vol. 24, #6, December 1934) "Jewels of Gwahlur" (novelette; vol. 25, #3, March 1935, author\'s original title "The Servants of Bit-Yakin") "Beyond the Black River"(novella; vol. 25, #5–6, May–June 1935) "Shadows in Zamboula" (novelette; vol. 26, #5, November 1935, author\'s original title "The Man-Eaters of Zamboula") "The Hour of the Dragon" (novel; vol. 26, #6 & vol. 27, #1–4, December 1935, January–April 1936) (Red Nails) (novella; vol. 28, #1–3, July, September, October 1936) Films .Conan the Barbarian (1982) and Conan the Destroyer (1984) .Conan the Barbarian (2011) .The Legend of Conan.';
        audioClips.setAttribute('src', 'aud/novlsfantasy/conan.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'emma') {
        imgs.setAttribute('src', `img/novlsfantasy/emma.png`);
        describtion.textContent = "Emma Woodhouse is the 21-year-old protagonist of Jane Austen's novel Emma. She is described in the novel's opening sentence as \"handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her.\" Jane Austen, while writing the novel, called Emma, \"a heroine whom no-one but myself will much like.\" Emma is an independent, wealthy woman who lives with her father in their home Hartfield in the English countryside near the village of Highbury. The novel concerns her attempts to be a matchmaker among her acquaintances and her own romantic misadventures. Emma professes that she does not ever wish to marry (unless she falls very much in love), as she has no financial need to, having a large inheritance and she doesn't wish to leave her father alone. After series of new engagements, visits at Highbury, and lots of miscommunication, Emma finds herself in love with her neighbour and sister's brother in law George Knightley. Personality Emma often behaves in a frivolous or selfish way, and shows a lack of consideration for her friends and neighbours. She carelessly manipulates the life of her friend Harriet Smith, neglects her acquaintance Jane Fairfax, and insults the poor and dependent Miss Bates. However, her friends, especially Mrs. Weston and George Knightley, see potential in her to improve herself and bec me a better person. books: the main novel : \"Emma\" by Jane Austen, The Boy in the Tree. Jul-2013. General Fiction. Kelly-Ann and the Mermaids of the North. Jul-2013. General Fiction. The Fallen Ones. Feb-2013. General Fiction. The Changeling. Oct-2011. General Fiction. Kelly-Ann's Mermaid. Oct-2011. General Fiction. Rising Star. Oct-2011. ... Never Love a Stranger. Aug-1978. ... On Wings of Love. Jun-1978.Films: Clueless(1995). Emma(1996). Aisha(2010). Emma(2020). Television: Emma(1972). Clueless(1996). Emma(1996). Emma(2009). ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/emma.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'frankenstein') {
        imgs.setAttribute('src', `img/novlsfantasy/frankenstein.png`);
        describtion.textContent = "Victor Frankenstein is the main character in Mary Shelley's 1818 novel Frankenstein; or, The Modern Prometheus. He is a Swiss scientist (born in Naples, Italy) who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature, often referred to as Frankenstein's monster, or often colloquially referred to as simply \"Frankenstein\". Victor later regrets meddling with nature through his creation, as he inadvertently endangers his own life, as well as the lives of his family and friends, when the creature seeks revenge against him. In the novel we are introduced to the character when he is seeking to catch the monster near the North Pole and is saved from near death by Robert Walton and his crew. Some aspects of the character are believed to have been inspired by 17th-century alchemist Johann Conrad Dippel. Certainly, the author and her environment were aware of the experiment on electricity and dead tissues by Galvani and his neph w Aldini or, perhaps, Alessandro Volta at the university of Pavia.[citation n appearance: While many subsequent film adaptations (notably the 1931 movie Frankenstein and the Hammer Films series starring Peter Cushing) have portrayed Frankenstein as the prototypical \"mad scientist\", the novel portrayed him as a tragic figure. books: In Kenneth Oppel's novel This Dark Endeavor and its sequel Such Wicked Intent, Frankenstein is portrayed as a 16-year-old aspiring scientist who creates his own creature from the body of his deceased twin brother, Konrad. In Dean Koontz's Frankenstein, Victor Frankenstein – now going by the alias of Victor Helios – has survived into the present, now living in New Orleans while arranging for the creation of his 'New Race' of humanity, now growing his creations in tanks after acquiring funding from the likes of Adolf Hitler, Joseph Stalin and Fidel Castro over the centuries In the book Frankenstein's Aunt, the Baron's aunt comes to Frankenstein's castle to put it back in order, following the chaos caused by her nephew's experiments. In the novel Frankenstein's Aunt Retur s, Frankenstein has created a child for the monster and his bride.";
        audioClips.setAttribute('src', 'aud/novlsfantasy/victorFrankenstein.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'haryypotter') {
        imgs.setAttribute('src', `img/novlsfantasy/haryypotter.png`);
        describtion.textContent = "Harry James Potter is the titular protagonist of J. K. Rowling's Harry Potter series. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practice magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The film and book series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort. Harry is considered a fictional icon and has been described by many critics, readers, and audiences as one of the greatest literary and film characters of all time. According to Rowling, Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong. Having .very limited access to truly caring adults. Rowling said, Harry is forced to make his own decisions from an early age on.[28] He does make mistakes, she conceded, but in the end, he does what his conscience tells him to do. According to Rowling, one of Harry's pivotal scenes came in the fourth book when he protects his dead schoolmate Cedric Diggory's body from Voldemort, because it shows he is brave and selfless.books Harry Potter and the Philosopher's Stone Harry first appears in Harry Potter and the Philosopher's Stone. Starting in 1981 Harry Potter and the Chamber of Secrets Harry Potter and the Prisoner of Azkaban Harry Potter and the Goblet of Fire Harry Potter and the Order of the Phoenix Harry Potter and the Half-Blood Prince Harry Potter and the Deathly Hallows Film appearances In the eight Harry Potter films screened from 2001 to 2011, Harry Potter has been portrayed by British actor Daniel Radcliffe. Radcliffe was asked to audition for the role of Harry in 2000 by producer David Heyman, while in attendance at a play titled Stones in His Pockets in London. Throughout the series, Harry Potter is described as a gifted wizard apprentice. He has a particular talent for flying, which manifests itself in Harry Potter and the Philosopher's Stone the first time he tries it, and gets him a place on a Quidditch team one year before the normal minimum joining age. He captains it in his sixth year. In his fourth year (Harry Potter and the Goblet of Fire), Harry is able to confront a dragon on his broomstick.";
        audioClips.setAttribute('src', 'aud/novlsfantasy/harrypotter.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'jaygatsby') {
        imgs.setAttribute('src', `img/novlsfantasy/jaygatsby.png`);
        describtion.textContent = "Jay Gatsby (originally named James \"Jimmy\" Gatz) is the title character of the 1925 F. Scott Fitzgerald novel The Great Gatsby. Gatsby is in fact a fictional character, a millionaire and the owner of a luxurious mansion where extravagant parties are often hosted, is described by the novel's narrator, Nick Carraway, as being \"the single most hopeful person I've ever met\". Television :Toby Stephens played Gatsby in the 2000 television adaptation. In The Simpsons episode \"The Great Phatsby\", Mr. Burns assumes Jay Gatsby's role,[12] with the storyline spoofing the 2013 film adaptation.\\Brian Griffin is portrayed as Gatsby in the Family Guy episode \"High School English\" with Peter playing Tom, Lois playing Daisy, Stewie playing Nick, Meg playing Jordan Baker and Joe and Bonnie Swanson playing George and Myrtle Wilson Film Jay Gatsby has been portrayed by several actors in film adaptations of Fitzgerald's novel. Warner Baxter first played the role in the lost 1926 silent film. Gatsby was later portrayed by Alan Ladd in the 1949 film adaptation, Robert Redford in the 1974 film adaptation, Leonardo DiCaprio in director Baz Luhrmann's 2013 film adaptation, and Gregg Sulkin (as \"Dylan Carson\") in Kevin Asch's 2014 drama film Affluenza, billed as a loose re-telling of the novel set among a group of rich and privileged teenagers in Long Island before the 2008 financial crash. ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/jaygatsby.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'missHavisham') {
        imgs.setAttribute('src', `img/novlsfantasy/missHavisham.png`);
        describtion.textContent = "Miss Havisham is a character in the Charles Dickens novel Great Expectations (1861). She is a wealthy spinster, once jilted at the altar, who insists on wearing her wedding dress for the rest of her life. She lives in a ruined mansion with her adopted daughter, Estella. Dickens describes her as looking like \"the witch of the place\". Although she has often been portrayed in film versions as very elderly, Dickens's own notes indicate that she is only in her mid-thirties at the start of the novel. However, it is indicated in the novel that her long life away from the sunlight has aged her. in books: Charles Dickens novel Great Expectations (1861).in films adaptations: Florence Reed (1934) Martita Hunt (1946) Margaret Leighton (1974) Joan Hickson (1981) Jean Simmons (who had previously played Estella in 1946 opposite Hunt) (1989) Anne Bancroft (1998) (a version which modernised the story to the twentieth century and changed the names of several characters) Charlotte Rampling (1999) Gillian Anderson (2011, 3-part TV movie adaptation)\ Helena Bonham Carter (2012) (in this version the character is given the first name \"Eleanor\" but no one addresses her by it) Tuppence Middleton (2015) (in the multiplot TV series Dickensian; in this version the character is given the first name \"Amelia\" and referenced as such) Tabu (2016) (in Fitoor, a Hindi version; as Begum Hazrat) Mentioned in 'P.S. I Love You' (2007). ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/missHavisham.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'peterpan') {
        imgs.setAttribute('src', `img/novlsfantasy/peterpan.png`);
        describtion.textContent = 'Peter Pan is a fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland. Barrie never described Peter\'s appearance in detail, even in his novel, leaving it to the imagination of the reader and the interpretation of anyone adapting the character. In the play, Peter\'s outfit is made of autumn leaves and cobwebs.[3] His name and playing the flute or pipes suggest the mythological character Pan. Barrie mentions in Peter and Wendy that Peter Pan still had all his "first teeth".[4] He describes him as a beautiful boy with a beautiful smile, \'clad in skeleton leaves and the juices that flow from trees".[4] Peter is an exaggerated stereotype of a boastful and careless boy. He claims greatness, even when such claims are questionable (such as congratulating himself when Wendy re-attaches his shadow). In the play and book, Peter symbolises the selfishness of childhood, and is portrayed as being forgetful and self-centred. Peter\'s archetypal quality is his unending youth. In Peter and Wendy, it is explained that Peter must forget his own adventures and what he learns about the world in order to stay childlike. Peter\'s ability to fly is explained, but inconsistently. In The Little White Bird, books: Peter Pan, or The Boy Who Wouldn\'t Grow Up (1904 play), Peter Pan in Kensington Gardens (1906) When Wendy Grew Up – An Afterthought (1908), Barrie\'s sequel play. Peter and Wendy (1911), a novel Barrie adapted from the 1904 play films: Peter Pan (1953) G | 77 min | Animation, Adventure, Family. Hook (1991) PG | 142 min | Adventure, Comedy, Family. Peter Pan (2003) PG | 113 min | Adventure, Family, Fantasy Finding Neverland (2004) PG | 106 min | Biography, Drama, Family. Pan (2015) PG | 111 min | Adventure, Comedy, Family.';
        audioClips.setAttribute('src', 'aud/novlsfantasy/peterPan.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'RolandDeschain') {
        imgs.setAttribute('src', `img/novlsfantasy/RolandDeschain.png`);
        describtion.textContent = "Roland Deschain of Gilead is a fictional character and the protagonist of Stephen King's The Dark Tower series. He is the son of Steven and Gabrielle Deschain and is descended from a long line of \"gunslingers\", peacekeepers and diplomats of Roland's society. Roland becomes a gunslinger at the unheard-of age of 14 after being manipulated into taking the \"trial of manhood\" by Marten Broadcloak, his father's adviser and an alias of Randall Flagg. Marten has an affair with Roland's mother and makes sure Roland finds out about it, prompting Roland to request his trial in order to gain his guns and exact revenge on Marten. In the trial, Roland must defeat his teacher, Cort, using a weapon of his choosing. He chooses a hawk named David and defeats Cort. Roland sacrifices David to win the fight, setting the tone for Roland's future choices in life. Despite Roland's victory, Cort and Roland's father convince Roland to bide his time before seeking retribution";
        audioClips.setAttribute('src', 'aud/novlsfantasy/RolandDeschain.mp3');
        audioClips.play();
    }
    if (novels[randomPick(0, Novel.all.length - 1)] === 'sherlok') {
        imgs.setAttribute('src', `img/novlsfantasy/sherlok.png`);
        describtion.textContent = "1. small describtion:Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.  Referring to himself as a 'consulting detective' in the stories, Holmes is known for his proficiency. details:   Creator: Arthur Conan Doyle   Books: Novels:   A Study in Scarlet (published November 1887 in Beeton's Christmas Annual)     The Sign of the Four (published February 1890 in Lippincott's Monthly Magazine)    The Hound of the Baskervilles (serialised 1901–1902 in The Strand)   The Valley of Fear (serialised 1914–1915 in The Strand)   Short story collections:  The Adventures of Sherlock Holmes (stories published 1891–1892 in The Strand)  The Memoirs of Sherlock Holmes (stories published 1892–1893 in The Strand)   The Return of Sherlock Holmes (stories published 1903–1904 in The Strand)  His Last Bow: Some Later Reminiscences of Sherlock Holmes (stories published 1908–1917)  The Case-Book of Sherlock Holmes (stories published 1921–1927) Movies and TV shows: Sherlock(4 sesones) , Sherlock Holmes, MORE  Siblings: Mycroft Holmes, Eurus Holmes, Enola Holmes Play: Sherlock Holmes";
        audioClips.setAttribute('src', 'aud/novlsfantasy/sherlok.mp3');
        audioClips.play();
    }
}

imageKlick.addEventListener('click', categorySelect);

function categorySelect(event) {

    if (event.target.id === '1') {
        document.getElementById("result-message").innerHTML = "";
        novelsCharacter.renderImages();

        // imageKlick.removeEventListener('click', categorySelect);
        // document.getElementById("character-desctintion").innerHTML = "";
    } else if (event.target.id === '2') {
        document.getElementById("result-message").innerHTML = "";
        AnimeCharacter.randomAnime();
        // imageKlick.removeEventListener('click', categorySelect);
        // document.getElementById("character-desctintion").innerHTML = "";
    } else if (event.target.id === '3') {
        document.getElementById("result-message").innerHTML = "";
        darkCharacter.randomDark();
        // imageKlick.removeEventListener('click', categorySelect);
        // document.getElementById("character-desctintion").innerHTML = "";
    } else if (event.target.id === '4') {
        document.getElementById("result-message").innerHTML = "";
        historicalCharacter.randomHistory();
        // imageKlick.removeEventListener('click', categorySelect);
        // document.getElementById("character-desctintion").innerHTML = "";
    }
    // removeEventListener();
}