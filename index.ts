import { clear, print, askQuestion } from './console';

const directions = ["N", "S", "E", "W"] as const;

type Direction = typeof directions[number];

const directionsObj = {
    "N": "North",
    "S": "South",
    "E": "East",
    "W": "West",
}
class Rover {
    id: number;
    position?: number[];
    facingDirection?: string;

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

	askQuestion('Enter Rovers starting position (x y Directon: e.g. 1 2 N)', placeRover);

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

    print(`Rover placed at x=${x}, y=${y}, facing ${direction}`)
    
	askQuestion('Enter Rovers movement (L, R or M)', roverInstructions);

    return true;
}

function roverInstructions(instructions: string): boolean {
    // 'LMLMLMLMM'
    const instructionsArr = instructions.toUpperCase().split('');

    instructionsArr.map((i) => {
        if (i === ('L' || 'R')) {
            roverRotate(i);
        }

        if (i === 'M') {
            roverForward(i);
        }
    })

    return true;
}

function roverRotate(lr: string) {
    if (lr === 'L') {
        // if (roverDirection)
        // 'N' -> 'W'
        // 'W' -> 'S' 
        // 'S' -> 'E'
        // 'E' -> 'N'
    }

    if (lr === 'R') {
        // if (roverDirection)
        // 'N' -> 'E'
        // 'E' -> 'S'
        // 'S' -> 'W'
        // 'W' -> 'N'
    }
}

function roverForward(m: 'M') {
    // N -> (0, +1)
    // E -> (+1, 0)
    // S -> (0, -1)
    // W -> (-1, 0)
}

startRover();

