---
title: My wiki
---

{% for page in site.pages %}
  {% if page.url contains '/wiki' and page.url != '/wiki/index.html' and page.url %}
* [{{ page.title }}]({{ page.url}} )
  {% endif %}
{% endfor %}
