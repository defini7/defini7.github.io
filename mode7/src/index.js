class Mode7 extends GameEngine {
    onCreate() {
        this.kart = new Sprite("static/img/kart.png");
        this.sky = new Sprite("static/img/sky.png");

        this.scale = vec2(100.0, 100.0);
        this.camera = vec2(0.0, 0.0);
        this.theta = 0.0;

        return true;
    }

    onUpdate(dt) {
        if (this.keyPressed('Up'))   this.scale += 10.0 * dt;
        if (this.keyPressed('Down')) this.scale -= 10.0 * dt;

        if (this.keyPressed('Left'))  this.theta -= dt;
        if (this.keyPressed('Right')) this.theta += dt;

        let vel = vec2(0, 0);

        if (this.keyPressed('W')) {
            vel.x -= Math.sin(theta);
            vel.y += Math.cos(theta);
        }

        if (this.keyPressed('A')) {
            vel.x += Math.cos(theta);
            vel.y += Math.sin(theta);
        }

        if (this.keyPressed('S')) {
            vel.x += Math.sin(theta);
            vel.y -= Math.cos(theta);
        }

        if (this.keyPressed('D')) {
            vel.x -= Math.cos(theta);
            vel.y -= Math.sin(theta);
        }

        this.camera.x += vel.x * dt;
        this.camera.y += vel.y * dt;

        for (let x = 0.0; x < 1.0; x += 1.0 / this.width()) {
            for (let y = 0.5; y < 1.0; y += 1.0 / this.height()) {
                const wx = 0.5 + x * -1;
                const wy = 0.5 + y;
                const wz = y;

                const rx = wx * Math.cos(this.theta) - wy * Math.sin(this.theta);
                const ry = wx * Math.sin(this.theta) + wy * Math.cos(this.theta);

                const px = Math.round((rx / wz + this.camera.x) * this.scale.x * this.width());
                const py = Math.round((ry / wz + this.camera.y) * this.scale.y * this.height());

                const kartCol = obj2rgb(this.kart.getPixel(px, py));
                const skyCol = obj2rgb(this.sky.getPixel(px, py));

                this.drawPixel(x * this.width(), y * this.height(), kartCol);
                this.drawPixel(x * this.width(), (1.0 - y) * this.height() - 1, skyCol);
                
            }
        }

        for (let i = 0; i < this.width(); i++)
            this.drawPixel(x, this.width() / 2, 'cyan');

        return true;
    }
}

(new Mode7("Mode7", 256, 240, 4, 4)).mainLoop();
