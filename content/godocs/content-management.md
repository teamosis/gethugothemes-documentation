---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 8
draft: false
---

You will get every page that your website has in the content folder. The content folder is a subfolder of the project folder.

{{< notice note >}}
For maintaining it from forestry, you can find all the page content at the top of the left sidebar.
{{< /notice >}}

## Language Structure

To translate a page, simply add the language code at the end of the filename:

```shell
index.en.md # english contact page
index.fr.md # french contact page
```

If you omit the language code then this page will be used as default page for every language if there is no language version defined. If you define the language code, then this page is for that specific language only and will be chosen instead of the default page. If you have no translated version for a language AND no default language page, then on that language version the page will not be created and ignored.

## Topic Structure

Have a look in the folder `content`. You will see a list of folders that have mixed functionality:

The folders `changelog`, `contact`, `faq` and `search` add special pages to your site.

Every other folder in your `content` directory creates a topic section of content. If you look at the included sample site, you find the following sections:

```markdown
- account-bill
- basic-startup
- our-features
- theme-facility
```

Loading the sample site at [localhost:1313](http://localhost:1313) will show you these sections in the topic lists or boxes, depending on your layout.

Inside of these topic sections you find the chapters of your documentation that you can continue to segment further with folders and files. The sidebar navigation will show all subitems of each folder. 

You can easily extend the structure by adding new section folders. Create the folder, then inside add an `_index.md` (or `_index.en.md` if you use languages). The frontmatter must contain the following parameter:

```yaml
---
type : "docs"
---
```

This marks this section as documentation topic and a new box/list will be added to the home page for it.
