
var information = document.getElementById("information");  

function Swipe() {
    localStorage.setItem('swiped', 'True');

    information.textContent = "Card Has Been Swiped";       
    document.body.appendChild(information);   
 }
 function Accepted() {
    if(localStorage.getItem('swiped') == 'True'){
        localStorage.removeItem('swiped');
        window.location.replace("fuelDisplay.html");
    }
 }
 function Denied() {
        information.textContent = "Card has been denied, please swipe again";       
        document.body.appendChild(information);    
       }
 
 function PayByCard(){
    localStorage.setItem('card', 'True');
 }
