## Shortcodes

The following shortcodes are available to use on this website:

### {{< box >}}

This shortcode creates a visually highlighted box.

```markdown
{{< box title="Title" link="link" class="md5" >}}
```

- `title` (required) 
- `link` (optional) links the title to an URI
- `class` (optional) add classes. if not set an `mb-3` is set. Adding this parameter will override the default setting.

The content of the shortcode will be markdownified.

### {{< changelog >}}

This tag can be used to add items on changelog pages. (*in rework*)

### {{< collapse >}}

Adds a collapsible section to a page. This shortcode can be used to hide longer and less important texts. 

```markdown
{{< collapse "Title of the collapsed section" >}}
Content
{{</ collapse >}}
```

The content of the tag will be markdownified.

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

It is possible to add a second parameter with comma-separated replacements. The shortcode will replace them in the contentblock files with their values. This is useful to add the Theme name or paths to the help texts.

Example:

```markdown
{{< contentblock "blockname" "SEARCH1:replace1,SEARCH2:replace2" >}}
```

This will replace all occurences of `SEARCH1` in the block with `replace1` and `SEARCH2` with `replace`. 

### {{< contentblocklist >}}

This shortcode is used to arrange a list of shorter content blocks into a unordered HTML list. This is mostly used to reuse configuration documentation.

```markdown
{{< contentblocklist "configsidewide/" "baseURL" "summaryLength" "theme" "title" "googleAnalytics" "disqusShortname" >}}
```

It expects two or more unnamed parameters. 

The first parameter describes the subpath of `content/contentblocks` that the block is located in. If it contains a path then it MUST end with a slash. If the blocks are located inside of `content/contentblocks` then leave this parameter empty (`""`).

The second and any later parameter is the name of the content block to load from the configured directory.

### {{< faq >}}

Adds FAQ items to a page. The shortcode will add the required markup for a Q and A format.

```markdown
{{< faq "Question?" >}}
Answer
{{</ faq >}}
```

The content of the tag will be markdownified.

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

### {{< tabs >}} and {{< tab >}}

Builds a tabbed interface that can be used for configuration code samples.

```markdown
{{< tabs >}}
{{< tab "config.yaml" >}}
`codesample`
{{< /tab >}}
{{< tab "config.toml" >}}
`codesample`
{{< /tab >}}
{{< /tabs >}}
```

See `contentblocks/i18n.md` for a sample. The content of the single tabs will be markdownified.
