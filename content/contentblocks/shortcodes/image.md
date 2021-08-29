## Image Shortcode

We build a custom image shortcode that allows you to specify the image height, width, alignment, class, options(format, quality), alter-text, and caption.

1. **title** is the title/caption of the image. When you put a title, then the image will be wrapped in a `figure` element.
1. **src** is the source of the image. You can use a local image or an external image.
1. **alt** is the alternate text for the image.
1. **p** stands for `position`. The value of the position can be `left`, `right`, `center`, `float-left`, `float-right`.
1. **c** stands for `class`. You can add a class to the image.
1. **h** stands for `height`. You can specify the height of the image.
1. **w** stands for `width`. You can specify the width of the image.
1. **o** stands for `options`. You can specify the image options like `format`, `quality`. You can specify the `format` as `jpg`, `png`, `gif`, `webp`, `svg`, `bmp`, `ico`. and `quality` as `q1` to `q100`.

```md
{{</* image title="image caption" w="225" h="225" o="webp q100" p="center" c="img-fluid" src="images/favicon.png" alt="alter-text" */>}}
```