---
_build:
  render: never
  list: never
  publishResources: false
---

To customize the social media links on your website, follow the steps below:

1. Open the `data/social.json` file.

2. Update social media links in the `social` section of the file. You can add or remove social media links as per your requirements.

3. To add new social media links, follow the existing pattern in the file.

example code:

```json
{
  "main": [
    {
      "name": "facebook",
      "icon": "fab fa-facebook",
      "link": "https://www.facebook.com/"
    },
    {
      "name": "twitter",
      "icon": "fab fa-twitter",
      "link": "https://twitter.com/"
    },
    {
      "name": "github",
      "icon": "fab fa-github",
      "link": "https://www.github.com/"
    },
    {
      "name": "linkedin",
      "icon": "fab fa-linkedin",
      "link": "https://www.linkedin.com/"
    }
  ]
}
```
