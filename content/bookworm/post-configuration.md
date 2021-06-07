---
title: 'Post Configuration'
date: '2020-05-10T04:09:41-03:00'
weight: 6
draft: false
---
Hugo provides a `new` command to create a post, As you know this template is a multilingual template, that’s why when you create a new post, you need to define which language post is this, as a example for creating a new post is `hugo new content/english/post/new-post.md` , it will create a post for English language.

Configure Post
--------------

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name` (author name should be capitalize, ex: John Doe) , `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Only then your post will show in blog page.

After closing front matter give your post content, remember that every file that has an `.md` extension, are supports markdown.