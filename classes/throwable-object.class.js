class ThrowableObject extends MovableObject {

    IMAGES_ROTATBOTTEL = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATBOTTEL);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 70;
        this.trow();
    }

    trow() {
        this.speedY = 30;
        this.applayGravity();
        setInterval(() => {
            this.x += 10;
        }, 20)
        setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATBOTTEL)
        }, 90)

        
    }

} 