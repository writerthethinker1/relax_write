---
layout: post
title: 'Labs'
comments: "Instructions for the labs and what you guys will be doing over the next couple of cozy weeks are given here. Don't worry so much about them rather than what they are about and tie it back to what we've been illustrating the weeks before the lab. **Try to like one thing at least.** It makes a world of difference."
---

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'labs' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'labs', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
