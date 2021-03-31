---
layout: post
title: 'Coding Stuff'
comments: "Code that we do in the class is given here. It's the same stuff in lecture in zipped up format. All here for your leisure and review. Try to run the code and change the names, variables, loops and maybe make something new out of it! Be critical about the coding here, are there better ways?"
published: true
---

<!-- if there's no executable code, you can write the code in markdown format in the coding folder inside _markdown_notes or just include in week_notes as part of lecture/presentation or do whatever... -->

{{ page.comments }}

<div>
{% for thing in site.markdown_notes %}
  {% if thing.type == 'coding' %}
    <h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3><hr/>
  {% endif %}
{% endfor %}
{% assign uploads = site.static_files | where: 'coding', true %}
{% for myuploads in uploads %}
  <h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3><hr/>
{% endfor %}
</div>
