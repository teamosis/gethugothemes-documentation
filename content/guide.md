---
title: "The Guide"
description: "The best guide to set up any hugo theme."
layout: guide
draft: false
---

Welcome! This guide will help you to get started with a Hugo Theme, including how to run, customize, and update your theme!

---

## Get Started

There are two main ways to setup your hugo theme.

{{< box title="Local Development" link="#local-development" >}}
Step-by-step instructions on how to install Hugo and start a project: written for people without Hugo development experience, though these learning resources have helped developers of all skill levels.
{{< /box >}}

{{< box title="Quick Start" link="#github--netlify--forestry" class="mb-5">}}
One page summary of how to setup your theme without writing a line of code.
{{< /box >}}

---

## Local Development

So you have downloaded your theme's .zip file, unpacked it, you can see the folder themes, where the theme is located. Open this folder, and you are ready to start building! To view your theme, you will need to run your theme's "build process" to compile source files and create a local server to preview pages.

### Install Hugo

First of all, you need to install `hugo-extended` version in your machine. It is compulsory if you want to compile `SASS` or `SCSS`. Find your operating system and install it with one command.

* Homebrew (macOS)
``` bash
brew install hugo
```

* MacPorts (macOS)
``` bash
port install hugo
```

* Homebrew (Linux)
``` bash
brew install hugo
```

* Chocolatey (Windows)
``` bash
choco install hugo-extended -confirm
```

