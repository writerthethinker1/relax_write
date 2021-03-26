---
layout: post
title: Discussions
---

<!-- this liquid part is just to extract the date of the last discussion -->
{% for thing in site.discussions %}
  {% if forloop.last %}
  {% assign last_update = thing.date | date: site.date_format %}
  {% endif %}
{% endfor %}

Here are all the files for discussions! We hope you enjoy them. We put hard effort into them, well designed.

<span style="color:orange">Last Update: {{ last_update }}</span>

{% for thing in site.discussions %}
  <div>
    <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
    <p>{{ thing.date | date: site.date_format }}</p>
  </div>
  <hr/>
{% endfor %}
