---
title: "The Ultimate Hugo Guide"
description: "The best guide to set up any hugo theme."
layout: guide
draft: false
---

Welcome to the Installation Guide presented by Gethugothemes! This detailed guide will help you start your static site-building journey with Hugo Theme. Learn how easily you can install, run, customize, and update your Hugo theme!

<!-- {{< box title="Local Development" link="#local-development" >}}
It's a step-by-step approach with instructions on installing Hugo and getting started with a project.
{{< /box >}} -->

---

## Prerequisites

You need to fulfill some prerequisites to configure your machine, before starting the development process of your static site via Hugo.

{{< notice note >}}
If you’re using **macOS**, then [Homebrew](https://docs.brew.sh/Installation) is the easiest way to install the prerequisites. Check out [this guide](https://mac.install.guide/homebrew/index.html) to install Homebrew on your machine.
{{< /notice >}}

{{< notice warning >}}
{{< /notice >}}

1. [Install Hugo](#install-hugo)
2. [Install Go](#install-go)
3. [Install Nodejs](#install-nodejs)

### Install Hugo

Install Hugo with the following command on your **Terminal** according to your operating system.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id Hugo.Hugo.Extended
```

If you successfully installed Hugo, then you can check the version with the following command.

``` bash
hugo version
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install hugo
```

If you successfully installed Hugo, then you can check the version with the following command.

``` bash
hugo version
```

{{</ tab >}}
{{< tab "Linux" >}}

Please follow the [official documentation](https://gohugo.io/installation/linux/#package-managers) to install Hugo on Linux.

If you successfully installed Hugo, then you can check the version with the following command.

``` bash
hugo version
```

{{</ tab >}}
{{</ tabs >}}

**Or**

Go to the official site to Download and Install [Hugo Extended](https://gohugo.io/getting-started/installing/).

### Install Go

Install Go with the following command on your **Terminal** according to your operating system.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id GoLang.Go
```

If you successfully installed Go, then you can check the version with the following command.

``` bash
go version
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install go
```

If you successfully installed Go, then you can check the version with the following command.

``` bash
go version
```

{{</ tab >}}
{{< tab "Linux" >}}

Please follow the [official documentation](https://golang.org/doc/install) to install Go on Linux.

If you successfully installed Go, then you can check the version with the following command.

``` bash
go version
```

{{</ tab >}}
{{</ tabs >}}

**Or**

Go to the official site to Download and Install [Go](https://golang.org/dl/).

### Install Nodejs

Install Nodejs with the following command on your **Terminal** according to your operating system.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id OpenJS.NodeJS.LTS
```

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install node@18
```

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{< tab "Linux" >}}
Please follow the [official documentation](https://nodejs.org/en/download/package-manager/) to install Nodejs on Linux.

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{</ tabs >}}

**Or**

Go to the official site to Download and Install [Nodejs](https://nodejs.org/en/download/).

{{< notice warning >}}
After installing all the prerequisites, maybe you need to restart your machine to take effect.
{{< /notice >}}

---

## Run Theme Locally

To set up a site using a Hugo theme in your local environment, follow the instructions below:

### Get Your Theme (Premium Themes)

**Unzip** the downloaded file, and you will find the Main theme folder inside the **themes** directory, which you will be working with. As an example, let's use `bigspring-hugo` theme.

```bash
📂 bigspring-hugo/ (Unzipped Folder)
   |
   ├── 📁 themes/
   |     |
   |     └── 📂 bigspring-hugo/ (Main Theme)
   |
   ├── 📄 changelog.html
   ├── 📄 documentation.html
   └── 📄 license.html
```

### Get Your Theme (Free Themes)

**Unzip** the downloaded file, and the unziped folder is your main theme, which you will be working with. As an example, let's use `bigspring-light-hugo`.

```bash
📂 bigspring-light-hugo-main (Unzipped Folder)
```

After unzipping, your folder should have a `-main` or `-master` suffix. remove the suffix from the folder name. like from `bigspring-light-hugo-main` to `bigspring-light-hugo`.

### Setup Your Project

1. Run `hugo new site my-project` to create a new project.
1. Delete `hugo.toml` file from the `my-project/` folder.
1. Copy the **Main Theme** into the `my-project/themes` folder. Resulting in a folder structure like `my-project/themes/bigspring-hugo/` for premium themes, and `my-project/themes/bigspring-light-hugo/`for free themes.
1. Copy all files from the `my-project/themes/bigspring-hugo/exampleSite` folder into the root folder (`my-project/`). This action will overwrite any existing files and folders. You can delete the `exampleSite` folder afterwards.
1. Additionally, copy the `package.json` file from `my-project/themes/bigspring-hugo` to the root folder (`my-project`). If your theme doesn't have a `package.json` file, you can proceed to the next step.

### Run Your Project

1. Open the terminal in the `my-project/` folder.
1. Run `npm install` to install all the dependencies. If you don't have a `package.json` file, you can skip this step.
1. Then, run `npm run dev` to serve this theme on your localhost. If you don't have a `package.json` file, run `hugo server` instead.
1. After successfully serving the theme, you will receive a localhost address. Open this address in your browser to see the theme.

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `config.toml` or `hugo.toml` file. Then follow the step 3 again.
{{< /notice >}}

### Build Your Project

After completing your development process, you can build your project for production. To build your project, check the following command.

```shell
npm run build
```

> Now that you've got your theme running and understand the compiling process, let's discuss the proper ways to edit and customize your theme. You can directly customize your template from the source file. For a better experience, open the whole theme folder with a text-editor or IDE (i.e. [Visual Studio Code](https://code.visualstudio.com/)).

---

## Deploy Your Project

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

---

## Know Your Theme

Before you start customizing your theme, you should know the theme file structure. The main file structure is the same for every theme. Let's discuss the file structure.

### File Structure

```bash
📂 my-project/ (Root Directory)
   |
   ├── 📁 assets/
   |     ├── 📁 scss/
   |     ├── 📁 js/
   |     └── 📁 images/
   |
   ├── 📁 config/
   |     └── 📁 _default/
   |           ├── 📄 params.toml
   |           ├── 📄 menus.toml
   |           └── 📄 module.toml
   |
   ├── 📁 content/
   |     └── 📁 english/
   |           ├── 📁 pages/
   |           └── 📄 _index.md
   |
   ├── 📁 data/ (optional)
   ├── 📁 i18n/ (optional)
   |     └── 📄 en.yaml
   |
   ├── 📁 static/ (optional)
   |     └── 📄 static files
   |
   ├── 📁 themes/
   |     └── 📁 bigspring-hugo/ (bigspring-hugo is an example)
   |           ├── 📁 assets/
   |           └── 📁 layouts/
   |
   ├── 📁 scripts/ (optional)
   ├── 📄 hugo.toml (or config.toml)
   ├── 📄 package.json (optional)
   └── 📄 other files
```

**If the list above sounds like a foreign language to you, that's okay! Let's break it down:**

1. **assets:** This folder contains theme `scss/css`, `js`, and `images` files. In some cases, `images` could be in the `static` folder.

1. **config:** This folder contains all the configuration files for your site. `params.toml` file is for your site parameters. `menus.toml` file is for your site menus. `module.toml` file is for your site modules. If you didn't find any `config` folder in your theme, then you can find all the parameters in the `config.toml` file.

1. **content:** This folder contains all the content for your site. you can create, duplicate, or delete a page from this folder. If you have a multilingual theme, then your content folder shold have languages folder first (i.e. `english`, `french` etc).

1. **data:** This folder mainly contains global data. this is an optional folder, your theme may not have this folder.

1. **i18n:** This folder is only available with a multilingual theme, that's because this folder contains the multiple language translations for your site.

1. **static:** This folder has all the static files like images, videos, or other files that don't need to compile.

1. **themes:** This folder contains your themes `layouts`, and `assets` folder for your pages.

1. **scripts:** This folder contains node scripts that helps to structure your project, clear modules cache, and other things. This is an optional folder, your theme may not have this folder.

1. **hugo.toml:** This is the main configuration file for your site. You can configure your site from this file. If you don't have this file, then you can find all the parameters in the `config.toml` file.

1. **package.json:** This file contains all the node dependencies for your site. This is an optional file, your theme may not have this file.

### What are the source, compiled, and static files?

These terms are can mean different things in different contexts, but for the purposes of a Hugo Theme:

* **Source files** are files that are meant to be processed by a theme's build tools.

* **Compiled files** are generated as a result of running a compiling process (also called a "build process")
on the source files.

* **Static files** are ones that aren't processed or generated.

## Site Configuration

You have a `hugo.toml` or `config.toml` file in the root folder (`my-project`). Which gives you the ability to configure your site. You also could have a folder called `config` in the root folder. This folder contains the `params.toml` file. This file is for your site parameters. You can change your site parameters from this file. Let's discuss the configuration file.

### Default Configuration

Default configuration stays in the `hugo.toml` or `config.toml` file.

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" "timeZone" "disableLanguages"  >}}

### Default Parameters

Mostly all the parameters are in the `params.toml` file. But if you don't have a `params.toml` file, then you can find all the parameters in the `config.toml` file.

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_height" "logo_text" "logo_webp" "mainSections" "contact_form_action" "copyright" "preloader" "navigation_button" "contact_info" "metadata" >}}

### Contact and Subscription Form

Our many users want to know how to set up a contact form, or how to set up a subscription form. So we make a step to differentiate the contact and subscription form guide.

* `contact_form_action` is for activate contact form. Give your form action here, it works with [formspree](https://formspree.io/). Go to this site, and create an account by click on `signup` button. Then give contact form action, it will looks like this `contact_form_action = "https://formspree.io/your.name@email.com/"`. Now verify your email address by click `varify` button in the mail you got in your inbox. When someone sent you the first email from this contact form, you will get an email in your inbox, it will ask to activate the form. Click on this button to activate your form. Now it's done. You will get every email that someone sends you via this contact form.

* `[params.subscription]` is for user subscription database. We used [mailchimp](https://mailchimp.com/) service for our theme development. Replace your own subscription form action URL in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action URL and form a name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).

### Google Map

Google Maps is one of those items that the user asks frequently. So we have also differentiated that from regular parameter setup. It starts with `[params.map]`.

* `enable = true` is a default value for map. But if you don't need the map, then change the value to `false`.

* `gmap_api` needs to be replaced with your own API. You can get your google map API key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

* `map_latitude` and `map_longitude` field is for your google map location. you can find this location from [here](https://www.where-am-i.net/).

* `map_marker` is for your map pointer, you can set your own map pointer that you want to show. Just maintain the pointer size with the provided one.

* You can change your map style also. For this, pick a style from [here](https://snazzymaps.com/), copy the styling code, and replace it with `static/plugins/google-map/gmap.js` files provided styling code. You can also tweak some map configuration from this file, like `zoom`, `controllers`, `pointer size`, etc..

---

## Navigation

Navigation is a list of links to other pages. It is rendered in the header/footer of the page. you can find the `menus.toml` file in the `config/_default` directory. If your theme doesn't have a `menus.toml` file, then you can find all the parameters in the `config.toml` file.

### Main Navigation

Every theme has the main navigation to navigate all the pages. Main navigation loop starts with `[[main]]` heading. If your theme does not have a `menus.toml` file, then the navigation loop starts with `[[menu.main]]` heading. Let's discuss the main navigation loop.

#### Normal Menu

```toml
[[main]]
name = "About"
url = "about/"
weight = 1
```

* `name` is for menu item name/text.
* `URL` is for the page URL. To set about page URL here, type `about/`. You can also use an external URL by putting the URL in this attribute. ex: `url = "https://gethugothemes.com/"`
* `weight` is for your navigation sorting. The smaller number weight will show first. You can switch menu items by changing the weight value.

#### Dropdown Menu

```yml
[[main]]
weight = 4
name = "Dropdown"
hasChildren = true

  [[main]]
  parent = "Dropdown"
  name = "Dropdown Item"
  url = "https://gethugothemes.com/"
  weight = 1
```

* For **dropdown menu**, you need to add another attribute called `hasChildren = true`. And remove `URL`. Then repeat the `[[main]]` loop, and put the `parent =` attribute in the dropdown menu item. Parent name should be the same as the dropdown item name. Also, update `name` and `URL` attributes.

### Footer Navigation

Footer navigation also follows the same rule that uses main navigation. But footer navigation does not support the dropdown menu.

---

## Content Management

All the pages for your website can be found in the `content` folder. If your theme supports multiple languages, then there will be a separate folder for each language, such as `english` for English, `french` for French, and so on.

Each page is written in Markdown format. If you are unfamiliar with Markdown syntax, you can learn more about it [here](https://www.markdownguide.org/basic-syntax/). Additionally, every Markdown page includes front matter, which is the metadata for that page. To learn more about front matter, refer to [this resource](https://gohugo.io/content-management/front-matter/).

### Homepage

The homepage for each language can be found in the respective language folder within the `content` directory. The homepage is represented by the `_index.md` file, and you can update its content from there.

### Regular Pages

The regular pages, such as `About`, `Contact` or `Privacy` are located within the root or **pages** folder in each language folder within the `content` directory. You can add or modify your regular pages from there.

To create a new page, you can duplicate an existing page and update the content accordingly. For example, if you want to create a new page called "Terms and Conditions," you can duplicate the `privacy.md` file and rename it to `terms-conditions.md`. Then, you can update the content in the new file.

### List and Single Pages

The Hugo site consists of two types of pages: list pages and single pages. A list page serves as a landing page for single pages. For example, a "Blog" page would be a list page, while individual blog posts would be single pages.

To illustrate, in the `content/english/blog` folder, you will find the `_index.md` file, which represents the list page for the blog. Additionally, you can create separate Markdown files for each blog post within the same folder as single pages.

To create a new blog post, you can duplicate an existing blog post and update the content accordingly. For example, if you want to create a new blog post called "My First Post," you can duplicate the `post.md` file and rename it to `my-first-post.md`. Then, you can update the content in the new file.

---

## Modules & Plugins

Modules and Plugins gives you the ability to add extra functionality to your site.

### Modules

You can find all modules here - [Gethugothemes Hugo Module](https://gethugothemes.com/hugo-modules).
To use a Module, follow the `README.md` file attached with each module.

You can find `modules.toml` file in the `config/_default` directory. This file contains all the modules used in this project.

Example:

```toml
[[imports]]
path = "github.com/gethugothemes/hugo-modules/images"
```

### CSS plugins

To add a CSS plugin, you need to add a loop like this in your `hugo.toml` or `config.toml` file.

```toml
[[params.plugins.css]]
link = "https://cdn.examplesite.com/your-plugin.css"
attributes = "your-attributes" # optional field
```

### JS plugins

To add a JS plugin, you need to add a loop like this in your `hugo.toml` or `config.toml` file.

```toml
[[params.plugins.js]]
link = "https://cdn.examplesite.com/your-plugin.js"
attributes = "your-attributes" # optional field
```

{{< notice note >}}
Sometimes you need to close the Hugo server and run again for rendered correctly.
{{< /notice >}}

---

## Theme update

We often update our theme, fix bugs, and improve quality. When someone reports a bug, we fixed it as soon as possible, and make an update. We have mentioned every changelog in themes changelog file, so a user can understand what do we improve or fix.

### Update Manually

You can manually update the theme if you have the ability to work with the source file. For this, please check our changelog, and identify what we have changed. Then copy only this file from the updated version of the theme and replace it with your project.

### Update Whole Theme

If you don't have any idea what we have changed in the theme, then you can replace the whole theme in your `my-project/themes` folder. But before replacing the theme, please make sure you have a backup of your project.
