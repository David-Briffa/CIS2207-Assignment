var Total = document.getElementById('totalsale');

var sendToCard = document.getElementById('sendToCard');
var fuelPump = document.getElementById('fuelPump');
sendToCard.style.display = "none";
fuelPump.style.display = "none";

var currentResult = 0;
var payByCash = document.cookie;

//set total amount
function setTotal(total)
{
    sessionStorage.setItem('Total', total);
    let checked = CheckCard();
    if( checked == true)
    {
        sendToCard.style.display = "block";
    }else
    {
        fuelPump.style.display = "block";
    }
}


//outputs total
function outputTotal(total)
{
    Total.textContent = total; 
    setTotal(total);
}

function getTotal()
{
    sessionStorage.getItem('Total');
}

function addToTotal(amount)
{
    switch(amount)
    {
        case 5: currentResult += amount;
        outputTotal(currentResult);
        break;

        case 10: currentResult += amount;
        outputTotal(currentResult);
        break;

        case 20: currentResult += amount;
        outputTotal(currentResult);
        break;

        case 50: currentResult += amount;
        outputTotal(currentResult);
        break;

        default: 

    }
}