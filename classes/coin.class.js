class Coin extends MovableObject {

    width = 100;
    height = 100;

    IMAGES_COINS = [
        'img/8_coin/coin_1.png'
    ];

    intervalIds = [];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 300 + Math.random() * 2500;
        this.y = 100 + Math.random() * 70;
        this.loadImages(this.IMAGES_COINS);
        this.animateCoins();
    }

    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS)
        }, 350);
    }
}