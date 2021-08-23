---
_build:
    render: never
    list: never
    publishResources: false
---

In this tutorial, we will show you how to configure(edit and update) your website without touching codes . We use forestry as our content management system here . It will handel all your configation .
{{< notice note >}}
If you are ok with managing hugo locally then you can skip this process and visit next page . 
{{</ notice >}}

## Requirements

1. Git account ([Github](https://github.com/), [Gitlab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/product/)) to host your website.
1. [Netlify](https://www.netlify.com/) account to host your files . 
1. [Forestry](https://forestry.io/) account to maintain contents and settings , Forestry will act as a  **CMS (Content management system)** Here.

## Step 1: Add website to Git

Unzip your downloaded files and navigate to **themes** directory. Add that theme to your git repository. 

## Step 2: Connect git repository to Netlify.

Go to your [netlify](https://netlify.com/) account and click `add a new site`. Choose your git repository to import your website. And now you can see your repositories. Select which one you want to publish and follow the steps. **BOOM! Your site is live.** .

## Step 3: Connect git repository to Forestry.

Go to your [Forestry](https://forestry.io/) account and click on `import your site now`. 
{{< notice warning >}}
If it says **config file not found**, then declare your `config.toml` file path (`exampleSite/`) . 
{{</ notice >}}
Then , Follow the next steps and mark everything as done.

## Video Documentation

{{< youtube ResipmZmpDU >}}
