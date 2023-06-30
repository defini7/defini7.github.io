Number.prototype.clamp = function(min, max) { return Math.min(Math.max(this, min), max); };

function vec2(a, b) { return {x:a,y:b}; }
function toInt(a) { return Math.round(a); }

class Sprite {
    constructor(src) {
        this.data = new Image();
        this.data.src = src;
    }

    width() { return this.data.width; }
    height() { return this.data.height };
    size() { return vec2(this.width(), this.height()); }
}

class GameEngine {
    constructor(appName, screenWidth, screenHeight, pixelWidth, pixelHeight) {
        this.canvas = document.querySelector("div#main canvas#screen");
        this.title = document.querySelector("div#main div#info h1#title");
        this.fps = document.querySelector("div#main div#info h1#fps");

        this.setTitle(appName);
        this.resizeScreen(screenWidth, screenHeight, pixelWidth, pixelHeight);

        this.ctx = this.canvas.getContext("2d");
        this.mouse = vec2(Infinity, Infinity);

        document.addEventListener("mousemove", (evt) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = Math.round((((evt.clientX - rect.left) / (rect.right - rect.left)) * this.canvas.width).clamp(0, this.canvas.width) / this.pixelSize.x);
            this.mouse.y = Math.round((((evt.clientY - rect.top) / (rect.bottom - rect.top)) * this.canvas.height).clamp(0, this.canvas.height) / this.pixelSize.y);
        });
    }

    mainLoop() {
        if (!this.onCreate()) return;

        let t1 = Date.now();
        let t2 = t1;

        let tickTimer = 0.0;

        const frameCallback = () => {
            const dt = (t2 - t1) / 1000.0;
            t1 = t2;
            t2 = Date.now();

            if (this.onUpdate(dt)) {
                tickTimer += dt;

                if (tickTimer >= 1.0) {
                    this._updateFps(Math.floor(1.0 / dt));
                    tickTimer = 0.0;
                }
                
                window.requestAnimationFrame(frameCallback);
            }
        };

        window.requestAnimationFrame(frameCallback);
    }

    _updateFps(newFps) { this.fps.innerHTML = "FPS: " + newFps; }

    setTitle(title) { this.title.innerHTML = title; }

    // WARNING! Canvas resets to the origin state after calling this method
    resizeScreen(screenWidth, screenHeight, pixelWidth, pixelHeight) {
        this.canvas.width = screenWidth * pixelWidth;
        this.canvas.height = screenHeight * pixelHeight;

        this.screenSize = vec2(screenWidth, screenHeight);
        this.pixelSize = vec2(pixelWidth, pixelHeight);
    }
    
    width() { return this.screenSize.x; }
    height() { return this.screenSize.y; }

    drawPixel(x, y, col) {
        x = toInt(x); y = toInt(y);
        this.ctx.fillStyle = col;
        this.ctx.fillRect(
            x * this.pixelSize.x, y * this.pixelSize.y,
            this.pixelSize.x, this.pixelSize.y
        );
    }

    fillRect(x, y, w, h, col) {
        x = toInt(x); y = toInt(y);
        w = toInt(w); h = toInt(h);
        this.ctx.fillStyle = col;
        this.ctx.fillRect(
            x * this.pixelSize.x, y * this.pixelSize.y,
            w * this.pixelSize.x, h * this.pixelSize.y
        );
    }

    drawRect(x, y, w, h, col) {
        x = toInt(x); y = toInt(y);
        w = toInt(w); h = toInt(h);
        this.ctx.strokeStyle = col;
        this.ctx.strokeRect(
            x * this.pixelSize.x, y * this.pixelSize.y,
            w * this.pixelSize.x, h * this.pixelSize.y
        );
    }

    drawLine(x1, y1, x2, y2, col) {
        x1 = toInt(x1); y1 = toInt(y1);
        x2 = toInt(x2); y2 = toInt(y2);
        this.ctx.strokeStyle = col;
        this.ctx.beginPath();
        this.ctx.moveTo(x1 * this.pixelSize.x, y1 * this.pixelSize.y);
        this.ctx.lineTo(x2 * this.pixelSize.x, y2 * this.pixelSize.y);
        this.ctx.stroke();
    }

    clear(col) { this.fillRect(0, 0, this.canvas.width, this.canvas.height, col); }

    drawSprite(x, y, sprite) {
        x = toInt(x); y = toInt(y);
        this.ctx.drawImage(
            sprite.data,
            x * this.pixelSize.x, y * this.pixelSize.y,
            sprite.width() * this.pixelSize.x, sprite.height() * this.pixelSize.y,
        );
    }

}
