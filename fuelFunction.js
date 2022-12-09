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
var cost = 1.35;
var limit = 0;
if (sessionStorage.payDynamically == "True") {
    limit = 120;
}
else {
    limit = 7;
}
var rate = 54;
var slowLevel = 0;
display();
costDisplay.innerHTML = cost.toFixed(3);
totalSale.innerHTML = limit.toFixed(3);

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
        litres+=(limit-(litres*cost))/1.35;
    }
    else {
        litres+=0.0364;
    }
    
    display()
    if (litres*cost == limit) {
        progressBar.style.backgroundColor = "green";
        window.location.replace("transaction.html");
    }
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