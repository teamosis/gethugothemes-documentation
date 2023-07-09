---
_build:
  render: never
  list: never
  publishResources: false
---

## Gallery Shortcode

We build a custom image gallery that support Hugo image processing with Image zoom. You just need to specify the directory name of images. You can use the shortcode in your content.

```md
{{</* gallery dir="images/gallery" class="my-gallery" height="400" width="400" webp="true" command="Fill" option="q10 r90" zoomable="true" */>}}
```

1. **dir** for the directory of the images. You can use local images from [assets/static/content].
1. **class** value will be the parent class-name of your gallery.
1. **height** can specify the height of the image.
1. **width** can specify the width of the image.
1. **webp** can be set to `true` or `false` (default is `true`). If false it will not convert images into webp format.
1. **command** can be used to implements the `Resize`, `Fit`, or `Fill`. Learn more about commands [here](https://gohugo.io/content-management/image-processing/#image-processing-methods).
1. **option** can specify the image options like `background color`, `quality`, `hint`, `rotate`, `anchor`, and `resample filter`. Learn more about options [here](https://gohugo.io/content-management/image-processing/#image-processing-options).
1. **zoomable** can be set to `true` or `false` (default is `false`). If true images will popup on click.
