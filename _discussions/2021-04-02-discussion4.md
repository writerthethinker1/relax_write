---
layout: post
title: "Discussion 4"
date: "2021-04-02"
published: true
---

Welcome again to discussion 4! This week we are moving on to special distributions among which are Poisson, Gamma, and Square of Normal. In the midterm, we noticed that many of us had a brief error when computing probability, so we'll start off with this difficulty...

## Probability Error

When we have

$$
\mathbb{P}(f(X) = \alpha)
$$

it doesn't always mean that $\mathbb{P}(X = f^{-1}(\alpha))$ and we can't really interpret $f(X)$ as an image of a function because there might be *more than one* way to have $f(\cdot) = \alpha$. For example, if we constrain our domain to groups under modulo 2 we have many values! Suppose, $f(x) = x \mod 2$, and we have $\mathbb{P}(f(X) = 1)$ for $X \in \lbrace 0,1,...\infty \rbrace$. What could be the chance then? It's 50%, assuming a uniform distribution since it's like asking the chance for an odd number. The point? There's no way $f^{-1}$ is going to help find it...Feel free to ask us if you're still stuck on this, it's nice to help out.


Now for the discussion problems

## Problem 1

Compute assuming $X \sim \text{Pois}(1)$

$$
\mathbb{P}((X - 3)(X - 5) = 0)
$$

Then for the harder quadratic $X^2 + 4X - 7$:

$$
\mathbb{P}(X^2 + 4X - 7 = 0)
$$

Would a negative answer be valid even though a negative solution exists?

Feel free to talk with your group about a solution. It's better to come up with one if you are stuck and it's just a problem.

(just a sample.)
