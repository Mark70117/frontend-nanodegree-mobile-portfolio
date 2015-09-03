frontend-nanodegree-arcade-game
===============================

This the the repo for Project #4 of the Udacity Front-End Web Developer Nanodegree

# How to run the application

To view 'index.html' page go to 
http://mark70117.github.io/frontend-nanodegree-mobile-portfolio/index.html

To view 'pizza.html' page go to 
http://mark70117.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html

On 'pizza.html' there is a slider under the "Our Pizzas!" section that allows one to resize the
named pizza that appear to the left of the name and items on the pizza.

# Optimizations made in views/js/main.js

Optimizations are marked in code as comments with the prefix  '// P4'

## 60 fps optimizations

The 60 fps optimizations were focus on the functions updatePositions() and addEventListener().

Two source of 'jank' were animating more pizza than necessary and redoing too much work in the
for loop that looped over every pizza.

The number of pizza was reduced by calculating the numbero of 8 pizza rows that could 
possibly fix on the screen.  The device dimensions were used to calcualte a worst case
scenerio.  Then only the maximum number of potentially visible pizza were created. 

To improve the runtime of the for loop in updatePositions() the work of calculating the
phase was put in a seperate loop.  Due to the use of the mod operator (%) only 5 possible
value of phase would be needed for a given scrollTop value.  The document query result
was stored to prevent repeated queries within the for loop.

Those two javascript improvements left the paint portion of the update taking up the
largest proportion of the update cycle.  To addresss the paint time, webkitTransform
'translate3d(0,0,0)' was used to force the animated pizza into different layers.

## Resize Pizza optimizations

The details of how to improve the performance of the pizza resize was cover in Udacity's
Browser Rendering Optimization > Lesson 5 > Stop FSL Solution

The main optimization was throwing away the make work code and assigning a newWidth based 
in percentages not pixels (px).  

Further optimization was done by storing the response to the document query instead of
repeatedly making the same query inside a for loop.



