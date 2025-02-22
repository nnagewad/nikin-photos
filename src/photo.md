---
layout: layouts/photo.njk
pagination:
  data: collections.cloudinaryGallery
  size: 1
  alias: photo
  addAllPagesToCollection: true
permalink: "photos/{{ photo.public_id | slug }}/index.html"
---