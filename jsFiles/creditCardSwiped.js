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
 function transactionComplete(){
   if(sessionStorage.getItem('payDynamically2') == 'True' || sessionStorage.getItem('payByCard')== 'True'){
      information.textContent = "Card has been charged successfully.";
      information.body.appendChild(information);  
   }
   else{
      information.textContent = "Thank you for using our station!";
      information.body.appendChild(information);  
   }
     
 }
 function Denied() {
    information.textContent = "Card has been denied, please swipe again";       
    information.body.appendChild(information);    
       }
 
 function PayDynamically(){
    sessionStorage.setItem('payDynamically', 'True');
    sessionStorage.setItem('payDynamically2', 'True');
}
 
 function CheckDynamic(){
    if(sessionStorage.getItem('payDynamically') == 'True'){
      alert("This user can buy up to 120eu worth of petrol");
  }
 }

 function PayByCard(){
     sessionStorage.setItem('payByCard', 'True');
  }
  
 function CheckCard(){
    if(sessionStorage.getItem('payByCard') == 'True')
    {
      return true;
    }
    else
    {
      return false;
    }
    }
 
