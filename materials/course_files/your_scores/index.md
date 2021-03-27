---
layout: post
title: 'Your Scores'
---

These are your scores over the past couple of weeks. Usually, I don't mind them at all until finals. Personally, somethings make more sense towards the end. They are just numbers and you can always do things outside of here. Class averages don't really make sense to me, but if you're into those things, look away!

{% for thing in site.your_scores %}
  <div>
    <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
    <p>{{ thing.date | date: site.date_format }}</p>
  </div>
  <hr/>
{% endfor %}
