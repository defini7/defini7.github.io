Number.prototype.clamp = function(min, max) { return Math.min(Math.max(this, min), max); };

function vec2(a, b) { return {x:a,y:b}; }
function toInt(a) { return Math.round(a); }

class Sprite {
    constructor(src) {
        this.img = new Image();
        this.img.src = src;
        this.img.crossOrigin = "Anonymous";
        this.img.onload = () => {
            const temp = document.createElement("canvas");
            temp.width = this.img.width;
            temp.height = this.img.height;
            temp.getContext("2d").drawImage(this.img, 0, 0);
            
            this.data = temp.getContext("2d").getImageData(0, 0, temp.width, temp.height).data;
            console.log(this.data);

            document.removeChild(temp);
        };

    }

    width() { return this.data.width; }
    height() { return this.data.height };
    size() { return vec2(this.width(), this.height()); }
}

class GameEngine {
    constructor(appName, screenWidth, screenHeight, pixelWidth, pixelHeight) {
        this.canvas = document.querySelector("div#main canvas#screen");
        this.ctx = this.canvas.getContext("2d");
        this.title = document.querySelector("div#main div#info h1#title");
        this.fps = document.querySelector("div#main div#info h1#fps");

        this.setTitle(appName);
        this.resizeScreen(screenWidth, screenHeight, pixelWidth, pixelHeight);

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
        this.canvas.width = screenWidth;
        this.canvas.height = screenHeight;
        this.canvas.style.width = (screenWidth * pixelWidth).toString() + "px";
        this.canvas.style.height = (screenHeight * pixelHeight).toString() + "px";

        this.screenSize = vec2(screenWidth, screenHeight);
        this.pixelSize = vec2(pixelWidth, pixelHeight);
    }
    
    width() { return this.screenSize.x; }
    height() { return this.screenSize.y; }

    drawPixel(x, y, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(toInt(x), toInt(y), 1, 1);
    }

    fillRect(x, y, w, h, col) {
        this.ctx.fillStyle = col;
        this.ctx.fillRect(toInt(x), toInt(y), toInt(w), toInt(h));
    }

    drawRect(x, y, w, h, col) {
        this.ctx.strokeStyle = col;
        this.ctx.strokeRect(toInt(x), toInt(y), toInt(w), toInt(h));
    }

    drawLine(x1, y1, x2, y2, col) {
        this.ctx.strokeStyle = col;
        this.ctx.beginPath();
        this.ctx.moveTo(toInt(x1), toInt(y1));
        this.ctx.lineTo(toInt(x2), toInt(y2));
        this.ctx.stroke();
    }

    clear(col) {
        this.fillRect(0, 0, this.width(), this.height(), col);
    }

    drawSprite(x, y, sprite) {
        this.ctx.drawImage(sprite.data, toInt(x), toInt(y));
    }

}
