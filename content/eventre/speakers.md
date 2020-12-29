---
title: "Speakers"
date: 2020-12-19T10:00:00+07:00
weight: 5
---

{{< notice note >}}Read our [CMS Integration Guide]({{< ref "cms-integration" >}}) for a graphical way to add and edit portfolio items.{{< /notice >}}

To create a new speaker page use the following command:

```shell
hugo new speaker/speakername.md
```

## Detail Configuration

You can then configure special fields for display on the speaker details page:

```yaml
---
title : "John Doe"
page_header_bg : "images/background/page-title-bg.jpg"
date: 2020-03-14T15:40:24+06:00
designation: "Web Developer"
image: "images/speakers/speaker-four.jpg"
description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit."
draft : false

social:
  - name: "facebook"
    icon: "fa-facebook"
    link: "#"
  - name: "twitter"
    icon: "fa-twitter"
    link: "#"
  - name: "linkedin"
    icon: "fa-linkedin"
    link: "#"
  - name: "instagram"
    icon: "fa-instagram"
    link: "#"
  - name: "skype"
    icon: "fa-skype"
    link: "#"

personal_info:
  enable : true
  title : "Personal Information"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi explicabo suscipit deleniti voluptatum quos nostrum iure doloremque cupiditate voluptatem a enim eaque quod perspiciatis repudiandae, mollitia adipisci ea, quidem eveniet consequatur veniam error. Adipisci, suscipit corporis repellat, soluta vitae deserunt."
  bulletpoints:
    - "Morbi fermentum felis nec"
    - "Fermentum felis nec gravida tempus."
    - "Morbi fermentum felis nec"
    - "Fermentum felis nec gravida tempus."
    - "Morbi fermentum felis nec"
    - "Fermentum felis nec gravida tempus."

skills:
  enable : true
  title : "Personal Skills"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi explicabo suscipit deleniti voluptatum quos nostrum iure doloremque."
  skillbars:
    - name: "Wordpress"
      percentage: "90%"
    - name: "PHP"
      percentage: "75%"
    - name: "Javascript"
      percentage: "60%"
    - name: "HTML"
      percentage: "80%"
---
```

The sections in the frontmatter are pretty self explaining. If you wish to deactivate a special section you can do so by setting `enable` to `false`. You can add as many social media networks, bullet points and skillbars as you want. Always enclose the values in parentheses.  

The code for the `icon` in your social media setup can be found on [this list of brand icons](https://fontawesome.com/v4.7.0/icons/#brand) and comes from from the FontAwesome icon font. 

{{< notice warning >}}After you created a new speaker profile, the `draft` value is set to `true` and the page will not show up on your site. You need to change this parameter to `false` or remove it to make this page visible. {{< /notice >}}

After you are done adding the frontmatter you can add the content of the page and re-publish your site. 
