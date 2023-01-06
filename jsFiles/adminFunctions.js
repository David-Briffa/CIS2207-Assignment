//used throughout the program


var price = [];

function priceIntializeSetter(){

    //checks if this is the first startup of the system
    if(localStorage.priceSetCheck=="1"){
        localStorage.setItem("priceSetCheck","1");
    }
    if(localStorage.getItem("priceSetCheck")===null){
        localStorage.setItem("priceSetCheck","0");
    }

    //if it is the first start up then set the fuelPriceCookie
    if(localStorage.priceSetCheck!="1"){

        localStorage.setItem("fuelPriceCookie","Diesel,1.21,PetrolRegular,1.30,PetrolHi-grade,1.50");

    }

    //sets the priceSetCheck to 1 to show that the program has been started before
    localStorage.setItem("priceSetCheck","1");

}

// Fuel Information

if (document.getElementById("petrol")) {
    document.getElementById("petrol").addEventListener("click", function() {
        localStorage.setItem("fuel", "Petrol");
    });

    document.getElementById("diesel").addEventListener("click", function() {
        localStorage.setItem("fuel", "Diesel");
        localStorage.setItem("type", "");
    });
}

if (document.getElementById("reg")) {
    document.getElementById("reg").addEventListener("click", function() {
        localStorage.setItem("type", "Regular");
    });

    document.getElementById("high-grade").addEventListener("click", function() {
        localStorage.setItem("type", "Hi-grade");
    });
}

// Storing input element
var inputBox = document.getElementById("inputBox");

var dec = ["0", "0", "0", "0"];
var curr = 3;

if (document.getElementById("a-changePrice")) {
    dec = ["0", "0", "0", "0"];
    curr = 3;

    // keypad
    updateNumber1();
    // Storing the number buttons in a var
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const num4 = document.getElementById("num4");
    const num5 = document.getElementById("num5");
    const num6 = document.getElementById("num6");
    const num7 = document.getElementById("num7");
    const num8 = document.getElementById("num8");
    const num9 = document.getElementById("num9");
    const num0 = document.getElementById("num0");
    const numBack = document.getElementById("numBack");
    const enterBtn = document.getElementById("enterBtn");

    if (num1) {
        // Adding digit 1
        num1.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 1;
                updateNumber1();
            }
        });
        // Adding digit 2
        num2.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 2;
                updateNumber1();
            }
        });
        // Adding digit 3
        num3.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 3;
                updateNumber1();
            }
        });
        // Adding digit 4
        num4.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 4;
                updateNumber1();
            }
        });
        // Adding digit 5
        num5.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 5;
                updateNumber1();
            }
        });
        // Adding digit 6
        num6.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 6;
                updateNumber1();
            }
        });
        // Adding digit 7
        num7.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 7;
                updateNumber1();
            }
        });
        // Adding digit 8
        num8.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 8;
                updateNumber1();
            }
        });
        // Adding digit 9
        num9.addEventListener("click", function() {
            if (curr != -1) {
                addDec();
                dec[3] = 9;
                updateNumber1();
            }
        });
        // Adding digit 0
        num0.addEventListener("click", function() {
            var noOfZeros = 0;
            for (var f = 0; f < 4; f++) {
                if (dec[f] == 0) {
                    noOfZeros += 1;
                }
            }
            if (curr != -1 && noOfZeros != 4) {
                addDec();
                dec[3] = 0;
                updateNumber1();
                noOfZeros = 0;
            }
        });
    }

    if (enterBtn) {
        enterBtn.addEventListener("click", function() {
            var num = " ";
            var decimal = "";
            for (var f = 0; f < 2; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    num = num + dec[f].toString();
                } else {
                    num = num + 0;
                }
            }
            for (var f = 2; f < 4; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    decimal = decimal + dec[f].toString();
                } else {
                    decimal = decimal + 0;
                }
            }
            var result = parseFloat(num + "." + decimal).toFixed(2);
            if (document.getElementById("keypad")) {
                if ((dec[0] == "0" && dec[1] == "0" && dec[2] == "0" && dec[3] == "0") || (dec[0] == "_ " && dec[1] == "_ " && dec[2] == "_ " && dec[3] == "_ ") || result == 0) {
                    document.getElementById("validateOther").innerHTML = "Please enter a new price.";
                    window.setTimeout(function() {
                        document.getElementById("validateOther").innerHTML = "";
                    }, 1500);
                    dec = ["0", "0", "0", "0"];
                    curr = 3;
                    updateNumber1();
                } else {
                    var num = " ";
                    var decimal = "";
                    for (var f = 0; f < 2; f++) {
                        if (dec[f] >= 0 && dec[f] <= 9) {
                            num = num + dec[f].toString();
                        } else {
                            num = num + 0;
                        }
                    }
                    for (var f = 2; f < 4; f++) {
                        if (dec[f] >= 0 && dec[f] <= 9) {
                            decimal = decimal + dec[f].toString();
                        } else {
                            decimal = decimal + 0;
                        }
                    }
                    var result = parseFloat(num + "." + decimal).toFixed(2);
                    localStorage.setItem("pre", result);
                    document.getElementById("continueInput").submit();
                }
            }
        });
    }

    //Admin Enter button change price
    var aEnterBtn = document.getElementById("a-enterBtn");

    if (aEnterBtn) {
        aEnterBtn.addEventListener("click", function() {
            var num = " ";
            var decimal = "";
            for (var f = 0; f < 2; f++) {
                if (dec[f] != null) {
                    num = num + dec[f].toString();
                }
            }
            for (var f = 2; f < 4; f++) {
                if (dec[f] != null) {
                    decimal = decimal + dec[f].toString();
                }
            }
            var result = parseFloat(num + "." + decimal).toFixed(2);
            if (document.getElementById("titlesuccess1")) {
                document.getElementById("titlesuccess1") = result;
            }
            localStorage.setItem("priceToEdit", result);
        });
    }

    if (numBack) {
        numBack.addEventListener("click", function() {
            if (curr != 3) {
                for (var f = 3; f >= curr + 1; f--) {
                    dec[f + 1] = dec[f];
                }
                dec[curr + 1] = "0";
                curr = curr + 1;
            } else {
                dec[3] = "0";
            }
            updateNumber1();
        })
    }

    var backspace = document.getElementById("backspace");
    if (backspace) {
        backspace.addEventListener("click", function() {
            if (curr != 3) {
                for (var f = 3; f >= curr + 1; f--) {
                    dec[f + 1] = dec[f];
                }
                dec[curr + 1] = "0";
                curr = curr + 1;
            } else {
                dec[3] = "0";
            }
            updateNumber1();
        })
    }
}

