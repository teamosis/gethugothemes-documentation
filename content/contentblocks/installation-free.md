---
_build:
render: never
list: never
publishResources: false
---

## New to Hugo?

1. Please check the [Official Hugo Documentation](https://gohugo.io/getting-started/installing/). 
2. You can also check this [Video Tutorials](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)
3. Or you can check our [Hugo Guide](/guide/).

{{< notice note >}}
If you don't want to manage Hugo locally, then you can skip this process and visit the next page 
{{</ notice >}}

## Clone or [Download](https://DOWNLOAD_URL) the theme

```shell
git clone https://CLONE_URL
```

## Create A New Project

1. After finishing clone open **Terminal** and go to the location where you want to run your site.

![project-directory](/images/theme-installation/project-path.png)

2. Create a new site with this command. It will add a folder with your **PROJECT NAME**

```shell
hugo new site my-project
```
![new-project](/images/theme-installation/new-project.png)

## Setup Your Project With SITENAME

1. After **Unzip** the downloaded file or **Cloning** the theme repository, you will get THEMEPATH.

![unzip](../images/unzip.png)

2. Copy the `THEMEPATH` into the `my-project/themes` folder so that you end up with a folder structure like `my-project/themes/THEMEPATH/`

![copy-to-themes](../images/copy-theme.png)

3. Now Copy all files from the `my-project/themes/THEMEPATH/exampleSite` folder into the project directory ( `my-project/` ). It overwrites existing files and folders. You can delete the `exampleSite` folder afterward.

![copy-examplesite](../images/copy-examplesite.png)

4. Go to the project directory (In our case, it's `my-project`). 

```shell
cd my-project
```
![project-dir](/images/theme-installation/project-dir.png)

5. Run Hugo to serve your project. 

```shell
hugo server
```
![hugo-serve](/images/theme-installation/hugo-serve.png)

6. Now, you get a generated URL and open it in your browser. The default URL looks like this [http://localhost:1313/](http://localhost:1313/) or this  [http://localhost:1313/SITENAME/](http://localhost:1313/SITENAME/).

{{< notice tip >}}
To remove `SITENAME` from the URL, chenage the `baseURL` value from `THEMENAMEDIR` file into `https://example.com/`. Then run `hugo server` command again.
{{< /notice >}}

{{< notice info >}}
If your website doesn't serve in your localhost, then check the `theme` name is correct in `THEMENAMEDIR` file. Then run `hugo server` command again.
{{< /notice >}}

## Video documentation

Here is a video tutorial that might help you to set up your project. We used our **Biztrox** theme as an example.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jrkvirglgaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>