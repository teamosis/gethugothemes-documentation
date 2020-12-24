---
_build:
render: never
list: never
publishResources: false
---

First download the latest version of [Hugo](https://gohugo.io/getting-started/installing/) for your operating system. You can find the [latest releases on Hugo's Github page](https://github.com/gohugoio/hugo/releases). If you don't know Hugo yet, we encourage you learn more about it by reading our [Guide to Hugo](https://docs.gethugothemes.com/guide/).

## Getting Started with your new Theme

Open a console or DOS box and go to the location where you wish to save your website for local development.

```shell
cd path/to/your/site
```

Create the new site. This will add a folder with your `sitename` to the current location:

```shell
hugo new site sitename
```

Unzip your theme and copy it's contents over into the folder `themes` so that you end up with a folder structure like `themes/THEMEPATH/` and inside of this folder having subfolders like `archetypes`, `assets` and others.

Copy all files from `themes/THEMEPATH/exampleSite` into the root directory, so that they overwrite existing files and folders of the same name. You can delete the folder `exampleSite` afterwards.

You are ready to give your site a test run now:

```shell
cd sitename/
hugo server
```

If everything went well then you can now load your website using the THEMENAME at [localhost:1313](http://localhost:1313/).
