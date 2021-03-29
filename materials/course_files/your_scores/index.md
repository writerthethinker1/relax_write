---
layout: post
title: 'Your Scores'
comments: "These are your scores over the past couple of weeks. Usually, I don't mind them at all until finals. Personally, somethings make more sense towards the end. They are just numbers and you can always do things outside of here. Class averages don't really make sense to me, but if you're into those things, look away!"
---

{{ page.comments }}

<!-- this liquid part is just to extract the date of the last practice -->
{% for thing in site.your_scores reversed %}
  {% assign last_update = thing.date | date: site.date_format %}
  {% break %}
{% endfor %}

<span style="color:orange">Last Update: {{ last_update }}</span>

<!-- if you have other scores, you can modify scores.yml and the type: field in the files in the _your_scores collection -->

<div>
{% for topics in site.data.scores.structure %}
  <h2>{{ topics.title }}</h2>
    {% for thing in site.your_scores %}
      {% if topics.reference == thing.type %}
          <span>
            <a href="{{ thing.url | relative_url }}"><h2>{{ thing.title }}</h2></a>
            <p>{{ thing.date | date: site.date_format }}</p>
          </span>
          <hr/>
      {% endif %}
    {% endfor %}
{% endfor %}
</div>
