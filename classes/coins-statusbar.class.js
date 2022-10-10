class Coin_StatusBar extends Statusbar {

    
    constructor() {
        this.loadImages(this.IMAGES_COINS);
        this.y = 15
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

}