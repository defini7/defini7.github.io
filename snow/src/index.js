class Flake {
    constructor(pos, speed, size, time) {
        this.pos = pos;
        this.speed = speed;
        this.size = size;
        this.time = time;
    }
}

const MAX_SPEED = 5;
const MAX_SIZE = 10;
const FLAKE_COUNT = 200;

class Snow extends GameEngine {
    createFlake() {
        return new Flake(
            vec2(Math.random() * this.width(), 0),
            0.5 + Math.random() * MAX_SPEED,
            (2 + Math.random() * MAX_SIZE) % MAX_SIZE,
            Math.random() * 2.0 * Math.PI
        );
    }

    createSnow() {
        for (let i = 0; i < FLAKE_COUNT; i++) {
            this.snow[i] = this.createFlake();
        }
    }

    onCreate() {
        this.snow = [];
        this.snow.fill(0);

        this.createSnow();

        return true;
    }

    updateFlakes(dt) {
        for (let i = 0; i < FLAKE_COUNT; i++) {
            this.snow[i].pos.y += this.snow[i].speed;

            this.snow[i].time += dt * Math.random();
            
            if (this.snow[i].pos.y > this.height()) {
                this.snow[i] = this.createFlake();
            }
        }
    }

    drawFlakes() {
        this.clear("black");

        for (let i = 0; i < FLAKE_COUNT; i++) {
            const offset = Math.sin(this.snow[i].time) * 20.0;
            const x = Math.trunc(this.snow[i].pos.x + offset);
            const y = Math.trunc(this.snow[i].pos.y);
            const size = this.snow[i].size;

            this.fillRect(x, y, size, size, "white");
        }
    }

    onUpdate(dt) {
        this.updateFlakes(dt);
        this.drawFlakes();
        
        return true;
    }
}

(new Snow("Snow", 800, 600, 1, 1)).mainLoop();
