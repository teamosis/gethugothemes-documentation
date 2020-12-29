---
title: "Homepage Setup"
date: 2020-12-28T10:00:00+07:00
weight: 4
---

All elements on the homepage are configurable via data file configuration in `data/homepage.yml`. 

You can disable each section and features inside these sections by setting the parameter `enable` to `false`. 

The icons used are based on the [Themify Icon Font](https://themify.me/themify-icons). You can find a large selection of icons on their website. Just copy the icon name and add as `icon` parameter.

All paths to images must be relative to the `static` folder. If an image is located in `static/images/home/image.jpg` then the path to add to an image parameter is `images/home/image.jpg`.

### Banner Section

The banner section introduces your book or product. Make sure to add the photo for your book inside of the `static` directory and include all folders starting from there. The "Purchase Now" button is automatically created.

```yaml
banner:
    enable : true
    writter : "George Stewart"
    title : "The Man in the <br>Glass House"
    image : "images/about/book.png"
    content : "Eras velum! Cur calceus persuadere?"
    price : "14.99"
```

### Book Preview Section

Here you can configure a preview of your book. Add as many `image` and `insideItem` lines as you need. 

```yaml
preview:
    enable : true
    pagePreview:
        - image : "images/about/book_page.png"
        - image : "images/about/book_page2.png"
        - image : "images/about/book_page.png"
    
    title : "Look Inside the book"
    content : "Varius tabess ducunt ad epos."    
    
    inside:
        - insideItem : "7 Chapter"
        - insideItem : "Explained Details"
        - insideItem : "Clear Understanding"
        - insideItem : "Best practices"
    
    button:
        enable : true
        label : "Purchase on Amazon"
        link : "#"
```

### Service Section

Add services to your homepage. You can copy the blocks starting with `- title` and ending with `content` to create multiple boxes in this section. 

```yaml
service:
    enable : true
    serviceItem:
      - title : "Experience"
        icon : "ti-microphone" 
        content : "Cum luna cadunt, omnes exsules quaestio pius."
```

### Quote Section 

Add a quote to your homepage. 

```yaml
quote:
    enable : true
    quote: "It's simply the best guide to making money online ever released which only a fool would ignore."
    quoteBy: "John Smith"
```

### Chapter Overview Section

Add chapter summaries to your homepage. Each chapter block consists of a `title` and a `content` variable. Add as many chapters as you need. 

```yaml
chapters:
    enable : true
    title : "Full Chapter Overview"
    subtitle : "Libero atque veniam molestiae ipsa aliquid quam facilis dolore."
    chapter:
      - title : "Chapter 1"
        content : "Tips on scouting the city."
```

### Review Section

Add reviews to your homepage. If you add more than 3 items the section will transform into a review slider. 

```yaml
reviews:
    enable : true
    title : "What people are saying"
    subtitle : "Amazing reviews illo tenetur laboriosam excepturi velit in, temporibus ab rem dicta sint obcaecati!"
    review:
      - name : "Barrow Hasi"
        image : "images/client/test-1.jpg" # image size 80*80 px
        designation : "Sunrise ten"
        rating : "five" # rating from one to five
        content : "Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam."
```

### Device Section

This section lets you show off the display of your product on various devices and adds another purchase now button to link outside of your website, maybe to Amazon.com or another web shop.

```yaml
devices:
    enable : true
    title : "Read it on your favorite device!"
    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod, nobis repudiandae! In
    commodi accusamus molestiae, sunt, tempora fugiat doloribus sint quisquam illo numquam corporis
    tenetur necessitatibus expedita eius, sed."
    image : "images/about/ipad.jpg"
    feature:
      - title : "Take a sneak peak insight"
        icon : "ti-bar-chart"
        content : "Bassus, noster fluctuss aliquando convertam de pius, rusticus advena."

    button:
        enable : true
        label : "Purchase on amazon"
        link : "#"
```

### Author Section

Present the author of the book with an introduction and a signature.

```yaml
author:
    enable : true
    image : "images/about/home-1.jpg"
    name : "Yasin Arafat"
    designation : "A technical Writer"
    content : "
    Do you want to be even more successful? Learn to love learn and growth. The more efort you put into improving your skills, the bigger the payoff you will get.

    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    signature : "images/about/2.png"
```

### Awards Section

Show off the awards that your book or product received. Each award item consists of a `title` and an `image`. You can add as many items as you want. 

```yaml
awards:
    enable : true
    title : "We are award winner best selling book among the top rated 10 books!"
    award:
      - title : "International award"
        image : "images/about/award-1.png"
```

### Other Books Section

Show off other books by the author with links to their respective sites. 

```yaml
otherBooks:
    enable : true
    title : "Others books by the author"
    subtitle : "Laboriosam eos aperiam excepturi accusamus velit repudiandae sit rem incidunt, similique
    facere quas blanditiis."
    book:
      - image : "images/about/b-1.jpg"
        link : "#"
```

### Blog Section

If enabled this section shows a list of latest posts in your blog or news section.

```yaml
blog:
    enable : true
    title : "Our insights and articles"
    subtitle : "Laboriosam eos aperiam excepturi accusamus velit repudiandae sit rem incidunt, similique facere quas blanditiis."
```

### Contact Section

Add multiple ways to contact the author. 

```yaml
contact:
    enable : true
    title : "Contact Us"
    subtitle : "Whether you have questions or you would just like to say hello, contact us.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, atque!"
    contactItem:
    - title : "Contact Quickly"
        icon : "ti-headphone-alt" 
        list:
        - listItem : "+23-68017684"
```
