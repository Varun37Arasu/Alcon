
const blur_active = document.querySelector("#blur-active")
const homeBtn = document.querySelector("#home")
const start = document.querySelector("#left-col-start")
const cat = document.querySelector("#left-col-cat")
const more = document.querySelector("#left-col-more")
const left_navbar_options = document.querySelector(".left-navbar-options")
const left_nav_bg = document.querySelectorAll(".left-navbar-options img")
const quick_link_data = document.querySelector(".quick-link-wrapper")
const backBtn = document.querySelector(".back-circle");

const  gettingText=document.querySelector(".tag-1")
const  catText=document.querySelector(".tag-2")
const  helpfulText=document.querySelector(".tag-3")
var path


//let previousUrl = window.location.href; // Initialize previousUrl
window.addEventListener("DOMContentLoaded", () => {
    path = window.location.href.split("/").pop().split('.html')[0]
    console.log(path);
    tagBorder(path)
    
    start.addEventListener("click", (e) => {
        window.location.href = "./Getting_Started_LP.html"
    })
    cat.addEventListener("click", (e) => {
        window.location.href = "./Category_Landing.html"
    })
    more.addEventListener("click", (e) => {
        window.location.href = "./Helpful_Resources.html"
    })
    homeBtn.addEventListener("click", () => {
        window.location.href = "./Index.html"
    })
    gettingText.addEventListener("click", () => {
        window.location.href = "./Getting_Started_LP.html"
    })
    document.querySelector('#tag-1-info span').addEventListener('click',()=>{
        window.location.href = "./Getting_Started_LP.html"
    })
    catText.addEventListener("click", () => {
        window.location.href = "./Category_Landing.html"
    })
    document.querySelector('#tag-2-info span').addEventListener("click", () => {
        window.location.href = "./Category_Landing.html"
    })
    helpfulText.addEventListener("click", () => {
        window.location.href = "./Helpful_Resources.html"
    })
    document.querySelector('#tag-3-info span').addEventListener("click", () => {
        window.location.href = "./Helpful_Resources.html"
    })
    // window.addEventListener("popstate", handleBackButtonVisibility);
    // handleBackButtonVisibility();
})
function tagBorder(path) {
    if (path === "Getting_Started_LP" || path === "Getting_Started") {
        pageTagBorder()
        document.querySelector(".tag-1").style.display = "block"
        document.querySelector(".tag-1 p").style.borderBottom = "2px solid  #03128F"
    }
    if (path === "Category_Landing" || path === "Category") {
        pageTagBorder()
        document.querySelector(".tag-2").style.display = "block"
        document.querySelector(".tag-2 p").style.borderBottom = "2px solid  #0418D6"
    }
    if (path === "Helpful_Resources") {
        pageTagBorder()
        document.querySelector(".tag-3").style.display = "block"
        document.querySelector(".tag-3 p").style.borderBottom = "2px solid  #298BF6"
    }
}
function pageTagBorder() {
    for (i = 1; i <= 3; i++) {
        document.querySelector(`.tag-${i}`).style.display = "none"
    }
}

function openBlur(e, tag, icon) {
    // document.querySelector(".tag-1 p").style.borderBottom = "none"
   document.querySelector(e).style.zIndex = "4"
    blur_active.style.display = "block"
    document.querySelector(`${icon}`).style.zIndex = "3"
    if (tag === ".tag-1") {
        document.querySelector("#tag-1-info").style.display = "block"
        document.querySelector(".tag-1").style.display = 'block'
    }
    if (tag === ".tag-2") {
        document.querySelector("#tag-2-info").style.display = "block"
        document.querySelector(".tag-2").style.display = 'block'
    }
    if (tag === ".tag-3") {
        document.querySelector("#tag-3-info").style.display = "block"
        document.querySelector(".tag-3").style.display = 'block'
    }
}

function closeBlur(e, tag, icon) {
    document.querySelector("#tag-1-info").style.display = "none"
    document.querySelector("#tag-2-info").style.display = "none"
    document.querySelector("#tag-3-info").style.display = "none"
    tagBorder(path)
    document.querySelector(e).style.zIndex = "1"
    blur_active.style.display = "none"
    document.querySelector(`${icon}`).style.zIndex = "0"
    //document.querySelector(".tag-1 p").style.borderBottom = "2px solid #03128F"
    //document.querySelector(`${tag} p`).style.borderBottom = "none"
}

function redirectToPrevious() {
    window.history.back();
}
// function handleBackButtonVisibility() {
//     // Check the history length for debugging
//     console.log("History length: " + window.history.length);
//     console.log(window.history.state);
//     // Get the current URL
//     const currentUrl = window.location.href;

//     // Check if there is a previous page in the session history
//     console.log(path !=="Index");
//     if (window.history.length > 1  ) {
//         backBtn.style.display = "flex";
//         console.log("back-present");
//     } else {
//         console.log("not present");
//         backBtn.style.display = "none";
//     }

//     // Update the previous URL
//     previousUrl = currentUrl;
// }



function leftNavActive(active) {
    if (active) {
        blur_active.style.display="block"
        start.style.zIndex = "4"
        cat.style.zIndex = "4"
        more.style.zIndex = "4"
        start.classList.add("disable-click");
        cat.classList.add("disable-click");
        more.classList.add("disable-click");
        left_navbar_options.classList.add("img-active")
    }
    else {
        blur_active.style.display="none"
        start.style.zIndex = "1"
        cat.style.zIndex = "1"
        more.style.zIndex = "1"
        start.classList.remove("disable-click");
        cat.classList.remove("disable-click");
        more.classList.remove("disable-click");
        left_navbar_options.classList.remove("img-active")
    }
}

function leftAllNavActive(active) {
    if (active) {
        left_nav_bg.forEach((image => {
            image.style.zIndex = "3"
        }))
    }
    else {
        left_nav_bg.forEach((image => {
            image.style.zIndex = ""
        }))
    }
}

function rightColEnter(option,info){
    if (option==="quick-links") {
        quick_link_data.style.display = (quick_link_data.style.display === "none" || quick_link_data.style.display === "") ? "block" : "block";
    }
    
}
function rightColLeave(option,info){
        quick_link_data.style.display = (quick_link_data.style.display === "none" || quick_link_data.style.display === "") ? "block" : "none";   
}