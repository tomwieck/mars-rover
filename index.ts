import { clear, print, askQuestion } from './console';

const directions = ["N", "S", "E", "W"] as const;

const directionsObj = {
    "N": "North",
    "S": "South",
    "E": "East",
    "W": "West",
}

type Direction = typeof directions[number];

export function startRover(): void {
	clear();
	askQuestion(`Enter Plataeu Size (x y e.g. 5 5)`, createGrid); 
}

function createGrid(size: string): number[][] {
	// TODO add error / type checking 
    print(`Creating ${size} grid`);

    const matrix : number[] = [];
    const fullMatrix : number[][] = [];

    // parse user input
    let numbers = size.split(' ');

    let x = parseInt(numbers[0])
    let y = parseInt(numbers[1])

    console.log(x, y)

    for (let i = 0; x > i; i++) {
        matrix.push(i);
    }

    for (let i = 0; y > i; i++) {
        fullMatrix.push(matrix);
    }

    console.log(fullMatrix);


	askQuestion('Enter Rovers starting position', placeRover);

    return fullMatrix;
}

function placeRover(position: string): boolean {
    // 1 2 N
    // x: number, y: number, direction: Direction
    // Don’t allow numbers larger than the size of the grid, or any letters outside of the Direction type.

    let splitString = position.split(' ');

    // check >= grid x 
    let x = splitString[0]

    // check >= grid y 
    let y = splitString[1];

    // TODO check type is Direction
    let direction = splitString[2];

    print(`Rover placed at x=${x}, y=${y}, facing ${direction}`)
    
    return true;
}

startRover();

