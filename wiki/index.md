---
title: My wiki
---

{% for page in site.pages %}
  {% if page.url != '/wiki/index.html' %}
* [{{ page.title }}]({{ page.url}} )
  {% endif %}
{% endfor %}
