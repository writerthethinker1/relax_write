---
layout: post
title: 'Week Notes'
---

These are the notes for the week, they cover the in detail of what's done in person during class. They might be more in depth, but it might help later in future endeavors. Know that the important concepts are covered in class. Generally, things in the appendix aren't given nor expected to be recalled in a paper exam, but you're more than welcome to learn. You might find them useful when help isn't always there, you're on a tough problem, or you'd just like to learn more.

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'week_notes' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'week_notes', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
