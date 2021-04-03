---
layout: post
title: 'Orthonormal Bases'
date: 2021-03-01
---

Back in 2016, there was something known as an *orthonormal base*. It's just a fancy way of laying a square grid on top of things. The basic condition is if $\vec{\alpha}$ is a 2-D vector and $\vec{\beta}$ is another one, they are orthonormal bases if and only if they are perpendicular. Nothing fancy.

You'll see them from time to time though.

I realllllly don't like computing those dot products because they take so much time. But, problems then had lots of them, oh well. Compute away! When this product is 0, we have orthonormal bases:

$$
\vec{\alpha} \cdot \vec{\beta} = 0 \implies \vec{\alpha} \perp \vec{\beta}
$$

A lot of matrix operations rely on this property of orthonormality. One that's used over and over again is the notion of *basis*. We have that all vectors orthonormal to each other always make bases. Whether the vectors we have in them are, that's debatable. But were you to find any vectors perpendicular to each other in addition to the orthonormal bases, they are *rotations* of the ones we just found out. Basically,

$$
\vec{a} = \alpha\pmatrix{1 \\ 0} + \beta\pmatrix{0 \\ 1}
$$

for a 2-dimensional setting. The vectors on the right hand side are orthonormal to each other in 2-D space. (Assuming all entries are strictly real).
