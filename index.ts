import { clear, print, askQuestion } from './console';

const directions = ["N", "S", "E", "W"] as const;

type Direction = typeof directions[number];

const rovers: Rover[] = [];

// first rover added will start from 0
let roverNumber: number = -1;

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
	askQuestion(`Enter Plataeu Size (x y e.g. 5 5): `, createGrid);
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

    questionPlaceRover();

    return fullMatrix;
}

function questionPlaceRover() {
	askQuestion('Enter Rovers starting position (x y Directon: e.g. 1 2 N): ', placeRover);
}

function placeRover(position: string): boolean {
    // TO DO: Don’t allow numbers larger than the size of the grid, or any letters outside of the Direction type.

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

    roverNumber++;

    print(`Rover placed at x=${x}, y=${y}, facing ${direction}`)

    print(`-------------------------`)
    
	askQuestion('Enter Rovers movement (L, R or M): ', roverInstructions);

    return true;
}

function addNewRover(yesOrNo: string): any {
    yesOrNo = yesOrNo.toUpperCase();

    if (yesOrNo === 'Y') {
        questionPlaceRover();
    }

    else if (yesOrNo === 'N') {
        roverOutput();
    }

    else {
        print('Invalid input')
        askQuestion('Add another Rover? (y / n): ', addNewRover);
    }
}

function roverInstructions(instructions: string): boolean {
    // 'LMLMLMLMM'
    const instructionsArr = instructions.toUpperCase().split('');

    instructionsArr.map((dir) => {
        if (dir === 'L' || dir === 'R') {
            rovers[roverNumber].facingDirection = roverRotate(rovers[roverNumber].facingDirection, dir);
        }

        if (dir === 'M') {
            rovers[roverNumber] = roverForward(rovers[roverNumber]);
        }
    })

	askQuestion('Add another Rover? (y / n): ', addNewRover);

    return true;
}

function roverRotate(roverDirection: string, lr: string): any {
    if (lr === 'L') {
        if (roverDirection === 'N') {
            return 'W'
        }

        if (roverDirection === 'W') {
            return 'S'
        }

        if (roverDirection === 'S') {
            return 'E'
        }

        if (roverDirection === 'E') {
            return 'N'
        }
    }

    if (lr === 'R') {
        if (roverDirection === 'N') {
            return 'E'
        }

        if (roverDirection === 'W') {
            return 'N'
        }

        if (roverDirection === 'S') {
            return 'W'
        }

        if (roverDirection === 'E') {
            return 'S'
        }
    }

    return;
}

function roverForward(rover: Rover) {
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

function roverOutput() {
    rovers.map((rover, index) => {
	    print(`Rover ${index + 1} final position: ${rover.position[0]}, ${rover.position[1]}, ${rover.facingDirection}`);
    })
}

startRover();
