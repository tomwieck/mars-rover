import readline from 'readline';

export function print(str: string): void {
	console.log(str);
	console.log();
}

export function clear(): void {
	console.clear();
}

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export function askQuestion(question: string, callback: (arg: string) => void) {
	reader.question(`${question}`, callback);
}
