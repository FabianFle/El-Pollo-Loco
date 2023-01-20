class Statusbar extends DrawableObject {
    width = 250;
    percentage = 100;


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesStatusbar[this.showImageIndex(percentage)];
        this.img = this.imgCache[path];
    }


    showImageIndex(percentage) {
        if (percentage == 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}