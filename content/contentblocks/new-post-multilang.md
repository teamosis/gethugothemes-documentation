---
build:
  render: never
  list: never
  publishResources: false
---

It's a multilingual theme. So when you want to create a new post, you need to define the language.

### Create a new post for the English Language

```toml
hugo new english/blog/new-post.md
```

### Create a new post for the French Language

```toml
hugo new french/blog/new-post.md
```

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---`. And it follows the YAML format.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft: false`.
After closing the front matter, give your post content.

### Example Front-Matter

```yml
---
title: "Post Title"
date: 2022-01-04T05:00:00Z
image: "/images/post-thumb.jpg"
author: "John Doe"
description: "This is meta description."
draft: false
---
```
