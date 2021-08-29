---
title: Post Types
date: 2021-01-03T09:00:00+07:00
weight: 5
---

{{< notice note >}}Read our [CMS Integration Guide]({{< ref "cms-integration" >}}) for a graphical way to add and edit blog posts.{{< /notice >}}

{{< notice warning >}}After you created a new page, the `draft` value is true and your post will not show up on the site. You need to change this parameter to `false` or remove it to show this post. Only then your post will show in the blog overview page.{{< /notice >}}

Educenter provides various post types to add content to your site:

## Generic Frontmatter Parameters

All post types have some parameters that they share. `title` is the page title, `description` is a short description of the page that is used in previews and for social media and SEO meta tags. The `bg_image` is the background image to be shown in the pages header. `date` is the date of the creation of the page. On some post types (blog, events) this is used to sort the pages on overview pages.

```yaml
title: ""
bg_image: ""
description : ""
date: ""
```

In this template we use [themify icon](https://themify.me/themify-icons) pack, you can choose your necessary icon from [here](https://themify.me/themify-icons).

## Add Author

```shell
hugo new author/authorname.md
```

The `email` parameter is used to generate a Gravatar for the author of blog posts. `image` is a path to the image of the author. In the `social` section you can add as many social media accounts as you wish. Just copypaste a loop containing `icon` and `link` parameters. Don't forget to add `https://` in the beginning of all links.

```yaml
---
email: ""
image: ""
social:
  - icon : "ti-facebook"
    link : "#"
---
```

## Add Blog Post

```shell
hugo new blog/postname.md
```

- `image` contains the article image that is shown on blog overview pages
- `author` is the authorname. Make sure you have a page in the `author` section with this author defined. 
- `categories` and `tags` are taxonomies for blogposts.
- `type` - make sure to always include this parameter and it to `post` to use the right layout for this page.

```yaml
---
image: "images/blog/post-1.jpg"
author: "John Doe"
categories: ["Automation System"]
tags: ["Advice", "Automation"]
type: "post"
---
```

## Add Courses

```shell
hugo new course/coursename.md
```

- `image` - an image used for this course on all overview pages
- `category` - category for this course
- `teacher` - teachers name of this course. Make sure to have a corresponding item in the teachers section
- `duration` - how long will this course run (typically in weeks)
- `weekly` - how many hours per week are to be expected
- `fee` - price of this course
- `apply_url` - link to your course systems application page
- `type` - make sure to always include this parameter and it to `course` to use the right layout for this page.

```yaml
---
image: "images/courses/course-1.jpg"
category: "Photography"
teacher: "Clark Malik"
duration : "06 Month"
weekly : "03 hours"
fee : "From: $699"
apply_url : "#"
type: "course"
---
```

## Add Events

```shell
hugo new event/eventname.md
```

- `publishDate` - the date this page was published
- `date` - the date of the event
- `image` - an image used for this event on all overview pages
- `location` - location of the event
- `fee` - price for attending this event
- `apply_url` - link to a page where visitors can apply for participation
- `speaker` - add as many speaker as you wish to this event. Each section should contain a `name`, `image` and `designation` variable
- `type` - make sure to always include this parameter and it to `event` to use the right layout for this page.

```yaml
---
publishDate: "2019-01-01T00:00:00Z"
date: "2030-03-09T15:27:17+06:00"
image: "images/events/event-1.jpg"
location: "Dhanmondi, Dhaka"
fee: "From: $699"
apply_url : "#"
speaker:
  - name : "Jack Mastio"
    image : "images/event-speakers/speaker-1.jpg"
    designation : "Teacher"
type: "event"
---
```

## Add Notices

```shell
hugo new notice/noticename.md
```

Add notices to your website. A notice can contain a `download_link` (like course material or hand books). Make sure to always include a `type` parameter and set it to `event` to use the right layout for this page.

- `download_link`
- `type` - make sure to always include this parameter and it to `notice` to use the right layout for this page.

```yaml
---
download_link : "#"
type: "notice"
---
```

## Add Research Papers

```shell
hugo new research/researchtitle.md
```

- `image` - an image used for this item on all overview pages
- `type` - make sure to always include this parameter and it to `research` to use the right layout for this page.

```yaml
---
image: "images/research/research-2.jpg"
type: "research"
---
```

## Add Scholarships

```shell
hugo new scholarship/sholarshipname.md
```
- `image` - an image used for this item on all overview pages

```yaml
---
image: "images/scholarship/scholarship-item-1.jpg"
---
```

## Add Teachers

```shell
hugo new teacher/teachername.md
```

- `image` - an image used for this teacher on all overview pages, typically a photo of the teacher
- `course` - which course(s) does this teacher teach?
- `biography` - a short introduction to the teacher
- `interest` - a list of interests
- `contact` - add as many contact items as you wish for this teacher. Each section requires a `name` (visible text), `icon` and `link` attribute. Don't forget to always add the protocol type for all links (https:// and mailto: depending on the function).
- `type` - make sure to always include this parameter and it to `teachert` to use the right layout for this page.

```yaml
---
image: "images/teachers/teacher-2.jpg"
course: "Vlogging"
bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus tenetur ea harum delectus ab consequatur excepturi, odit qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat iusto officia voluptas quae."
interest: ["Computer Networking","Computer Security","Human Computer Interfacing"]
contact:
  - name : "clarkmalik@email.com"
    icon : "ti-email"
    link : "mailto:clarkmalik@email.com"
type: "teacher"
---
```
