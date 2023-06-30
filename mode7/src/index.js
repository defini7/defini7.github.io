class Mode7 extends GameEngine {
    onCreate() {
        this.kart = new Sprite("static/img/kart.png");
        this.sky = new Sprite("static/img/sky.png");

        return true;
    }

    onUpdate() {
        return true;
    }
}

(new Mode7("Mode7", 256, 240, 4, 4)).mainLoop();
