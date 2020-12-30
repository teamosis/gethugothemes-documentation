---
title: Portfolio
date: 2020-12-30T11:00:00+07:00
weight: 6
---

To create a new portfolio item use this command 

```
hugo new portfolio/new-project.md
```

## Portfolio Configuration

Just like blog posts here you can also find the front matter. For creating a project item you need to declare the `draft = false`.

You can configure all aspects of your portfolio items via frontmatter:

```yaml
---
title: "Bottle Mockup"
type: portfolio
date: 2018-07-12T16:54:54+06:00
description : "This is meta description"
caption: Product Mockup
image: images/portfolio/item-2.jpg
category: ["mockup","design"]
liveLink: https://www.themefisher.com
client: Julia Robertson
submitDate: November 20, 2017
location: 1201 park street, Avenue, Dhaka
---
```
