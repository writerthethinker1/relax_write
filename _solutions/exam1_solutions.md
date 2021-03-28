---
layout: post
title: 'Midterm 1 Solutions'
type: "exam_solutions"
---

<!-- solutions are easier to write in markdown! -->

In this page, we solve the problems for the first discussion. You guys sure had some interesting answers, and we are just giving our solutions to the problems. Feel free to talk it up with us if you don't agree, it's a mark of critical thinking.


## Problem 1

**Solution:** The function $f(x,y) = x + y$ models the sum of any two numbers, $x$ marks the first one and $y$ marks the next one. Both $x$ and $y$ are free to vary independent of each other. If the payoffs between phil and joe are put together, the result is how much money both of them made in the day. A joint profit for them.

## Problem 2

**Solution:** The sum of $X$ and $Y$ is another chi-square variate. The sum of any two is another one of the same distribution with the degrees of freedom added together. So, $X + Y \sim \chi^2_3$ The next bit requires some probability theory, but it's not that bad. We can write $Q = e^Z$ and have:

$$
\mathbb{P}(Z < z) = F_{Z}(z) \implies \mathbb{P}(Q < e^z) = F_{Q}(q = e^z) = F_{Z}(z)
$$

Then...

$$
\frac{d}{dq}F_{Q}(q) = f_Z(z) \frac{dz}{dq}
$$

How I remember it, minus all the weird formulas and hard explanations in your class:

$X = g^{-1}(Y)$ is a transformation of *one-dimensional* lines. We can see this by the new differential: $dx = g^{-1}(y)'dy$. All continuous probability at a point uses a differential so

$$
f(x)dx = f(g^{-1}(y))g^{-1}(y)'dy
$$

that alone is enough to find the function (look at things without differential)! Cheers! The new p.d.f is the old one for $Z$ but with $Z$ mapped with $\log(Q)$ with the space transformation adjustment. Try it with something easy, $3X = Y$ which is $X = Y/3$, each new area is shrunk by 1/3 of the original. It relies on equating differentials: $x = y(\alpha) \implies dx = y'(\alpha)dy$. When $x$ changes by a small amount and is related to a quantity $y$ since y depends on $x$. Per every small change of $x$, $y$ changes in relation. The rate is $dy/dx = f'(x)$. A rate along the quantity which it measures gives the differential, $dy = f'(x)dx$. *Rates measure relative change! Knowing how much relative change happens gives us the change for the other variable.*

## Problem 3

**Solution:** Just make sure things don't pile up like it happened with me. Take some time and do those things which aren't hard, but you think are hard. Or, find things you truly enjoy; it won't be hard then, I promise. Usually, I had this listen to homework to do homework process while learning in the past. Now, I try to enjoy 1 thing about what I read and it's made a large difference! Relate it to your goals!

That ends the solutions! Enjoy learning more!

(Just a sample for illustration.)
