---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 9
draft: false
---

 when you want to create a new post, the command is `hugo new works/new-post.md` and for French it's `hugo new works/new-post.md`.

## Configure Post

You can configure your works post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `date`, `image = images/portfolios/portfolio-1.jpg`, `company = company name`, `client = client name`, `categories` and `location`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Astrography"
date: 2019-08-29T15:38:38+06:00
draft: false
image: "images/portfolios/portfolio-1.jpg"
company: "Absolut Inc."
client: "Julia Robertson"
category: "Investment, Business"
location: "1201 park street, Avenue, Dhaka"
siteLink: "#"
---
```