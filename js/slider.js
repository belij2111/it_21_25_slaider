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


        this.imagesUrls.push("https://www.incredit.lv/images/photo-by-maximalfocus-on-unsplash-min.jpg")
        this.imagesUrls.push("https://m.buro247.ru/images/2020/08/1597664580740478.jpg")
        this.imagesUrls.push("https://ecotechnica.com.ua/wp-content/uploads/2020/09/645-mercedes-avtr-ecotechnicacomua.jpg")
        this.imagesUrls.push("https://oir.mobi/uploads/posts/2019-12/thumbs/1575530264_jelektromobil-buduschego-art-77.jpg")
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeib3B_EP-bikdVJpvIKHDyzo__kRa5M2iLNbgPW58BMEeHJZYO9c8XY2JlLN4gnCLb-k&usqp=CAU")



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