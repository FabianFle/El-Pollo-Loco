class smallEnemies extends MovableObject {

    y = 350;
    width = 70;
    height = 70;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];

    hit_chicken_sound = new Audio('audio/chicken2.mp3');
    walking_chicken_sound = new Audio('audio/chicken1.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 1800;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);
    }
}