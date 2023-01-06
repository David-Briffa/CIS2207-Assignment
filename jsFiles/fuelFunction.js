var pump = document.getElementById('pump');
var litreDisplay = document.getElementById('litres');
var sale = document.getElementById('sale');
var costDisplay = document.getElementById('cost');
var totalSale = document.getElementById('totalsale');
var back = document.getElementById('back');
var complete = document.getElementById('complete');
var progressBar = document.getElementById('progressbar-in');
complete.style.display = "none";
var litres = 0;
var cost = 0;
var limit = 0;
var price = [];
getFuelPrice();
setValues();
var rate = 54;
var slowLevel = 0;
display();
costDisplay.innerHTML = cost.toFixed(3);
totalSale.innerHTML = limit.toFixed(3);
table = document.getElementById('transactionsMadeTable');
console.log(table);

function pumpFuel() {
    
    if ((litres*cost) > (limit - 0.5)) {
        if (slowLevel == 0) {
            slow();
        }
        if ((litres*cost) > (limit - 0.16)) {
            if (slowLevel == 1) {
                slow();
            }
        }
    }
    if (((litres+0.0364)*cost) > limit) {
        litres=limit/cost;
    }
    else {
        litres+=0.0364;
    }
    
    display()
    if (litres*cost.toFixed(2) == limit.toFixed(2)) {
        progressBar.style.backgroundColor = "green";
        window.location.replace("transaction.html");
    }
    sessionStorage.setItem("lastSale",((litres*cost).toFixed(2)).toString());
}

function start() {
back.style.display = "none";
if (sessionStorage.payDynamically == "True") {
    complete.style.display = "block";
}
pump = setInterval(pumpFuel, rate)

}
function slow() {
    slowLevel++;
    rate *= 4;
    clearInterval(pump);
    pump = setInterval(pumpFuel, rate)
}
function stop() {
    clearInterval(pump);
}
function display() {
    litreDisplay.innerHTML = litres.toFixed(3);
    sale.innerHTML = (litres*cost).toFixed(3);
    progressBar.style.width = (((litres*cost)/limit)*100).toString() + '%';
}

//from fuelPrice
function getFuelPrice(){

    var arrPointer = 0;
    var cookieString = localStorage.fuelPriceCookie;
    var currentString = null;

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
            price[arrPointer] = currentString;
            currentString = null;
            arrPointer++;
        }

        price[arrPointer] = currentString;

    }

}
function setValues() {
    if (sessionStorage.payDynamically == "True") {
        limit = 120;
    }
    else {
        limit = parseFloat(sessionStorage.Total);      
    }
    if (sessionStorage.fuelType == "Diesel") {
        cost = parseFloat(price[1]);
    }
    else if (sessionStorage.fuelType == "Petrol") {
        if (sessionStorage.fuelGrade == "Regular") {
            cost = parseFloat(price[3]);
        }
        else if (sessionStorage.fuelGrade == "Hi-Grade") {
            cost = parseFloat(price[5]);
        }
    }
}
function addTransaction() {
    table = document.getElementById('transactionsMadeTable');
    table.innerHTML += "\n<tr>\n<th id = \"column1\">3</th>\n<th id = \"column2\">18/11/2022</th>\n<th id = \"column3\">12:00</th>\n<th id = \"column4\">Petrol Hi-Grade</th>\n<th id = \"column5\">20</th>\n<th id = \"column6\">12.98</th>\n</tr>"
}