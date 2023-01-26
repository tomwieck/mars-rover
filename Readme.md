# Mars Rover Task

## What is it?
---
## How to use
---
<details>
<summary>To Do</summary>
<pre>

---

🟥🟥 Running `npm test` there appears to be no tests at all - this was supposed to be a TDD-based project, but the minimum would be to ensure there are at least _some_ tests even if they're written after the fact!

---

🟥 `npm start` - the prompts all allow invalid input so I can enter "duiahuie" as a grid and it doesn't complain, it just creates a grid from that somehow. Similarly, invalid commands can be entered which causes the app to crash.

It's important to check for and handle invalid input - this is part of the purpose of using automated testing, but even without tests the user experience is important!

---

🟨 const matrix : number[] = [];
const fullMatrix : number[][] = [];

for (let i = 0; x > i; i++) {
matrix.push(i);
}

for (let i = 0; y > i; i++) {
fullMatrix.push(matrix);
}

This seems like a confusing way to initialise a 2D array, although as above if you use a tuple for the maxGrid size you just need a single value, say [10,10] for a 10 x 10 grid.

To see if it's inside the plateau you just check that any given position is less than the max for both the first and second values.

---

🟥 `placeRover(position: string)`

Making position a string here is part of the problem. This function would be more accurately named

`parseUserInputStringAndCreatePositionObjectAndThenPlaceRoverThere`

which suggests it's doing too much

`placeRover(position: Position)`
would make this function super simple - it just places a rover at the position!

you'd then have to write a
function parsePosition(input: string) : Position {}

but this function is then VERY testable - ensure it returns valid positions or defaults for any given string

OR

function parsePosition(input: string) : Position | undefined {}

If you wanted you could get it to return undefined if the string is invalid, and then anyone who calls this function has to sensibly handle undefined. Either way is fine.

---

👀 // TODO check type is Direction

I think we've found our culprit 😅

---

🟨 function roverRotate(roverDirection: string, lr: string): any {}

Imagine if this lived in direction.ts as a helper, and instead had this signature:

function roverRotate(start: Direction, rotation: 'L' | 'R'): Direction {}

This would immediately eliminate a lot of bugs!

---
</pre>
</details>

## Part 1 - Initial Planning


Plateau - Square / rectangle

Letters - N, S, W, E for North, South, West and East

Rover - Rovers position is x and y

Will need an [x,y] to keep track of the plateau based on user input. 

For example

5 5 ->

| x , y | x | x | x | x | x |
|-----|-----|-----|-----|-----|-----|
y | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 |
y | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 |
y | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 |
y | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 |
y | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 |

`Function createGrid(number x, number y) => return { Array[…x,…y]; }`

Be able to accept several lines of input into the program, first through the command line and then later expand to more of a UI 

Lines of Input to the Program:

## First input
`createGrid(x: number, y: number)`

Example 

`createGrid(5,5)`

## Second input

`placeRover(x: number, y: number, direction: Direction) => return { success: Boolean }`

`Direction type = ’N’ | ’S’ | ‘E’ | ‘W’`

Don’t allow numbers larger than the size of the grid, or any letters outside of the Direction type.

e.g.

`0 0 N`

This means the Rover is at the bottom-left corner facing in the North direction.

## Third Input 

`moveRover(directions: string) => return { success: Boolean }`

`Movement type = ‘L’ | ‘R’ | ‘M’`

L - Spins the Rover 90 degrees Left without moving from the current coordinate point

R - Spins the Rover 90 degrees Right without moving from the current coordinate point

M - Moves the Rover forward by one grid point, maintaining the same heading/orientation

Return false if this would cause the rover to fall off the edgemay need two error messages, one for invalid input and one for input causing rover to fall

Allow Second and Third input to repeat (set amount of times? Will need to be decided)

Then display output (command line or UI)

`complete() => return { 'Number Number Direction' } `

e.g. 

`1 3 N`

Methods Overview

```
createGrid(x: number, y: number)

placeRover(x: number, y: number, direction: Direction) => return { success: Boolean }

moveRover(directions: string) => return { success: Boolean }

complete() => return { Number, Number, Direction }
```

____

## 💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.

Here are the letters and their resultant action:

### Letter Action
<b>L</b> 

Spins the Rover 90 degrees Left without moving from the current coordinate point

<b>R</b> 

Spins the Rover 90 degrees Right without moving from the current coordinate point

<b>M</b> 

Moves the Rover forward by one grid point, maintaining the same heading/orientation
_________

## First Line of Input to the Program
The first line inputted into the program represents the upper-right coordinates of the Plateau.

> `5 5` 

This Plateau has maximum (x, y) co-ordinates of (5, 5).

## Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.

Each rover receives two lines of input.

### First Line of Input to a Rover

The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).


> `1 2 N`


### Second Line of Input to a Rover
A string of letters representing the instructions to move the Rover around the Plateau.

> `LMLMLMLMM`

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

### Output
For each Rover, the output represents its final position (final coordinates and where it is facing).

> `1 3 N`


## Example Test Case
Lines of Input to the Program:
```
5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

```

Expected Output:
```
1 3 N

5 1 E
```


## Notes
👉 Think about what features you can add to turn this into a proper “mini-application” rather than a simple input-output to a function.

👉 Feel free to implement an approach that you feel comfortable with to receive input into your program e.g. feeding input values into unit tests; input via a console application; supplying input via a file etc.

👉  We would like you to apply Test-Driven Development (TDD) to test-drive your solution.
👉 We would like to see production-quality code, this means you have thought carefully about your code design and that your code is clean and well-tested.
👉 We will be assessing the quality of your codebase:
 - Is your code readable?
 - Have you split your code into a sensible/neat folder/file structure?
 - Separation of concerns - is your UI code entwined with your Mars
Rover logic? If so, how could you separate them out?

👉  We’d love to see good unit test coverage and all unit tests passing.

## 💡 Top Tips
- Sketch / plan out your ideas first.

- Think about which features you must include, and which you’d like to include if you have time.

- Imagine you’re working on a team of developers on a growing project - what would your colleagues expect to see from you as you design and implement this codebase?

- Commit into your Github repository frequently and with descriptive commit messages.

- Aim for production-quality code: well-designed, easy to extend, readable, and well-tested.

- Write a descriptive README to document the key features of your solution, your assumptions, approaches and future thoughts. Look into the use of Markdown to write a professional-looking README.

- Note down future thoughts / considerations:

- You can assume that the Plateau is rectangular, but be sure to have a
think about how easily your program can be extended upon in the future
to support a different shaped Plateau.

- How might your Plateau support other vehicles and not just Rovers?

- Have fun with it! It’s not every day you get to put a Rover on Mars, get creative and enjoy! 

👽 Once you've finished the task, if you want to extend your solution
with a visual interface, a programmable Rover, obstacles, aliens, go for it!
