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

**Or**

Go to the official site to Download and Install [Hugo Extended](https://gohugo.io/getting-started/installing/).

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

**Or**

Go to the official site to Download and Install [Go](https://golang.org/dl/).

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

**Or**

Go to the official site to Download and Install [Nodejs](https://nodejs.org/en/download/).

{{< notice warning >}}
After installing all the prerequisites, maybe you need to restart your machine to take effect.
{{< /notice >}}
