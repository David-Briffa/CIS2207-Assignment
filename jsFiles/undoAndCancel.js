function cancelTransaction(){
    window.location.replace("index.html");
}
function cashUndo(){
    sessionStorage.removeItem('payByCard');
    window.location.replace("paymentInterface.html");
}
function dynamicUndo(){
    sessionStorage.removeItem('payDynamically');
    window.location.replace("fixedDynamicPayment.html");
}
function clearPaymentTypes(){
    sessionStorage.removeItem('payDynamically');
    sessionStorage.removeItem('payByCard');
}
function undoCard(){
    sessionStorage.removeItem('payDynamically');
    sessionStorage.removeItem('payByCard');
    window.location.replace("fixedDynamicPayment.html");
}

