---
title: "Homepage Setup"
date: 2020-12-28T13:00:00+07:00
weight: 3
---

The homepage content is configured via data configuration in `data/homepage.yml`

You can disable each section and features inside these sections by setting the parameter `enable` to `false`.

All paths to images must be relative to the `static` folder. If an image is located in `static/images/home/image.jpg` then the path to add to an image parameter is `images/home/image.jpg`.

## Banner Section

Change the way the banner section is displayed. To add a link on the same page just use a hash `#` and the section name. 

```yaml
banner:
  enable : true
  title : "Advancement is Omega"
  content : "Solving the problems of today to see a tomorrow worth living and a past worth remembering."
  image : "images/hero-image/hero-slider-01.jpg"
  button:
    enable : true
    label : "WHAT WE DO"
    link : "#products"
```

## Mission Section

This section is prepared to show a mission statement and a video. The video needs to be hosted on [Youtube](https://youtube.com). Add the ID of the video in the configuration. 

```yaml
mission:
  enable : true
  title : "Propel Advancement"
  section : "MISSION"
  content : "Introducing the world’s first Advancement Company. As we enter the dawn of the digital age a significant leap must be made to propel the world into the age of advancement."
  video_thumb: "images/video-thumb.jpg"
  video_id: "ResipmZmpDU"
```

## Vision Section

This section lets you add quotes to present your companies vision. You can add more items by copypasting the `vision_item` blocks. Each block contains a `title`, `image` and `content` variable. 

```yaml
vision:
  enable : true
  section : "VISION"
  vision_item:
  - title : "People First"
    image : "images/vision/vision-01.jpg"
    content : "I started with a vision of creating an atmosphere where people come first. <br>Paul Sanar Founder"
```

## Product Section

Present your products with images and description. To add more products copypaste a block in `product_item`. Its contents are `title`, `image`, `content` and a `project_url` that points to an external page (don't forget to add the https-part in the beginning of the URL).

```yaml
product:
  enable : true
  section : "Products"
  title : "Some Of Our Best Products"
  content : "See the innovation that has come through the Rio way. As an advancement company, the goal is to continuously find areas to help business push forward. Below you can find the first product available to help you do so."
  product_item:
  - title : "Ecosystem"
    image : "images/product/product-03.jpg"
    content : "Omega OS Version 2.0 is the world’s first and only cloud operating system. See how this revolutionarys oftware can become the center of your business."
    project_url : "#"
```

## Contact Section

In this section you can add your contact information for your customers to reach you. You can [configure the map section](/omega-hugo/configuration/#map-configuration) in the `config.toml`.

```yaml
contact:
  enable : true
  section : "CONTACT US"
  title : "reach us"
  image : "images/map-bg.jpg"
  content : "The dawn of the digital age and the need for a significant leap forward is here. We believe that every business has the opportunity to move into this new age with the right mindset. Contact us today to begin understanding how Omega can propel your business."
```

## Call to Action

Add a call to action with a link to your [career page]({{< ref "career-page" >}}).

```yaml
call_to_action:
  enable : true
  title : "Join the Omega family. <br>Click below to view the career opportunities we have for you."
  button_label : "Apply Now"
  button_link : "career"
```
