---
title: Blog Post
date: 2020-12-18T10:00:00+07:00
weight: 6
---

Hugo provides a `new` command to create a post, As you know this template is a multilingual template, that’s why when you create a new post, you need to define which language post is this, as a example for creating a new post is `hugo new blog/new-post.md`, it will create a post.

### Configure Post

You can configure your blog post from the front-matter. Front-matter starts and ends with `---`. In this front matter you can give `author = author name` (author name should be capitalize, ex: John Doe) , `description = meta description`, `image = images/blog/post-thumb.jpg`.

When you created a new post, the `draft` value is true and your post will not show up on the site. You need to change this parameter to `false` or remove it to show this post. Only then your post will show in the blog overview page.

After changing the front matter you can write your post.
