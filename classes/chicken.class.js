class Chicken extends MovableObject {

    y = 350;
    width = 70;
    height = 70;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    dead = false;

    hit_chicken_sound = new Audio('audio/chicken2.mp3');
    walking_chicken_sound = new Audio('audio/chicken1.mp3');


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 200 + Math.random() * 1800;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (!this.dead) {
                this.moveLeft();
                this.otherDirection = false;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!this.dead) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 250);
    }

    deadChicken() {
        this.dead = true;
        this.playAnimation(this.IMAGES_DEAD);
    }
}