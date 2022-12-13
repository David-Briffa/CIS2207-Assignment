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
        addToLastAdd(5);
        outputTotal(currentResult);
        break;

        case 10: currentResult += amount;
        addToLastAdd(10);
        outputTotal(currentResult);
        break;

        case 20: currentResult += amount;
        addToLastAdd(20);
        outputTotal(currentResult);
        break;

        case 50: currentResult += amount;
        addToLastAdd(50);
        outputTotal(currentResult);
        break;

        default: 

    }
}

var removeVal = [];

function removeValue(){
    
    getLastAdd();

    if(sessionStorage.getItem('Total')<1){
        return;
    }
    else{
        currentResult = parseInt(sessionStorage.getItem('Total')) - parseInt(removeVal[removeVal.length-1]);
        removeVal.pop();
        var addString = removeVal.toString();
        sessionStorage.setItem("lastAdd",addString);

    }

    outputTotal(currentResult);

}

//converts lastAdd string into an array.
function getLastAdd(){

    var arrPointer = 0;
    var cookieString = sessionStorage.lastAdd;
    var currentString = null;

    if(sessionStorage.lastAdd!=null){
        for(var i =0;i<cookieString.length;i++){

            if(cookieString.charAt(i)!=","){

                if(currentString==null){
                    currentString = cookieString.charAt(i);
                }
                else{
                currentString = currentString.concat(cookieString.charAt(i));
                }
            }
            else{
                removeVal[arrPointer] = currentString;
                currentString = null;
                arrPointer++;
            }

            removeVal[arrPointer] = currentString;

        }
    }

}

function addToLastAdd(added){

    getLastAdd();

    if(sessionStorage.lastAdd==null){

        removeVal[0] = added;

    }
    else{

        for(var i=0;i<removeVal.length+1;i++){
            
            if(removeVal[i]==null){
                removeVal[i] = added;
                i=removeVal.length+1;
            }

        }
    }

    var addString = removeVal.toString();
    sessionStorage.setItem("lastAdd",addString);

}