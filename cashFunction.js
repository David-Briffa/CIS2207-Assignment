const tenEuro = document.getElementById('10euro_button');
const twentyEuro = document.getElementById('20euro_button');
const fiftyEuro = document.getElementById('50euro_button');
const Total = document.getElementById('totalsale');

var currentResult = 0;

function addTen(){

    const value = parseInt(tenEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

function addTwenty(){

    const value = parseInt(twentyEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

function addFifty(){

    const value = parseInt(fiftyEuro.value);
    currentResult += value;
    outputTotal(currentResult);
}

function outputTotal(total){
    Total.textContent = total;
    var totalObject = {value : total};
    var totalObjectString = JSON.stringify(totalObject);
    localStorage.setItem('total', totalObjectString);
}

