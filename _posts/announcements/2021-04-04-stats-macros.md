---
layout: post
title: "Statistics Macros"
date: "2021-04-04"
summary: "Just some common notation for expressing ideas in statistics..."
published: true
---

All other macros are given in this post, just check the .md file for this musing to see what to type to render them in mathjax. Happy typing, hope it's relaxing. Macros make life easier. These are the macros used often in statistics but not included in mathjax.

### Random variables

If you want to declare random variables as independent, use the `\ind` macro to give $\ind$ and if two random variables are not independent, then you can use the `\nind` macro to give $\nind$. To specify the distribution of any random variable, use the `\distas{..}` macro, for example, if you want and 'iid' sample you can have formatted as `\distas{iid}` or $\distas{iid}$.

If you want to describe a sample of random variables from $1$ to $n$, then you can use the `\sample{..}{..}` macro to give things like $\sample{X}{100}$. To add random variables of the same letter, you can use the `\add{..}{..}` macro to make the sum, for example, $\add{X}{90}$. Same with multiplying, use the `\mult{..}{..}` macro to give things like $\mult{Y}{8}$.

### Associations

For random variable associations, you can use the macros `\cov{..}` to give a covariance form of $\cov{X, Y}$, `\cor{...}` for correlations $\cor{X, Z}$.

### Operators

For probability statements, you can use the `\P{..}` to make a probability statement $\P{X = 1}$, it also works in display mode too! You don't have to manually add `\left(..\right)` to have things appear fine:

$$
\P{\sum X_i = 2}
$$

Similarly, for expectations, fisher information, variance, likelihoods, and log-likelihoods  there's `\E{..}`, `\I{..}`, `\Var{..}`, `\Li{..}`, `\li{..}` that does the same thing as the probability statement to give things like $\E{X^2}$, $\I{\ta}$, $\Var{X}$, $\Li{\ta \up X}$, and $\li{\ta \up X}$  and in display mode:

$$
\E{\int Xy^2dy} \ \ \I{\ta^2 + \sum \ta_i} \ \ \Var{X^8 + \frac{1}{4}} \\ \Li{\ta^2 + \frac{4}{3} \bigup X} \ \ \li{\ta^6 + \frac{2}{3} \bigup X}
$$


**Note on vertical conditioning bar: the macro for it is `\up` and `\bigup` if you want a larger size. The one on the keyboard will be treated as part of a markdown table, so don't use it, the page won't be made correctly.**

### Distributions and Summary Statistics

Many of the commonly used distributions in statistics are there in macro form to make typing easy. There's `\Bin` for binomial distribution, `\N` for the normal distribution, `\geom` for the geometric distribution, `\pois` for the poisson distribution, `\bern` for the Bernoulli distribution, `\gam` for the gamma distribution, `\Beta` for the beta distribution, `\expo` for the exponential distribution, `\hypgeo` for the hypergeometric distribution, `\nbin` for the negative binomial distribution, `\cauchy` for the Cauchy distribution, `\pareto` for the Pareto Distribution. The distributions are given in form below as they appear in a post or page...

$$
\Bin \ \ \N \ \ \geom \ \ \pois \ \ \bern \ \ \gam \ \ \Beta \ \ \expo \ \ \hypgeo \ \ \nbin \ \ \cauchy \ \ \pareto
$$

We have also included macros for the p.d.fs and c.d.fs for the distributions given above for easy typing. For example, the density of the binomial distribution is given as

$$
\Bind{p}{n}{x}
$$

and we can have 1 value of it with $n = 20$, $p = 0.3$, and $x = 3$ as

$$
f(3) = \Bind{0.3}{20}{3}
$$

For summary statistics like those in the Tukey's 5 number summary, we have the macros `\fqt`, `\iqr`, `\Min`, `\Max`, `\tqt`, `\Med` as well as the mode with `\mode` and general quantile `\qt{..}{..}`. All of which give respectively:

$$
\fqt \ \ \iqr \ \ \Min \ \ \Max \ \ \tqt \ \ \med \ \ \mode \ \ \qt{\chi^2}{\alpha} \ \ \qt{X}{0.75}
$$

For order statistics, there is `\ord{..}{..}` that gives $\ord{Y}{5}$.