function addDec() {
    if (curr != 3) {
        for (var f = curr; f <= 3; f++) {
            dec[f] = dec[f + 1];
        }
    }
    curr = curr - 1;
}

function updateNumber1() {
    var num = " ";
    var decimal = "";
    for (var f = 0; f < 2; f++) {
        if (dec[f] != null) {
            num = num + dec[f].toString();
        }
    }
    for (var f = 2; f < 4; f++) {
        if (dec[f] != null) {
            decimal = decimal + dec[f].toString();
        }
    }

    document.getElementById("inputBox").innerHTML = "€" + num.toString() + "." + decimal.toString();
}

// Change Fuel Price Admin
if (document.getElementById("a-changePrice")) {
    // Storing input element
    var aEnterBtn = document.getElementById("a-enterBtn");
    document.getElementById("h-fuelToEdit-selected").innerHTML += localStorage.getItem("fuel") + " " + localStorage.getItem("type");

    // Storing the new Diesel fuel price in local
    if ((localStorage.getItem("fuel") == "Diesel")) {

        var tempFuelPrice;

        getFuelPrice();
        for(i=0;i<price.length;i+=2){

            if(price[i]=="Diesel"){
                tempFuelPrice = price[i+1];
            }

        }

        document.getElementById("h-priceToEdit-price").innerHTML = "€ " + tempFuelPrice;
        aEnterBtn.addEventListener("click", function() {
            var num = " ";
            var decimal = "";
            for (var f = 0; f < 2; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    num = num + dec[f].toString();
                } else {
                    num = num + 0;
                }
            }
            for (var f = 2; f < 4; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    decimal = decimal + dec[f].toString();
                } else {
                    decimal = decimal + 0;
                }
            }
            var result = parseFloat(num + "." + decimal).toFixed(2);
            if (result == 0 || (dec[0] == "0" && dec[1] == "0" && dec[2] == "0" && dec[3] == "0") || (dec[0] == "_ " && dec[1] == "_ " && dec[2] == "_ " && dec[3] == "_ ")) {
                document.getElementById("a-validateOther").innerHTML = "Please enter a new price.";
                dec = ["0", "0", "0", "0"];
                curr = 3;
                updateNumber1();
                window.setTimeout(function() {
                    document.getElementById("a-validateOther").innerHTML = "";
                }, 3000);
            } else {
                localStorage.setItem("priceToEdit", parseFloat(result).toFixed(2));
                setFuelPrice();
                window.location.href = "successChangedFuelPrice.html";
            }
        });

    }
    
    //Storing the new Regular Petrol fuel price in local
    if ((localStorage.getItem("type") == "Regular") && (localStorage.getItem("fuel") == "Petrol")) {

        var tempFuelPrice;

        getFuelPrice();
        for(i=0;i<price.length;i+=2){

            if(price[i]=="PetrolRegular"){
                tempFuelPrice = price[i+1];
            }

        }

        document.getElementById("h-priceToEdit-price").innerHTML = "€ " + tempFuelPrice;
        aEnterBtn.addEventListener("click", function() {
            var num = " ";
            var decimal = "";
            for (var f = 0; f < 2; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    num = num + dec[f].toString();
                } else {
                    num = num + 0;
                }
            }
            for (var f = 2; f < 4; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    decimal = decimal + dec[f].toString();
                } else {
                    decimal = decimal + 0;
                }
            }
            var result = parseFloat(num + "." + decimal).toFixed(2);
            if (result == 0 || (dec[0] == "0" && dec[1] == "0" && dec[2] == "0" && dec[3] == "0") || (dec[0] == "_ " && dec[1] == "_ " && dec[2] == "_ " && dec[3] == "_ ")) {
                document.getElementById("a-validateOther").innerHTML = "Please enter a new price.";
                dec = ["0", "0", "0", "0"];
                curr = 3;
                updateNumber1();
                window.setTimeout(function() {
                    document.getElementById("a-validateOther").innerHTML = "";
                }, 3000);
            } else {
                localStorage.setItem("priceToEdit", parseFloat(result).toFixed(2));
                setFuelPrice();
                window.location.href = "successChangedFuelPrice.html";
            }
        });

    }

    //Storing the new Hi-Grade Petrol fuel price in local
    if ((localStorage.getItem("type") == "Hi-grade") && (localStorage.getItem("fuel") == "Petrol")) {

        var tempFuelPrice;

        getFuelPrice();
        for(i=0;i<price.length;i+=2){

            if(price[i]=="PetrolHi-grade"){
                tempFuelPrice = price[i+1];
            }

        }

        document.getElementById("h-priceToEdit-price").innerHTML = "€ " + tempFuelPrice;
        aEnterBtn.addEventListener("click", function() {
            var num = " ";
            var decimal = "";
            for (var f = 0; f < 2; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    num = num + dec[f].toString();
                } else {
                    num = num + 0;
                }
            }
            for (var f = 2; f < 4; f++) {
                if (dec[f] >= 0 && dec[f] <= 9) {
                    decimal = decimal + dec[f].toString();
                } else {
                    decimal = decimal + 0;
                }
            }
            var result = parseFloat(num + "." + decimal).toFixed(2);
            if (result == 0 || (dec[0] == "0" && dec[1] == "0" && dec[2] == "0" && dec[3] == "0") || (dec[0] == "_ " && dec[1] == "_ " && dec[2] == "_ " && dec[3] == "_ ")) {
                document.getElementById("a-validateOther").innerHTML = "Please enter a new price.";
                dec = ["0", "0", "0", "0"];
                curr = 3;
                updateNumber1();
                window.setTimeout(function() {
                    document.getElementById("a-validateOther").innerHTML = "";
                }, 3000);
            } else {
                localStorage.setItem("priceToEdit", parseFloat(result).toFixed(2));
                setFuelPrice();
                window.location.href = "successChangedFuelPrice.html";
            }
        });
        
    }
};

