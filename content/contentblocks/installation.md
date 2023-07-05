---
_build:
render: never
list: never
publishResources: false
---

## New to Hugo?

If you are new to Hugo, you should go through an introductory phase prior to installing the theme. Before creating the project, we recommend you explore the following links:

1. First of all, check our [Hugo Guide](/guide/). **(Required)**
2. You can learn more about Hugo from the [Official Hugo Documentation](https://gohugo.io/getting-started/installing/).
3. For more clarification, you can check the [Video Tutorials](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)

{{< notice note >}}
You may skip this step and move to the next page if you don't wish to maintain Hugo locally.
{{</ notice >}}

## Create A New Project

1. Launch the **Terminal** and go to the specific location where you prefer to run your site.

    ![project-directory](/images/theme-installation/project-path.png)

2. Use the following command to create a new site. It will add a folder with your given **PROJECT NAME**.

    ```shell
    hugo new site my-project
    ```

    ![new-project](/images/theme-installation/new-project.png)

## Setup Your Project With SITENAME

1. **Unzip** the downloaded file, and you will get SITENAME in the themes folder.

    ![unzip](../images/unzip.png)

2. Copy the `themes/THEMEPATH` into the `my-project/themes` folder so that you end up with a folder structure like `my-project/themes/THEMEPATH/`

    ![copy-to-themes](../images/copy-theme.png)

3. Copy all files from the `exampleSite` folder into the project directory ( `my-project/` ). It will overwrites existing files and folders. You can delete the `exampleSite` folder afterward.

    ![copy-examplesite](../images/copy-examplesite.png)

4. Navigate to the project directory (In this example, its `my-project` )

    ```shell
    cd my-project
    ```

    ![project-dir](/images/theme-installation/project-dir.png)

5. Remove the `hugo.toml` file (if any).

6. Run Hugo to serve your project.

    ```shell
    hugo server
    ```

    ![hugo-serve](/images/theme-installation/hugo-serve.png)

7. Now, you get a generated URL and open it in your browser. The default URL looks like this [localhost:1313](http://localhost:1313/).

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in `THEMENAMEDIR` file. Then run `hugo server` command again.
{{< /notice >}}

## Video documentation

You may find the following video tutorial helpful in setting up your next project. As an example, we'll utilize our **Biztrox** theme.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jrkvirglgaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
