---
title: Languages
date: '2019-12-02T08:15:02-03:00'
weight: 6
draft: false
---


This theme is translatable. So you can change the default language from the `config.toml` file. We provided two languages, **English** and **Deutsch**. But you can add as many languages as you want.

For maintaining **languages**, you need to open the `config.toml` file and follow the steps below.

1. Language is a loop item. So you can duplicate it as many times as you want. Then change the name of the language. See [Official Docs](https://gohugo.io/content-management/multilingual/) for more information.
2. **languageName** is the name of the language.
3. **languageCode** is the code of the language. You can get your language code from the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or [ISO 639-2](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes) codes.
4. **contentDir** is the directory where the content of the language is stored. For example, if you want to create a Spanish language, you need to create a directory called `content/spanish`.
5. **weight** is the weight of the language. Smaller weight will be the first language.

### Example Code

```yaml
######## English language ##########
[en]
languageName = "En"
languageCode = "en-us"
contentDir = "content/english"
weight = 1

######## French language ##########
[fr]
languageName = "Deutsch"
languageCode = "de-DE"
contentDir = "content/french"
weight = 2
```
