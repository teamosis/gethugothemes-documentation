---
_build:
    render: never
    list: never
    publishResources: false
---

In this tutorial, we will show you how to configure your website and edit your content without touching a single line of code. 

### Requirements

1. Free Git hosting account ([Github](https://github.com/), [Gitlab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/product/)) to host your website code and content.
1. Free [Netlify](https://www.netlify.com/) account to host your files
1. Free [Forestry](https://forestry.io/) account to maintain your content and settings without code.

### Step 1: Add your website to a Git repository

Although it's a headless website, so you need to add this theme to a git repository. First, you need to unzip your downloaded file and navigate to its **themes** folder. Then you can find your theme here. 

Create a git repository (for instance, with [Github](https://github.com/), [Gitlab](https://gitlab.com/)) and add your theme into it.

### Step 2: Add your repository in Forestry

Go to your [Forestry](https://forestry.io/) account and click on `import your site now`. If it says **config file not found**, then declare your `config.toml` file path (`exampleSite/`) and fill up basic settings. Then mark everything as done.

### Step 3: Setup and host website with Netlify

Go to your [netlify](https://netlify.com/) account and click `add a new site`. Choose your git repository to import your website in Netlify. And now you can see your repository. Select it and follow the steps. **BOOM! Your site is live.** Now, you can go to forestry and add, remove or customize every setting and content.

### Video Documentation

{{< youtube ResipmZmpDU >}}