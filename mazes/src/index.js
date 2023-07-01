const CELL = {
    "DIR_N": 0,
    "DIR_E": 2,
    "DIR_S": 4,
    "DIR_W": 8,
    "VISITED": 16
};

Array.prototype.top = function() {
    return this[this.length - 1];
};

class Maze extends GameEngine {
    onCreate() {
        this.cellSize = 3;
        this.maze = [];
        this.mazeSize = vec2(toInt(this.width() / (this.cellSize+1)), toInt(this.height() / (this.cellSize+1)));
        this.maze.fill(0, 0, this.mazeSize.x * this.mazeSize.y);

        console.log(this.mazeSize);
        
        this.stack = [];

        this.stack.push(vec2(0, 0));
        this.maze[0] = CELL["VISITED"];
        this.visited = 1;

        return true;
    }

    onUpdate(dt) {
        const offset = (ox, oy) => {
            return (this.stack.top().y + oy) * this.mazeSize.x + (this.stack.top().x + ox);
        };

        if (this.visited < this.mazeSize.x * this.mazeSize.y) {
            let neighbours = [];
            const top = this.stack.top();
            
            if (top.y > 0 && (this.maze[offset(0, -1)] & CELL["VISITED"]) == 0)
                neighbours.push(0);

            if (top.x < this.mazeSize.x - 1 && (this.maze[offset(1, 0)] & CELL["VISITED"]) == 0)
                neighbours.push(1);

            if (top.y < this.mazeSize.y - 1 && (this.maze[offset(0, 1)] & CELL["VISITED"]) == 0)
                neighbours.push(2);

            if (top.x > 0 && (this.maze[offset(-1, 0)] & CELL["VISITED"]) == 0)
                neighbours.push(3);

            if (neighbours.length == 0) {
                this.stack.pop();
            } else {
                const dir = neighbours[Math.floor(Math.random() * neighbours.length)];

                if (dir == 0) // North
				{
					this.maze[offset(0, -1)] |= CELL["DIR_S"] | CELL["VISITED"];
					this.maze[offset(0, 0)] |= CELL["DIR_N"];
					this.stack.push(vec2(top.x, top.y - 1));
				}

				if (dir == 1) // East
				{
					this.maze[offset(1, 0)] |= CELL["DIR_W"] | CELL["VISITED"];
					this.maze[offset(0, 0)] |= CELL["DIR_E"];
					this.stack.push(vec2(top.x + 1, top.y));
				}

				if (dir == 2) // South
				{
					this.maze[offset(0, 1)] |= CELL["DIR_N"] | CELL["VISITED"];
					this.maze[offset(0, 0)] |= CELL["DIR_S"];
					this.stack.push(vec2(top.x, top.y + 1));
				}

				if (dir == 3) // West
				{
					this.maze[offset(-1, 0)] |= CELL["DIR_E"] | CELL["VISITED"];
					this.maze[offset(0, 0)] |= CELL["DIR_W"];
					this.stack.push(vec2(top.x - 1, top.y));
				}

				this.visited++;
            }
        }

        this.clear("rgb(1, 50, 32)"); // dark green

        for (let i = 0; i < this.mazeSize.x * this.mazeSize.y; i++) {
            const x = i % this.mazeSize.x;
            const y = Math.round(i / this.mazeSize.x);

            if (this.maze[i] & CELL["VISITED"])
                this.fillRect(x * (this.cellSize + 1), y * (this.cellSize + 1), this.cellSize, this.cellSize, "green");

            for (let c = 0; c < this.cellSize; c++) {
                if (this.maze[i] & CELL["DIR_S"]) this.drawPixel(x * (this.cellSize + 1) + c, y * (this.cellSize + 1) + this.cellSize, "green");
                if (this.maze[i] & CELL["DIR_E"]) this.drawPixel(x * (this.cellSize + 1) + this.cellSize, y * (this.cellSize + 1) + c, "green");
            }
        }

        this.fillRect(this.stack.top().x * this.cellSize, this.stack.top().y * this.cellSize, this.cellSize, this.cellSize, "blue");

        return true;
    }
}

(new Maze("Maze", window.innerWidth * 0.75 / 8, window.innerHeight * 0.75 / 8, 8, 8)).mainLoop();
