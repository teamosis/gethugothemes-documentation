---
title: 'Theme Installation'
date: '2019-07-23T02:48:16-03:00'
weight: 2
draft: false
---
Launch website locally (new method)
-----------------------------------

After download the zip file, extract it and then you will find a themes folder, open this folder and you will the the themes. open terminal on this folder, ( for windows: select this folder and press `shift + right click` , then you will see an option that “open PowerShell window here”. For mac: select this folder and `right click` on it. then you will see an option at the bottom that “new terminal at folder”). After that run the following commands:

```
cd exampleSite/
hugo server --themesDir ../..
```

You are done! your website has been launch locally.

Create your project (old method)
--------------------------------

 Hugo provides a `new` command to create a new website   
`hugo new site theme_name`

Theme Setup
-----------

After creating new site, open this folder and you will find a folder called `themes`. Open this folder and place your downloaded themes here (extracted folder). now open it and you will see a folder called `exampleSite`  
In this folder you need to copy/cut every folder and file, then go back to your root folder that you create with `theme_name` . and paste everything here, it will asked you for replacement file and folder, click on replace, and it will replace with the necessary file. You are all set.

 Launching the website locally
------------------------------

Now you can run this theme in your localhost by this `hugo server`  
command in the root folder directory. and you can see this on   
[localhost:1313](http://localhost:1313/)

video documentation
-------------------

If you don’t understand the theme setup steps, you can follow this video documentation.

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/jrkvirglgaQ" width="560"></iframe>