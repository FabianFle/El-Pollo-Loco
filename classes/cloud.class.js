class Cloud extends MovableObject {
 
    y = 20;
    width = 500;
    height = 250;

    constructor(imagePath, x) {
        super().loadImage(imagePath, x);
        this.x = x;
        this.speed = 0.1 + Math.random() * 0.3;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}