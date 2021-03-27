---
layout: post
title: Notes
---

You'll find here notes for the course, all free to download and share!

<span style="color:orange">Enjoy learning new things!<span>

<!-- feel free to customize to your liking, i just left examples of what one can do, but it's open for you! -->

<!-- in the notes folder, you can put all the uploaded files you want, it will put the links! if you have a new folder or topic, make it in the notes folder and modify the _data/notes.yml accordingly as well as the collections in _config.yml -->

<div>
{% for item in site.data.notes.structure %}
  <h2>{{ item.title }}</h2>
  {% assign uploads = site.static_files | where: item.reference, true %}
  <ul>
  {% for myuploads in uploads %}
    {% if item.reference == 'discussion_notes' %}
      {% for thing in site.discussion_solutions %}
        <li><h3><a href="{{ thing.url | relative_url }}">{{ thing.title }}</a></h3></li>
      {% endfor %}
      <li><h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3></li>
    {% else %}
      <li><h3><a href= "{{ site.baseurl }}/{{ myuploads.path }}">{{ myuploads.basename }}</a></h3></li>
    {% endif %}
  {% endfor %}
  </ul>
  <hr/>
{% endfor %}
</div>
