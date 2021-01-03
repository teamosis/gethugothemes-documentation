---
title: Homepage
date: 2021-01-03T12:00:00+07:00
weight: 6
---

The homepage content is configured via data configuration in `data/homepage.yml`

You can disable each section and features inside these sections by setting the parameter `enable` to `false`.

All paths to images must be relative to the `static` folder. If an image is located in `static/images/home/image.jpg` then the path to add to an image parameter is `images/home/image.jpg`.

## Hero Section

Defines the large image on the top of the page.

```yaml
hero_area:
  enable : true
  bg_image : "images/header.jpg"
  overlay : true
```

## Gallery Section

Adds a sliding gallery with photos. Add as many images as you like.

```yaml
gallery:
  enable : true
  title : "FEATURED WORKS"
  images:
    - "images/slider/slider-img-1.jpg"
    - "images/slider/slider-img-2.jpg"
    - "images/slider/slider-img-3.jpg"
    - "images/slider/slider-img-4.jpg"
    - "images/slider/slider-img-1.jpg"
    - "images/slider/slider-img-2.jpg"
    - "images/slider/slider-img-3.jpg"
    - "images/slider/slider-img-4.jpg"
```

## About Us Section

Adds an introductory section to the homepage. 

```yaml
about:
  enable : true
  image : "images/cooker-img.png"
  title : "Featured Your <span> Restaurant’s</span> Website Has To Look Good"
  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </br>voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Ut enim ad minim veniam"
```

## Blog Section

Shows the latest blog entries.

```yaml
blog:
  enable : true
  title : "Our Latest <span>Blog</span>"
  bg_image : "images/blog/blog-bg.jpg"
  overlay : true
```

## Pricelist Section

Adds a section to add price list items to the homepage, for a menu or specials of the day/week section.

```yaml
pricing:
  enable : true
  title : "Our Easy <span>PRICE</span>"
  description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  subtitle : "FEATURED ON THE WEEK"
  pricing_item:
  - title: "Pancakes n' Such Titas"
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&&"
    price : "$ 125.00"
```

## Subscription Section

Shows a subscription form. The `form_action` parameter contains an URL for your Mailchimp form and `formName` the name of the form.

```yaml
subscription:
  enable : true
  bg_image : "images/subscribe-bg.jpg"
  title : "SUBSCRIBE to our <span>NEWSLETTER</span>"
  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  form_action : ""
  formName : ""
  overlay : true
```

## Contact Section

Shows a contact form on the page.

```yaml
contact:
  enable : true
  title: "Let's <span> Contact Us </span>"
  subtitle: "SIGN UP FOR EMAIL ALERTS"
  form_action : "#"
```
