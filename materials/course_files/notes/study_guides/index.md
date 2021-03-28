---
layout: post
title: 'Study Guides'
---

Before each exam, there's a study guide which is a set of common things as well as a set of problems to get us acquainted on what to do in the time period. You guys will do great!  

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'study_guides' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'study_guides', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
