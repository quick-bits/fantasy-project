'use strict'
var darkFantasy = ['Baba Yaga', 'Death', 'Dracula', 'Joker', 'Thanos'];
var Animes = ['Naruto', 'Pikatchu', 'Saitama', 'AllForOne'];
var Hitorical = ['Loki', 'medusa', 'RA', 'Zues', 'sleep paralysis', 'Temple Guard'];
var novels = ['conan', 'emma', 'victorFrankenstien', 'peterpan', 'jaygatsby', 'missHavisham', 'RolandDeschain', 'sherlok', 'harryPotter'];

function randomPick(min, max) {
    var val = Math.floor(Math.random() * (max - min + 1) - min);
    return val;
}


var imageKlick = document.getElementById('category-images');
var img1 = document.getElementById('1');
var img2 = document.getElementById('2');
var img3 = document.getElementById('3');
var img4 = document.getElementById('4');
var message = document.getElementById('result-message');
var submitform = document.getElementById('formSet');
var describ = document.getElementById('character-desctintion');


var imgs = document.createElement('img');
describ.appendChild(imgs);
//add the deescription oart with a paragraph
var describtion = document.createElement('p');
describ.appendChild(describtion);
//add the audio clip element
var audioClips = document.createElement('audio');
describ.appendChild(audioClips);
//animation
// var spinner = document.createElement('div');
// describ.appendChild(spinner);
// spinner.setAttribute('class', 'double-spinner');

