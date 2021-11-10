---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Minilog is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/posts/new-post.md` and for French it's `hugo new french/posts/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title= The 2020/2021 Winter Beauty Trends and Shopping Tips`, `description = meta description`, `image = images/blog/04.jpg`, `categories`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "The 2020/2021 Winter Beauty Trends and Shopping Tips"
date: 2021-10-16T11:07:10+10:00
image: "images/blog/04.jpg"
categories: ["Nature"]
tags: ["Nature"]
popular: false
draft: false
---
```