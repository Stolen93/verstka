
var polygons = document.querySelectorAll(".polygon");
var cards = document.querySelectorAll(".card");
var inputs = document.querySelectorAll(".card__input");
var circles = document.querySelectorAll(".card__circle");
var buy = document.querySelectorAll(".card__buy");

for (var i = 0; i < cards.length; i++) {
    if (polygons[i].classList.contains("disabled") == true) {
        var cardCaptions = cards[i].querySelectorAll(".card__caption");
        for (var a = 0; a < cardCaptions.length; a++) {
            cardCaptions[a].classList.add("hide");
            if (cardCaptions[a].classList.contains("disabled") == true) {
                cardCaptions[a].classList.remove("hide");
            }
        }
    }
}

document.addEventListener("click", function (e) {
    var target = e.target;
    for (var i = 0; i < cards.length; i++) {
        var cardCaptions = cards[i].querySelectorAll(".card__caption");
        if (target == polygons[i] & target.classList.contains("disabled") == false || target == buy[i] & target.classList.contains("disabled") == false) {
            if (polygons[i].classList.contains("selected") == false) {
                inputs[i].checked = true;
                polygons[i].classList.toggle("selected");
                circles[i].classList.toggle("selected");
                hoverOn(i);
                for (var a = 0; a < cardCaptions.length; a++) {
                    cardCaptions[a].classList.add("hide");
                    if (cardCaptions[a].classList.contains("selected") == true) {
                        cardCaptions[a].classList.remove("hide");
                    }
                }
            }
            else {
                inputs[i].checked = true;
                polygons[i].classList.toggle("selected");
                circles[i].classList.toggle("selected");
                hoverOff(i);
                for (var a = 0; a < cardCaptions.length; a++) {
                    cardCaptions[a].classList.add("hide");
                    if (cardCaptions[a].classList.contains("default") == true) {
                        cardCaptions[a].classList.remove("hide");
                    }
                }
            }
        }
    }
})

function hoverOn(i) {
    var cardDescr = cards[i].querySelector(".card__descr_hover");
    cards[i].onmouseover = function (e) {
        if (e.target == polygons[i] & polygons[i].classList.contains("selected") == true) {
            if (cardDescr.classList.contains("hide") == false) {
                cardDescr.classList.add("hide");
                cardDescr.previousElementSibling.classList.remove("hide");
            }
            else {
                cardDescr.classList.remove("hide");
                cardDescr.previousElementSibling.classList.add("hide");
            }
        }
    };
    cards[i].onmouseout = function (e) {
        if (e.target == polygons[i] & polygons[i].classList.contains("selected") == true) {
            cardDescr.classList.add("hide");
            cardDescr.previousElementSibling.classList.remove("hide");
        }
    };
}

function hoverOff(i) {
    var cardDescr = cards[i].querySelector(".card__descr_hover");
    cardDescr.classList.add("hide");
    cardDescr.previousElementSibling.classList.remove("hide");
}