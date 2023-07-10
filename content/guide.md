---
title: "The Ultimate Hugo Guide"
description: "The best guide to set up any hugo theme."
layout: guide
draft: false
---

Welcome to the Installation Guide presented by Gethugothemes! This detailed guide will help you start your static site-building journey with Hugo Theme. Learn how easily you can install, run, customize, and update your Hugo theme!

<!--
---

<h2>Get Started</h2>

There are two main ways to setup your hugo theme.

{{< box title="Local Development" link="#local-development" >}}
It's a step-by-step approach with instructions on installing Hugo and getting started with a project.
{{< /box >}}

{{< box title="Quick Start" link="#github--netlify--forestry" class="mb-5">}}
Includes a one-page overview of how to set up your theme without touching any code.
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

## Run theme locally

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

After unzipping, your folder should have a `-main` suffix. remove the `-main` suffix from the folder name. like from `bigspring-light-hugo-main` to `bigspring-light-hugo`.

### Setup Your Project

1. Run `hugo new site my-project` to create a new project.
1. Delete `hugo.toml` file from the `my-project/` folder.
1. Copy the **Main Theme** into the `my-project/themes` folder. Resulting in a folder structure like `my-project/themes/bigspring-hugo/` for premium themes, and `my-project/themes/bigspring-light-hugo/`for free themes.
1. Copy all files from the `my-project/themes/bigspring-hugo/exampleSite` folder into the root folder (`my-project/`). This action will overwrite any existing files and folders. You can delete the `exampleSite` folder afterwards.
1. Additionally, copy the `package.json` file from `my-project/themes/THEME` to the root folder (`my-project`). 1f your theme doesn't have a `package.json` file, you can proceed to the next step.

### Run Your Project

1. Open the terminal in the `my-project/` folder.
1. Run `npm install` to install all the dependencies. If you don't have a `package.json` file, you can skip this step.
1. Then, run `npm run dev` to serve this theme on your localhost. If you don't have a `package.json` file, run `hugo server` instead.
1. After successfully serving the theme, you will receive a localhost address. Open this address in your browser to see the theme.

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `config.toml` or `hugo.toml` file. Then follow the step 9 again.
{{< /notice >}}

