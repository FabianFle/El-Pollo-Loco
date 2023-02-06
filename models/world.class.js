class World {
    character = new Character();
    statusbarHealth = new StatusbarHealth();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    statusbarEndbossHealth = new StatusbarEnbossHealth();
    statusbarIconEndboss = new StatusbarIconEndboss();
    throwableObject = [];
    maxBottlesToThrow = 0;
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    intervalIds = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorldWithCharacter();
        this.checkCollisionsWithMo();
        this.checkCollisionsWithThrowingBottle();
        this.checkThrowObjects();
    }


    /**
     * This Function draw all Elements in the Canvas.
     * 
     */
    draw() {
        this.clearCanvas();
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.addToMap(this.statusbarEndbossHealth);
        this.addToMap(this.statusbarIconEndboss);
        this.ctx.translate(this.cameraX, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.ctx.translate(-this.cameraX, 0);
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    setWorldWithCharacter() {
        this.character.world = this;
    }


    checkCollisionsWithMo() {
        setStopableInterval(() => {
            this.checkCollisionsChicken();
            this.checkCollisionsEndboss();
            this.checkCollectedCoins();
            this.checkCollectedBottles();
        }, 1000 / 25);
    }


    checkCollisionsWithThrowingBottle() {
        setStopableInterval(() => {
            this.checkCollisionWithBottleEndboss();
        }, 250);
    }


    checkCollisionsChicken() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !this.character.isHurtCharacter()) {
                if (this.character.isAboveGround()) {
                    this.killChickenWithJumpFromTop(enemy);
                } else {
                    this.character.hitCharacter()
                    this.statusbarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }


    killChickenWithJumpFromTop(enemy) {
        enemy.chickenKilled();
        this.character.speedY = 30;
        audioDeadChicken.play();
        audioDeadChicken.volume = 0.3
        setTimeout(() => {
            this.eraseEnemyFromArray(enemy);
        }, 750);
    }


    checkCollisionsEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hitCharacter();
                this.statusbarHealth.setPercentage(this.character.energy);
            }
        });
    }


    checkCollectedCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isCollected(coin)) {
                this.coinCollected(coin);
                this.character.raiseProgressbarCoin();
                audioCoinCollected.play();
                this.statusbarCoin.setPercentage(this.character.progessCoinBar);
            }
        });
    }


    coinCollected(coin) {
        let i = this.level.coins.indexOf(coin);
        this.level.coins.splice(i, 1);
    }


    checkCollectedBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isCollected(bottle)) {
                this.bottleCollected(bottle);
                this.character.raiseProgressbarBottle();
                audioBottleCollected.play();
                this.statusbarBottle.setPercentage(this.character.progessBottleBar);
            }
        });
    }


    bottleCollected(bottle) {
        let i = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(i, 1);
        this.maxBottlesToThrow++;
    }


    checkThrowObjects() {
        setStopableInterval(() => {
            if (this.keyboard.a && this.maxBottlesToThrow > 0) {
                let bottle = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
                this.throwableObject.push(bottle);
                audioThrowBottle.play();
                this.maxBottlesToThrow--;
                this.character.reduceProgressbarBottleThroughThrow();
                this.statusbarBottle.setPercentage(this.character.progessBottleBar);
            }
        }, 1000 / 60);
    }


    checkCollisionWithBottleEndboss() {
        this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach(endboss => {
                if (bottle.isColliding(endboss)) {
                    endboss.hitEndboss(endboss.energy);
                    this.playSoundEnbossHit();
                    this.statusbarEndbossHealth.setPercentage(world.level.endboss[0].energy);
                    setTimeout(() => {
                        this.eraseThrowingBottleFromArray(bottle);
                    }, 180);
                }
            });
        });
    }


    playSoundEnbossHit() {
        audioSplashBottle.volume = 0.2;
        audioSplashBottle.play();
        audioDeadChicken.volume = 0.3;
        audioDeadChicken.play();
    }


    eraseEnemyFromArray(enemy) {
        let i = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(i, 1);
    }


    eraseThrowingBottleFromArray(bottle) {
        let i = this.throwableObject.indexOf(bottle);
        this.throwableObject.splice(i, 1);
    }
}   