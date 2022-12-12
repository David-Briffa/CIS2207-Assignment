var information = document.getElementById("information");
var payByCard = document.cookie;
var text = document.getElementById("text");

const swipe = document.getElementById("swipe");
const animation = document.getElementById("animation");
const accepted = document.getElementById("accepted_button");
const denied = document.getElementById("denied_button");

animation.style.display = "none";
denied.style.display = "none";
accepted.style.display = "none";

function Swipe() {
    localStorage.setItem('swiped', 'True');
    information.textContent = "Card Has Been Swiped";       
    information.body.appendChild(information);   
 }
 function Accepted() {
    if(localStorage.getItem('swiped') == 'True'){
        localStorage.removeItem('swiped');
        document.cookie = 'cardAccepted=True';
        window.location.replace("fuelDisplay.html");
    }
 }
 function Denied() {
    information.textContent = "Card has been denied, please swipe again";       
    information.body.appendChild(information);    
       }
 
 function PayDynamically(){
    sessionStorage.setItem('payDynamically', 'True');
}

function CheckDynamic() {
  if (sessionStorage.getItem("payDynamically") == "True") {
    alert("This user can buy up to 120eu worth of petrol");
  }
}

function PayByCard() {
  sessionStorage.setItem("payByCard", "True");
}

function CheckCard() {
  if (sessionStorage.getItem("payByCard") == "True") {
    return true;
  } else {
    return false;
  }
}
