let toggleStatus = false;
const getMenu = document.querySelector(".menu");
const pageBody = document.querySelector(".page-body");
const toggleBtn = document.querySelector(".toggle-btn");
const changeBackgroundGreyBtn = document.querySelector(".menu__item__home");
const changeBackgroundRedBtn = document.querySelector(".menu__item__red");
const changeBackgroundOrangeBtn = document.querySelector(".menu__item__orange");
const changeBackgroundPurpleBtn = document.querySelector(".menu__item__purple");
const changeBackgroundGreenBtn = document.querySelector(".menu__item__green");

pageBody.style.backgroundColor = "grey";
showActiveBackground();

toggleBtn.addEventListener("click", () => {
    toggleMenu();
    showActiveBackground();
});

changeBackgroundGreyBtn.addEventListener("click", changeHome);
changeBackgroundRedBtn.addEventListener("click", changeRed);
changeBackgroundOrangeBtn.addEventListener("click", changeOrange);
changeBackgroundPurpleBtn.addEventListener("click", changePurple);
changeBackgroundGreenBtn.addEventListener("click", changeGreen);


function toggleMenu() {
    if (toggleStatus === false) {
        getMenu.style.visibility = "visible";
        toggleStatus = true;
    }

    else if (toggleStatus === true) {
        getMenu.style.visibility = "hidden";
        toggleStatus = false;
    }
}

function changeHome() {
    pageBody.style.backgroundColor = "grey";
    getMenu.style.visibility = "hidden";
    toggleStatus = false;
}

function changeRed() {
    pageBody.style.backgroundColor = "red";
    getMenu.style.visibility = "hidden";
    toggleStatus = false;
}

function changeOrange() {
    pageBody.style.backgroundColor = "orange";
    getMenu.style.visibility = "hidden";
    toggleStatus = false;
}

function changePurple() {
    pageBody.style.backgroundColor = "purple";
    getMenu.style.visibility = "hidden";
    toggleStatus = false;
}

function changeGreen() {
    pageBody.style.backgroundColor = "green";
    getMenu.style.visibility = "hidden";
    toggleStatus = false;
}

function showActiveBackground() {
    
    if (document.querySelector(".page-body").style.backgroundColor === "grey"){
        document.querySelector(".menu__item__home").style.border = "2px dotted black";
    }

    if (document.querySelector(".page-body").style.backgroundColor !== "grey"){
        document.querySelector(".menu__item__home").style.border = "1px solid black";
    }    
        
    if (document.querySelector(".page-body").style.backgroundColor === "red"){
        document.querySelector(".menu__item__red").style.border = "2px dotted black";
    }    
        
   if (document.querySelector(".page-body").style.backgroundColor !== "red"){
        document.querySelector(".menu__item__red").style.border = "1px solid black";
    }    
    
    if (document.querySelector(".page-body").style.backgroundColor === "orange"){
        document.querySelector(".menu__item__orange").style.border = "2px dotted black";
    }    
    
    if (document.querySelector(".page-body").style.backgroundColor !== "orange"){
        document.querySelector(".menu__item__orange").style.border = "1px solid black";
    }    
    
    if (document.querySelector(".page-body").style.backgroundColor === "purple"){
        document.querySelector(".menu__item__purple").style.border = "2px dotted black";
    }    
    
    if (document.querySelector(".page-body").style.backgroundColor !== "purple"){
        document.querySelector(".menu__item__purple").style.border = "1px solid black";
    }    

    if (document.querySelector(".page-body").style.backgroundColor === "green"){
        document.querySelector(".menu__item__green").style.border = "2px dotted black";
    }    
    
    if (document.querySelector(".page-body").style.backgroundColor !== "green"){
        document.querySelector(".menu__item__green").style.border = "1px solid black";
    
    }
}

