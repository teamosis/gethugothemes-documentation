---
title: "Homepage Setup"
date: 2021-01-03T09:00:00+07:00
weight: 3
---

The homepage content is configured via data configuration in `data/homepage.yml`

You can disable each section and features inside these sections by setting the parameter `enable` to `false`.

All paths to images must be relative to the `static` folder. If an image is located in `static/images/home/image.jpg` then the path to add to an image parameter is `images/home/image.jpg`.

## Slider Section

Configures the slider on top of the homage. Add as many `slider_item` sections as you wish.

- `title` - title of the slider item
- `content` - text on the slider item
- `animation_in` and `animation_out` set up animation effects for loading and unloading sliders. Possible values are left, right, up and down.
- `button` - should this slide show a button with a link to a subpage?

```yaml
slider:
  enable : true
  bg_image : "images/banner/banner-1.jpg"
  slider_item:
    - title : "Your bright future is our mission"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exer"
      animation_in : "left"
      animation_out : "right"
      button:
        enable : true
        label : "Apply now"
        link : "contact"
```

## Banner Section

Adds a feature section to the homepage. Add as many feature items as you wish, they will be displayed in groups of two per row.

```yaml
banner_feature:
  enable : true
  image : "images/banner/banner-feature.png"
  feature_item:
    - name : "Scholorship News"
      icon : "ti-book"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  dolore magna aliqua. Ut enim ad"
```

## About Section

Adds an extended about us section to the homepage.

```yaml
about:
  enable : true
  title : "About Educenter"
  image : "images/about/about-us.jpg"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  pariatur. Excepteur sint occaecat

  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem "
  button:
    enable : true
    label : "Learn more"
    link : "about"
```

## Course Section

Shows the latest courses

```yaml
course:
  enable : true
  title : "Our Course"
```

## Call to Action Section

Adds a call to action section to the homepage.

```yaml
cta:
  enable : true
  subtitle : "Click to Join the Advance Workshop"
  title : "Training In Advannce Networking"
  button:
    enable : true
    label : "join now"
    link : "contact"
```

## Success Story Section

Adds a success story section to the homepage

```yaml
success_story:
  enable : true
  bg_image : "images/backgrounds/success-story.jpg"
  title : "Success Stories"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat.
         
  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
  video_link : "https://www.youtube.com/watch?v=ResipmZmpDU"
```

## Events Section

Shows the latest events.

```yaml
event:
  enable : true
  title : "Upcoming Events"
```

## Fun Fact Section

{{< notice warning >}}Please note that this section is in the About page template. It is in the homepage configuration for legacy reasons.{{< /notice >}}

```yaml
funfacts:
  enable : true
  funfact_item:
    - name : "TEACHERS"
      count : "60"
```

## Blog Section

Shows the latest blog entries. 

```yaml
blog:
  enable : true
  title : "Latest News"
```
