class Heart extends MovableObject {

    IMAGES_HEART = [
        'img/7_statusbars/3_icons/icon_health.png',
    ]

    constructor(x, y) {
        super().loadImage(this.IMAGES_HEART[0]);
        this.x = x;
        this,y = y;
        this.width = 50;
        this.height = 60;
    }
}