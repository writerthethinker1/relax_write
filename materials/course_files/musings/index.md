---
layout:     post
title:      Musings
date:       '2014-06-11'
comments: "These are just my musings about this course. Personal things I've learned since learning it. Maybe, coding errors, errors I made when I was like a newcomer like you. Also just jokes and other fun things! Personal opinions about the field as well and any opinions."
---

{{ page.comments }}

<span style="color:orange">*Critical thinking requires musings!*</span>

{% for thing in site.musings %}
  <div>
    <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
    <p>{{ thing.date | date: site.date_format }}</p>
  </div>
  <hr/>
{% endfor %}
