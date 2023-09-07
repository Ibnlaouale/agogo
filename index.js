let seconde = document.querySelector('#countS');
let munite = document.querySelector('#countM');
let date2 = new Date();
let date = Date.now();


let heure = document.querySelector('#countH');
console.log(heure.textContent);

let boutC20 = document.querySelector('#boutC20');
let boutC5 = document.querySelector('#boutC5');


let divTimer = document.querySelector('#divTimer');
let comeBack = document.querySelector('#comeBack');


/*#################### LES FONCTIONS  ##########################################*/


function afficheChrono(){
    divTimer.classList.remove('hidden');
    comeBack.classList.remove('hidden');
}

function cacheChrono(){

    divTimer.classList.add('hidden');
    comeBack.classList.add('hidden');
}
//----------------------------------

function addSeconds(date, seconds) {
    date.setSeconds(date.getSeconds() + seconds);
    return date;
  };
//------------------------------------------------------
  function addMunites(date, mn) {
    date.setMinutes(date.getMinutes() + mn);
    return date;
  };

//----------------- la valeur `time` en munites ---------------------
  function chrono(time){

    if (time < 0) {
        alert('la valeur doit être positive');
    } else {
       let newDate = new Date();
       let temps = time * 60
    
   let interval = setInterval(() => {
    //  heure.textContent = Math.floor(temps/(60*60)) +':';
     munite.textContent = Math.floor(temps / 60) + ':';
     seconde.textContent = Math.floor(temps % 60);
     
    temps = temps <= 0 ? 0 : --temps;
    console.log(temps);
    
    if (temps === 0) {
        clearInterval(interval);
        cacheChrono();
    }

    }, 1000);
    addMunites(newDate, time);
    comeBack.innerHTML =`Be Back At   ${newDate.getHours()}  :  ${newDate.getMinutes()}  : ${newDate.getSeconds()}`;
    }
     
  }

// ######################################################

/*------------------- boutton 20 secondes  ---------------------*/

boutC20.addEventListener('click', ()=>{
    
    let date = new Date();
    let nextTime = date.getSeconds()+20;
    let time20 = nextTime - date.getSeconds();
    console.log(time20);
    seconde.innerHTML = time20;
    let interval = setInterval(()=>{
        seconde.innerHTML--;
        
        if(seconde.innerHTML<=0){
            clearInterval(interval);
            seconde.textContent = '00';
            cacheChrono();
        }
    //   console.log(seconde.innerHTML);
    }, 1000);
    addSeconds(date, nextTime)
    //date.setSeconds(nextTime);
    afficheChrono();
    
    comeBack.innerHTML =`Be Back At   ${date.getHours()}  :  ${date.getMinutes()}  : ${date.getSeconds()}`;    
});


/*------------------- boutton 5mn  ---------------------*/
boutC5.addEventListener('click', ()=>{
    chrono(5);
    afficheChrono();

});

/*------------------- boutton 15mn  ---------------------*/
const boutTHE = document.getElementById('bout15');
boutTHE.addEventListener('click', ()=>{

    chrono(15);
    afficheChrono();

});

/*------------------- boutton 20mn  ---------------------*/

const btnPD = document.getElementById('btnPD');

btnPD.addEventListener('click', ()=>{


    chrono(20);
    afficheChrono();
});

/*------------------- boutton 30mn  ---------------------*/

const boutCD30 = document.getElementById('boutCD30');
boutCD30.addEventListener('click', ()=>{

   chrono(30);
   afficheChrono();
    
});

/*------------------- la valeur `entrée` input  ---------------------*/

const enter = document.querySelector('#enter');

// console.log(enter);

enter.addEventListener('keyup', (e)=>{
  if (e.key == 'Enter'){
    let time = e.target.valueAsNumber;
    // time = parseInt(time,10);
    console.log(typeof(time));
    chrono(time);
    afficheChrono();
  }    

});
