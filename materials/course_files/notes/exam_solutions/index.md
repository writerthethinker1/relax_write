---
layout: post
title: 'Exam Solutions'
comments: "The solutions for the midterms and final are given here. Learn from them and fix any problems early! **We're more than happy to help you learn.** Things might get worse if you guys don't have those weak spots fixed. Better early than late, because (at least for me), things get harder!!!!"
---

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'exam_solutions' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'exam_solutions', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
