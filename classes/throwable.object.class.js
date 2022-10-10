class ThrowableObject extends MovableObject {

    constructor() {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = 100;
        this.y = 100;
        this.height = 100;
        this.width = 70;
        this.trow(100, 100);
    }

    trow(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applayGravity();
        setInterval(() => {
            this.x += 10;
        }, 25)
    }

} 