class Bottle_StatusBar extends Statusbar {


    constructor() {
        this.loadImages(this.IMAGES_BOTTLE);
        this.y = 10
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

}