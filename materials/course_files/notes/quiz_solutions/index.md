---
layout: post
title: 'Quiz Solutions'
comments: "The solutions for the quizzes are given here. They mirror topics for the exams as well as practice problems. If you didn't do too well, no worries! There's always a make up for each assignment since the problems are easy to write. D-F only though and mindfully show up to the 'make-up' exam day(s)."
published: true
---

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'quiz_solutions' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'quiz_solutions', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
