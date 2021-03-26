---
layout: post
title: Practice Problems
---

<!-- this liquid part is just to extract the date of the last practice -->
{% for thing in site.practice %}
  {% if forloop.last %}
  {% assign last_update = thing.date | date: site.date_format %}
  {% endif %}
{% endfor %}

Here are all the files for practice problems! We hope you enjoy them. We put hard effort into them, well designed. They are here to help you be critical about what you learn about this field. If you notice, *there's little computation by hand*; mostly it's questioning and seeing things from a critical point of view. It's always nice to question. It's how we make more knowledge!

<!-- note on dates for practice problems: put only dates at or before current date, or else it won't make a page -->

<span style="color:orange">Last Update: {{ last_update }}</span>

{% for thing in site.practice %}
  <div>
    <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
    <p>{{ thing.date | date: site.date_format }}</p>
  </div>
  <hr/>
{% endfor %}
