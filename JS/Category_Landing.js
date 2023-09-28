function categoryHoverEnter(category){
    leftNavActive(true)
    leftAllNavActive(true)
    document.querySelector(`.${category}`).style.zIndex = '2';
    document.querySelector(`.${category}-headline div a`).style.borderBottom = '2px solid white';
    document.querySelector(`.${category} .info`).style.display = "flex"
}
function categoryHoverLeave(category){
    leftNavActive(false)
    leftAllNavActive(false)
    document.querySelector(`.${category}`).style.zIndex = '0';
    document.querySelector(`.${category}-headline div a`).style.borderBottom = 'none';
    document.querySelector(`.${category} .info`).style.display = "none"
}