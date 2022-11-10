class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor() {
        this.keydownEvent();
        this.keyupEvent();
        // this.moveLeftTouch();
        // this.moveRightTouch();
        // this.jumpTouch();
        // this.throwBottleTouch();
    }


    keydownEvent() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (e.keyCode == 38) {
                keyboard.UP = true;
            }
            if (e.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = true;
            }
            if (e.keyCode == 68) {
                keyboard.D = true;
            }
        });
    }


    keyupEvent() {
        window.addEventListener("keyup", (e) => {
            if (e.keyCode == 32) {
                keyboard.SPACE = false;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (e.keyCode == 38) {
                keyboard.UP = false;
            }
            if (e.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = false;
            }
            if (e.keyCode == 68) {
                keyboard.D = false;
            }
        });
    }


    moveLeftTouch() {
        document.getElementById('btnLeft').addEventListener('touchstart', () => {
            this.LEFT = true;
            document.getElementById('btnLeft').classList.add('buttonOnTouch');
        });

        document.getElementById('btnLeft').addEventListener('touchend', () => {
            this.LEFT = false;
            document.getElementById('btnLeft').classList.remove('buttonOnTouch');
        });
    }


    moveRightTouch() {
        document.getElementById('btnRight').addEventListener('touchstart', () => {
            this.RIGHT = true;
            document.getElementById('btnRight').classList.add('buttonOnTouch');
        });

        document.getElementById('btnRight').addEventListener('touchend', () => {
            this.RIGHT = false;
            document.getElementById('btnRight').classList.remove('buttonOnTouch');
        });
    }


    jumpTouch() {
        document.getElementById('btnJump').addEventListener('touchstart', () => {
            this.SPACE = true;
            document.getElementById('btnJump').classList.add('buttonOnTouch');
        });

        document.getElementById('btnJump').addEventListener('touchend', () => {
            this.SPACE = false;
            document.getElementById('btnJump').classList.remove('buttonOnTouch');
        });
    }


    throwBottleTouch() {
        document.getElementById('btnThrow').addEventListener('touchstart', () => {
            this.D = true;
            document.getElementById('btnThrow').classList.add('buttonOnTouch');
        });

        document.getElementById('btnThrow').addEventListener('touchend', () => {
            this.D = false;
            document.getElementById('btnThrow').classList.remove('buttonOnTouch');
        });
    }
}