---
_build:
  render: never
  list: never
  publishResources: false
---

## Setup Your Project

**Unzip** the downloaded file, and you will find the **THEME** folder inside the **themes** directory. This folder contains your main theme, which you will be working with.

```bash
📂 THEME/ (Unzipped Folder)
   |
   ├── 📁 themes/
   |     |
   |     └── 📂 THEME/ (Main Theme)
   |
   ├── 📄 changelog.html
   ├── 📄 documentation.html
   └── 📄 license.html
```

**You can set up your project in two ways. (Follow any one of them)**

1. [Gethugothemes Exclusive Way (Recommended)](#gethugothemes-exclusive-way-recommended)
2. [Traditional Way](#traditional-way)

### Gethugothemes Exclusive Way (Recommended)

1. Open the `THEME` (Main Theme) using your favorite code editor. [VS Code](https://code.visualstudio.com/) is recommended.

2. Open the VS Code terminal (Ctrl+`) and execute the following command to set up your project:

    ```shell
    npm run project-setup
    ```

(If you have completed this step, proceed to the next step: [Run Your Project Locally](#run-your-project-locally))

<br>

### Traditional Way

1. Launch the **Terminal** and navigate to the specific location where you want to run your site. In my case, I want to run my site in the **development** folder. So my command will be:

    ```shell
    cd development
    ```

    ![project-directory](/images/theme-installation/project-path.png)

2. Use the following command to create a new site. It will create a folder with the given **PROJECT NAME**.

    ```shell
    hugo new site my-project
    ```

    ![new-project](/images/theme-installation/new-project.png)

3. Copy the `themes/THEME` folder (from the extracted zip) into the `my-project/themes` folder, resulting in a folder structure like `my-project/themes/THEME/`.

    ![copy-to-themes](../images/copy-theme.png)

4. Copy all files from the `my-project/themes/THEME/exampleSite` folder into the root folder (`my-project`). This will overwrite any existing files and folders. You can delete the `exampleSite` folder afterwards.

    ![copy-examplesite](../images/copy-examplesite.png)

5. Also copy the `package.json` file from `my-project/themes/THEME` to the root folder (`my-project`).

6. Open the `my-project` folder with your favorite code editor. [VS Code](https://code.visualstudio.com/) is recommended.

---

## Run Your Project Locally

1. Open vscode terminal (ctrl+`) and run the following command to install all dependencies.

    ```shell
    npm install
    ```

2. Run the following command to start the development server.

    ```shell
    npm run dev
    ```

3. Now, you get a generated URL and open it in your browser. The default URL looks like this [localhost:1313](http://localhost:1313/).

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `THEMENAMEDIR` file. Then run `npm run dev` command again.
{{< /notice >}}

---

## Build Your Project

After completing your development process, you need to build your project for production. You can build your project with the following command.

```shell
npm run build
```
