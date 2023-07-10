---
_build:
  render: never
  list: never
  publishResources: false
---

To deploy your project, you need some prerequisites. Let's discuss the prerequisites.

1. Git account (Ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/) etc )
2. [Netlify](https://app.netlify.com/) account to host files and add a custom domain

### Add Project to Git

First of all, create a git repository (Ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/)) and push your template to the repository. If you don't know how to create a git repository, then follow the link: [Create a git repository](https://docs.github.com/en/get-started/quickstart/create-a-repo).

{{< notice note >}}
If you are using **Windows**, then you need to install [Git](https://git-scm.com/downloads) on your machine, if you don't have it already.
{{</ notice >}}

### Deploy to Netlify

Go to your [Netlify](https://app.netlify.com/) account and click **add new site**. Then choose **import an existing site**. Then choose your git provider to import your site. And now you can see your repository. Select it and follow the steps. **BOOM! Your site is live.**

If you want to add a custom domain, then go to **Settings > Domain Management** and add your custom domain.
