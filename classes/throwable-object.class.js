class ThrowableObject extends MovableObject {

    IMAGES_ROTATBOTTEL = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATBOTTEL);
        this.loadImages(this.IMAGES_SPLASH);
        this.bottleFunction();
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 70;
        this.otherDirection = otherDirection;
    }


    bottleFunction() {
        this.trow();
        this.animateBottle();
    }


    trow() {
        this.speedY = 30;
        this.applayGravity();

        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.otherDirection
                this.x += 10;
            }
        }, 90)
    }


    animateBottle() {
        setInterval(() => {
            if (!world.level.endboss.isHurtEndboss()) {
                this.playAnimation(this.IMAGES_ROTATBOTTEL);
            } else {
                this.playAnimation(this.IMAGES_SPLASH);
            }
        }, 1000 / 25);
    }

} 