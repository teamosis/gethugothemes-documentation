---
title: 'Create Post'
date: '2019-12-02T08:15:19-03:00'
weight: 6
draft: false
---
Hugo provides a `new` command to create a post. As you know, this template is a multilingual template. That’s why when you create a new post, you need to define which language post is this. As an example, creating a new post is `hugo new english/blog/new-post.md`, it will create a post for the English language.

Configure Post
--------------

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is true, and when the draft is true, your post will not show. You need to change it for showing this post. like `draft = false`. Only then, your post will show on the blog page.

After closing the front matter, give your post content. Remember that every file that has a `.md` extension supports markdown.