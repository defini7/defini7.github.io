class Plasm extends GameEngine {
    onCreate() {
        this.scaleSlider = document.getElementById("scale");
        return true;
    }

    onUpdate(dt) {
        const scale = this.scaleSlider.valueAsNumber;
        this.resizeScreen(window.innerWidth * 0.75 / scale, window.innerHeight * 0.75 / scale, scale, scale);

        for (let x = 0; x < this.width(); x++) {
            for (let y = 0; y < this.height(); y++) {
                const col = Math.trunc((0.5 * Math.sin(1.24 * Math.sin(x * 0.3 + y * 0.1) + Math.sin(x * 0.02 + y * 0.37)
      	  	                    + 3 * Math.sin(x * 0.15 + y * 0.08) + 1.8 * Math.sin(x * 0.139 + y * 0.265)) + 0.5) * 255.0);

                this.drawPixel(x, y, obj2rgb(pix(255 - col, col, 255 - col)));
            }
        }

        return true;
    }
}

(new Plasm("Plasm", window.innerWidth * 0.75, window.innerHeight * 0.75, 1, 1)).mainLoop();
