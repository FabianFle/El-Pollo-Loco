class DrawableObject {

    x = 50;
    y = 220;
    height = 220;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;


//####################################################
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
//####################################################



    // draw(ctx) {
    //     try {
    //         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //     } catch (error) {
    //         console.log(error, this.img);
    //     }
    // }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}