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
 function PayDynamically(){
  document.cookie = 'dynamicPayment=True';
}
 function getCookie(cookieName) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if(cookieName == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}
 function checkCardCookie() {
   var bool = getCookie("payByCard");
     if (bool == "True") {
       alert("cookie is set, this transaction must lead to card interface after amount is set");
     }
   }
   function checkCardPumpCookie() {
      var bool = getCookie("cardAccepted");
        if (bool == "True") {
         alert("cookie is set, can pump up to 120eu");
        }

      }
 
