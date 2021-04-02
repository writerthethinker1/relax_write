---
layout: post
title: 'Lab 1 Scores'
type: 'lab_scores'
date: "2021-03-30"
published: true
---

Overall the first lab went well. You guys measured the specific heat for vaporization well to 4 significant digits. But, there were some universal errors and places we could improve on as the lab instructors sent over to me. We'll give them below for the next one...

## Explaining Significant Digits

Some people couldn't explain why we use significant digits nor the standard for industrial experiments. In the hypothetical scenario (lab questions), there were 2 significant digits for the speed of a train then we did 8 arithmetic operations to transform the given to the desired. As given here:

$$
0.34 \to f(0.34) = 0.34^2 + \sin(0.34) + (0.34/100) - \sum_{x = 1}^{100} (x)^{0.34}
$$

the answer gives some physical quantity we are interested in, but...to what degree? is the image $f(x)$ also accurate to 2 significant digits? *People had some problem here, some yes, some no and others maybe*. The answer is that the image is not accurate to the precision we had initially, and this can be explained using a measurement argument, consider a measure $m$ with error $e$, the true measure is $\mu = m + e$. Without involving random variables, we know that the more digits we have given 'correct' apparatus and almost no human error, the smaller the $e$ will be. But, when we start using $f(\mu)$, that's when things aren't as so. Suppose $f(x) = x^2$, and using the form given:

$$
f(\mu) = m^2 + 2me + e^2
$$

(we assume large values of $m$, at least $> 1/2$, $e$ is taken as small).

Ideally, we'd have $\mu^2$ as the new measure, but because we are empirical, we have known $m^2$. This makes the new error $f_e$ as $2me + e^2$. And by construction:

$$
e < 2me + e^2
$$

Hence, the error increases per arithmetic and other operations. We know less about the new quantity, like the square of the velocity. Later, in the next lab, we'll talk more about random variables for the error as in:

$$
\mu = M + E \\
E \sim \mathcal{N}(\mu, \sigma) \\
M \sim \chi^2_2
$$

---

**Bonus:** for your calculations! if you have to do scientific notation $a \times 10^b$ for many quantities $10^b$ it scales the image, small square to big square. 10 times big, 10 times small idea. 

Other than that, great work! I won't talk about averages, but everyone passed! Next one's about the things discussed currently.
