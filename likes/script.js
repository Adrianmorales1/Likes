var nielh4= document.querySelector("#nielLike");
var nicoleh4 = document.querySelector("#nicoleLike");
var jimh4 = document.querySelector("#jimLike");
console.log(nielh4);
console.log(nicoleh4);
console.log(jimh4);
var countNM = 1;
var countNK = 1;
var countJR = 1;

function NMlike(element) {
    if(countNM == 1) {
        countNM++;
        nielh4.innerText = "10 like(s)";
        element.innerText = "Unlike";
        element.style.backgroundColor = "green";
    } else {
        countNM --;
        nielh4.innerText = "9 like(s)";
        element.innerText = "Like";
        element.style.backgroundColor = "rgb(255, 244, 86)";
    }
    
}

function NKlike(element) {
    if(countNK == 1) {
        countNK++;
        nicoleh4.innerText = "13 like(s)";
        element.innerText = "Unlike";
        element.style.backgroundColor = "green";
    } else {
        countNK --;
        nicoleh4.innerText = "12 like(s)";
        element.innerText = "Like";
        element.style.backgroundColor = "rgb(255, 244, 86)";
    }
}

function JRlike(element) {
    if(countJR == 1) {
        countJR++;
        jimh4.innerText = "10 like(s)";
        element.innerText = "Unlike";
        element.style.backgroundColor = "green";
    } else {
        countJR --;
        jimh4.innerText = "9 like(s)";
        element.innerText = "Like";
        element.style.backgroundColor = "rgb(255, 244, 86)";
    }
}
