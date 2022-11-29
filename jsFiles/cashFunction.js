const fiveEuro = document.getElementById('5euro_button');
const tenEuro = document.getElementById('10euro_button');
const twentyEuro = document.getElementById('20euro_button');
const fiftyEuro = document.getElementById('50euro_button');
const Total = document.getElementById('totalsale');

var currentResult = 0;
var payByCash = document.cookie;

//sets cookie expiry date
var date = new Date();
date.setTime(date.getTime()+(10*365*24*60*60*1000));
expires = " expires="+date.toUTCString();

//set total amount
function setTotal(total){
    document.cookie = "TotalPay=" + total + ";" + expires + ";";
}

/*function setLocalS(){
    localStorage.setItem('test', 1);
}*/

//adds 5 to total
function addFive(){
    const value = parseInt(fiveEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

//adds 10 to total
function addTen(){

    const value = parseInt(tenEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

//adds 20 to total
function addTwenty(){

    const value = parseInt(twentyEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

//adds 50 to total
function addFifty(){

    const value = parseInt(fiftyEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

//outputs total
function outputTotal(total){
    Total.textContent = total;    
}

