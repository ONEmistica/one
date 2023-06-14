var dp = document.getElementById("dp");
document.querySelector(".homelogo").addEventListener("mouseover", function () {
    dp.src = "img/mecolored.png";
    dp.style.opacity = "100%";
    dp.style.cursor = "url('img/cursor.svg'), auto";
});
document.querySelector(".homelogo").addEventListener("mouseout", function () {
    dp.src = "img/me.png";
    dp.style.opacity = "50%";
});


var sample = document.getElementById("foobar");
function splay() {
    sample.play();
}
splay();

const servicebg = document.querySelector(".services");
var cBtn = document.querySelectorAll(".contentbtn").length;

for (var i = 0; i < cBtn; i++) {
    document.querySelectorAll(".contentbtn")[i].addEventListener("mouseover", function () {
        this.style.animation = "hover2 0.3s ease-in-out";
        var elid = this.id;
        switch (elid) {
            case "service1":
                servicebg.style.background = "#1d1813";
                servicebg.style.transition = "background 0.5s ease-out";
                break;
            case "service2":
                servicebg.style.background = "#13151d";
                servicebg.style.transition = "background 0.5s ease-out";
                break;
            case "service3":
                servicebg.style.background = "#1c131d";
                servicebg.style.transition = "background 0.5s ease-out";
                break;
            case "service4":
                servicebg.style.background = "#131d16";
                servicebg.style.transition = "background 0.5s ease-out";
                break;
        }
    });
    document.querySelectorAll(".contentbtn")[i].addEventListener("mouseout", function () {
        this.style.animation = "unhover2 0.3s ease-in-out";
        servicebg.style.background = "none";
        servicebg.style.transition = "background 0.5s ease-out";
    });
}

var navBtn = document.querySelectorAll(".navbtn").length;

for (var i = 0; i < navBtn; i++) {
    document.querySelectorAll(".navbtn")[i].addEventListener("mouseover", function () {
        this.style.animation = "hover 0.5s ease-out";

    });
    document.querySelectorAll(".navbtn")[i].addEventListener("mouseout", function () {
        this.style.animation = "unhover 0.4s ease-out";
    });
}



var adItem = document.querySelectorAll(".adhover").length;

for (var i = 0; i < adItem; i++) {
    var di = i + 1;
    document.querySelectorAll(".adhover")[i].addEventListener("mouseover", function () {
        this.style.animation = "adhov 0.3s ease-in-out";

    });
    document.querySelectorAll(".adhover")[i].addEventListener("mouseout", function () {
        this.style.animation = "adunhov 0.3s ease-in-out";
    });
}


