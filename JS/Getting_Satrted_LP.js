//const tab_1 = document.querySelector(".cat-1")
const tab_5 = document.querySelector(".cat-5")
const tab_6 = document.querySelector(".cat-6")

document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(function (detailsElement) {
        if (detailsElement.getAttribute('onclick')) {
            detailsElement.classList.add('interactive');
        }
    });
});
// document.querySelectorAll(".down-arrow").forEach((ele) => {
//     ele.addEventListener("click", (e) => {
//         if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-1")) {
//             if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
//                 tab_1.style.zIndex = 0;
//                 blur_active.style.display = "none"
//                 e.target.style.transform = "rotate(224deg)"
//             }
//             else {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
//                 tab_1.style.zIndex = 2;
//                 blur_active.style.display = "block"
//                 e.target.style.transform = "rotate(45deg)"
//             }
//         }
//         if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-5")) {
//             if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
//                 tab_5.style.zIndex = 0;
//                 blur_active.style.display = "none"
//                 e.target.style.transform = "rotate(224deg)"
//             }
//             else {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
//                 tab_5.style.zIndex = 2;
//                 blur_active.style.display = "block"
//                 e.target.style.transform = "rotate(45deg)"
//             }
//         }
//         if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-6")) {
//             if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
//                 tab_6.style.zIndex = 0;
//                 blur_active.style.display = "none"
//                 e.target.style.transform = "rotate(224deg)"
//             }
//             else {
//                 e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
//                 tab_6.style.zIndex = 2;
//                 blur_active.style.display = "block"
//                 e.target.style.transform = "rotate(45deg)"
//             }
//         }
//     })
// })


function toggleDetails(event) {
    var detailsList = document.querySelectorAll("details");

    // detailsList.forEach(function (details) {
    //     if (details !== event.currentTarget) {
    //         details.removeAttribute("open");
    //     }
    // });
}

// function toggleDetails(event) {
//     const detailsElement = event.target.closest('details');
//     if (detailsElement) {
//         detailsElement.toggleAttribute('open');
//     }
// }

function openTab(e, tabId, tabClass) {

    const tab = document.querySelector(`${tabId}`)
    const tab_1 = document.querySelector(`${tabClass}`)
    const arrow = document.querySelector(`${tabClass} .down-arrow`)
    if (tab.parentElement.classList.contains("active")) {        
        tab.style.display = "none"
        tab_1.style.zIndex = 0;
        blur_active.style.display = "none"
        arrow.style.transform = "rotate(224deg)"
        tab.parentElement.classList.remove("active")
        leftNavActive(false)
        leftAllNavActive(false)
    }
    else {
        tab.parentElement.classList.add("active")      
        leftNavActive(true)
        tab.style.display = "block"
        tab_1.style.zIndex = 2;
        blur_active.style.display = "block"
        arrow.style.transform = "rotate(45deg)"
        leftAllNavActive(false)
        //document.querySelector(".left-navbar-options img").style.zIndex = ""
    }

    // if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-5")) {
    //     if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
    //         tab.style.display = "none"
    //         tab_1.style.zIndex = 0;
    //         blur_active.style.display = "none"
    //         e.target.style.transform = "rotate(224deg)"
    //     }
    //     else {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
    //         tab.style.display = "block"
    //         tab_1.style.zIndex = 2;
    //         blur_active.style.display = "block"
    //         e.target.style.transform = "rotate(45deg)"
    //     }
    // }
    // if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-5")) {
    //     if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
    //         tab_5.style.zIndex = 0;
    //         blur_active.style.display = "none"
    //         e.target.style.transform = "rotate(224deg)"
    //     }
    //     else {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
    //         tab_5.style.zIndex = 2;
    //         blur_active.style.display = "block"
    //         e.target.style.transform = "rotate(45deg)"
    //     }
    // }
    // if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("cat-6")) {
    //     if (e.target.parentElement.parentElement.parentElement.parentElement.classList.contains("active")) {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("active")
    //         tab_6.style.zIndex = 0;
    //         blur_active.style.display = "none"
    //         e.target.style.transform = "rotate(224deg)"
    //     }
    //     else {
    //         e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active")
    //         tab_6.style.zIndex = 2;
    //         blur_active.style.display = "block"
    //         e.target.style.transform = "rotate(45deg)"
    //     }
    // }
}