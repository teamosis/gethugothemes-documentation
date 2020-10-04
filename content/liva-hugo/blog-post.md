---
title: 'Blog Post'
date: '2019-11-10T07:44:20-03:00'
weight: 5
draft: false
---
Hugo provides a `new` command to create a post, as a example for creating a new post is `hugo new blog/new-post.md` , it will create a post.

Configure Post
--------------

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name` , `description = meta description`, `image = images/blog/post-thumb.jpg.` Also give the post tag and categories, there are in loop, you can add much tag as you want.

Two types of blog post are rendering in this template, you can set `type = post` or `type = featured` . post type is normal post, and featured type is for homepage sliding post.

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Only then your post will show in blog page.

After closing front matter give your post content, remember that every file that has an `.md` extension, are supports markdown.