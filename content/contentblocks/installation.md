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

### Traditional Way

If you want to set up your project in the traditional way, then follow the link: [Traditional Project Setup](/guide/#setup-your-project)

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
If your website doesn't serve on your localhost, then check the `theme` name is correct in your `CONFIG` file. Then run `npm run dev` command again.
{{< /notice >}}

---

## Build Your Project

After completing your development process, you need to build your project for production. You can build your project with the following command.

```shell
npm run build
```
