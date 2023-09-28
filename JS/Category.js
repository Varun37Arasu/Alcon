window.addEventListener("load", () => {



    var category = window.location.href.split('/').pop().split("=").pop();
    console.log(category);

    switch (category) {
        case "QRA":
            document.querySelector(`#${category}`).classList.add("active")
            break;
        case "CsTCTT":
            document.querySelector(`#${category}`).classList.add("active")
            break;
        case "eumdr":
            document.querySelector(`#${category}`).classList.add("active")
            break;
        case "pipeline":
            document.querySelector(`#${category}`).classList.add("active")
            break;
        default:
            //window.location.href = '/Category_Landing.html'
    }


});

function openCatTab(e, category, tab) {
    const category_type = document.querySelectorAll(`${category} .cat-data-show`);
    const category_data = document.querySelector(`${category} ${tab}`);

    if (category_data.classList.contains("data-active")) {
        category_data.classList.remove("data-active");
        category_data.style.display = "none";
    } else {
        category_type.forEach((data) => {
            if (data.classList.contains("data-active")) {
                data.classList.remove("data-active");
                data.style.display = "none";
            }
        });
        category_data.classList.add("data-active");
        category_data.style.display = "block";
    }
}

function toggleText() {
    var heorText = document.getElementById('heor-text');
    var moreButton = document.getElementById('more-button');

    if (heorText.style.overflow === 'hidden') {
        heorText.style.overflow = 'visible'; // Show full text
        heorText.style.whiteSpace = 'normal';
        moreButton.textContent = 'Less';
    } else {
        heorText.style.overflow = 'hidden'; // Truncate text
        heorText.style.whiteSpace = 'normal';
        moreButton.textContent = 'More';
    }
}

// Check if text overflows and show "More" button if necessary
var heorText = document.getElementById('heor-text');
var moreButton = document.getElementById('more-button');

if (heorText.scrollWidth > heorText.clientWidth) {
    moreButton.style.display = 'block';
}
