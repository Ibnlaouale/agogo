let boutC20 = document.querySelector('#boutC20');
let boutC5 = document.querySelector('#boutC5');
let divTimer = document.querySelector('#divTimer');
let comeBack = document.querySelector('#comeBack');
let date = new Date();
let interval = null;


const ul = document.querySelector('ul'); //recuperation des bouttons
ul.addEventListener('click', (e) => { //ecouteur d'evènement sur chaque boutton en même temps
  let cible = e.target.id;
  if (cible === 'boutC20') {
    let value = 20;
    chrono(value);
    afficheChrono();
    showGoBack(value);
  } else if (cible === 'boutC5') {
    let value = 5 * 60;
    chrono(value)
    afficheChrono();
    showGoBack(value)
  } else if (cible === 'bout15') {
    let value = 15 * 60;
    chrono(value)
    afficheChrono();
    showGoBack(value)

  } else if (cible === 'btnPD') {
    let value = 20 * 60;
    chrono(value)
    afficheChrono();
    showGoBack(value)

  } else if (cible === 'boutCD30') {
    let value = 30 * 60;
    chrono(value)
    afficheChrono();
    showGoBack(value)

  }
})


/*------------------- la valeur `entrée` input  ---------------------*/

let enter = document.querySelector('#enter');


enter.addEventListener('keyup', (e) => {

  if (e.key == 'Enter') {
    let t = e.target.valueAsNumber;
    if (t === NaN) {
      alert('veuillez renseigner tous les champ');
      return
    }else
    if (t < 0) {
      alert('la valeur saisie doit être positive');
      return;
    } else {
      t = t * 60;
      chrono(t);
      afficheChrono();
      showGoBack(t)
    }

  }
});


/*================== LES FONCTIONS  ======================*/


function afficheChrono() {
  divTimer.classList.remove('hidden');
  comeBack.classList.remove('hidden');
}

function cacheChrono() {

  divTimer.classList.add('hidden');
  comeBack.classList.add('hidden');
}
// //-----------fonction chrono -----------------------

const chrono = (t) => {
  if (interval !== null) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    timer(t)
    t--;
    if (t === 0) {
      clearInterval(interval);
      cacheChrono();
    }
  }, 1000);
}
//----------------- fonction timer qui determine les valeur de munite, seconde et heures ---------------------
function timer(s) {
  {
    let heure = Math.floor(s / 3600),
      munite = Math.floor(s / 60) % 60,
      seconde = s % 60;

    document.querySelector('#count').innerHTML = `${heure < 10 ? '0' : ''}${heure}:${munite < 10 ? '0' : ''}${munite}:${seconde < 10 ? '0' : ''}${seconde}`;
  }

}

function showGoBack(t) {
  let heure = Math.floor(t / 3600),
    munite = Math.floor(t / 60) % 60,
    seconde = t % 60;
  comeBack.innerHTML = `Be Back At  ${heure < 10 ? '0' : ''}${date.getHours() + heure}:${date.getMinutes() + munite}:${date.getSeconds() + seconde}`;
}