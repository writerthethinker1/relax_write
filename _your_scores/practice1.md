---
layout: post
title: 'Practice 1'
type: 'practice_scores'
date: 2021-03-01
published: true
---

Overall the first set of practice problems went great! The first problem had many intuitive guesses as well as other features that were new. The sets are graded online on some grading platform so you can check them at your leisure.

---

**If you haven't yet made an account, please do so!!! It's the only way you can check for your errors! See us if you're stuck, we're more than happy to help.**

---

They've all been graded and sent over to you guys if you have accounts. You guys have your copies of what you sent, so you can mark them up and see where some whoopsie's were made. The most common mistakes were...


## Confusing Transpose with other Operation

There were a few of you guys who instead of taking a transpose, decided to take some other operation of the matrix you made. So, something like

$$
M = \pmatrix{2 & 3 \\ 3 & 2} \implies M' = \pmatrix{2 & 3 \\ 3 & 2}
$$

Is a valid answer, but sometimes people flipped the first two rows, giving

$$
M^\ast = \pmatrix{3 & 2 \\ 2 & 3}
$$

which isn't the definition of a transpose. Just a slight error, nothing too much.


## Null and Initial Hypothesis, Distributions

This one was a bit sketchy for me too after seeing some of your answers. Originally, I thought maybe a uniform distribution of the amount in the bottles would be present prior to data collection, maybe knowing factory standards gives the bounds: $U(30L, 50L)$ for each bottle. Generally, as the student collected more and more data, this distribution was updated to be more and more dense toward, maybe 39L, keeping the entropy the same. Maybe $X\vert\text{collection} \sim U(30L, 40L)$, which is better than when we didn't measure.

But, equally valid was a normal for the 'true' amount or $X_{\text{bottle}} \sim N(\mu, \sigma^2)$, if you see it that way. Just a note on hypotheses,

*We can only find evidence against our initial assumptions (the null or $H_0$)*

It would be weird for us to say we have evidence for something, because it implies *knowledge*, which we never have in a statistical setting. We only have evidence for or against, never true knowledge. So, the claim that the bottles are different in CO2 gas might be something alternative. Something initial to our minds might be that the factory is uniform in CO2 gas rates because that's how we intended things to be! And we can find evidence against it. The null usually has the least entropy.

*If you're stuck, try to think what might be initial to our minds based on the setting?*

That might give hints. I had this problem too wayyyy back in 2014-15, I flipped them often. Don't worry if you can't do this bit first, as long as you can do the statistical tests, you'll see later what the hypotheses are: the evidence points to it!

Anyway, that's it for the practice solutions overview of completion. Good work!


(just an illustration).
