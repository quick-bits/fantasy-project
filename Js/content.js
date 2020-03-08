'use strict'

var FormConstructor = function (name ,personality, description  , appears) {

this.name = name;
this.personality = personality;
this.description = description;
this.appears = appears ;

}


var sec1 = document.getElementById('fantasy');
function renderDark (){
var header = document.createElement('h1');
sec1.appendChild(header);
header.textContent= "bla nak akalnaljnj";
var par = document.createElement('p');
sec1.appendChild(par);
par.textContent ='XSCzvzdvzdvzdvzdcsdcdcdnlsdnlsnvlsnvolsdvsdvdndicjaicaeepajviajipvapivaidnviaviaivadiciad'
}

var contentForm = document.getElementById ('contnet-form') ;
contentForm.addEventListener('submit', handleSbmit) ;

function handleSbmit (event) {

var selectCategory = event.target.category.value ;

var select = document.getElementById ('category');

if (  selectCategory=== "Dark Fantasy"  ){ 

 renderDark ();
}


}