function randomHistory() {

    // console.log(Hitorical[randomPick(0, History.all.length - 1)]);
    var index = randomPick(0, Hitorical.length - 1);
    if (Hitorical[index] === 'Loki') {

        imgs.setAttribute('src', `img/historicalfantasy/Loki.png`);
        describtion.textContent = " In Norse mythology, Loki is the God of mischief and trickery, his father was the giant Fárbauti and he is the stepbrother of Thor.  apper: 1. Thor ragnarok 2017 2. Thor 2011  3. the avengers end game 2019   4. the avengers 2012   5. Thor the dark world 2013 6. the avengers infinity war 2018 7. the avengers age of ultron 2015 8  lego marvel super hero: Maximum Overload (animition 2013) 9. Thor: Tales of Asgard (Fantasy / Action 2011)";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Loki.mp3');
        audioClips.load();
        audioClips.controls = true;

    }
    if (Hitorical[index] === 'RA') {
        imgs.setAttribute('src', `img/historicalfantasy/RA.png`);
        describtion.textContent = " Ra was believed to rule in all parts of the created world: the sky, the Earth, and the underworld. He was the god of the sun, order, kings, and the sky. Ra was portrayed as a falcon and shared characteristics with the sky god Horus. The Egyptians believed that Ra created the seasons, plants, animals, and even humankind apper: 1. Gods Of Egypt 20162. Ra, The Sun God 2011 3. Yu-Gi-Oh Anime 1996";
        audioClips.setAttribute('src', 'aud/historicalfantasy/RA.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (Hitorical[index] === 'Zues') {
        imgs.setAttribute('src', `img/historicalfantasy/Zues.png`);
        describtion.textContent = "Zeus is the God of lighting, God of all Gods and ruler of Olympus. In Greek Mythology, Zeus is the one who defeated Cronus. He is the youngest brother of Hades and Poseidon, and married to Hera. Zeus is described as being cheeky, bossy and overly sensitive, which causes his temper to rise. He cares dearly about his brothers, and although he teases them a lot, he is also a source of reason. Zeus is a member of the 6 Traitors Dynasty.";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Zues.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (Hitorical[index] === 'sleep paralysis') {
        imgs.setAttribute('src', `img/historicalfantasy/sleep paralysis.png`);
        describtion.textContent = "Sleep paralysis is a feeling of being unable to move, it is most likely to occur during adolescence, the episodes last from a few seconds to a few minutes. Stress, sleep deprivation, and panic disorder may trigger it, an inability to move or speak is an essential feature, and there may be hallucinations. apper: 1.  Sleep-Paralysis (2004)  2.  Mara (I) (2018) 3. Slumber (I) (2017) 4. The X Files (1993–2018) Episode: Ghouli (2018). 5.  Lucid (2017)";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Sleep Paralysis.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (Hitorical[index] === 'Temple Guard') {
        imgs.setAttribute('src', `img/historicalfantasy/Temple Guard.png`);
        describtion.textContent = "Anubis or Inpu, Anpu in Ancient Egyptian is the Greek name of the god of death, mummification, embalming, the afterlife, cemeteries, tombs, and the Underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head. Archeologists have identified Anubis's sacred animal as an Egyptian canid, the African golden wolf.";
        audioClips.setAttribute('src', 'aud/historicalfantasy/Temple Guard.mp3');
        audioClips.load();
        audioClips.controls = true;
    }

}


function randomAnime() {
    var index = randomPick(0, Animes.length - 1);
    if (Animes[index] === 'Naruto') {
        imgs.setAttribute('src', `img/animefantasy/Naruto.png`);
        describtion.textContent = "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Naruto.mp3');
        audioClips.load();
        audioClips.controls = true;

    }
    if (Animes[index] === 'Pikatchu') {
        imgs.setAttribute('src', `img/animefantasy/Pikatchu.png`);
        describtion.textContent = " A young boy with his trusted Pikachu travel the region with different companions and Pokémon in a quest to become a Pokémon Master… it’s a classic story that we’ve all heard in bits & pieces. This is no conventional fantasy series, and the newer episodes feel more aimed at kids.";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Pikatchu.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (Animes[index] === 'Saitama') {
        imgs.setAttribute('src', `img/animefantasy/Saitama.png`);
        describtion.textContent = "Saitama is an ordinary-looking bald man with a thin but well-built physique and is of average height and weight. He used to have a full head of short black hair but lost it due to the intensity of his hero training regimen. Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful being to exist in the series. ";
        audioClips.setAttribute('src', 'aud/animefsntsdy/Saitama.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (Animes[index] === 'AllForOne') {
        imgs.setAttribute('src', `img/animefantasy/AllForOne.png`);
        describtion.textContent = "After being mortally injured by All Might years ago, All For One's face seems to be made entirely of scar tissue, extending from above his upper lip and covering his entire head and the back of his neck. As such, he has no visible nose, ears, hair or eyes, though the outlines of eye sockets can be seen. As a result of having no eyes, he cannot see properly, but “sees” by using an infrared vision Quirk and by sensing the directions of vibrations in the area around him, similar to echolocation. ";
        audioClips.setAttribute('src', 'aud/animefsntsdy/AllForOne.mp3');
        audioClips.load();
        audioClips.controls = true;
    }

}


function randomDark() {
    var index = randomPick(0, darkFantasy.length - 1);
    if (darkFantasy[index] === 'Baba Yaga') {
        imgs.setAttribute('src', `img/darkfantasy/Baba Yaga.png`);
        describtion.textContent = "Baba Yaga: In March 1964, Hellboy first encountered Baba Yaga  while investigating a string of children disappearing. The disappearances were Baba Yaga's doing as she  kidnapped the children to satisfy her cannibalistic hunger.When Baba Yaga was counting the fingers  of the dead in a cemetery, she attempted to use  a skull (that once belonged to a former devotee named Katayev) to lead her to the Sabbath.";
        audioClips.setAttribute('src', 'aud/darkfantasy/Baba Yaga.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (darkFantasy[index] === 'Death') {
        imgs.setAttribute('src', `img/darkfantasy/Death.png`);
        describtion.textContent = "Death: He does ride a noble, living steed named Binky, after all. The way Death sees it, his job isn’t to kill, but to collect dead souls and wait for them to be reborn. Death is a fictional character in Terry Pratchett's Discworld series and a parody of several  other personifications of death. Like most Grim Reapers, he is a black-robed skeleton usually carrying a scythe. His jurisdiction is specifically the Discworld itself; he is only a part, or minion, of Azrael,  the universal Death. He has been generally used by Pratchett to explore the problems of human existence, and has become more sympathetic throughout the series.";
        audioClips.setAttribute('src', 'aud/darkfantasy/Death.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (darkFantasy[index] === 'Dracula') {
        imgs.setAttribute('src', `img/darkfantasy/Dracula.png`);
        describtion.textContent = "Dracule: sinister figures who use their supernatural powers to hunt humans and drink their blood. Born in Transylvania as the second son of the nobleman Vlad II Dracul, he took the name Dracula,meaning “son of Dracul,”  when he was initiated into a secret order of  Christian knights known as the Order of the Dragon. Dracula is a member of an ancient family of warriors,  some of whom fought against the Huns, the Turks ";
        audioClips.setAttribute('src', 'aud/darkfantasy/Dracula.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (darkFantasy[index] === 'Joker') {
        imgs.setAttribute('src', `img/darkfantasy/Joker.png`);
        describtion.textContent = "The Joker, initially portrayed as a small-time crook,  was disfigured and driven insane by an accident with toxic chemicals.  He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair. ";
        audioClips.setAttribute('src', 'aud/darkfantasy/Joker.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (darkFantasy[[index]] === 'thanos aud') {
        imgs.setAttribute('src', `img/darkfantasy/Thanos.png`);
        describtion.textContent = "Thanos is a mutant member of the race of superhumans known as the Titanian Eternals.Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe To complete this goal, Thanos set about tracking down the Infinity Stones, as the combined efforts might wipe out half the universe.  apper:  1. the avengers end game 2019. 2. the avengers infinity war 2018.3. the avengers age of ultron 2015.4.Guardians of the Galaxy 2014";
        audioClips.setAttribute('src', 'aud/darkfantasy/thanos-aud.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
}


function renderImages() {

    var index = randomPick(0, novels.length - 1);
    if (novels[index] === 'conan') {
        imgs.setAttribute('src', `img/novlsfantasy/conan.png`);
        describtion.textContent = 'Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, several films (including Conan the Barbarian and Conan the Destroyer), television programs (animated and live-action), video games, role-playing games, and other media. The character was created by writer Robert E. Howard in 1932 for a series of fantasy stories published in Weird Tales magazine';
        audioClips.setAttribute('src', 'aud/novlsfantasy/conan.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'emma') {
        imgs.setAttribute('src', `img/novlsfantasy/emma.png`);
        describtion.textContent = "Emma Woodhouse is the 21-year-old protagonist of Jane Austen's novel Emma. She is described in the novel's opening sentence as \"handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her.\" Jane Austen, while writing the novel, called Emma, \"a heroine whom no-one but myself will much like.\" Emma is an independent, wealthy woman who lives with her father in their home Hartfield in the English countryside near the village of Highbury. ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/emma.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'victorFrankenstien') {
        imgs.setAttribute('src', `img/novlsfantasy/victorFrankenstien.png`);
        describtion.textContent = "Victor Frankenstein is the main character in Mary Shelley's 1818 novel Frankenstein; or, The Modern Prometheus. He is a Swiss scientist (born in Naples, Italy) who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature, often referred to as Frankenstein's monster, or often colloquially referred to as simply \"Frankenstein\".";
        audioClips.setAttribute('src', 'aud/novlsfantasy/victorFrankenstien.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'harryPotter') {
        imgs.setAttribute('src', `img/novlsfantasy/haryypotter.png`);
        describtion.textContent = "Harry James Potter is the titular protagonist of J. K. Rowling's Harry Potter series. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practice magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger.";
        audioClips.setAttribute('src', 'aud/novlsfantasy/harrypotter.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'jaygatsby') {
        imgs.setAttribute('src', `img/novlsfantasy/jaygatsby.png`);
        describtion.textContent = "Jay Gatsby (originally named James \"Jimmy\" Gatz) is the title character of the 1925 F. Scott Fitzgerald novel The Great Gatsby. Gatsby is in fact a fictional character, a millionaire and the owner of a luxurious mansion where extravagant parties are often hosted, is described by the novel's narrator, Nick Carraway, as being \"the single most hopeful person I've ever met\".. ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/jaygatsby.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'missHavisham') {
        imgs.setAttribute('src', `img/novlsfantasy/missHavisham.png`);
        describtion.textContent = "Miss Havisham is a character in the Charles Dickens novel Great Expectations (1861). She is a wealthy spinster, once jilted at the altar, who insists on wearing her wedding dress for the rest of her life. She lives in a ruined mansion with her adopted daughter, Estella. Dickens describes her as looking like \"the witch of the place\". \ ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/missHavisham.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'peterpan') {
        imgs.setAttribute('src', `img/novlsfantasy/peterpan.png`);
        describtion.textContent = 'Peter Pan is a fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland. ';
        audioClips.setAttribute('src', 'aud/novlsfantasy/peterPan.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'RolandDeschain') {
        imgs.setAttribute('src', `img/novlsfantasy/RolandDeschain.png`);
        describtion.textContent = "Roland Deschain of Gilead is a fictional character and the protagonist of Stephen King's The Dark Tower series. He is the son of Steven and Gabrielle Deschain and is descended from a long line of \"gunslingers\", peacekeepers and diplomats of Roland's society. ";
        audioClips.setAttribute('src', 'aud/novlsfantasy/RolandDeschain.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
    if (novels[index] === 'sherlok') {
        imgs.setAttribute('src', `img/novlsfantasy/sherlok.png`);
        describtion.textContent = "1. small describtion:Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.  Referring to himself as a 'consulting detective' in the stories, Holmes is known for his proficiency.";
        audioClips.setAttribute('src', 'aud/novlsfantasy/sherlok.mp3');
        audioClips.load();
        audioClips.controls = true;
    }
}

imageKlick.addEventListener('click', categorySelect);

function categorySelect(event) {

    if (event.target.id === '1') {
        document.getElementById("result-message").innerHTML = "";
        renderImages();

    } else if (event.target.id === '2') {
        document.getElementById("result-message").innerHTML = "";
        randomAnime();
    } else if (event.target.id === '3') {
        document.getElementById("result-message").innerHTML = "";
        randomDark();
    } else if (event.target.id === '4') {
        document.getElementById("result-message").innerHTML = "";
        randomHistory();
    }
}