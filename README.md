## Before you code


### 1. Take a look at the description and code in bowling.js, as well as the tests in bowling-test.js


### 2. Rewrite the problem in your own words:
one game = 10 frames
one frame = two rolls
first roll = 0 to 10 pins
second roll = 0 to (10 - first roll) pins

scoring:
if first && first + second < 10, score = first + second
if first = 10, reset #rolls for this frame to 0, keep 10, add next two pin numbers to score
if first + second = 10, keep 10, add next pin number to score

### 3. What are your initial thoughts about this problem? (2-3 sentences)
game class (this.frame, score counter)
    frame class (this.roll, roll counter)
        roll class (score incrementer, pin counter, totalScore function)

### 4. Write out a few lines of initial pseudocode within your totalScore function (this should be short, and not be real code!)
input: string
output: array
for test one:
string.split between characters
string.toArray (should be [2, 3, 2, 3, 2, 3 ...])
array.reduce to add all numbers

for test two:
string.split between characters
string.toArray (should be [2, /, 3, 2, 3, 2, 3 ...])
starting at the end, look for /
    change / to 10 + next position's value
    drop value before /
array.reduce to add all numbers

for test three:
string.split between characters
string.toArray (should be [X, 2, 3, 2, 3, 2, 3 ...])
starting at the end, look for X
    change X to 10 + next two positions' values
array.reduce to add all numbers









HANG ON, I'MMA RESTART - IGNORE THIS
to calculate this roll's score:
get # of pins knocked down
    if roll count = 0, this is the first roll
        -if 10 pins, run strike function and don't take a second roll
        -if < 10 pins, increment roll count, set this.score to # of pins, take second roll
    if roll count = 1, this is the second roll
        -if first roll count + this.roll count = 10, run spare function
        -else add first roll count + this.roll count to frame score, reset roll count, increment frame count

strike function
    this.roll score = 10
    reset roll count (maybe just decrement by 1?)
    if first (new) roll = 10, this.roll score = 20
    if second (new) roll = 10, this.roll score = 20
    
    
    
    
This was one of the first code challenges we were given at Turing, and I had a great time breaking down the problem into something I could understand, then building a solution piece by piece. It may not be pretty, but given my knowledge and experience at the time, I'm proud of it!
