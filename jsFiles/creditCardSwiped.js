var information = document.getElementById("information");  
var payByCard = document.cookie;
var text = document.getElementById("text");

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
 
 function PayByCard(){
    document.cookie = 'payByCard=True';
 }
 function getCookie(cname) {
   let name = cname + "=";
   let ca = document.cookie.split(';');
     for(let i = 0; i < ca.length; i++) {
       let c = ca[i];
       while (c.charAt(0) == ' ') 
       {
           c = c.substring(1);
       }
         if (c.indexOf(name) == 0) 
       {     
         return c.substring(name.length, c.length);
       }
   }
     return "";
   }
 function checkCardCookie() {
   var bool = getCookie("payByCard");
     if (bool != "") {
       alert("cookie is set, this transaction must lead to card interface after amount is set");
     }
   }
   function checkCardPumpCookie() {
      var bool = getCookie("cardAccepted");
        if (bool != "") {
         alert("cookie is set, can pump up to 120eu");
        }
      }
 
