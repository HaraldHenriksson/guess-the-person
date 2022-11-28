/*
Hygienkrav
Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.

vara responsiv (mobile first, minst 3 olika breakpoints)
semantiskt korrekt
använda flexboxes alternativt CSS grid (går så klart bra att använda Bootstrap/Tailwind etc.)
all data och status ska finnas i JavaScript, dvs ska ej använda DOM som ”single point of truth”
spelet ska vara publicerat på Netlify
 

Versionshantering
(Bedöms i kursen Arbetsmetodik för utvecklare) All källkod ska vara versionshanterad i ett (privat) Git-repository, där ni löpande gör commits med beskrivande commit-meddelanden, så att det är enkelt att följa ert utvecklingsarbete.

 

Struktur
Det ska finnas en Array med objekt, där varje objekt ska ha egenskaperna name och image, där name är en sträng med namnet på personen och image är en URL till bilden på personen.

Array:en ska INTE innehålla någon information som ex. svarsalternativ eller vilket svar som är rätt! Däremot går det bra att lägga till ett id på varje person, om du skulle vilja.

Array:en ska kunna innehålla obegränsat antal personer (dvs du ska aldrig förutsätta att array:en är en viss längd!). När spelet startar/startar om ska man kunna välja hur många personer man vill gissa namnen för (tex. 10, 20 eller samtliga).

För varje person ska hens foto visas, samt fyra svarsalternativ bestående av personens namn (rätt svar) samt tre slumpmässigt utvalda andra personers namn. Platsen för rätt svar ska vara slumpmässig så man inte kan ”fuska” genom att lära sig var rätt svar är placerat. Naturligtvis ska inte samma namn heller förekomma två gånger för samma foto.

Efter att man valt ett svarsalternativ på varje person, så ska resultatet visas (alt. om man trycker på en knapp ”Visa resultat”), samt efter varje spelrunda där man får reda på hur många rätt vs. fel man hade (t.ex. 16/20 rätt om man gissade rätt på 16 av 20 personer).

 

Deadline
Inlämning ska ske senast måndag 5 december kl. 23:55 under Inlämningsuppgift 1 för kursen JavaScript Grundkurs – FED22M i Itslearning.

Glöm inte bjuda in mig (drblue) som collaborator på GitHub!

Skicka in

Länk till ditt GitHub-repo
Länk till ditt publicerade spel
Om du gjort G eller VG-nivå
Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämning
*/

const picEl = document.querySelector('#pic');
const startEl = document.querySelector('#start')
const namesEl = document.querySelector('#names')
const tenEl = document.querySelector('#ten')
const twentyEl = document.querySelector('#twenty')
const allEl = document.querySelector('#all')
const btnEl = document.querySelector('#btn');


startEl.addEventListener('click', () => {
    startEl.style.display = 'none';
    namesEl.style.display = 'flex';
    picEl.style.display = 'flex';
});


// MAKING A COPY OF ARRAY
arrayCopy = [...array]



tenEl.addEventListener('click', () => {
  easyMode = arrayCopy.slice(0, 10);
  console.log(easyMode);
});

twentyEl.addEventListener('click', () => {
  
});

allEl.addEventListener('click', () => {
  
});

// ADDING FISHER YATES METHOD 
const shuffleArr = (array) => {
	for (let i = array.length - 1; i > 0; i--)  {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

let guesses = 0;
let corrNrOfGuesses = 0;
let newRandomArr = [];
let corrClassmate = "";
let corrName = "";

// START function 
const start = () => {

  
  if (guesses !== array.length) {

    //DISPLAY CORRECT PHOTO HERE SOMEHOW

  //SHUFFLE THE ARRAY
    shuffleArr(arrayCopy);
  //GENERATE NEW ARRAY
  newRandomArr = arrayCopy.slice(0, 3);
  newRandomArr.push(corrName);
  console.log(newRandomArr)


    btnEl.innerHTML = "";

    // DISPLAYING NAMES FROM NEW ARRAY
    newRandomArr.forEach( (names) => {
      if (names.name === corrName) {
        btnEl.innerHTML += `<button id="corrGuess" class="btn btn-light">${names.name}</button>`
      } else btnEl.innerHTML += `<button id="btn" class="btn btn-light">${names.name}</button>`
    })
  }
}
start();

btnEl.addEventListener('click', e => {

  if (e.target.tagName === 'BUTTON') {
    guesses++;
    console.log(guesses)
  }
})



// // GETTING THE CORRECT NAME 
// const getRandom = array[Math.floor(Math.random() * array.length)];
// console.log(getRandom.image, getRandom.name);

// const actualName = getRandom.name
// console.log(actualName)


// //MAKING A FUNCTION WICH GENERATES RANDOM NAMES 
// const randomNames = () => {
//    return array[Math.floor(Math.random() * array.length)]
// }


// // MAKING A NEW RANDOM ARRAY WITH 3 MORE NAMES
// const randomArr = array.sort(() => 0.5 - Math.random());
// console.log(randomArr)

// const slicedArr = randomArr.slice(0, 3);
// console.log(slicedArr);

// slicedArr.forEach(names => {
//     console.log(names.name)
// })
// //======================

// const newPic = () => {
//   picEl.innerHTML += `<img src="students/${getRandom.image}" alt="">`;
// };
// newPic();
