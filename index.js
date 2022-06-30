const display = document.getElementById('idCounter')
const neptune = document.getElementById('neptune')
const sun = document.getElementById('sun')
var plus1Btn = document.getElementById('idMainBtn')
var multi_1 = document.getElementById('idButton1')
var multi_2 = document.getElementById('idButton2')
var multi_3 = document.getElementById('idButton3')
var multi_5 = document.getElementById('idButton5')
var bouton_lottery = document.getElementById('idButton6')
var display_stock_terre = document.getElementById('idNombreBonus1')

var display_stock_lune = document.getElementById('idNombreBonus2')
var display_stock_mars = document.getElementById('idNombreBonus3')
var display_price_terre = document.getElementById('price1')
var display_price_lune = document.getElementById('price2')
var display_price_mars = document.getElementById('price3')
var display_price_neptune = document.getElementById('price4')
var display_price_sun = document.getElementById('price5')

var perSeconds = document.getElementById('perSeconds')

var stock_terre = 3;
var stock_lune = 3;
var stock_mars = 3;

var total = 0;

plus1Btn.addEventListener('click', oneHandler)

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_price_1 = 1;
let counter_price_2 = 1;
let counter_price_3 = 1;

multi_5 = false;

var pointsPerClick = 0;


// function on main button
function oneHandler(){

/// check if lottery available
if (total>120) { 
    lottery_field.style.visibility = "visible";}


// check if multi available
let bonus1 = document.querySelector('.bonus1')
let imageEarth = document.querySelector('.imageEarth')
let hidden1 = document.querySelector('.hidden1')
if (counter_1>=3)
{
    let span1 = document.createElement('span');
    let text1 = document.createTextNode('You used all Earth');
    span1.appendChild(text1)
    bonus1.appendChild(span1)
    span1.style.backgroundColor = 'red'
    imageEarth.classList.add('img-nonColor')
    hidden1.classList.add('show')
}

let imageMoon = document.querySelector('.imageMoon')
let bonus2 = document.querySelector('.bonus2')
let hidden2 = document.querySelector('.hidden2')
if (counter_2>=3)
{
    let span2 = document.createElement('span');
    let text2 = document.createTextNode('No Moon anymore');
    span2.appendChild(text2)
    bonus2.appendChild(span2)
    span2.style.backgroundColor = 'red'
    imageMoon.classList.add('img-nonColor')
    hidden2.classList.add('show')
}

let imageVenus = document.querySelector('.imageVenus')
let bonus3 = document.querySelector('.bonus3')
let hidden3 = document.querySelector('.hidden3')
if (counter_3>=3)
{
    let span3 = document.createElement('span');
    let text3 = document.createTextNode('Mars is out');
    span3.appendChild(text3)
    bonus3.appendChild(span3)
    span3.style.backgroundColor = 'red'
    imageVenus.classList.add('img-nonColor')
    hidden3.classList.add('show')
}

// get points
if (multi_5 == true)
{
    total = pointsPerClick + total;
    display.innerHTML = total;
}
else if (multi_1 == true && multi_2 == true && multi_3 == true)
{
    total = counter_1*2 + counter_2*5 + counter_3*10 + total; 
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
}
else if (multi_1 == true && multi_2 == true)
{
    total = counter_1*2 + counter_2*5 + total; 
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
}
else if (multi_1 == true)
{
    total = counter_1*2 +total; 
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
}   
else if (multi_2 == true)   
{
    total = counter_2*5+total; 
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
}
else if (multi_3 == true)   
{
    total = counter_3*10+total; 
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
}
else
{
    total += 1;
    display.innerHTML = total;
}}
    



// function mutliplicateur_1
multi_1.addEventListener('click',earth);


/**
 * click on earth planet
 * @function
 * @param {number} pointsPerClick - nombre de points par clic.
 * @param {number} total - Total points.
 * @returns {number, innerHTML} - points par clic, mise à jour du html  
 * @returns {boolean} - multi_1 = true
 */
function earth ()
{
    if(total>=15*counter_price_1){
        total-=15*counter_price_1;
        counter_price_1++;
        counter_1++;
        pointsPerClick = pointsPerClick+2;
        multi_1 = true;
        display.innerHTML = total;
        perSeconds.innerHTML = pointsPerClick;
        stock_terre--;
        display_stock_terre.innerHTML = `Stock x${stock_terre}`
        display_price_terre.innerHTML = `${counter_price_1*15}`}
        else 
        {

            display_price_terre.innerHTML = `the planet cost ${counter_price_1*15} stars. Collect more stars and come back!`
            setInterval(noMoney, 3000)
            function noMoney () {display_price_terre.innerHTML = `${counter_price_1*15}`
        }
}
}

// function mutliplicateur_2
multi_2.addEventListener('click',()=>{
    if(total>=100*counter_price_2){
    total-=100*counter_price_2;
    counter_price_2++;
    counter_2++;
    pointsPerClick = pointsPerClick+5;
    multi_2 = true;
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
    stock_lune--;
    display_stock_lune.innerHTML = `Stock x${stock_lune}`
    display_price_lune.innerHTML = `${counter_price_2*100}`}
    else 
        {
            display_price_lune.innerHTML = `the planet cost ${counter_price_2*100} stars. Collect more stars and come back!`
            setInterval(noMoney, 3000)
            function noMoney () {display_price_lune.innerHTML = `${counter_price_2*100}`
        }
}})

