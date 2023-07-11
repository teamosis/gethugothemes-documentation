---
_build:
  render: never
  list: never
  publishResources: false
---

## Setup Your Project

1. **Unzip** the downloaded file, and the unziped folder is your main theme, which you will be working with.

    ```bash
    📂 THEME-master (Unzipped Folder)
    ```

    After unzipping, your folder should have a `-master` or `-main` suffix. remove the suffix from the folder name. like from `THEME-master` to `THEME`.

1. Launch the **Terminal** on the specific directory where you prefer to save your project.

1. Use the following command to create a new site. It will add a folder with your given **PROJECT NAME**.

    ```shell
    hugo new site my-project
    ```

1. Delete the `hugo.toml` file from the `my-project` folder.

1. Copy the **Main Theme** into the `my-project/themes` folder. Resulting in a folder structure like `my-project/themes/THEME/`

    ![copy-to-themes](../images/copy-theme.png)

1. Copy all files from the `my-project/themes/THEME/exampleSite` folder into the root folder (`my-project/`). This action will overwrite any existing files and folders. You can delete the `exampleSite` folder afterwards.

    ![copy-examplesite](../images/copy-examplesite.png)

1. Additionally, copy the `package.json` file from `my-project/themes/THEME` to the root folder (`my-project`). If your theme doesn't have a `package.json` file, you can proceed to the next step.

---

## Run Your Project

1. Open the terminal on the `my-project/` folder.
1. Run `npm install` to install all the dependencies. If you don't have a `package.json` file, you can proceed to the next step.
1. Then, run `npm run dev` to serve this theme on your localhost. If you don't have a `package.json` file, run `hugo server` instead.
1. After successfully serving the theme, you will receive a localhost address. Open this address in your browser to see the theme.

{{< notice info >}}
If your website doesn't serve on your localhost, then check the `theme` name is correct in `CONFIG` file. Then follow the step 3 again.
{{< /notice >}}

---

## Build Your Project

After completing your development process, you can build your project for production. To build your project, run `npm run dev`. If you don't have a `package.json` file, run `hugo` instead.
