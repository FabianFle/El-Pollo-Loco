class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 60;

    speed = 20;
    speedThroughHit = 30;
    hadFirstContact = false;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3200;
        this.animateEndboss();
    }


    animateEndboss() {
        let i = 0;
        setInterval(() => {
            this.playEndboss(i);
            i++;
            if (this.endbossReached()) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 120);
    }


    playEndboss(i) {
        if (i < 15) {
            this.playAnimation(this.IMAGES_ATTACK);

        } else if (!this.isDead() && !this.isHurtEndboss() && this.endbossFightBegins()) {
            this.playAnimation(this.IMAGES_WALKING);
            this.moveLeft();
            this.otherDirection = false;

        } else if (this.isHurtEndboss()) {
            this.playAnimation(this.IMAGES_ATTACK);
            this.endBossRushForward();

        } else if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);

            setTimeout(() => {
                this.gameIsWin();
            }, 350);
        }
    }


    gameIsWin() {
        console.log('Gewonnen')
    }


    endbossReached() {
        return world.character.x > 3200 && !this.hadFirstContact;
    }


    endbossFightBegins() {
        return world.character.x > this.x - 500;
    }


    endBossRushForward() {
        let speedIncreaseThroughHit = world.level.endboss.x -= this.speedThroughHit;
        return speedIncreaseThroughHit;
    }
}