// function mutliplicateur_3
multi_3.addEventListener('click',()=>{
    if(total>=300*counter_price_3){
    total-=300*counter_price_3;
    counter_price_3++;
    counter_3++;
    pointsPerClick = pointsPerClick+10;
    multi_3 = true;
    display.innerHTML = total;
    perSeconds.innerHTML = pointsPerClick;
    stock_mars--;
    display_stock_mars.innerHTML = `Stock x${stock_mars}`
    display_price_mars.innerHTML = `${counter_price_3*300}`}
    else 
        {
            display_price_mars.innerHTML = `the planet cost ${counter_price_3*300} stars. Collect more stars and come back!`
            setInterval(noMoney, 3000)
            function noMoney () {display_price_mars.innerHTML = `${counter_price_3*300}`
        }
}})

// auto Click

var idButton4 = document.getElementById('idButton4')
idButton4.addEventListener('click' ,()=> {
    if(total >= 500){
        total -= 500;
        var time = setInterval(function () {
            total +=  pointsPerClick;
            console.log (pointsPerClick);
            display.innerHTML = total
        }, 1000);}
        else 
        {
            display_price_neptune.innerHTML = `the planet cost 500 stars. Collect more stars and come back!`
            setInterval(noMoney, 3000)
            function noMoney () {display_price_neptune.innerHTML = `500`;
        }
        
    }
})

// Bonus 30 
var container = document.querySelector('.container-timer')
var timerBonus = document.querySelector('.reverse-timer')
var idBonus5 = document.getElementById('idBonus5')
var secoundCount = document.querySelector('.secound-count')
idBonus5.addEventListener('click', ()=> {
    if(total >= 5){
        total -= 5;
    multi_5 = true;
    pointsPerClick = pointsPerClick *3;
    counter_1*3;
    counter_2*3;
    counter_3*3;
    perSeconds.innerHTML = pointsPerClick;
    container.classList.remove('desabled')
    timerBonus.classList.remove('desabled')

    var text = ['29 s', '28 s' , '27 s' , '26 s' , '25 s' , '24 s', '23 s', '22 s','21 s','20 s','19 s','18 s', '17 s' , '16 s' ,'15 s','14 s','13 s', '12 s', '11 s' , '10 s' , '9 s','8 s','7 s','6 s', '5 s', '4 s', '3 s', '2 s', '1 s',''];
    var counter = 0;
    var inst = setInterval(change, 1000);
    function change(){
        secoundCount.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) { 
            counter = 0;
            clearInterval(inst); 
        
    }
        var desableContainerTimer = setInterval(desable, 30000)
        function desable(){
            container.classList.add('desabled')
        }
        // clearInterval(desableContainerTimer)
   }
   
}
   else {
        display_price_sun.innerHTML = `the planet cost 999 stars. Collect more stars and come back!`
        setInterval(noMoney, 3000)
        function noMoney () {display_price_sun.innerHTML = `999`;
   }
}

});



// Loading 

document.onreadystatechange = function() 
  {
    if (document.readyState != "complete") 
    {
        setTimeout(".loading", 1000000);
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".loading").style.visibility = "visible";
    } 
    else 
    {
      document.querySelector(".loading").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };


// alert box with instructions
    const buttonPlay = document.getElementById("buttonPlay");
    buttonPlay.addEventListener('click', () => {
        //alert then hide when clicked
        alert("Hi new astronaut! \nCollect the stars in the galaxy. You can get the help of the planets around you to collect faster, but if you do not have enough stars, they will not help you. \nAlso, they will request more stars as you ask, and there is a limited number of help. \n                                          Good Luck!");
        buttonPlay.style.display = 'none';
    })


//// LOTTERY

//var bouton_lottery = document.getElementById("button_lottery");
var lottery_field = document.getElementById("idBonus6");
var texte_lottery = document.getElementById("idNombreBonusLottery")


/// MISE EN CONDITION D APPARITION A 100 POINTS

bouton_lottery.addEventListener('click',lottery);


function lottery () 
{
    alert ("\n                                       Lottery Game!\n\n You can win or lose between 1 and 10,000 stars with only one click.\n Are you sure ? You could Game over if your collect is negative.\n\n Click again on the planet to try your luck!");
    bouton_lottery.removeEventListener('click',lottery);
    if (bouton_lottery.addEventListener('click', ()=>
    {
        var randomNumber = (Math.random() < 0.5 ? -1 : 1)*(Math.floor(Math.random() * 10000));
        total += randomNumber;
        console.log (randomNumber);
        if (total < 0)
        {
            alert (`Game Over, your score is : ${total}`)
            window.location.reload();
        }
        display.innerHTML = total;
       
        
    }))
    console.log (randomNumber);
}
