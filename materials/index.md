---
layout: post
title: Materials
permalink: /materials/
---


There are some things and files you'll need...

<span style="color:orange">Please get them! *This course only comes once!*</span>

---

<!-- for the materials just put in headers for the topic: handouts, notes, and so on, the first example link is given, and the rest are just illustrations, feel free to edit as you may, the materials go in the 'course files' folder and you can add subfolders too! just be sure to reference the link correctly. you can also link to a post you made...-->

{% for item in site.data.materials.structure %}
  <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
  <hr/>
{% endfor %}
