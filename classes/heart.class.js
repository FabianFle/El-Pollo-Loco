class Heart extends MovableObject {

    width = 100;
    height = 100;

    IMAGES_HEART = [
        'img/7_statusbars/3_icons/icon_health.png'
    ];

    constructor() {
        super().loadImage('img/7_statusbars/3_icons/icon_health.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 100 + Math.random() * 70;
        this.loadImages(this.IMAGES_HEART);
        this.animateCoins();
    }

    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEART)
        }, 350);
    }
}
