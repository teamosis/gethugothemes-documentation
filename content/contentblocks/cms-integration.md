---
_build:
  render: never
  list: never
  publishResources: false
---

In this tutorial, we will show you how to configure(edit and update) your website without touching codes. We use forestry as our content management system here.
{{< notice note >}}
If you are ok with managing Hugo locally, then you can skip this process and visit the next page
{{</ notice >}}

## Requirements

1. Git account ([Github](https://github.com/), [Gitlab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/product/)) to host your website.
1. [Netlify](https://www.netlify.com/) account to host your files
1. [Forestry](https://forestry.io/) account to maintain contents and settings. Forestry will act as a **CMS (Content management system)** here.

## Step 1: Add website to Git

Unzip your downloaded files and navigate to the **themes** directory. Add that **Main theme** to your git repository.
![unzip](../images/unzip.png)

## Step 2: Connect git repository to Netlify

Go to your [netlify](https://netlify.com/) account and click `add a new site`. Choose your git repository to import your website. And now you can see your repositories. Select which one you want to publish and follow the steps. **BOOM! Your site is live.**
![netlify](/images/cms-integration/netlify.png)

## Step 3: Connect git repository to Forestry

Go to your [Forestry](https://forestry.io/) account and click on `import your site now` / `add site`.
{{< notice warning >}}
If it says **config file not found**, then declare your `config.toml` file path (`exampleSite/`) .
{{</ notice >}}
Then follow the next steps and mark everything as done.
![forestry](/images/cms-integration/forestry.png)

## Video Documentation

<iframe width="560" height="315" src="https://www.youtube.com/embed/ResipmZmpDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
