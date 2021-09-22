---
title: 'Create New Topic'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Dot is a multilingual template. So when you want to create a new topic, you need to define the language. For example, creating a new post in the English language, the command is `hugo new bill/new-post.en.md` and for French it's `hugo new bill/new-post.fr.md`.

## Configure Topic

You can configure your topic post from the front-matter. Front-matter starts with `---` and end with also `---` . 

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "How to pay your bill"
date: 2018-12-29T11:02:05+06:00
lastmod: 2020-01-05T10:42:26+06:00
weight: 3
draft: false
# search related keywords
keywords: ["money","payment"]
---
```