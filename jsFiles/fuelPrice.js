
//sets cookie expiry date
var date = new Date();
date.setTime(date.getTime()+(10*365*24*60*60*1000));
expires = " expires="+date.toUTCString();

//sets fuel type
function fuelType(type){
    document.cookie = "fuelType="+type+";"+expires+";";
}

//sets grade type
function fuelGrade(grade){
    document.cookie = "fuelGrade="+grade+";"+expires+";";
}

//used to read the string in a cookie
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


//converts fuel price string into an array.
function getFuelPrice(){

    var price = [];
    var arrPointer = 0;
    var cookieString = getCookie("fuelPriceCookie");
    var currentString = null;

    debugger;

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



