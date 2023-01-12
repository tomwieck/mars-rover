import { clear, print, askQuestion } from './console';

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

    return fullMatrix;
}

startRover();

