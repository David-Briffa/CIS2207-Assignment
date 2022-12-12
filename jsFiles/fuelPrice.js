
//checks if the fuel prices are set on system startup. if the values are not set default fuel prices are set.
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

        localStorage.setItem("fuelPriceCookie","Diesel,1.21,PetrolRegular,1.50,PetrolHi-grade,1.30;");


    }

    //sets the priceSetCheck to 1 to show that the program has been started before
    localStorage.setItem("priceSetCheck","1");

}

//sets fuel type
function fuelType(type){
    sessionStorage.setItem("fuelType",type);

    priceIntializeSetter();

}

//sets grade type
function fuelGrade(grade){
    sessionStorage.setItem("fuelGrade",grade);
}

var price = [];
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

function setFuelPrice(fuelType,newPrice){

    getFuelPrice();

    debugger;
    for(var i =0; i<price.length;i+=2){

        if(price[i]==fuelType){
            price[i+1]=newPrice;
            i=price.length;
        }

    }

    var priceString = price.toString();
    localStorage.setItem("fuelPriceCookie",priceString);


}



