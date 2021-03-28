---
layout: post
title: 'Books'
---

Some books for the course, all freely available to you. I write the problems for the course, so the book problems aren't graded and we're not trying to 'hunt and peck' looking for answers for the next set. 


<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'book' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'book', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
