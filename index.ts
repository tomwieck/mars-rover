import { clear, print, askQuestion } from './console';

const directions = ["N", "S", "E", "W"] as const;

type Direction = typeof directions[number];

const rovers: Rover[] = [];

const directionsObj = {
    "N": "North",
    "S": "South",
    "E": "East",
    "W": "West",
}
class Rover {
    id: number;
    position: number[];
    facingDirection: string;

    constructor(position: number[], facingDirection: string) {
        this.id = Math.floor(Math.random() * 10000000)
        this.position = position;
        this.facingDirection = facingDirection;
    }
}

class Grid {
    size: number[]

    constructor(size: number[]) {
        this.size = size;
    }
}


export function startRover(): void {
	clear();
	askQuestion(`Enter Plataeu Size (x y e.g. 5 5)`, createGrid); 
}

function createGrid(size: string): number[][] {
	// TODO add error / type checking 
    print(`Creating ${size} grid`);

    // parse user input
    let numbers = size.split(' ');

    let x = parseInt(numbers[0])
    let y = parseInt(numbers[1])

    const matrix : number[] = [];
    const fullMatrix : number[][] = [];

    for (let i = 0; x > i; i++) {
        matrix.push(i);
    }

    for (let i = 0; y > i; i++) {
        fullMatrix.push(matrix);
    }

	askQuestion('Enter Rovers starting position (x y Directon: e.g. 1 2 N): ', placeRover);

    return fullMatrix;
}

function placeRover(position: string): boolean {
    // 1 2 N
    // x: number, y: number, direction: Direction
    // Don’t allow numbers larger than the size of the grid, or any letters outside of the Direction type.

    let splitString = position.split(' ');

    // check >= grid x 
    let x = parseInt(splitString[0])

    // check >= grid y 
    let y = parseInt(splitString[1]);

    let gridPosition = [x, y];

    // TODO check type is Direction
    let direction = splitString[2].toUpperCase();

    const rover = new Rover(gridPosition, direction);

    rovers.push(rover);

    print(`Rover placed at x=${x}, y=${y}, facing ${direction}`)

    print(`-------------------------`)
    
	askQuestion('Enter Rovers movement (L, R or M): ', roverInstructions);

    return true;
}

function roverInstructions(instructions: string): boolean {
    // 'LMLMLMLMM'
    const instructionsArr = instructions.toUpperCase().split('');

    rovers.map((r, index) => {
        instructionsArr.map((i) => {
            if (i === 'L' || i === 'R') {
                rovers[index].facingDirection = roverRotate(rovers[index], i);
            }
    
            if (i === 'M') {
                rovers[index] = roverForward(rovers[index], i);
            }
        })

        roverOutput(rovers[index]);
    })

    return true;
}

function roverRotate(rover: Rover, lr: string): any {
    if (lr === 'L') {
        if (rover.facingDirection === 'N') {
            return 'W'
        }

        if (rover.facingDirection === 'W') {
            return 'S'
        }

        if (rover.facingDirection === 'S') {
            return 'E'
        }

        if (rover.facingDirection === 'E') {
            return 'N'
        }
    }

    if (lr === 'R') {
        if (rover.facingDirection === 'N') {
            return 'E'
        }

        if (rover.facingDirection === 'W') {
            return 'N'
        }

        if (rover.facingDirection === 'S') {
            return 'W'
        }

        if (rover.facingDirection === 'E') {
            return 'S'
        }
    }

    return;
}

function roverForward(rover: Rover, m: 'M') {
    if (rover.facingDirection === 'N') {
        rover.position[1] += 1;
    }

    if (rover.facingDirection === 'W') {
        rover.position[0] -= 1;
    }

    if (rover.facingDirection === 'S') {
        rover.position[1] -= 1;
    }

    if (rover.facingDirection === 'E') {
        rover.position[0] += 1;
    }

    return rover;
}

function roverOutput(rover: any) {
	print(`Rovers final position ${rover.position[0]}, ${rover.position[1]}, ${rover.facingDirection}`);
}

startRover();

