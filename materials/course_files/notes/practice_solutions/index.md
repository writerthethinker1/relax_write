---
layout: post
title: 'Practice Solutions'
comments: "The solutions for the practice problems are given here. If you guys aren't clear on any of them **see us as soon as chance favors**, there might be some typos and don't hesitate to clear things up. It makes life easier for everyone. Also, if you have your own ways of solving the same practice problems, there's no harm sharing it with us, we'll add it in the next class."
---

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'practice_solutions' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'practice_solutions', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
