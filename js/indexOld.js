// work with car

window.alert(car1.isTurnOn);
car1.start();
window.alert(car1.isTurnOn);

let imagesUrls = [];
let currentImagesIndex = 0;
// find elements
let showPrevButton = document.getElementById("show-prev");
let showNextButton = document.getElementById("show-next");
let slideImage = document.getElementById("slide-img");

// subscribe to elements
showPrevButton.addEventListener('click', onShowPrevButtonClick);
showNextButton.addEventListener('click', onShowNextButtonClick);


// create images array

imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd-UdsCoDBiYtuhkn42mr4btfk7XXZ2CrSg&usqp=CAU")
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXO2tc3cfxcRng1DzreduwquXOh0EzUr6hDw&usqp=CAU")
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6bmlIucVIfLAFFsZQ6A51YM3JwBOCMoryw&usqp=CAU")
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKA72fLNktjVw5TWA8VlVEmr0-rpwh8IB8g&usqp=CAU")
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXmyXuXVYGxS_GttLpZ9YWWRIYcejjX-oCA&usqp=CAU")



slideImage.src = imagesUrls[currentImagesIndex];
showPrevButton.disabled = true;


function onShowPrevButtonClick(event) {
    currentImagesIndex--;
    slideImage.src = imagesUrls[currentImagesIndex];
    showNextButton.disabled = false;

    if (currentImagesIndex === 0) {
        showPrevButton.disabled = true;
    }
}

function onShowNextButtonClick(event) {
    currentImagesIndex++;
    slideImage.src = imagesUrls[currentImagesIndex];
    showPrevButton.disabled = false;
    // disable button
    if (currentImagesIndex === (imagesUrls.length - 1)) {
        showNextButton.disabled = true;
    }
}
