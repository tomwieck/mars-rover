# Mars Rover Task

## Part 1 - Initial Planning


👉 After reading the second part, please return here to Part 1 and submit your initial design thoughts. 

👉 It's up to you what to include in your design, but we suggest some kind of sketch, notes or even pen/paper and a photo of your notes is great.

👉 Think about what modules you'll need, remembering the Single Responsibility Principle - each piece of code should have one job. (A 'job' in this case could be as simple as "converts an X to a Y", or a more complex job like "this class's job is to manage the flow of data between a few other classes")

👉 If you want to also include sketches, written ideas, whatever, that's up to you!

👉 This doesn't have to be particularly long or detailed - a short feature list, a few paragraphs of thoughts, a list of classes, perhaps a sketch is fine.


Plateau - Square / rectangle

Letters - N, S, W, E for North, South, West and East

Rover - Rovers position is x and y

___ 

## Example

> `0 0 N`

This means the Rover is at the bottom-left corner facing in the North direction.

____

## 💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.

Here are the letters and their resultant action:

### Letter Action
<b>L</b> 

Spins the Rover 90 degrees Left without moving from the current coordinate point

<b>R</b> 

Spins the Rover 90 degrees Right without moving from the current
coordinate point

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
