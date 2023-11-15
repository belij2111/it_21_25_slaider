function Slider() {
    this.imagesUrls = [];
    this.currentImagesIndex = 0;
    this.showPrevButton = null; //document.querySelector(".show-prev-btn")
    this.showNextButton = null;//document.querySelector(".show-next-btn"),
    this.slideImage = null; //document.querySelector(".slide-img"),

    this.start = function (elId) {
        let that = this;
        let elSelector = "#" + elId;
        let el = document.querySelector(elSelector);
        this.showPrevButton = el.querySelector(".show-prev-btn");
        this.showNextButton = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        this.showPrevButton.addEventListener('click', function (e) {
            that.onShowPrevButtonClick();
        });
        this.showNextButton.addEventListener('click', function (e) {
            that.onShowNextButtonClick();
        });


        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd-UdsCoDBiYtuhkn42mr4btfk7XXZ2CrSg&usqp=CAU")
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXO2tc3cfxcRng1DzreduwquXOh0EzUr6hDw&usqp=CAU")
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6bmlIucVIfLAFFsZQ6A51YM3JwBOCMoryw&usqp=CAU")
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKA72fLNktjVw5TWA8VlVEmr0-rpwh8IB8g&usqp=CAU")
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXmyXuXVYGxS_GttLpZ9YWWRIYcejjX-oCA&usqp=CAU")



        this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
        this.showPrevButton.disabled = true;
    };

    this.onShowPrevButtonClick = function (event) {
        this.currentImagesIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
        this.showNextButton.disabled = false;

        if (this.currentImagesIndex === 0) {
            this.showPrevButton.disabled = true;
        }
    };

    this.onShowNextButtonClick = function (event) {
        this.currentImagesIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
        this.showPrevButton.disabled = false;
        // disable button
        if (this.currentImagesIndex === (this.imagesUrls.length - 1)) {
            this.showNextButton.disabled = true;
        }
    };

}






// let sliderFactory = {
//     createNewSlider: function () {
//         let newSlider = new Slider();
//         return newSlider;
//     }
// };

// return newSlider;
//     }
// };