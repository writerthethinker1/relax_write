---
layout: post
title: "Logic in Sets"
date: "2021-04-03"
published: true
---


As I was learning more about sets in 2015-16, there came a relation between set operations and the logical ones. I'll list two as well as how they relate to logic from a verbal point of view.

## Union

The union between sets is noted with the $\sor$ symbol and gives elements that are *either* in the first set *or* the second. For example, if one writes assuming $\ \mathcal{S} = \set{0, 2,...,9}$

$$
\set{1, 3, 2} \sor \set{6, 2, 0}
$$

then the answer is $\set{1, 2, 3, 0, 6}$ and all the elements of the answer are either in the first set or the second. Now if we denote $Z = \set{1, 2, 3, 0, 6}$, then we can have the opposite of the set as (classical logic):

$$
\neg Z = \neg \left(\set{1, 3, 2} \sor \set{6, 2, 0}\right)
$$

which using a logic rule gives

$$
\neg Z = \set{4, 5, 6, 7, 8, 9} \sand \set{1, 3, 4, 5, 7, 8, 9} \\
= \set{4, 5, 7, 8, 9}
$$

Hence, we have made the opposite of a set, $\neg Z$.

## Intersection

The intersection is denoted using the $\sand$ symbol and denotes elements that are in the first set *and* the second. Similarly, if we have the same sample space and use intersections first, we have

$$
\set{1, 3, 2} \sand \set{6, 2, 0}
$$

which gives $Z = \set{2}$. The answer for the opposite of this set is $\neg Z = \set{0, 1, 3, 4, 5, 6, 7, 8, 9}$. Then, when we take the opposite using logic rules:

$$
\neg \left(\set{1, 3, 2} \sand \set{6, 2, 0}\right) \\
= \set{0,4, 5, 6, 7, 8, 9} \sor \set{1, 3, 4, 5, 7, 8, 9} \\
= \set{0, 1, 3, 4, 5, 6, 7, 8, 9}
$$

which is the opposite of $Z$ by itself. Neat, right?

**All the set operation rules and formulas can be verified using this logical method. They are logic all over again.**

Which is why I sometimes call $\sor$ and $\sand$ *set-or* and *set-and* inside my head at times. As a bonus, consider the *logical sets* $A = \set{a = 0 \text{ or } 1}$, $B = \set{b = 0 \text{ or } 1}$ and $C = \set{c = 0 \text{ or } 1}$ where

$$
\P(a = 1) = \alpha \ \ \ \P(a = 0) = \beta \\
\P(b = 1) = \gamma \ \ \ \P(b = 0) = \delta \\
\P(c = 1) = \alpha' \ \ \ \P(c = 0) = \beta'
$$

Then, the statement $(A \sor B) \sand C$. The valuation is the truth! Either 0 or 1. And we read the statement as *the elements both in C and either in A or B* which logically is *the elements either in A and C or B and C*. Using sets, we can do logic and logic we can do sets as well. We also just mixed some probability theory with set theory. It's just relating subjects with each other, something that makes the one you're learning right now more enjoyable and creative. It also helps with memory and a calming zen feel.
