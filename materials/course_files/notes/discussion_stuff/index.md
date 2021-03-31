---
layout: post
title: 'Discussion Stuff'
comments: "Discussion solutions, handouts, and other related material are all here. It's nice to collaborate with others for answers since the work life is actually like this. Plus, you guys learn skills about communication."
published: true
---

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'discussion_stuff' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'discussion_stuff', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
