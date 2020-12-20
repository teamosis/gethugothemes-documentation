---
title: "Blog Posts"
date: 2020-12-19T10:00:00+07:00
weight: 4
---

{{< notice note >}}Read our [CMS Integration Guide]({{< ref "cms-integration" >}}) for a graphical way to add and edit blog posts.{{< /notice >}}

Hugo provides a command to create a new post:

```shell
hugo new blog/new-post.md
```

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts and ends with `---`. In this front matter you can change the title and add a meta-description. The date will be automatically filled.

{{< notice warning >}}After you created a new post, the `draft` value is true and your post will not show up on the site. You need to change this parameter to `false` or remove it to show this post. Only then your post will show in the blog overview page.{{< /notice >}}

After changing the front matter you can write your post and republish your site. 
