---
layout: post
title: "Coding in Site"
date: "2021-04-16"
summary: "A brief page about embedding code and supported languages..."
contents: true
published: true
---

## Writing Code

You can also write code for any post, discussion, or just a `.md` file. It's very easy and simple to write code, all you have to do is

1. write the code fence
2. add your language (python, ruby, shell, etc...)
3. end with another code fence

That much is enough to write your code well and legibly for the class. Let's show one example using python code:

```python

x = 4
y = 3

sum = x + y

for something in 1..sum:

  # some comment
  print("this line.")

```

the code we used to have the above appear was

```
#first code fence begins with ```language

```python #this is the first code fence with language 'python'
x = 4
y = 3

sum = x + y

for something in 1..sum:

  # some comment
  print("this line.")

``` #this is the last code fence
```

If you don't have a language, then remove the language and keep the first and last code fences. In the above, that means just take the 'python' bit out.

The abstract setting is:

<pre>
  ```language
  #put that code here!
  ```
</pre>


For languages, you can find the many supported languages [here!](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers) There are about 100 and many common ones like `python`, `perl`, `r`, `java`, `javascript` and many more!

That's about it for basic coding. For inline code like `this`, all you have to do is enclose the code within two back-ticks as in <code>`this`</code>. Try reading the basic markdown introduction given [here!](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf). It's a short way to explain the basics! Enjoy coding and the day!
