---
title: "Configuration"
date: 2020-12-25T10:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "theme" "title" >}}

## Parameter Configuration

You can change the whole landing page by changing the paramters in config.toml. 

In `customHead` you can add code to your `<head>`. This is useful to add for instance you analytics code. 

This is followed by the configuration of various sections on the page:

### Navigation

```toml
[params.navigation]
logo = "images/logo.png"
home = "Home"
about = "About"
service = "Services"
contact = "Contact"
```

The `[params.navigation]` section lets you configure the navigation bar of the theme. 

### Hero Section

```toml
[params.hero]
enable            = true
bg                = "images/header-bg.jpg"
title             = "BRING YOUR PRODUCT TO LIGHT"
subtitle          = "Lorem ipsum dolor sit amet"
btnText           = "Get Started"
disableCountdown  = false
countdownYear = "2020"
countdownMonth = "12"
countdownDay  = "31"
```

The hero section displays an introduction into the product or service you want to present. To disable the whole section set `enable` to `false`. To disable the countdown set `disableCountdown` to true. You can configure the date this section is counting down to by setting `countdownYear`, `countdownMonth` and `countdownDay` to this date.

### About Section

```toml
[params.about]
enable      = true
heading     = "Lorem ipsum dolor sit amet"
description = "Lorem ipsum dolor sit amet"

[[params.about.sliderItem]]
image   = "images/about/1.jpg"
[[params.about.sliderItem]]
image   = "images/about/2.jpg"
```

The about section lets you show more information about your product or service. If you do not wish to add a `subtitle` then just leave this parameter empty or delete it. To disable the whole section set `enable` to `false`.

The `[[params.about.sliderItem]]` blocks (mind the double brackets) define images in the slider of the about section. Copy as many items as you wish to appear in the section, each time repeating the header of the block.

### Service Section

```toml

# Service Section
[params.service]
enable      = true
title       = "Find Better Solutions Build Better Products"
subtitle    = "Lorem ipsum dolor sit amet"

[[params.service.serviceItem]]
icon    = "tf-strategy"
title   = "Fully Responsive"
description = "Lorem ipsum dolor sit amet"
delay   = "0s"
```

The service section contains a subscription form that you can use with Mailchimp to have your visitors subscribe to latest news about your product. If you do not wish to add a `subtitle` then just leave this parameter empty or delete it. To disable the whole section set `enable` to `false`.

Next you will see a number of `[[params.service.serviceItem]]` sections in the configuration. Each of these blocks defines one item of the services you provide. The value in the `icon` parameter is an icon from the themefisher icon font. You can select from a [wide range of icons on our overview page](https://github.com/themefisher/themefisher-font). 

After you added `title` and `description` you can set a delay of the animation for the service items to transition into the page. Have a look at the sample configuration, we use a time interval of 0.2 seconds between the items. The format of this variable has to be `1s` or `1.1s`. 

### Call to Action Section

```toml
[params.cta]
enable      = true
bg          = "images/call-to-action.jpg"
title       = "Subscribe to our mailing list"
subtitle    = "Lorem ipsum dolor sit amet"
```

The call to action section contains a subscription form that you can use with Mailchimp to have your visitors subscribe to latest news about your product. If you do not wish to add a `subtitle` then just leave this parameter empty or delete it. To disable the whole section set `enable` to `false`.

### Contact Section

```toml
[params.contact]
enable      = true
title       = "Get In Touch"
subtitle    = "Lorem ipsum dolor sit amet"
```

The contact section contains a contact form that you can use with Mailchimp to have your visitors send you messages. If you do not wish to add a `subtitle` then just leave this parameter empty or delete it. To disable the whole section set `enable` to `false`.
