import turtle

# Function to draw an eye with highlights
def draw_eye(x, y):
    smiley.penup()
    smiley.goto(x, y)
    smiley.pendown()
    smiley.begin_fill()
    smiley.color("black")  # Draw eye
    smiley.circle(15)
    smiley.end_fill()
    smiley.penup()
    smiley.goto(x-7, y+5)
    smiley.pendown()
    smiley.begin_fill()
    smiley.color("white")  # Draw eye highlight
    smiley.circle(7)
    smiley.end_fill()

# Function to draw a smile
def draw_smile():
    smiley.penup()
    smiley.goto(-40, 70)
    smiley.setheading(-60)
    smiley.pendown()
    smiley.circle(40, 120)

# Creating turtle object
smiley = turtle.Turtle()

# Set parameters
screen = turtle.Screen()
screen.bgcolor("white")
smiley.pensize(2)
smiley.speed(-1)  # Set speed to 2

# Draw face
smiley.penup()
smiley.goto(0, -100)
smiley.pendown()
smiley.begin_fill()
smiley.color("#ffcc00")  # Yellow
smiley.circle(100)
smiley.end_fill()

# Draw left eye
draw_eye(-30, 120)

# Draw right eye
draw_eye(30, 120)

# Draw mouth
smiley.color("black")
draw_smile()

# Hide turtle
smiley.hideturtle()

# Keep the window open
screen.mainloop()
