---
layout: layouts/image.njk
pagination:
  data: collections.cloudinaryGallery
  size: 1
  alias: image
  addAllPagesToCollection: true
permalink: "images/{{ image.public_id | slug }}/index.html"
---