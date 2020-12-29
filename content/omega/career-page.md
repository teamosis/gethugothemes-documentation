---
title: "Career Page Setup"
date: 2020-12-28T13:00:00+07:00
weight: 4
---

The career page can be set up via frontmatter parameters in the page itself. Open `content/career.md` in a text editor and change the contents per your wishes.

You can disable each section and features inside these sections by setting the parameter `enable` to `false`.

All paths to images must be relative to the `static` folder. If an image is located in `static/images/home/image.jpg` then the path to add to an image parameter is `images/home/image.jpg`.

```yaml
title : "Career"
layout: "career"
description: "Do what you enjoy, invest for your future and reap the benefits of working with the worlds first advancement company that puts people first."
```

DO NOT change the `layout` parameter. This page has to use the `career` layout to display properly.

## Introduction Section

Use this section to present your company and let potential applicants know who you are looking for. The video needs to be hosted on [Youtube](https://youtube.com). Add the ID of the video in the configuration.

```yaml
about:
  enable : true
  title : "Who we're looking for"
  content : "Bright, educated and hard working individuals who put professionalism first."
  video_thumb : "images/promo-video-thumbnail.jpg"
  video_id : "g3-VxLQO7do"
```

## Gallery Section

Configure the images in the gallery section.

```yaml
gallery:
  enable : true
  images:
  - "images/gallery/gallery-01.png"
  - "images/gallery/gallery-02.png"
  - "images/gallery/gallery-03.png"
```

## Fun Facts and Amenities 

Add fun facts and amenities for your employees. The icon uses the Fontawesome 4.7.0 icon pack, you can [choose your icon here](https://fontawesome.com/v4.7.0/icons/).

Each item consists of `name`, `icon` and `content`. Copypaste these blocks to create more items in this section.

```yaml
funfacts:
  enable : true
  title : "amenities for you to enjoy"
  funfacts_item:
  - name : "Flexible hours"
    icon : "fa-bicycle"
    content : "Tight schedule, tell us so we can tailor the schedule that fits your needs."
```

## Job Openings

Now add your job openings. In the `job_item` section you can copypaste blocks with the following parameters to create new job openings:

- `name` - Name of the position
- `location` - Location of the office
- `form_action` - An URL to your form processing service. We recomment [formspree.io](https://formspree.io).
- `about` - A description of the job offers tasks
- `experiences` - Add requirements for people applying for this position. you can add as many items as you with, prefixed with a list dash `-`.

```yaml
career:
  enable : true
  title : "Job Opening"
  job_item:
  - name : "Android Developer"
    location : "Hamburg, Germany"
    form_action : "#"
    about : "With experience in creating visual directions for tech products, you are able to set the standard and lead designers along the way. You are not only able to execute beautiful user experiences yourself but communicate those concepts to the team and clients."
    experiences:
    - "3+ years Development	experience in a startup environment"
    - "Strong knowledge of iOS, Android & Web Platforms"
    - "Dynamic presentation and communication skills"
    - "Self-motivation: You manage your own milestones, deadlines, and priorities"
```

## Done!

There is no need to add content after the front matter - your career page is ready.
