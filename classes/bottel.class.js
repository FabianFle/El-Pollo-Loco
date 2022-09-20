class Bottle extends MovableObject {

    height = 100;
    width = 70;
    y = 320;

    img_item = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ]

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.img_item);
        this.x = 200 + Math.random() * 1500;
    }
}