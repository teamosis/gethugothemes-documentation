---
title: 'Blog Post'
date: '2020-01-12T08:06:12-03:00'
weight: 6
draft: false
---
Hugo provides a `new` command to create a post. An example for creating a new post is: `hugo new blog/new-post.md`.

Configure Post
--------------

You can configure your blog post from the front matter. Front matter starts and ends with `---`. In this front matter you can give `author = author name` , `description = meta description`, `image = images/blog/post-thumb.jpg`. Also give the post `tags` and `categories`. You may add as many tags as you want.

Two types of blog posts are rendering in this template; You can set `type = post` or `type = featured` . post type is the normal post, while featured type is for the homepage sliding post.

When you created a new post, the `draft` default value is true, and when the draft is true, your post will not show. Set `draft = false`to ensure the post shows in the blog page.

After closing front matter, give your post content. Remember that every file that has an `.md` extension supports markdown.
