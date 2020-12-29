---
title: Portfolio Page
date: 2020-12-18T10:00:00+07:00
weight: 7
---

{{< notice note >}}Read our [CMS Integration Guide]({{< ref "cms-integration" >}}) for a graphical way to add and edit portfolio items.{{< /notice >}}

To create a new portfolio page use the following command:

```shell
hugo new portfolio/new-project.md
```

## Detail Configuration

You can then configure special fields for display on the portfolio details page like a URL, client name or categories.

```yaml
---
title: "Artwork Design"
date: 2019-05-12T12:14:34+06:00
image: "images/item-1.png"
client: "John Doe"
project_url : "https://themefisher.com/"
categories: ["design","development"]
description: "This is meta description."
draft: false
---
```

After that, add the content of the page and re-publish your site. 
