---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 9
draft: false
---

Andromeda is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. Remember that every file that has a `.md` extension supports markdown.

### Example Front-Matter

```yml
---
title: "The Real Product From the Buyers improvements in Overflow basis."
date: "2021-07-14"
image: "images/blog/01.jpg"
author: "Abdullah Al Shifat" # Author name should be capitalized
draft: false
---
```