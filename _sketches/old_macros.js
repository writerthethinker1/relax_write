card: ["\\text{card}\\left( #1 \\right)", 1],
ind: "\\perp\\!\\!\\!\\perp",
nind: "\\perp\\! \\! \\! \\perp \\! \\! \\! \\! \\! \\!/ \\ \\",
cov: ["\\text{Cov}\\left( #1 \\right )", 1],
sample: ["#1_1,...,#1_{#2}", 2],
P: ["\\mathbb{P}\\left( #1 \\right)", 1],
E: ["\\mathbb{E}\\left( #1 \\right)", 1],
I: ["\\mathcal{I}\\left( #1 \\right)", 1],
R: "\\mathbb{R}",
Nat: "\\mathbb{N}",
C: "\\mathbb{C}",
Q: "\\mathbb{Q}",
Z: "\\mathbb{Z}",
H: "\\mathbb{H}",
O: "\\mathbb{O}",
S: "\\mathbb{S}",
impl: "\\Rightarrow",
as: "\\equiv",
up: "\\lvert",
bigup: "\\bigg\\lvert",
Var: ["\\text{Var}\\left ( #1 \\right)", 1],
lset: "\\lbrace",
rset: "\\rbrace",
set: ["\\left \\lbrace #1 \\right \\rbrace", 1],
sor: "\\cup",
sand: "\\cap",
cor: ["\\text{Corr}\\left( #1 \\right)", 1],
Li: ["\\mathcal{L}\\left ( #1 \\right )", 1],
li: ["\\ell \\left ( #1 \\right)", 1],
add: ["#1_{1} + \\dots + #1_{#2}", 2],
mult: ["#1_1#1_2\\dots#1_{#2}", 2],
mpdv: ["\\frac{\\partial^{#1}{#2}}{\\partial #3^{#1}}", 3],
mdv: ["\\frac{d^{#1}{#2}}{d #3^{#1}}", 3],
mfdv: ["\\frac{\\delta^{#1}{#2}}{\\delta #3^{#1}}", 3],
bs: ["\\sum_{#1 = #2}^{#3}", 3],
bel: ["\\underbrace{#1}_{#2}", 2],
bern: "\\text{Bern}",
bernd: ["#2^{#1}\\left(1 - #2\\right)^{1 - #1}", 2],
bernex: ["#1", 1],
bernvar: ["#1\\left(1 - #1\\right)", 1],
bernmgf: ["#2e^{#1} + \\left(1 - #2\\right)", 2],
Bin: "\\text{Bin}",
Bind: ["\\binom{#2}{#1} {#3}^{#1}\\left(1 - #3\\right)^{#2 - #1}", 3],
Binex: ["#1(#2)", 2],
Binvar: ["#1(#2)\\left(1 - #2\\right)", 2],
Binmgf: ["\\left[#3e^{#1} (1 - #3)\\right]^{#2}", 3],
Bincd: ["I_{1 - #3}\\left(#2 - #1, 1 + #1\\right)", 3],
dunif: "U",
dunifd: ["\\frac{1}{#1}", 1],
dunifex: ["\\frac{#1 + 1}{2}", 1],
dunifvar: ["\\frac{\\left(#1 + 1\\right)\\left(#1 - 1\\right)}{12}", 1],
dunifmgf: ["\\frac{1}{#2}\\sum_{i = 1}^{#2}e^{i#1}", 2],
dunifcd: ["\\frac{#1}{N}", 1],
geom: "\\text{Geom}",
geomd: ["#2\\left(1 - #2\\right)^{#1 - 1}", 2],
geomex: ["\\frac{1}{#1}", 1],
geomvar: ["\\frac{1 - #1}{#1^2}", 1],
geommgf: ["\\frac{#2e^{#1}}{1 - \\left(1 - #2\\right)e^{#1}}", 2],
geocd: ["1 - (1 - #2)^{#1 + 1}", 2],
hypgeo: "\\text{HypGeo}",
hypgeod: ["\\frac{\\binom{#2}{#1}\\binom{#2 - #3}{#4 - #1}}{\\binom{#2}{#4}}", 4],
hypgeoex: ["\\frac{#3#2}{#1}", 3],
hypgeovar: ["\\frac{#3#2}{#1}\\frac{\\left(#1 - #2\\right)\\left(#1 - #3\\right)}{#1\\left(#1 - 1\\right)}", 3],
nbin: "\\text{NegBin}",
nbind: ["\\binom{#2 + #1 - 1}{#1}\\left(1 - #3\\right)^{#2}#3^{#1}", 3],
nbinex: ["\\frac{#1#2}{\\left(1 - #2\\right)}", 2],
nbinvar: ["\\frac{#1#2^2}{\\left(1 - #2\\right)}", 2],
nbinmgf: ["\\left(\\frac{\\left(1 - #3\\right)}{1 - #3e^{#1}}\\right)^{#2}", 3],
nbincd: ["1 - I_{#3}\\left(#1 + 1, #2\\right)", 3],
pois: "\\text{Pois}",
poisd: ["\\frac{e^{-#2}#2^{#1}}{#1!}", 2],
poisex: ["#1", 1],
poisvar: ["#1", 1],
poismgf: ["e^{#2\\left(e^{#1} - 1\\right)}", 2],
poiscd: ["e^{-#2}\\sum_{i = 0}^{\\lfloor{k}\\rfloor}\\frac{#2^i}{i!}", 2],
Beta: "\\text{Beta}",
Betad: ["\\frac{\\Gamma\\left({#2}\\right)\\Gamma\\left({#3}\\right)}{\\Gamma\\left({#2 + #3}\\right)} #1^{#2 - 1}\\left(1 - #1\\right)^{#3 - 1}", 3],
Betaex: ["\\frac{#1}{#1 + #2}", 2],
Betavar: ["\\frac{#1#2}{\\left(#1 + #2\\right)^2 \\left(#1 + #2 + 1\\right)}", 2],
Betamgf: ["1 + \\sum_{k = 0}^{\\infty} \\prod_{r = 0}^{k - 1}\\left(\\frac{#2 + r}{#2 + #3 + r}\\right)\\frac{#1^{k}}{k!}", 3],
Betacd: ["I_{#1}(#2, #3)", 3],
cauchy: "\\text{Cauchy}",
cauchyd: ["\\frac{1}{\\pi#3} \\frac{1}{1 + \\left(\\frac{#1 - #2}{#3}\\right)^2}", 3],
cauchycd: ["\\frac{1}{\\pi}\\arctan\\left(\\frac{#1 - #2}{#3}\\right) + \\frac{1}{2}", 3],
chisq: ["\\chi^2_{#1}", 1],
chisqd: ["\\frac{1}{\\Gamma\\left(#2/2\\right)2^{#2/2}}#1^{\\left(#2/2\\right) - 1}e^{-#1/2}", 2],
chisqex: ["#1", 1],
chisqvar: ["2#1", 1],
chisqmgf: ["\\left(\\frac{1}{1 - 2#1}\\right)^{#2/2}", 2],
chisqcd: ["\\frac{1}{\\Gamma\\left(#2/2\\right)}\\gamma\\left(\\frac{#2}{2}, \\frac{#1}{2}\\right)", 2],
dexp: "\\text{DExp}",
dexpd: ["\\frac{1}{2#3}e^{-\\left(\\frac{\\abs{#1 - #2}}{#3}\\right)}", 3],
dexpex: ["#1", 1],
dexpvar: ["2#1^2", 1],
dexpmgf: ["\\frac{e^{#2#1}}{1 - \\left(#3#1\\right)^{2}}", 3],
expo: "\\text{Exp}",
expod: ["\\frac{1}{#2}e^{\\frac{-#1}{#2}}", 2],
expoex: ["#1", 1],
expovar: ["#1^2", 1],
expomgf: ["\\frac{1}{1 - #2#1}", 2],
expocd: ["1 - e^{-#2#1}", 2],
F: "{F}",
Fd: ["\\frac{\\Gamma\\left(\\frac{#2 + #3}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)\\Gamma\\left(\\frac{#3}{2}\\right)} \\left(\\frac{#2}{#3}\\right)^{#2/2}\\frac{#1^{\\left(#2 - 1\\right)/2}}{\\left(1 + \\left(\\frac{#2}{#3}#1\\right)\\right)^{\\left(#2 + #3\\right)/2}}", 3],
Fex: ["\\frac{#1}{#1 - 2}", 1],
Fvar: ["2\\left(\\frac{#2}{#2 - 2}\\right)\\frac{\\left(#1 + #2 - 2\\right)}{#1(#2- 4)}", 2],
Fnm: ["\\frac{\\Gamma\\left(\\frac{#2 + 2(#1)}{2}\\right)\\Gamma\\left(\\frac{#3 - 2(#1)}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)\\Gamma\\left(\\frac{#3}{2}\\right)}\\left(\\frac{#3}{#2}\\right)^{#1}", 3],
gam: "\\text{Gam}",
gamd: ["\\frac{#3^{#2}}{\\Gamma\\left({#2}\\right)} #1^{#2 - 1}e^{-#3#1}", 3],
gamex: ["\\frac{#1}{#2}", 2],
gamvar: ["\\frac{#1}{#2^2}", 2],
gammgf: ["\\left(1 - \\frac{#1}{#3}\\right)^{-#2}", 3],
gamcd: ["\\frac{\\gamma\\left(#2, #3#1\\right)}{\\Gamma(#2)}", 3],
logis: "\\text{Logis}",
logisd: ["\\frac{1}{#3}\\frac{e^{-\\left(#1 - #2\\right)/#3}}{\\left[1 + e^{-\\left(#1 - #2\\right)/#3}\\right]^2}", 3],
logisex: ["#1", 1],
logisvar: ["\\frac{\\pi^2#1^2}{3}", 1],
logismgf: ["e^{#2#1}\\Gamma\\left(1 - #3#1\\right)\\Gamma\\left(1 + #3#1\\right)", 3],
logiscd: ["\\frac{1}{1 + e^{-\\left(#1 - #2\\right)/#3}}", 3],
lognorm: "\\text{LogNorm}",
lognormd: ["\\frac{1}{\\sqrt{2\\pi}#3}\\frac{e^{-\\left(\\log(#1) - #2)^2/(2#3^2\\right)}}{#1}", 3],
lognormex: ["e^{#1 + \\left(#2^2/2\\right)}", 2],
lognormvar: ["e^{2\\left(#1 + #2^2\\right)} - e^{2#1 + #2^2}", 2],
lognormnm: ["e^{#1#2 + #1^2#3^2/2}", 3],
lognormcd: ["\\frac{1}{2} + \\frac{1}{2}\\text{erf}\\left(\\frac{\\log\\left(#1\\right) - #2}{\\sqrt{2}#3}\\right)", 3],
N: "\\mathcal{N}",
Nd: ["\\frac{1}{\\sqrt{2\\pi}#3}e^{-\\left(\\frac{(#1 - #2)}{2#3}\\right)^2}", 3],
Nex: ["#1", 1],
Nvar: ["#1^2", 1],
Nmgf: ["e^{#2#1 + #3^2#1^2/2}", 3],
Ncd: ["\\frac{1}{2}\\left[1 + \\text{erf}\\left(\\frac{#1 - #2}{#3\\sqrt{2}}\\right)\\right]", 3],
paret: "\\text{Pareto}",
paretd: ["\\frac{#3#2^{#3}}{#1^{#3 + 1}}", 3],
paretex: ["\\frac{#2#1}{#2 -1}", 2],
paretvar: ["\\frac{#2#1^2}{\\left(#2 - 1\\right)^2\\left(#2 - 2\\right)}", 2],
paretcd: ["1 - \\left(\\frac{#2}{#1}\\right)^{#3}", 3],
td: ["\\frac{\\Gamma\\left(\\frac{#2 + 1}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)}\\frac{1}{\\sqrt{#2\\pi}}\\frac{1}{\\left(1 + \\left(\\frac{#1^2}{#2}\\right)\\right)^{(#2 + 1)/2}}", 2],
texp: "0",
tvar: ["\\frac{#1}{#1 - 2}", 1],
tnm: ["\\frac{\\Gamma\\left(\\frac{#1 + 1}{2}\\right)\\Gamma\\left(\\frac{#2 - #1}{2}\\right)}{\\sqrt{\\pi}\\Gamma\\left(\\frac{#2}{2}\\right)}#2^{#1/2}", 2],
unif: "U",
unifd: ["\\frac{1}{#2 - #1}", 2],
unifex: ["\\frac{#2 + #1}{2}", 2],
unifvar: ["\\frac{\\left(#2 - #1\\right)^2}{12}", 2],
unifmgf: ["\\frac{e^{#3#1} - e^{#2#1}}{\\left(#3 - #2\\right)#1}", 3],
unifcd: ["\\frac{#1 - #2}{#3 - #2}", 3],
weib: "\\text{Weibull}",
weibd: ["\\frac{#2}{#3}#1^{#2 - 1}e^{-#1^{#2}/#3}", 3],
weibex: ["#2^{1/#1}\\Gamma\\left(1 + \\frac{1}{#1}\\right)", 2],
weibvar: ["#2^{2/#1}\\left[\\Gamma\\left(1 + \\frac{2}{#1}\\right)- \\Gamma^2\\left(1 + \\frac{1}{#1}\\right)\\right]", 2],
weibnm: ["#3^{#1/#2}\\Gamma\\left(1 + \\frac{#1}{#2}\\right)", 3],
weibcd: ["1 - e^{-(#1^{#3}/#2)}", 3],
mode: "\\text{Mode}",
med: "\\text{Median}",
tqt: "Q_{3}",
iqr: "IQR",
qt: ["{#1}_{#2}", 2],
Min: "\\text{Min}",
Max: "\\text{Max}",
mx: ["\\max \\left \\lbrace #1 \\right \\rbrace", 1],
mn: ["\\min \\left \\lbrace #1 \\right \\rbrace", 1],
evl: "\\bigg \\lvert",
ord: ["{#1}_{(#2)}", 2],
distas: ["\\stackrel{#1}{\\sim}", 1],
fqt: "Q_1",
evals: ["#1 \\left \\lvert", 1],
erf: ["\\frac{2}{\\sqrt{\\pi}}\\int_{0}^{#1}e^{-t^2}dt", 1],
al: "\\alpha",
be: "\\beta",
ga: "\\gamma",
de: "\\delta",
ep: "\\epsilon",
ze: "\\zeta",
ta: "\\theta",
io: "\\iota",
kap: "\\kappa",
lam: "\\lambda",
omc: "\\omicron",
ups: "\\upsilon",
om: "\\omega",
sig: "\\sigma",
Ga: "\\Gamma",
De: "\\Delta",
Ta: "\\Theta",
Lam: "\\Lambda",
Ups: "\\Upsilon",
Om: "\\Omega",
Sig: "\\Sigma",
orange: ["{\\color{orange} #1}", 1],
brown: ["{\\color{brown} #1}", 1],
blue: ["{\\color{blue} #1}", 1],
green: ["{\\color{green} #1}", 1],
purple: ["{\\color{purple} #1}", 1],
red: ["{\\color{red} #1}", 1],
pink: ["{\\color{pink} #1}", 1],
gray: ["{\\color{gray} #1}", 1],
black: ["{\\color{black} #1}", 1]}}
