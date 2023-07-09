---
_build:
  render: never
  list: never
  publishResources: false
---

## HTML5 or CDN Video Shortcode

We build a HTML5 or CDN based video shortcode for hugo. You just need to specify the local video directory(or CDN link). You can use the shortcode in your content.

```md
{{</* video src="video/my_video.mp4" class="my-custom-video" height="auto" width="500" autoplay="false" loop="false" muted="false" controls="true" */>}}
```

1. **src** for the directory or URL of the video. You can use local images from [CDN/assets/static/content].
1. **class** value will be the class-name of your video
1. **height** can specify the height of the video.
1. **width** can specify the width of the video.
1. **autoplay** can be set to `true` or `false` (default is `false`). If true video will autoplay.
1. **loop** can be set to `true` or `false` (default is `false`). If true video will restart after end.
1. **muted** can be set to `true` or `false` (default is `false`). If true video sound will muted.
1. **controls** can be set to `true` or `false` (default is `false`). If true video controls will show.
