---
layout: post
title: "Chemistry Notation Latex"
date: "2021-04-05"
summary: "Notes for chemistry notation, also links for later reference..."
contents: true
published: true
---

We also have chemistry notation via *mhchem* for writing various chemical equations. A full illustration of the various types of equations you can make are given in [this](https://mhchem.github.io/MathJax-mhchem/) page. Read it if you are stuck or need more references for the types of things you want to write. We'll be going over the basics to writing chemistry equations.

**Note: diagrams like chemical bonds and molecules (e.g. benzine rings) are not possible to make, but rendering them in latex, saving them as a picture and putting it in your page as one via `![..](..)` can also work.**

### The basics

To write any chemical equation (reactions, isotopes, formulas ($\ce{H2O}$)) always use two dollar signs to indicate you want to write using latex inline `$..$` or have 4 dollar signs for display math, one on top and one on bottom:

```
$$
.. % put that cool equation here!!
$$
```

The part with the `..` is where you can put the latex code for the chemical equation. For a chemical equation, use the `\ce{..}` macro to indicate you want to write one. Many chemical formulas come with subscripts and superscripts and are detected for you so for a formula you just have to write the atomic formula and number of them in the chemical formula, for example writing water we type out `$\ce{H2O}$` to have $\ce{H2O}$. And to write $\ce{Sb2O3}$ we just type `$\ce{Sb2O3}$`. In display math this would look like

$$
\ce{Sb2O3}
$$

and we had to write

```
$$
\ce{Sb2O3}
$$
```

to have it render. *Display math gives your formula it's own line if it's complex or something really large for viewing.*

If your formula has a charge associated with it, you can use the `^` symbol to indicate a superscript for that charge as in `\ce{CrO4^2-}` for $\ce{CrO4^2-}$. For a single charge we don't have to include a superscript mark `^`, but for more than one such as `2-` earlier or even `3+`, we have to include it to avoid rendering errors. For example, in the formula $\ce{Na+}$, all we had to type was `\ce{Na+}` but if somehow sodium had more charges, we can't do `\ce{Na3+}` because it gives $\ce{Na3+}$, instead we have to write `\ce{Na^3+}` for $\ce{Na^3+}$. Charges can be placed in between the formula as well as in $\ce{Na^+Cl^-}$ using `\ce{Na^+Cl^-}`. All hypothetical, but it's there if you want to.

**All numbers placed after the elements are subscripts by default, so the superscript changes this.**

If you want to add the amount of the compound as a note, you can just add the number next to the name, just make sure that if it's fractional you either close it in `()` or leave space for it. For example, to typeset $\ce{1/2 H2O}$ we write `\ce{1/2 H2O}` and to leave it as $\ce{(1/2) H2O}$ write `\ce{(1/2) H2O}`. Things like `()` and `[]` can be included in the `\ce` macro and will be rendered exactly as they are: they have no special meaning in mhchem. For example, if we wanted to write 2 negative ions for $\ce{AgCl2}$ but want to be unambiguous about the whole compound having it, then we just add parenthesis around the code to get

$$
\ce{(AgCl2)^2-} \ \ \ce{[AgCl2]^2-}
$$

writing as code

```
$$
\ce{(AgCl2)^2-} \ \ \ce{[AgCl2]^2-} % '\ \ ' are just spaces to
% spread them apart...
$$
```

If you want subscripts after the compound then leave the number right next to the parenthesis or bracket as in `\ce{(AgCl2)4}` for $\ce{(AgCl2)4}$ same with brackets. For both sub and superscripts just include the superscript after the number using `(formula)[sub]^[super]` as in `\ce{(AgCl2)3^2+}` for $\ce{(AgCl2)3^2+}$.

**Note: `{..}` preserves the characters that you put in them. It won't auto subscript or superscript for you. So, we can have just a regular `+` or `-` or even number by using them as in, $\ce{Na{+}}$ with `\ce{Na{+}}`, $\ce{Cl{3}}$ with `\ce{Cl{3}}`, and $\ce{H{2}O}$ with `\ce{H{2}O}`.**

### Greek Letters

You can also put greek letters for those formulas as well without having to add anything more than macros. For example, $\ce{\alpha-H^+}$ is given by `\ce{\alpha-H^+}` same with particle physics equations: $\ce{\nu_e}$ is written with `\ce{\nu_e}`. Just make sure that if you want subscripts always include a manual subscript as in `\ce{\letter_subscript}` otherwise the subscript won't be rendered and be treated as part of the macro. Same with letters you want subscripted as in $\ce{OH_x}$ will only have a 'x' on the bottom if we have `\ce{OH_x}` if we have `\ce{OHx}` we get $\ce{OHx}$.

### Isotopes

If you want to write the isotopes of atoms, just include the super and subscript to the *left* of the atomic formula and charges to the right. You can have `\ce{^227_90Th+}` for $\ce{^227_90Th+}$ and `\ce{^227_90 Th^2+}` for $\ce{^227_90 Th^2+}$. The key bit to add before the atomic formula is `^{mass}_{proton number}[your atom]`.

You can also put superscripts and subscripts on the right hand side as well just move the superscripts and subscripts on the right hand side. To have $\ce{Fe^22_4}$ all we had to type was `\ce{Fe^22_4}`. We could also write `\ce{Fe4^22}` and also have $\ce{Fe4^22}$, but the superscript is now for all of `Fe4` not just `Fe`. Just a careful note, *superscripts are global for everything before them*.

*Note: you don't need to worry about brackets for super and subscripts, but for charges, you do. Always include them for charges. If you are unsure, put them there anyway as in, `\ce{H2^{+}}`. Numbers after formulas are automatically subscripted and superscripts need the `^` to make them appear. Generally, when you have any super or subscript you don't have to worry about brackets so `\ce{^2322_23232C}` is $\ce{^2322_23232C}$*

### Arrows

If you want arrows for the reactions, there are many types and features you can to to express your point clearly and effectively to the audience. Let's start with the basic arrow. If you wnat a basic arrow $\ce{->}$, all you have to type is `->` as in `\ce{->}`. We give a whole list of arrows below:

| Arrow   |      Name     |  Latex |
|:----------:|:-------------:|:------:|
| $\ce{->}$ |  forward | `->` |
| $\ce{<-}$ |   backward   |   `<-` |
| $\ce{<->}$ | both directions |  `<->` |
| $\ce{<-->}$ | equilibrium   |  `<-->` |
| $\ce{<=>}$ |   alt. equilibrium | `<=>`  |
| $\ce{<=>\>}$  |   equi. top big  | `<=>\>`  |
| $\ce{\<<=>}$ | equi. bot big |  `\<<=>`    |

* note the character escapes `\>` are only for this site, in regular latex, you might not have to use them.


You can also embed text either above or below the arrow using `\ce{[arrow type][{top text}][{bot text}]}`, for example to have

$$
\ce{<=>[{heat}][{cold}]}
$$

just type `\ce{<=>[{heat}][{cold}]}`. The first item in the brackets *always goes on top of the arrow* and the second item in the brackets *always goes on bottom of the arrow*. You can write both words and symbols, just make sure that if you want a word use `{..}` and put the word in between `..`.

For italic text or complex latex, you can put in latex using `$..$` or another equation using standard mhchem syntax we showed. For example, we can have

$$
\ce{<=>[$x_j$][$y_{kj}$]}
$$

using `\ce{<=>[$x_j$][$y_{kj}$]}` and if you want another chemical formula on the arrow, just include it in the brackets:

$$
\ce{<=>[H^+][OH^-]}
$$

all from `\ce{<=>[H^+][OH^-]}` *we don't need any special formatting, we can use the same mhchem notation we use for compounds and ions*.

#### Upwards and Downwards (e.g. precipitates/gases)

If your equation involves a precipitate or some type of process where the new compound is noticeable in position, you can have $\ce{^}$ and $\ce{v}$  via the commands `\ce{^}` and `\ce{v}`. For example, you can write

$$
\ce{Ag+ + Cl- -> AgCl v}
$$

with `\ce{Ag+ + Cl- -> AgCl v}`

If you have more than one you can add them using an extra parenthesis as in `(^)` or `(v)` or just add them for your own information to know where you put them.

---

### Putting it all together

Putting all of what we know together, we can now write

$$
\ce{Hg^2+ ->[I-][{part 1}] HgI2 ->[I-][{part 2}] [Hg^{II}I4]^2-}
$$

the latex was `\ce{Hg^2+ ->[I-][{part 1}] HgI2 ->[I-][{part 2}] [Hg^{II}I4]^2-}`. The subscripting was done for us and the superscripting was done via `^` and for any letters we had to subscript with braces `{}`. If we want to comment underneath we can also insert latex! using `\bel{..}{..}`

$$
\ce{Hg^2+ ->[I-][{part 1}] HgI2 ->[I-][{part 2}] $\bel{\ce{[Hg^{II}I4]^2-}}{\text{ion}}$}
$$

Just make sure when you do insert latex you add `$..$` inside the `\ce{..}` macro so it looks like `\ce{..$\latex\ce{new compound}$}` once you add latex `$..$` inside the `\ce{..}` you have to mark any new chemical equations with another `\ce{..}`. The code used was `\ce{Hg^2+ ->[I-][{part 1}] HgI2 ->[I-][{part 2}]`**`$\bel{\ce{[Hg^{II}I4]^2-}}{\text{ion}}$}`** The bolded part is where we added the latex commands and put the chemistry equation inside.

* If you notice you can use all the arithmetic operations like `+`, `-`, `=`, and $\pm$ within `\ce{..}` and also whatever latex operations you wish as well! We can have $\ce{Na^+ + Cl^-}$, $\ce{9mg - 0.1mg}$, $\ce{1g $\pm$ 0.2g}$, $\ce{Ca = Ca}$ even things like $\ce{H2O $\times$ CaCl}$ using the format `\ce{A [operation] B}`. If it's in latex, try `\ce{A $latex_stuff$ B}`.

---

### Special Formatting

#### States of Aggregation/Crystal Systems

For these things, you can add parenthesis as well as the state you would like to describe. Anything in `()`, `[]`, and `{}` is automatically taken as a word, spaces included. So, we can have $\ce{H2(aq)}$ with `\ce{H2(aq)}` or even $\ce{H2(aqueous with volume)}$ with `\ce{H2(aqueous with volume)}`. They can also be subscripted with `_` as well giving $\ce{Ca^+_{(aq)}}$ as in `\ce{Ca^+_{(aq)}}` just make sure to include braces when you subscript as in `_{(put state here...)}` within the parenthesis you can put many things, commas, signs as well as other things, latex too with the `$..$`. So we can have things like

$$
\ce{ZnS($c$)} \ \ \ce{NaOH(aq,$\infty$)} \ \ \ce{ZnS(\ca$c$)}
$$

Using `\ce{ZnS($c$)}`, `\ce{NaOH(aq,$\infty$)}`, and `\ce{ZnS(\ca$c$)}`, to make the $\ce{\ca}$ we use the macro `\ca` in `\ce{..}`.

Note: if you ever want anything in italics, **just use latex within `\ce{..}`** to give things like $\ce{H2^$X,...,Y$}$ for `\ce{H2^$X,...,Y$}` without latex it looks like $\ce{H2^{X,...,Y}}$ or `\ce{H2^{X,...,Y}}`. Whenever you are unsure about formatting, it's best to include braces to give the item you want formatted a certain way to be as such, e.g. long expressions: we could have also written `\ce{H2^{$X,...,Y$}}` and it renders the same, only it's safer. If something doesn't look as you want, just add braces around the super and subscripts as well as anything you want a text, it might fix any errors. **For math mode using the `$..$` you must include indicators `^` and `_` for a superscript and subscript.**

#### More formatting (oxid. states/add compounds/unpaired electrons)

For oxidation states, you can include the roman numerals in the superscripts using the braces the numbers for the compound are subscripted for you as before $\ce{Fe^{III}Fe2^{IV}O3}$ with `\ce{Fe^{III}Fe2^{IV}O3}`.

For addition compounds all that's extra is the '\\\*' in between the compounds, so we write `\ce{KCr(SO4)2\*12H2O}` for $\ce{KCr(SO4)2\*12H2O}$.

The special symbol for unpaired electrons is `.` and renders as $\ce{.}$. For compounds $\ce{OCO^{.-}}$ and $\ce{NO^{(2.)-}}$ we used the same rules before and have the code `\ce{OCO^{.-}}` and `\ce{NO^{(2.)-}}`.

For the Kröger-Vink notation, everything as before with superscripting and subscripting just make sure for really long sub or superscripts that you use braces. Looking at

$$
\ce{Li^x_{Li,1-2x}Mg^._{Li,x}$V$'_{Li,x}Cl^x_{Cl}}
$$

we can see the code as `\ce{Li^x_{Li,1-2x}Mg^._{Li,x}``$V$'_{Li,x}Cl^x_{Cl}}`. For long expressions like `Li, 1-2x` we had to wrap the in braces to have it render correctly, so it looks like `_{Li, 1-2x}`. Other than that, nothing too much has changed, the `'` is noted correctly and needs no special formatting and if you need any italizised formulas or letters, switch to latex as before, the `x` is rendered in the superscript in a special format just for this notation.

### Chemical Bonds

You can insert bonds directly with limited features as in use the symbol `-` to denote 1 bond, `=` for 2 bonds, `#` for 4 bonds. These give

$$
\ce{A-B=C#D}
$$

with code `\ce{A-B=C#D}`. For more flexibility of bonds, like 3 or noting dashes, dots, and arrows as bonds use the `\bond{..}` macro. A table of what it does is here...

| Bond   |      Name     |  Latex |
|:----------:|:-------------:|:------:|
| $\ce{\bond{1}}$ |  1 bond | `\bond{1}` |
| $\ce{\bond{2}}$ |   2 bonds   |   `\bond{2}` |
| $\ce{\bond{3}}$ | 3 bonds |  `\bond{3}` |
| $\ce{\bond{#}}$ | 4 bonds   |  `\bond{#}` |
| $\ce{\bond{~}}$ |   dashed bond | `\bond{~}`  |
| $\ce{\bond{~-\-}}$  |   2 bonds + dash bond top  | `\bond{~-\-}`  |
| $\ce{\bond{-~\-}}$  |   2 bonds + dash bond mid.  | `\bond{-~\-}`  |
| $\ce{\bond{..\.}}$ | dotted bond |  `\bond{..\.}`  |
| $\ce{\bond{->}}$ | line bond | `\bond{->}` |


For the bond with dots, you can add up to 4 dots as you want within `\bond{..}` and that many will appear, for example $\ce{C\bond{..\..}O}$ has 4 dots. A safe measure is if you want more than 3 dots, just escape the 3rd one as in leave it as '\\\.' like with `\bond{..\.}`. **This is just for the blog, markdown syntax sometimes gets mixed with chemical syntax, this fixes it**. The general rule of thumb is whenever you have 2 or more `-`'s or `.`'s, it's best to escape them, all the examples in the table do this, if you're stuck, just use those for your needs.


### Units

If you want to write units in a easy way there's the `\pu{..}`  macro. All you have to do is know the formatting. For superscripts like $\pu{mm2}$, you don't have to include a superscript, just write `\pu{mm2}` instead, same with negative exponents like '-3' to give $\pu{mm-3}$ with `\pu{mm-3}`. The unit you write is formatted exactly as you want, the lower case letters are kept as so as well as the upper case keys. Numbers too are rendered exactly as you wrote as well as spaces. So, something as $\pu{232 mm4}$ is written as `\pu{232 mm4}`. If you're into scientific notation, you can also include them using plain syntax like `\pu{121e20}`, `\pu{232E231}` you can have $\pu{121e20}$ and $\pu{232E231}$, the lower case 'e' gives a dot for the product and the upper case 'E' gives a times for the product. To make fractions for the units as in $\pu{m/s}$ include only 1 slash giving `\pu{m/s}` and to have $\pu{m // s}$ include 2 slashes as in `\pu{m \\ s}`. If you have products like $\pu{J\*s}$, you can use the '\\\*' in between the units, the last one was made with `\pu{J\*s}`. *Escaping the asterisk with the backslash is for this blog, outside of it in latex, you might not have to.*

### Wrapping up

That just about does it for the mhchem stuff. If you really practice and excel at typesetting you'll be able to write complex chemistry equations and make your point clear. Things like

$$
\ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\underset{\text{goal 1}}{\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\underset{\text{goal 2}}{\ce{[Zn(OH)4]^2-}}$}
$$

and

$$
\ce{$\left(\pu{0.1234E20 J // mol^3}\right)$ $\pm$ \left(\pu{0.56789 J // mol^3}\right)}
$$

Again, all information in this page is adapted from [here](https://mhchem.github.io/MathJax-mhchem/), check it out too if you want a concise way to see code and example. Happy chemistry typesetting!
