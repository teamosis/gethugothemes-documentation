---
title: Homepage
date: 2020-12-30T13:00:00+07:00
weight: 3
---

The contents of the homepage can be configured via data configuration in `data/en/homepage.yml`. 

{{< contentblock "config/icons-themify" >}}


{{< contentblock "config/static-images-paths" >}}

## Banner Section

The banner section let's you show off your main product with an image and an introductory text. You can disable the whole section or only the button by setting `enable` to `false` or configure their contents. 

```yaml
banner:
  enable : true
  title : "Believe in Technology, Make the change"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, modi fugit in veritatis labore perferendis. Minima hic at, nostrum nihil!"
  image : "images/watch.png"
  button:
   enable : true
   label : "Browse All Products"
   link : "products"
```

## Feature Section

The feature section presets specific features of your products. You can add as many items left and right as you want, typically 3 per side are enough. To add a new item copypaste a section containing a `title`, `icon` and `content` variable.

```yaml
features:
  enable : true
  title : "Our Core Features"
  image : "images/watch-2.png"

  left_side:
  - title : "Smooth Touch"
    icon : "tf-ion-ios-alarm-outline"
    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
    
  right_side:
  - title : "Smooth Touch"
    icon : "tf-ion-ios-alarm-outline"
    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
```

## Promo Section

The promo section adds another colorful block to make your point.

```yaml
promo:
  enable : true
  image : "images/watch.png"
  title : "Designed by professional , the benefit for creative gigs"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vel labore, deleniti minima
            nisi, velit atque quaerat impedit ea maxime sunt accusamus at obcaecati dolor iure iusto omnis quis eum.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis commodi odit, illo, qui aliquam dol"
```

## About Section

The about section is showing off images with descriptions in alternating directsion. Add a block by copypasting everything between `image`, `title`, `content` and `button`.

```yaml
about_product:
  enable : true
  title : "Why Choose Apple Watch"
  items:
    - image : "images/showcase/showcase-4.png"
      title : "Lorem ipsum dolor sit amet."
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, sed, assumenda. Tenetur
            sed esse, voluptas voluptate est veniam numquam, quis magni. Architecto minus suscipit
            quas, quo harum deserunt consequatur cumque!"
      button:
        enable : false
        label : "Check Features"
        link : "#"
```

## Products section

The products section shows all your configured products as a slider. 

```yaml
products:
  enable : true
  title : "Checkout Our All Products"
```

## Subscription Section

This section can be configured to let potential customers subscribe to your newsletter. The configuration for Mailchimp can be found in the config.toml file.

```yaml
subscription:
  enable : true
  bg_image : "images/call-to-action.jpg"
  title : "Get Product Updates"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
  placeholder : "Your Email Address Here"
```

## Testimonial Section

Add reviews and testimonials to your website. To add more testimonials simply copypaste a section containing `name`, `designation`, `image` and `content`. 

```yaml
testimonial:
  enable : true
  title : "Watch Review"
  testimonial_item:
    - name : "Jonathon Andrew"
      designation : "CEO, Themefisher"
      image : "images/avater.png"
      content : "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents."
```
