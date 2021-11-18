// Exercice 1  Display time in different cities
const timeZone = document.querySelector('.timezone')
const anchorage= new Date().toLocaleString('en-US', {
     timeZone: 'America/Anchorage' 
    })
const date = document.createElement('p');
date.innerHTML= 'Time in Anchorage: ' + anchorage;
timeZone.appendChild(date)
const reykjavik= new Date().toLocaleString('is-IS', {
    timeZone: 'Atlantic/Reykjavik' 
   })
const date2 = document.createElement('p');
date2.innerHTML= 'Time in Reykjavik: ' + reykjavik;
timeZone.appendChild(date2)
const brussels= new Date().toLocaleString('be-BE', {
    timeZone: 'Europe/Brussels' 
   })
const date4 = document.createElement('p');
date4.innerHTML= 'Time in Brussels: ' + brussels;
timeZone.appendChild(date4)

// Exercice 2 

const timestamp= document.querySelector('.timestamp')

const anniversaire= new Date('March 3, 1999 01:12:00');
const now= new Date()
const elapsed = Math.floor((now.getTime() - anniversaire.getTime()) / (1000 * 60))

const date5= document.createElement('p')
date5.innerHTML= "My Birthday: " + anniversaire;

const elapsedTime= document.createElement('p')
elapsedTime.innerHTML= 'We are ' + now.toLocaleDateString() + '  ' + elapsed + ' minutes passed since my birthday';

timestamp.appendChild(date5)
timestamp.appendChild(elapsedTime)

// Exercice 3

const dateIn8000Hours= document.createElement('p')
const add8000Hours= now.getTime() + (8000 * 1000 * 60 * 60)

const timeIn8000Hours= new Date(add8000Hours)

dateIn8000Hours.innerHTML= 'We are ' + now.toLocaleDateString() + ' In 8000 hours it will be ' + timeIn8000Hours.toLocaleDateString();
timestamp.appendChild(dateIn8000Hours)

// Exercice 4 Calendrier 

const footer= document.querySelector('footer')
var p1= document.createElement('p')
p1.setAttribute('class', 'jour')
const jour= now.toDateString().slice(0,4)
p1.innerHTML= jour;

var p2= document.createElement('p')
p2.setAttribute('class', 'nombre')
const nombre= now.toDateString().slice(7,10)
p2.innerHTML= nombre;

var p3= document.createElement('p')
p3.setAttribute('class', 'mois')
const mois= now.toDateString().slice(4,7)
p3.innerHTML= mois;

var p4= document.createElement('p')
p4.setAttribute('class', 'annee')
const annee= now.toDateString().slice(10, 15)
p4.innerHTML= annee;

const calendrier= document.createElement('article')
calendrier.setAttribute('class', 'calendrier')
calendrier.appendChild(p1)
calendrier.appendChild(p2)
calendrier.appendChild(p3)
calendrier.appendChild(p4)
footer.appendChild(calendrier)

// Horloge 
const horloge= document.createElement('article');
var p5= document.createElement('section')
horloge.appendChild(p5)
    footer.appendChild(horloge)
setInterval(() => {
    let now= new Date()
    
    horloge.setAttribute('class', 'horloge')
    let heures= now.getHours();
    let minutes= now.getMinutes();
    let secondes= now.getSeconds();
    if(heures < 10){heures= "0" + heures}
    if(minutes < 10){minutes= "0" + minutes}    
    if(secondes < 10){secondes= "0" + secondes}

    p5.innerHTML= heures+ ':' +minutes + ':' + secondes;

}, 1000);

// Find Timestamp of a given date
countElapsed();
const reponse= document.querySelector('.reponse')
function countElapsed(){
const main= document.querySelector('main')
const reponse= document.createElement('input')
reponse.setAttribute('class', 'reponse');
reponse.type= "date"
reponse.defaultValue = '2000-03-03'

    reponse.value;

let y = new Date(reponse.value)

let tempsPassé= Math.floor((now.getTime()-y.getTime())/ 1000);
const tempsEcoulé= document.createElement('p')
tempsEcoulé.setAttribute('class', 'temps_écoulé')

if (tempsPassé < 24 * 60 * 60){
    tempsEcoulé.innerHTML= "Nous sommes " + now.toLocaleDateString() + ' ' + Math.floor(tempsPassé/24 /60 /60) + ' ' + "jours sont passés depuis" + ' ' + y.toLocaleDateString();
}
if ((tempsPassé > 24 * 60 * 60)&& (tempsPassé < 30 * 24 * 60 * 60)){
    tempsEcoulé.innerHTML= "Nous sommes " + now.toLocaleDateString() + ' ' + Math.floor(tempsPassé/60 /60 /24 /30) + ' ' + "mois sont passés depuis" + ' ' + y.toLocaleDateString();
}
if (tempsPassé > 356 * 24 * 60 * 60){
    tempsEcoulé.innerHTML= "Nous sommes " + now.toLocaleDateString() + ' ' + Math.floor(tempsPassé/365 /24 /60 /60) + ' ' + "années sont passées depuis" + ' ' + y.toLocaleDateString();
}

main.appendChild(reponse)
main.appendChild(tempsEcoulé)
}











