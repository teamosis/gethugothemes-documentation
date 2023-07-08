---
_build:
  render: never
  list: never
  publishResources: false
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

Or go to the official site to Download and Install [Hugo Extended](https://gohugo.io/getting-started/installing/).

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

Or go to the official site to Download and Install [Go](https://golang.org/dl/).

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

Or go to the official site to Download and Install [Nodejs](https://nodejs.org/en/download/).

{{< notice warning >}}
After installing all the prerequisites, maybe you need to restart your machine to take effect.
{{< /notice >}}

---

## Setup Your Project

**Unzip** the downloaded file, and you will get **THEMEPATH** in the **themes** folder. Which is your Main Theme. You need to work with the Main Theme.
![unzip](../images/unzip.png)

**You can set up your project in two ways. (Follow any one of them)**

1. [Gethugothemes Exclusive Way (Recommended)](#gethugothemes-exclusive-way-recommended)
2. [Traditional Way](#traditional-way)

### Gethugothemes Exclusive Way (Recommended)

1. Open the `THEMEPATH` (Main Theme) with your favorite code editor. [[VS Code](https://code.visualstudio.com/) recommended]

2. Open vscode terminal (ctrl+\`) and run the following command to setup your project.

    ```shell
    npm run project-setup
    ```

(If you have followed this, then go to the next step: [Run Your Project Locally](#run-your-project-locally))

<br>

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

1. Open vscode terminal (ctrl+\`) and run the following command to install all dependencies.

    ```shell
    npm install
    ```

2. Run the following command to start the development server.

    ```shell
    npm run dev
    ```

3. Now, you get a generated URL and open it in your browser. The default URL looks like this [localhost:1313](http://localhost:1313/).

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `hugo.toml` file. Then run `npm run dev` command again.
{{< /notice >}}

---

## Build Your Project

After completing your development process, you need to build your project for production. You can build your project with the following command.

```shell
npm run build
```
