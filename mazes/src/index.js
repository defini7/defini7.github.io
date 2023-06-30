class Sample extends GameEngine {
    onCreate() {
        this.demoSprite = new Sprite("static/img/dge_logo.png");
        return true;
    }

    onUpdate(dt) {
        this.clear('black');
        this.drawSprite(this.mouse.x, this.mouse.y, this.demoSprite);

        return true;
    }
}

(new Sample("Sample", 256, 240, 4, 4)).mainLoop();
