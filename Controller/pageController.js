// Strona
let myFrame = document.getElementById("main");

// Menu
let home = document.getElementById("home");
let apollo = document.getElementById("apollo");
let saturn = document.getElementById("saturn");

// Zmiana strony
window.addEventListener("load", function(){
    let lang = getCookie("lang") || "PL";
    document.getElementById("main").src = "View/"+lang+"_home.html";
    createListeners(lang);
});

// Zmiana strony w zależności od języka
function createListeners(lang){
    if(lang == "PL"){
        home.addEventListener("click",changePageTemplate(myFrame, "View/PL_home.html"));
        apollo.addEventListener("click",changePageTemplate(myFrame, "View/PL_apollo.html"));
        saturn.addEventListener("click",changePageTemplate(myFrame, "View/PL_saturn.html"));
    }else if(lang == "EN"){
        home.addEventListener("click",changePageTemplate(myFrame, "View/EN_home.html"));
        apollo.addEventListener("click",changePageTemplate(myFrame, "View/EN_apollo.html"));
        saturn.addEventListener("click",changePageTemplate(myFrame, "View/EN_saturn.html"));
    }
}

function changePageTemplate(myFrame, template){
        return function(){
            myFrame.src = template;
        }
}

// Zmiana języka pod przyciskiem
document.getElementById("pl").addEventListener("click", function(){
    document.cookie = "lang=PL";
    location.reload();
});

document.getElementById("en").addEventListener("click", function(){
    document.cookie = "lang=EN";
    location.reload();
});

// Info o języku w ciasteczku
function changePageLang(lang){
    if(lang == "PL"){
        document.cookie = "lang=PL";
        location.reload();
    }else if(lang == "EN"){
        document.cookie = "lang=EN";
        location.reload();
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}