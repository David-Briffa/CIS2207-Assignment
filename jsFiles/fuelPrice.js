
var date = new Date();
date.setTime(date.getTime()+(10*365*24*60*60*1000));
expires = " expires="+date.toUTCString();

function fuelType(type){
    document.cookie = "fuelType="+type+";"+expires+";";
}

function fuelGrade(grade){

    document.cookie = "fuelGrade="+grade+";"+expires+";";

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

