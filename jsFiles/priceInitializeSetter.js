
//this program is used to set the initial price of the fuel upon the first time starting the program. It will not affect any changes made by the manager.

//reads the cookie value
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

//sets cookie expiry date
var date = new Date();
date.setTime(date.getTime()+(10*365*24*60*60*1000));
expires = " expires="+date.toUTCString();

//checks if this is the first startup of the system
if(getCookie("priceSetCheck")=="1"){
    document.cookie = "priceSetCheck=1;"+expires+";";
}
else{
    document.cookie = "priceSetCheck=0;"+expires+";";
}

//if it is the first start up then set the fuelPriceCookie
if(getCookie("priceSetCheck")!="1"){

    document.cookie = "fuelPriceCookie=diesel,1.21,petHi,1.50,petLo,1.30;"+expires+";";

}

//sets the priceSetCheck to 1 to show that the program has been started before
document.cookie = "priceSetCheck=1;"+expires+";";