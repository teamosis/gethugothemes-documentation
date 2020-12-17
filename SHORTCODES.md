## Shortcodes

The following shortcodes are available to use on this website:

### {{< changelog >}}

tbd.

### {{< collapse >}}

tbd.

### {{< contentblock >}}

Add content that is identical over documentation pages. 

-   Step 1: Create content block:
    ```shell script
    hugo new contentblocks/title.md
    ```

-   Step 2: Use the shortcode:
    ```markdown
    {{< contentblock "title" >}}
    ```

See the i18n-pages for sample usage.

Content blocks have no title or other frontmatter than the one already added when calling `hugo new`. The content will be markdownified.

### {{< faq >}}

tbd.

### {{< notice >}}

Adds a notice box to the page. The content of the tag will be markdownified.

```markdown
{{< notice note >}}
Note with blue background box
{{< /notice >}}
{{< notice tip >}}
Note with green background box
{{< /notice >}}
{{< notice info >}}
Note with yellow background box
{{< /notice >}}
{{< notice warning >}}
Note with red background box
{{< /notice >}}
```

### {{< tab >}}

tbd.

### {{< tabs >}}

tbd.