* Scoop (Windows)
``` bash
scoop install hugo-extended
```
{{< notice "note" >}}
For more information about other installation methods check out the [Hugo Documentation](https://gohugo.io/getting-started/installing/).
{{</ notice >}}

### Run theme locally
The basic process of setting up local development is roughly the same in every theme:

 1. Open a command prompt on the theme folder. (unpacked zip folder/themes/theme folder)
 2. Run `cd exampleSite/`on command line to navigate the exampleSite folder.
 3. Then run `hugo server --themesDir ../..` to serve this theme on your localhost.
 4. Open your browser to your local server's address. (i.e. open Chrome to `localhost:1313`)
 5. Edit source files and preview changes instantly with live reload.

 
> Now that you've got your theme running and understand the compiling process, let's discuss the proper ways to edit and customize your theme. You can directly customize your template from the source file. For a better experience, open the whole theme folder with a text-editor or IDE (i.e. [Visual Studio Code](https://code.visualstudio.com/)).

### Local development in a nutshell

{{< youtube dyZcRRWiuuw >}}

<br>
<br>

### File Structure
```bash
|- hugo-theme/
   |- assets/
      |- scss/
        |- _variable.scss
        |- _typography.scss
        |- _button.scss
        |- _main.scss
        |- other scss files
        |- style.scss
      |- js/
        |- script.js
   |- exampleSite/
      |- .forestry/
      |- content/
      |- data/
      |- i18n/
      |- resources/
      |- static/
         |- images/
         |- videos/
      |- config.toml
   |- layouts/
   |- static/
      |- plugins/
   |- netlify.toml
   |- other files
```

**If the list above sounds like a foreign language to you, that's okay! Let's break it down:**
1. **Assets:** This folder contains theme `scss/css` and `js` files. If your theme has `scss` included, that means you have some inner files, which is showing in the file structure. This folder has _**sources files**_.

{{< notice warning >}}You must need `hugo-extended` version for compile `scss` files.{{</ notice >}}

* `_variable.scss`: You can find all the variables for color and font which is using your theme.
{{< notice tip >}}You can change your theme color from `_variable.scss` file.{{</ notice >}}

* `typography.scss`: You can change the font family, font-weight, and font size from this file.
{{< notice tip >}}You can change your theme font from `_typography.scss` file.{{</ notice >}}

* js folder contains the main javascript file, which is important for running your theme.

2. **exampleSite:** This folder contains an example site for your downloaded theme. You can change everything according to your necessity.

* `.forestry`: This folder has the forestry CMS settings and front-matter. If your downloaded theme supports forestry, then you will get this folder included.

* `content`: This is the folder that has all the content for your site. you can create, duplicate, or delete a page from this folder.

* `data`: This folder mainly contains the complex homepage data. If your theme is a business or a portfolio theme, then you might get this folder.

* `i18n`: This folder is only available with a multilingual theme, that's because this folder contains the multiple language translations for your site.

* `resources`: This folder has the compiled CSS.

* `static`: This folder has all the static files like images, videos, or other files that don't need to compile.

* `config.toml`: This is the main configuration file for your site. You can configure your site from this file.
{{< notice tip >}}You can change your site `logo` from this `config.toml` file.{{</ notice >}}


3. **layouts:** This folder contains all the layout for multiple pages. `index.html` layout is for homepage. `_default` folder has 2 files, which is mainly used for blog page. This folder also has _**sources files**_.

4. **static:** This folder contains third-party plugins like bootstrap, jquery, and other plugins that are necessary for your theme. You have seen one more `static` folder in the `exampleSite` folder. This static folder is for the user, who wants to change the site/theme images. and this static folder is for developers.

5. **netlify.toml:** This file is for deploying your site with netlify.
{{< notice tip >}}You can change your Hugo version for deploying with netlify{{</ notice >}}


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


### Site configuration

You have a `config.toml` file in the `exampleSite` folder. Which gives you the ability to configure your site, such as `changing logo` or `customize menu`.

#### Default configuration

Default configuration is those which come with the Hugo library. Remember that, all configuration does not come with every theme.

 * `baseURL` defines your site URL. Give your site URL here (i.e. https://examplesite.org).

 * `title` is for your site title. Which shown on the browser tab.

 * `theme` name is already provided with every theme. don't need to customize this theme name.

 * `summaryLeangth` is for the post excerpt limit. you can set your post excerpt length as you want to show.

 * `paginate` set your pagination for page items. Such as blog posts, portfolio items, etc. If you set `paginate = 10` then it will show 10 posts on a page.

 * `googleAnalytics` is for activating analytics on your site. If you want google analytics to activate, then simply give your analytics ID here (i.e. `googleAnalytics= UA-123-45`). Or if you don't, then leave it empty.

 * `disqusShortname` is for activating comment section on a blog page or other page which needs a comment section. get your Disqus short name from [here](https://disqus.com/). if you don't need the comment section, then leave it empty.

 * `DefaultContentLanguage` field is for your site default language, which will load first with your site load.

 * `disableLanguages` field is for disabling languages, if you don't want to show one or more then one language then you can add the language name here, it will disable those languages from your site. example `disableLanguages = ["fr"]` it will disable french language from your site.

#### Default Parameters

Default parameters are those defined by the theme developer. Default parameters start with `[params]` heading.

 * `logo` is for your site logo, give the logo directory here (i.e. `logo = images/logo.png`). Logo supports `png`, `jpg`, `gif`, or `svg` format. If you leave it empty, then `title` (default configuration title) will replace the logo.

 * `footer_logo` is for your footer logo. Most of the themes don't need that. It's only need when the footer logo is different color.

 * `favicon` is defined in your theme header. So you don't need to specify the directory here. Just put your favicon in `static/images` folder. Remind that you need to put this favicon name `favicon.png`. Otherwise, it won't load. If the theme already has a favicon, then replace it with your new one. It will be shown on the browser tab when you compiled the theme again. If it's not showing, then you need to clear your browser cache and reload again.

 * `description` is for your default meta description, it will show on your homepage and other pages that have not set any meta description on this page front-matter.

 * `author` is also a meta tag. It belongs to the site author.

 * `mobile` is your default mobile number. If your theme has an option to make a call, then you can find it on default parameters.

 * `email` is your default email address. If your theme has an option to send an email, then you can find it on default parameters.

 * `address` is your default address. If your theme has an option to show your address, then you can find it on default parameters.

 * `search` doesn't comes with every theme. But if your theme has a search bar, and if you don't want it, then you can disable it by making it `search = false`.

 * `navigation_button` is for the main navigation button. Many themes have a button on navigation that target contact or other pages. If your theme has this button, then you can handle this button `label` and `link` from here, or if you don't want to show it, then you can disable it by `enable = false`.

 * `preloader` is for site preloader. It starts with `[params.preloader]`. you can disable preloader by `enable = false`. If you want to show any image, logo, or animation in preloader then give the directory in `preloader` (i.e. `preloader = images/preloader.gif`), or if you don't want any logo or image then leave the preloader empty, then it will show `theme body color` screen when every component is loading. that's simple.

 * `social` is for the social sites that show on your theme. It starts with `[params.social]`. It's a loop, so you can add more social button by copying its previous loop item, and change the value. Or you can remove a social button by removing this loop item. Most of the themes use [themify icon pack](https://themify.me/themify-icons). And the rest of the themes uses [Fontawesome icon pack](https://fontawesome.com/v4.7.0/icons/). If icon starts with `ti` then you can understand that it uses the Themify icon pack, or if it starts with `fa` then it uses font awesome icon pack.

 * `Language` is for multilingual content. we basically added two languages in a multilingual theme. you can add more language following this example content.

#### Navigation

Navigation is a loop item, so you can add more menu items by copying its loop, or you can remove it also.

##### Main navigation

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

##### Footer navigation

Footer navigation also follows the same rule that uses main navigation. But footer navigation does not support the dropdown menu.

#### Contact and subscription form

Our many users want to know how to set up a contact form, or how to set up a subscription form. So we make a step to differentiate the contact and subscription form guide.

 * `contact_form_action` is for activate contact form. Give your form action here, it works with [formspree](https://formspree.io/). Go to this site, and create an account by click on `signup` button. Then give contact form action, it will looks like this `contact_form_action = "https://formspree.io/your.name@email.com/"`. Now verify your email address by click `varify` button in the mail you got in your inbox. When someone sent you the first email from this contact form, you will get an email in your inbox, it will ask to activate the form. Click on this button to activate your form. Now it's done. You will get every email that someone sends you via this contact form.

 * `[params.subscription]` is for user subscription database. We used [mailchimp](https://mailchimp.com/) service for our theme development. Replace your own subscription form action URL in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action URL and form a name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).

#### Google Map

Google Maps is one of those items that the user asks frequently. So we have also differentiated that from regular parameter setup. It starts with `[params.map]`.

 * `enable = true` is a default value for map. But if you don't need the map, then change the value to `false`.

 * `gmap_api` needs to be replaced with your own API. You can get your google map API key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

 * `map_latitude` and `map_longitude` field is for your google map location. you can find this location from [here](https://www.where-am-i.net/).

 * `map_marker` is for your map pointer, you can set your own map pointer that you want to show. Just maintain the pointer size with the provided one.

 * You can change your map style also. For this, pick a style from [here](https://snazzymaps.com/), copy the styling code, and replace it with `static/plugins/google-map/gmap.js` files provided styling code. You can also tweak some map configuration from this file, like `zoom`, `controllers`, `pointer size`, etc..

#### Plugins

We used many third-party plugins to build a theme, such as `bootstrap`, `jQuery`, `icon pack` etc. For maintain plugins easily, we build a custom loop, so the user can easily understand which plugins we used, or add more plugins in this loop.

##### CSS plugins loop item

```toml
# css plugins
[[params.plugins.css]]
link = "plugins/bootstrap/bootstrap.min.css"
```

##### JS plugins loop item

```toml
# js plugins
[[params.plugins.js]]
link = "plugins/bootstrap/bootstrap.min.js"
```

### Colors and fonts

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

### Maintain page

There are two types of pages in Hugo theme. `list page` and `single page`. The list page is kind of a landing page (i.e. `about page`). And the single page is called the inner page of a product or a post (i.e. `blog single page`). We need to define the structure or markup of every page. 

 * `create a new page` is very easy, it works with the command line. Hugo provides a `new` command to create a new page. For example, if you run `hugo new blog/new-post.md`, it will create a new post for you. And if your template is a multilingual template, then when you create a new post, you need to define which language post is this, as an example for creating a new post for `English language` you need to run `hugo new content/english/blog/new-post.md`, it will create a post for the English language.

 * `duplicate an existing page` is simple as creating a page. If you want to make a copy of `privacy page`, then you need to duplicate 2 files. The first one is content. Duplicate the privacy page folder from the content folder with `_index.md` file in it. Then change the folder name to your new page name (i.e. `terms-conditions`). Now you have your content ready, it's time to duplicate the structure or the markup for this new page. Go to `layouts` folder and also duplicate the same page folder here, in our stage, it's `privacy page`. And give the same name that you give the content folder (i.e. `terms-conditions`). Now you have successfully duplicate a page.

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

 * `Other page` has also been added to your forestry sidebar. And we provided `front-matter` also to create a new page. You just have to click on create a new page, and give content for it.

---

## Theme update

We often update our theme, fix bugs, and improve quality. When someone reports a bug, we fixed it as soon as possible, and make an update. We have mentioned every changelog in themes changelog file, so a user can understand what do we improve or fix.

### Update manually

You can manually update the theme if you have the ability to work with the source file. For this, please check our changelog, and identify what we have changed. Then copy only this file from the updated version of the theme and replace it with your project.

### Update whole theme

If you don't have any idea what we have changed in the theme, then copy the whole theme and replace it with your existing project, except the **exampleSite** folder. That's because **exampleSite** folder contains your `data`, `content`, and `configuration`.
