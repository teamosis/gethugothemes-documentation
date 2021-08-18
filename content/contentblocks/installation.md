---
_build:
render: never
list: never
publishResources: false
---

## New to Hugo?

1. Please check the [Official Hugo Documentation](https://gohugo.io/getting-started/installing/). 
2. You can also check this [video tutorials](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)
3. Or you can check our [Hugo Guide](/guide/).


## Getting Started with SITENAME

Open Terminal and go to the location where you want to run your site.

```shell
cd path/to/your/project-directory
```
![project-directory](/images/theme-installation/path.png)

Create a new site with this command. It will add a folder with your **PROJECT NAME**

```shell
hugo new site project-name
```
![new-project](/images/theme-installation/new-project.png)

## Setup your project with SITENAME

1. Unzip the downloaded file, and you will get SITENAME in the themes folder.
![unzip](/images/theme-installation/unzip.png)

2. Copy the `themes/THEMEPATH` into the `project-name/themes` folder so that you end up with a folder structure like `project-name/themes/THEMEPATH/`
![copy-to-themes](/images/theme-installation/copy-to-themes.png)

3. Copy all files from the `project-name/themes/THEMEPATH/exampleSite` folder into the root directory ( `project-name/` ). It will overwrite existing files and folders of the same name. You can delete the `exampleSite` folder afterward.
![copy-examplesite](/images/theme-installation/copy-examplesite.png)

4. Go to project-name / root directory. 
```shell
cd path/to/your/parent-directory/SITENAME/
```
![project-dir](/images/theme-installation/project-dir.png)

5. Run this command to serve your project. 
```shell
hugo server
```
![hugo-serve](/images/theme-installation/hugo-serve.png)

6. With this command, you will get a generated URL and open it in your browser. The default URL looks like this [localhost:1313](http://localhost:1313/).

## Video documentation

If you didn’t understand the theme setup, you can follow this video documentation.

{{< notice note >}}
Every theme is follow the same steps.
{{< /notice >}}

{{< youtube jrkvirglgaQ >}}