## Image Shortcode

We build a custom image shortcode that allows you to specify the image height, width, position, command, and many more options. You can use the shortcode in your content.

```md
{{</* image src="image.png" caption="Image Caption" alt="alter-text" height="100" width="200" position="float-left" command="fill" option="q10 r90" class="img-fluid" title="Image Title" webp="true" */>}}
```

1. **src** is the source of the image. You can use a local image [assets/static/content] or an external image.
1. **caption** is the caption of the image. When you put a caption, then the image will wrap in a `figure` element.
1. **alt** is the `alter text` for the image. It helps to describe the image.
1. **height** can specify the height of the image.
1. **width** can specify the width of the image.
1. **position** can be set to `left`, `right`, `center`, `float-left`, `float-right`.
1. **command** can be used to implements the `Resize`, `Fit`, or `Fill`. Learn more about commands [here](https://gohugo.io/content-management/image-processing/#image-processing-methods)
1. **option** can specify the image options like `background color`, `quality`, `hint`, `rotate`, `anchor`, and `resample filter`. Learn more about options [here](https://gohugo.io/content-management/image-processing/#image-processing-options)
1. **class** can add classes to the image. If you need to add any classes, then you can use the `class` attribute.
1. **title** can add a title attribute to the image.
1. **webp** can be set to `true` or `false` (default is `true`). If false it will not convert image into webp format.
