---
layout: post
title: Notes
---

You'll find here notes for the course, all free to download and share!

<span style="color:orange">Enjoy learning new things!<span>

<!-- feel free to customize to your liking, i just left examples of what one can do, but it's open for you! -->

<!-- in the notes folder, you can put all the uploaded files you want, it will put the links! if you have a new folder or topic, make it in the notes folder and modify the _data/notes.yml accordingly as well as the collections in _config.yml -->

<!-- note: you can have all the solutions in .md form too! if it's easier to write that way, just put them in the collections folders: _markdown_alternatives, just make sure they have a type: '...' as in the notes.yml 'reference' part. then, they'll show up in the notes section. -->

<div>
{% for item in site.data.notes.structure %}
  <a href="{{ item.url }}"><h2>{{ item.title }}</h2></a>
  <hr/>
{% endfor %}
</div>
