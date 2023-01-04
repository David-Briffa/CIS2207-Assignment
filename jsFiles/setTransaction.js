    var transactionStorage = [];
    var price = [];
    initialStart();
    setTransactionStorage();

    function initialStart(){
        //localStorage.removeItem("TransactionStorageCookie");
        if(localStorage.getItem("TransactionStorageCookie")===null){
            var htmlString = "";
            htmlString += "<tr class=\"transaction-headers\"><th id = \"column1\">Date</th><th id = \"column2\">Transaction Time</th><th id = \"column3\">Fuel Type</th><th id = \"column4\">Amount in €</th><th id = \"column5\">Number of Litres</th></tr>"; 
            localStorage.setItem("TransactionStorageCookie",htmlString);
        }
    }


    function getFuelPrice() {

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

    //converts transactions string into an array.
    function getTransactionStorage(){
    
        var arrPointer = 0;
        var cookieString = localStorage.TransactionStorageCookie;
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
                transactionStorage[arrPointer] = currentString;
                currentString = null;
                arrPointer++;
            }
    
            transactionStorage[arrPointer] = currentString;
    
        }
    
    }
    
    function setTransactionStorage(){

        /*for(var i =0; i<transactionStorage.length;i+=3){
    
            if(transactionStorage[i]==fuelType){
                transactionStorage[i+1]=fuelGrade;
                transactionStorage[i+2]=Total;
                i=transactionStorage.length;
            }
    
        }*/
        transactionStorage[0] = new Date().toLocaleDateString();
        transactionStorage[1] = new Date().toLocaleTimeString();
        transactionStorage[2] = sessionStorage.fuelType + " " +sessionStorage.fuelGrade;
        transactionStorage[3] = sessionStorage.lastSale;
        setValues();
    
        var htmlString = "<tr><th id = \"column1\">"+transactionStorage[0]+"</th><th id = \"column2\">"+transactionStorage[1]+"</th><th id = \"column3\">"+transactionStorage[2]+"</th><th id = \"column4\">"+transactionStorage[3]+"</th><th id = \"column5\">"+transactionStorage[4]+"</th></tr>";
        localStorage.setItem("TransactionStorageCookie",localStorage.TransactionStorageCookie+htmlString);
        //converts array to string and stores in local storage    
    }
    
    function setValues() {
        getFuelPrice();
        if (sessionStorage.fuelType == "Diesel") {
            transactionStorage[4] = (sessionStorage.lastSale / parseFloat(price[1])).toFixed(2);
        }
        else if (sessionStorage.fuelType == "Petrol") {
            if (sessionStorage.fuelGrade == "Regular") {
                transactionStorage[4] = (sessionStorage.lastSale / parseFloat(price[3])).toFixed(2);
            }
            else if (sessionStorage.fuelGrade == "Hi-Grade") {
                transactionStorage[4] = (sessionStorage.lastSale / parseFloat(price[5])).toFixed(2);
            }
        }
    }