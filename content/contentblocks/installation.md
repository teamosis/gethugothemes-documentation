---
_build:
render: never
list: never
publishResources: false
---

### New to Hugo?

1. Please check the [official documentation](https://gohugo.io/getting-started/installing/) . 
2. You can also check this [video tutorials](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)
3. Or you can check our [Hugo Guide](/guide/).


### Getting Started with SITENAME

Open Terminal and go to the location where you want to run your site.

```shell
cd path/to/your/project-directory
```


Create a new site with this command. This will add a folder with your **PROJECT NAME** :

```shell
hugo new site Projectn=
```
### Setup your project with SITENAME

1. Unzip the downloaded file and you will get SITENAME in themes folder.
2. Copy the theme folder **themes** into the **PROJECT/themes** folder so that you end up with a folder structure like **PROJECT/themes/THEMEPATH/** 
3. Copy all files from **Project/themes/THEMEPATH/exampleSite** folder into the root directory ( **SITENAME/** ),it will overwrite existing files and folders of the same name. You can delete the folder **exampleSite** afterwards.
4. Go to project / root directory . 
```shell
cd path/to/your/parent-directory/SITENAME/
hugo server
```
5. Run hugo server command to serve your project . 
```shell
hugo server
```
6. With this command you will get a genarated url and open that url in your browser . The default url looks like this 
[localhost:1313](http://localhost:1313/).
