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




