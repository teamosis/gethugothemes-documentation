---
_build:
render: never
list: never
publishResources: false
---

### New to Hugo?

Hugo is a Static Site Generator. This means that once you run the software, it will build a website for you. Hugo is fast and easy to use. To run this theme, you will need to have Hugo installed on your local machine.

First, download the latest version of [Hugo](https://gohugo.io/getting-started/installing/) for your operating system. You can find the [latest releases on Hugo's Github page](https://github.com/gohugoio/hugo/releases). If you don't know Hugo yet, we encourage you to learn more about it by reading our [Hugo Guide](/guide/).


### Getting Started with your new Theme

Open a Terminal or DOS box and go to the location where you wish to save your website for local development.

```shell
cd path/to/your/parent-directory
```

Create a new site with this command line. This will add a folder with your **SITE NAME** to the current location:

```shell
hugo new site SITENAME
```

Unzip your theme, and copy its **themes** folder contents over into the **SITENAME/themes** folder so that you end up with a folder structure like **SITENAME/themes/THEMEPATH/** and inside of this folder having subfolders like **archetypes**, **assets**, **exampleSite** and others.

Copy all files from **SITENAME/themes/THEMEPATH/exampleSite** folder into the root directory ( **SITENAME/** ), so that they overwrite existing files and folders of the same name. You can delete the folder **exampleSite** afterwards.

You are ready to give your site a test run now:

```shell
cd path/to/your/parent-directory/SITENAME/
hugo server
```

If everything goes well, then you can now load your website using the generated link in the terminal. Most of the cases, it's [localhost:1313](http://localhost:1313/).