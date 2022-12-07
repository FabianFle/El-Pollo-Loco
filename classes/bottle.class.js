class Bottle extends MovableObject {

    width = 100;
    height = 100;

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/salsa_bottle.png'
    ];

    intervalIds = [];

    constructor() {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = 300 + Math.random() * 2500;
        this.y = 100 + Math.random() * 70;
        this.loadImages(this.IMAGES_BOTTLE);
        this.animateCoins();
    }

    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE)
        }, 350);
    }
}