if (document.getElementById("titlesuccess1")) {
    document.getElementById("titlesuccess1").innerHTML = localStorage.getItem("fuel") + " " + localStorage.getItem("type") + " price was changed successfully."
    document.getElementById("titlesuccess2").innerHTML = "New Price: " + "€" + parseFloat(localStorage.getItem("priceToEdit")).toFixed(2).toString();
    window.setTimeout(function() {
        window.location.href = "homeScreen.html";
    }, 3500);
};

//Admin Login
var admin = document.getElementById("loginAdmin");

if (admin) {

    dec = ["_ ", "_ ", "_ ", "_ "];
    curr = 0;
    updateNumber2();

    // Adding digit 1
    num1.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 1;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 2
    num2.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 2;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 3
    num3.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 3;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 4
    num4.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 4;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 5
    num5.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 5;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 6
    num6.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 6;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 7
    num7.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 7;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 8
    num8.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 8;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 9
    num9.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 9;
            updateNumber2();
            curr += 1;
        }
    });
    // Adding digit 0
    num0.addEventListener("click", function() {
        if (curr != 4) {
            dec[curr] = 0;
            updateNumber2();
            curr += 1;
        }
    });
}

var aInEnterBtn = document.getElementById("enterBtn2");

if (aInEnterBtn) {
    aInEnterBtn.addEventListener("click", function() {
        if (document.getElementById("keypad")) {
            var digits = " ";
            for (var f = 0; f < 4; f++) {
                if (dec[f] != null) {
                    digits = digits + dec[f].toString();
                }
            }
            var result = parseFloat(digits).toString();
            if (result.charAt(0) == "N") {
                document.getElementById("a-in-validateOther").innerHTML = "Please enter a Passcode.";
                window.setTimeout(function() {
                    document.getElementById("a-in-validateOther").innerHTML = "";
                }, 2500);
            } else if (result != "1234") {
                document.getElementById("a-in-validateOther").innerHTML = "Incorrect Passcode.";
                window.setTimeout(function() {
                    document.getElementById("a-in-validateOther").innerHTML = "";
                }, 2000);
                for (var f = 0; f < 4; f++) {
                    dec[f] = "_ ";
                }
                updateNumber2();
                curr = 0;
            } else {
                window.location.href = "homeScreen.html";
            }
        }
    });
}