> Now that you've got your theme running and understand the compiling process, let's discuss the proper ways to edit and customize your theme. You can directly customize your template from the source file. For a better experience, open the whole theme folder with a text-editor or IDE (i.e. [Visual Studio Code](https://code.visualstudio.com/)).

### Local development in a nutshell

Still confused? Here's a quick overview of the local development process:

{{< youtube dyZcRRWiuuw >}}

<br>
<br>

## Know your theme

Before you start customizing your theme, you should know the theme file structure. The main file structure is the same for every theme. Let's discuss the file structure.

### File Structure

```bash
|- hugo-theme/
   |- assets/
      |- scss/
      |- js/
   |- exampleSite/
      |- content/
      |- data/
      |- i18n/
      |- static/
         |- images/
      |- config.toml
   |- layouts/
   |- scripts/
   |- static/
      |- plugins/
   |- package.json
   |- other files
```

**If the list above sounds like a foreign language to you, that's okay! Let's break it down:**

1. **Assets:** This folder contains theme `scss/css` and `js` files. If your theme has `scss` included, that means you have some inner files, which is showing in the file structure. This folder has _**sources files**_.

   * `_variable.scss`: You can find all the variables for color and font which is using your theme.

   * `typography.scss`: You can change the font family, font-weight, and font size from this file.

2. **exampleSite:** This folder contains an example site for your downloaded theme. You can change everything according to your necessity.

   * `content`: This is the folder that has all the content for your site. you can create, duplicate, or delete a page from this folder.

   * `data`: This folder mainly contains global data.

   * `i18n`: This folder is only available with a multilingual theme, that's because this folder contains the multiple language translations for your site.

   * `resources`: This folder has the compiled CSS.

   * `scripts`: This folder contains node scripts that helps to structure your project, clear modules cache, and other things.

   * `static`: This folder has all the static files like images, videos, or other files that don't need to compile.

   * `config.toml`: This is the main configuration file for your site. You can configure your site from this file.

3. **layouts:** This folder contains all the layout for multiple pages. `index.html` layout is for homepage. `_default` folder has 2 files, which is mainly used for blog page. This folder also has _**sources files**_.

4. **static:** This folder contains third-party plugins like bootstrap, jquery, and other plugins that are necessary for your theme. You have seen one more `static` folder in the `exampleSite` folder. This static folder is for the user, who wants to change the site/theme images. and this static folder is for developers.

### What are the source, compiled, and static files?

These terms are can mean different things in different contexts, but for the purposes of a Hugo Theme:

* **Source files** are files that are meant to be processed by a theme's build tools.

* **Compiled files** are generated as a result of running a compiling process (also called a "build process")
on the source files.

* **Static files** are ones that aren't processed or generated.

**Here are a few real-world examples of each type of file:**

* **SCSS files always source files** because they must be compiled by your theme's build tool to generate a CSS file that a browser can understand. SCSS files are located in `assets` folder.

* **HTML files with any non-standard syntax are source files.** Some themes make use of `partials`, `shortcodes`, `internal templates` to create elements. Those must be compiled by `Hugo` to generate standard HTML. Those HTML files are located in `layouts` folder.

* **exampleSite folder has source files.** This folder includes all `content`, `data`, and `config` files which must be compiled to run on the browser.

* **Fonts, images, and plugins are static files.** These don't require any processing to be used and aren't generated from any other source. Fonts and Plugins are located in `static` folder. And Images are located in `exampleSite/static` folder because images need to change when you build a real site.

* **The output of those above examples are compiled files.** The CSS files are generated by processing the source SCSS. The HTML files are generated by processing the pseudo-HTML source. And all pages are generated from exampleSite contents. All are generated from source files and will be overwritten if the source is compiled again. Output files can be found on `exampleSite/public` folder, when you run `hugo --themesDir ../..` this command. If you want the minified output, then run `hugo --minify --themesDir ../..`.

## Site configuration

You have a `config.toml` or `hugo.toml` file in the `exampleSite` folder. Which gives you the ability to configure your site.

### Default configuration

Default configuration is those which come with the Hugo library. Remember that, all configuration does not come with every theme.

* `baseURL` defines your site URL. Give your site URL here (i.e. <https://examplesite.org>).

* `title` is for your site title. Which shown on the browser tab.

* `theme` name is already provided with every theme. don't need to customize this theme name.

* `summaryLeangth` is for the post excerpt limit. you can set your post excerpt length as you want to show.

* `paginate` set your pagination for page items. Such as blog posts, portfolio items, etc. If you set `paginate = 10` then it will show 10 posts on a page.

* `googleAnalytics` is for activating analytics on your site. If you want google analytics to activate, then simply give your analytics ID here (i.e. `googleAnalytics= UA-123-45`). Or if you don't, then leave it empty.

* `disqusShortname` is for activating comment section on a blog page or other page which needs a comment section. get your Disqus short name from [here](https://disqus.com/). if you don't need the comment section, then leave it empty.

* `DefaultContentLanguage` field is for your site default language, which will load first with your site load.

* `disableLanguages` field is for disabling languages, if you don't want to show one or more then one language then you can add the language name here, it will disable those languages from your site. example `disableLanguages = ["fr"]` it will disable french language from your site.

### Default Parameters

Default parameters are those defined by the theme developer. Default parameters start with `[params]` heading.

* `logo` is for your site logo, give the logo directory here (i.e. `logo = images/logo.png`). Logo supports `png`, `jpg`, `gif`, or `svg` format. If you leave it empty, then `title` (default configuration title) will replace the logo.

* `favicon` is defined in your theme header. So you don't need to specify the directory here. Just put your favicon in `static/images` folder. Remind that you need to put this favicon name `favicon.png`. Otherwise, it won't load. If the theme already has a favicon, then replace it with your new one. It will be shown on the browser tab when you compiled the theme again. If it's not showing, then you need to clear your browser cache and reload again.

* `navigation_button` is for the main navigation button. Many themes have a button on navigation that target contact or other pages. If your theme has this button, then you can handle this button `label` and `link` from here, or if you don't want to show it, then you can disable it by `enable = false`.

* `preloader` is for site preloader. It starts with `[params.preloader]`. you can disable preloader by `enable = false`. If you want to show any image, logo, or animation in preloader then give the directory in `preloader` (i.e. `preloader = images/preloader.gif`), or if you don't want any logo or image then leave the preloader empty, then it will show `theme body color` screen when every component is loading. that's simple.

### Navigation

Navigation is a loop item, so you can add more menu items by copying its loop, or you can remove it also.

#### Main navigation

Every theme has the main navigation to navigate all the pages. Main navigation loop starts with `[[menu.main]]` heading.

* `name` is for the navigation item name.
* `URL` is for the page URL, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page URL here, just type `URL = about`.
* `weight` is for your navigation sorting, the smaller number weight will show first.
* For `dropdown menu` you need to add another attribute called `hasChildren = true` and remove `URL`. then give 1 tab space for understanding Hugo that is a children menu item. Then copy and paste this `[[menu.main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.

```toml
# regular menu
[[menu.main]]
name = "About"
URL = "about"
weight = 1

# dropdown menu
[[menu.main]]
name = "Dropdown"
weight = 1
hasChildren = true

  # dropdown item
  [[menu.main]]
  parent = "Dropdown"
  name = "Dropdown Item"
  URL = "#"
```

#### Footer navigation

Footer navigation also follows the same rule that uses main navigation. But footer navigation does not support the dropdown menu.

### Contact and subscription form

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

### Plugins

We used many third-party plugins to build a theme, such as `bootstrap`, `jQuery`, `icon pack` etc. For maintain plugins easily, we build a custom loop, so the user can easily understand which plugins we used, or add more plugins in this loop.

#### CSS plugins loop item

```toml
# css plugins
[[params.plugins.css]]
link = "plugins/bootstrap/bootstrap.min.css"
```

#### JS plugins loop item

```toml
# js plugins
[[params.plugins.js]]
link = "plugins/bootstrap/bootstrap.min.js"
```

## Colors and fonts

When someone buys a theme, they usually change the theme default colors, someone also changes the fonts. So here is the guide for how to do it.

* `colors` change is very easy with the power of scss variables. Open `assets/scss/variables.scss` file in a text editor. Then you can see the global variables we used in this theme. `primary-color` defines the theme default color. If you change it the whole theme default colors will be changed when you compile the theme again. Sometimes it compiles but the browser shows the previous colors. Then you need to clear your browser cache and reload again. You can also change the other variable colors like this.

```scss
// Color Variables
$primary-color: #757fe6;
$text-color: #333;
$body-color: #fff;
$border-color: #E2E2E2;
```

* `font-family` name is also defined in the `assets/scss/variables.scss` files. If you want to change the font then change the `font-family` form here. And give your font link to the `assets/scss/typography.scss` files. In `typography.scss` files, you can customize the `font-size`, `font-weight`, and `lineheight` of your texts. You can get more `font-face` form [here](https://fonts.google.com/).

```scss
// Font Variables from variables.scss file
$primary-font: 'Lato', sans-serif;

// font links from typography.scss file
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,800&display=swap');
```

## Maintain page

There are two types of pages in Hugo theme. `list page` and `single page`. The list page is kind of a landing page (i.e. `about page`). And the single page is called the inner page of a product or a post (i.e. `blog single page`). We need to define the structure or markup of every page.

* `create a new page` is very easy, it works with the command line. Hugo provides a `new` command to create a new page. For example, if you run `hugo new blog/new-post.md`, it will create a new post for you. And if your template is a multilingual template, then when you create a new post, you need to define which language post is this, as an example for creating a new post for `English language` you need to run `hugo new content/english/blog/new-post.md`, it will create a post for the English language.

* `duplicate an existing page` is simple as creating a page. If you want to make a copy of `privacy page`, then you need to duplicate 2 files. The first one is content. Duplicate the privacy page folder from the content folder with `_index.md` file in it. Then change the folder name to your new page name (i.e. `terms-conditions`). Now you have your content ready, it's time to duplicate the structure or the markup for this new page. Go to `layouts` folder and also duplicate the same page folder here, in our stage, it's `privacy page`. And give the same name that you give the content folder (i.e. `terms-conditions`). Now you have successfully duplicate a page.

<!-- 
---
## Github + Netlify + Forestry

Working with forestry CMS is very helpful for those, who don't want to touch any code. It's simple and 5 minutes work to live your website. Here is the process for doing it step by step.

### What you need

1. Git account (Ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/) etc )
2. [Netlify](https://bit.ly/netlify-account) account to host files and add a custom domain
3. [Forestry](https://bit.ly/forestry-account) account to maintain the whole project without code.

#### Step 1: Add template to git

First of all, create a git repository (Ex: [Github](https://github.com/), [Gitlab](https://gitlab.com/)) and push your template to the repository.

#### Step 2: Add your repository in Forestry

Go to your [forestry](https://bit.ly/forestry-account) account and click on `import your site now`. declare your config.toml file \[`exampleSite`\] and fill up basic settings . Mark everything is done then go to configuration to change the base URL. You can put any URL but this has to similar to netlify. So for now put a name which you are going to put in netlify as netlify subdomain.

#### Step 3: Setup and host website with Netlify

Here comes the last step. Go to your [netlify](https://bit.ly/netlify-account) account and click add new site. Choose your git repository to import your website in netlify. And now you can see your repository. Select it and follow the steps. Then go to `site settings` to change the site name and put your subdomain name here what you have given on forestry as base URL. save it and go to `deploy` from the top menu, Wait a while and click on `site preview` or just simply go to the subdomain you given as base URL. **BOOM! Your site is live.** Now you can go to forestry and add, remove, or customize every setting and content.

#### Video documentation for CMS

{{< youtube ResipmZmpDU >}}

### How to customize

With the help of forestry, the main customization becomes very easy. We have added the forestry settings in most of the templates, so you don't need to worry about it. Everything you can find on the forestry sidebar.

* `Configuration` is also a part of customization. You can see a file name `configuration` in the forestry sidebar. Open it and everything here is visualized. You can enable or disable many functions by toggling the switch. And if you want to know about the functionalities that the field did, then check from [defaul configuration](#default-configuration).

* `menu` can be found on configuration files, but it will more easy when you customize it from the sidebar menu option. If your theme has a footer menu then you can see `main` and `footer` two different tabs on the menu.

* `homepage` comes from `data` in a complex theme (i.e. `business`, `portfolio`). And blog-type themes homepage is not separate in `data`. So if your theme has a separate homepage, then we had already provided settings for your homepage in the forestry sidebar. Find the homepage file from the sidebar and change or customize its section.

* `Other page` has also been added to your forestry sidebar. And we provided `front-matter` also to create a new page. You just have to click on create a new page, and give content for it. -->

---

## Theme update

We often update our theme, fix bugs, and improve quality. When someone reports a bug, we fixed it as soon as possible, and make an update. We have mentioned every changelog in themes changelog file, so a user can understand what do we improve or fix.

### Update manually

You can manually update the theme if you have the ability to work with the source file. For this, please check our changelog, and identify what we have changed. Then copy only this file from the updated version of the theme and replace it with your project.

### Update whole theme

If you don't have any idea what we have changed in the theme, then copy the whole theme and replace it with your existing project, except the **exampleSite** folder. That's because **exampleSite** folder contains your `data`, `content`, and `configuration`.
