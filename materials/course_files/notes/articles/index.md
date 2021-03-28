---
layout: post
title: 'Articles'
---

These are just articles about things related to what's being learned. They aren't essential, but if you're curious; feel free to read up. They're here for your leisure and oftentimes concepts need more explanation. Hope this clears things up or expands how you see things. You don't have to though.

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'article' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'article', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
