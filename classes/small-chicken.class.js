class SmallChicken extends MovableObject {

    x = 120;
    y = 365;
    width = 60;
    height = 50;

    IMAGES_WALKING_SMALL_CHICKEN = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD_SMALL_CHICKEN = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];

    dead = false;


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING_SMALL_CHICKEN);
        this.loadImages(this.IMAGES_DEAD_SMALL_CHICKEN);
        this.x = 200 + Math.random() * 3000;
        this.speed = 0.20 + Math.random() * 0.40;
        this.animateSmallChicken();
    }

    animateSmallChicken() {

        setInterval(() => {
            if (!this.dead) {
                this.moveLeft();
                this.otherDirection = false;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!this.dead) {
                this.playAnimation(this.IMAGES_WALKING_SMALL_CHICKEN);
            }
        }, 250);
    }

    deadChicken() {
        this.dead = true;
        this.playAnimation(this.IMAGES_DEAD_SMALL_CHICKEN);
    }
}