var backspace2 = document.getElementById("backspace2");

if (backspace2) {
    backspace2.addEventListener("click", function() {
        dec[curr - 1] = "_ ";
        if (curr != 0) {
            curr -= 1;
        }
        updateNumber2();
    })
}

function updateNumber2() {
    var num = " ";
    for (var f = 0; f < 4; f++) {
        if (dec[f] <= 9) {
            num = num + " " + "*";
        } else {
            num = num + "_ ";
        }
    }
    document.getElementById("inputBox").innerHTML = num.toString();
}


//sets new fuel pricing

//converts fuel price string into an array.
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

function setFuelPrice(){

    getFuelPrice();

    if(localStorage.fuel == "Diesel"){
        var fuelType = localStorage.fuel
    }
    else{
        var fuelType = localStorage.fuel.concat(localStorage.type);
    }

    var newPrice = localStorage.priceToEdit;
  
    for(var i =0; i<price.length;i+=2){

        if(price[i]==fuelType){
            price[i+1]=newPrice;
            i=price.length;
        }

    }

    var priceString = price.toString();
    localStorage.setItem("fuelPriceCookie",priceString);

    var transactionStorage = [];
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

    getTransactionStorage();

    debugger;
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
    transactionStorage[3] = sessionStorage.Total;
    setValues();

    htmlString += "<tr><th id = \"column1\">"+transactionStorage[0]+"</th><th id = \"column2\">"+transactionStorage[1]+"</th>\"<th id = \"column3\">"+transactionStorage[2]+"</th><th id = \"column4\">"+transactionStorage[3]+"</th><th id = \"column5\">"+transactionStorage[4]+"</th></tr>"
    localStorage.setItem("TransactionStorageCookie",htmlString);
    //converts array to string and stores in local storage    
}

function setValues() {
    if (sessionStorage.fuelType == "Diesel") {
        transactionStorage[4] = sessionStorage.lastSale / parseFloat(price[1]);
    }
    else if (sessionStorage.fuelType == "Petrol") {
        if (sessionStorage.fuelGrade == "Regular") {
            transactionStorage[4] = sessionStorage.lastSale / parseFloat(price[3]);
        }
        else if (sessionStorage.fuelGrade == "Hi-Grade") {
            transactionStorage[4] = sessionStorage.lastSale / parseFloat(price[5]);
        }
    }
}

function outputArray(){
        transactionTable.innerHTML = localStorage.TransactionStorageCookie;
    }

}
