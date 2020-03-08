'use strict'

var darkarry= ['Baba Yaga','Death','Dracula','juker'];

var pushimg=[];

var FormConstructor = function (name) {

    this.name = name;
    this.audio=`aud/darkfantasy/${name}.mp3`;
    this.img=`img/darkfantasy/${name}.png`;
    pushimg.push(this);
}
var ser;
function creatOpject(){
    for(var i=0;i<darkarry.length;i++)
    {
       ser=  new FormConstructor(darkarry[i]);
       console.log(pushimg);
    }
}
creatOpject();


var contentForm = document.getElementById('contnet-form');
contentForm.addEventListener('submit', handleSbmit);

function handleSbmit(event) {
    event.preventDefault();
    var selectCategory = event.target.category.value;

    var select = document.getElementById('category');

    if (selectCategory === "Dark Fantasy") {

        ser.renderDark();
    }
    else if (selectCategory === "Historical Fantasy") {

        renderHistorical();
    }
    else if (selectCategory === "Novels Fantasy") {

        renderNovels();
    }
    else if (selectCategory === "Anime Fantasy") {

        renderAnime();
    }
}



var sec1 = document.getElementById('dark');
FormConstructor.prototype.renderDark =function(){
    for(var i=0; i<4; i++){
     var image1 = document.createElement('img');
     image1.setAttribute('src',pushimg[i].img)
     sec1.appendChild(image1);
     var namesCharacter = document.createElement('h2');
     sec1.appendChild(namesCharacter);
     namesCharacter.textContent= pushimg[i].name;
    }
  
}



function renderHistorical() {
    var sec1 = document.getElementById('history');
    // var header = document.createElement('h1');
    // sec1.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // sec1.appendChild(par);
    // par.textContent = 'history'
}

function renderNovels() {
    var sec1 = document.getElementById('novel');
    // var header = document.createElement('h1');
    // sec1.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // sec1.appendChild(par);
    // par.textContent = 'novel'
}

var sec1 = document.getElementById('renderAnime');
function renderAnime() {
    // var header = document.createElement('h1');
    // sec1.appendChild(header);
    // header.textContent = "bla nak akalnaljnj";
    // var par = document.createElement('p');
    // sec1.appendChild(par);
    // par.textContent = 'renderAnimedsdgsd'
}