---
layout: post
title: 'Final'
date: 2021-03-26
---

Looks like finals are over and graded! As an average this time around was....

**74%!**

That's pretty nice considering none of us knew what we were doing in the beginning. Even if you didn't score as you'd like, I bet you know something more than what you did way back in January. That's something, different than before at least in some respect. Still, you guys made errors and we'll explain them below, after that **best of luck doing what you wish!!**

But, first...let's note where there were the most errors.

## Probability Mishap

Sometimes the probability statements have odd leaps...as in $X \sim N(0,1)$ and then

$$
\mathbb{P}(X^2 = 4) \implies \mathbb{P}(X = 2)
$$

but no justification for why negative values are excluded. It's an honest mistake and a timer in the background ruins the fun of learning, right? Don't be so hard on yourself.

## Regression Trouble

When the expectation of the regression line was taken, the way it was written wasn't conditional on the new data we have, the form given was incorrect:

$$
Y = \vec{\beta}'\vec{X} + \vec{\epsilon}
$$

(it's for **all $X$'s** and we don't know about that data yet...odd, right?)

$$
Y|\vec{X} = \vec{\beta}'\vec{X} + \vec{\epsilon}
$$

this is the correct one, it's for one data entry point, random and we have knowledge of it. We can make an inference about a distribution here for that point only.

---

That's about it for the errors! Congrats on making it this far with critical thinking, we hope you enjoyed this course. It was quite the roller coaster! I learned a lot just from teaching you guys. Hope you enjoyed one thing from this course if anything...

Later!

(just for illustration or seeing how things look.) 
