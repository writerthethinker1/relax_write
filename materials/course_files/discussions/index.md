---
layout: post
title: Discussions
comments: "Here are all the files for discussions! We hope you enjoy them. We put hard effort into them, well designed."
---

<!-- this liquid part is just to extract the date of the last discussion -->
{% for thing in site.discussions reversed %}
  {% assign last_update = thing.date | date: site.date_format %}
  {% break %}
{% endfor %}

{{ page.comments }}

<span style="color:orange">Last Update: {{ last_update }}</span>

{% for thing in site.discussions %}
  <div>
    <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
    <p>{{ thing.date | date: site.date_format }}</p>
  </div>
  <hr/>
{% endfor %}
