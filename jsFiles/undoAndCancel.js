function cancelTransaction(){
    sessionStorage.clear();
    window.location.replace("index.html");
}

function cashUndo(){
    sessionStorage.removeItem('payByCard');
    window.location.replace("paymentInterface.html");
}