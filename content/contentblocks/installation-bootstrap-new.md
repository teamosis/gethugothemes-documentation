---
_build:
  render: never
  list: never
  publishResources: false
---

## Prerequisites

You need to fulfill some prerequisites to configure your machine, before starting the development process of your static site via Hugo.

1. [Install Hugo](#install-hugo)
2. [Install Go](#install-go)
3. [Install Nodejs](#install-nodejs)

### Install Hugo

Download and Install the [Hugo Extended](https://gohugo.io/getting-started/installing/) from the official website of Hugo. You will get the installation instructions according to your operating system on the site.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id Hugo.Hugo.Extended
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install hugo
```

{{</ tab >}}
{{< tab "Linux" >}}

Please follow the [official documentation](https://gohugo.io/installation/linux/#package-managers) to install Hugo on Linux.

{{</ tab >}}
{{</ tabs >}}

### Install Go

Download and Install the [Go](https://golang.org/dl/) from the official website of Go. You will get the installation instructions according to your operating system on the site.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id GoLang.Go
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install go
```

{{</ tab >}}
{{< tab "Linux" >}}

Please follow the [official documentation](https://golang.org/doc/install) to install Go on Linux.

{{</ tab >}}
{{</ tabs >}}

### Install Nodejs

Download and Install the [Nodejs](https://nodejs.org/en/download/) from the official website of Nodejs. You will get the installation instructions according to your operating system on the site.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id OpenJS.NodeJS.LTS
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install node
```

{{</ tab >}}
{{< tab "Linux" >}}
Please follow the [official documentation](https://nodejs.org/en/download/package-manager/) to install Nodejs on Linux.

{{</ tab >}}
{{</ tabs >}}

{{< notice warning >}}
After installing all the prerequisites, maybe you need to restart your machine to take effect.
{{< /notice >}}

---

## Setup Your Project

**Unzip** the downloaded file, and you will get THEMEPATH in the themes folder.
![unzip](../images/unzip.png)

You can set up your project in two ways. One is the **Gethugothemes exclusive way** and another is the **Traditional way**.

### Gethugothemes Exclusive Way (Recommended)

1. Open the `THEMEPATH` with your favorite code editor. [[VS Code](https://code.visualstudio.com/) recommended]

2. Open vscode terminal and run the following command to setup your project.

    ```shell
    npm run project-setup
    ```

### Traditional Way

1. Launch the **Terminal** and go to the specific location where you prefer to run your site.

    ![project-directory](/images/theme-installation/project-path.png)

2. Use the following command to create a new site. It will add a folder with your given **PROJECT NAME**.

    ```shell
    hugo new site my-project
    ```

    ![new-project](/images/theme-installation/new-project.png)

3. Copy the `themes/THEMEPATH` (from extracted zip) folder into the `my-project/themes` folder so that you end up with a folder structure like `my-project/themes/THEMEPATH/`

    ![copy-to-themes](../images/copy-theme.png)

4. Copy all files from the `my-project/themes/THEMEPATH/exampleSite` folder into the root folder (`my-project`). It will overwrites existing files and folders. You can delete the `exampleSite` folder afterward.

    ![copy-examplesite](../images/copy-examplesite.png)

5. Open `my-project` folder with your favorite code editor. [[VS Code](https://code.visualstudio.com/) recommended]

---

## Run Your Project Locally

1. Open vscode terminal and run the following command to install all dependencies.

    ```shell
    npm install
    ```

2. Run the following command to start the development server.

    ```shell
    npm run dev
    ```

3. Now, you get a generated URL and open it in your browser. The default URL looks like this [localhost:1313](http://localhost:1313/).

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `hugo.toml` file. Then run `hugo server` command again.
{{< /notice >}}

---

## Build Your Project

After completing your development process, you need to build your project for production. You can build your project with the following command.

```shell
npm run build
```

---

## Video documentation

You may find the following video tutorial helpful in setting up your next project. As an example, we'll utilize our **Biztrox** theme.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jrkvirglgaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
