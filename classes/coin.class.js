class Coin extends MovableObject {

    height = 150;
    width = 150;
    y = 100;

    img_item = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ]

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.img_item);
        this.x = 200 + Math.random() * 1500;
        // this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.img_item.length;
            let path = Images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
    }
}
