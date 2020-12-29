# Gethugothemes Docs

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/41f2dbaca1494cafaf64263725a406ca)](https://app.codacy.com/gh/gethugothemes/documentation)

Documentation site for [Gethugothemes](https://docs.gethugothemes.com) .

## Contributing

We welcome contributions to Hugo of any kind including documentation, suggestions, bug reports, pull requests etc.  We would love to hear from you. 

Note that this repository contains solely the documentation for gethugothemes website themes . 

*Pull requests shall **only** contain changes to the actual documentation. However, changes on the code base of Hugo **and** the documentation shall be a single, atomic pull request in the [gethugothemes](https:docs.gethugothemes.com) repository.*

Spelling fixes are most welcomed, and if you want to contribute longer sections to the documentation, it would be great if you had the following criteria in mind when writing:

* Short is good. People go to the library to read novels. If there is more than one way to _do a thing_ in Hugo, describe the current _best practice_ (avoid "… but you can also do …" and "… in older versions of Hugo you had to …".
* For example, try to find short snippets that teaches people about the concept. If the example is also useful as-is (copy and paste), then great. Don't list long and similar examples just so people can use them on their sites.
* Hugo has users from all over the world, so easy to understand and [simple English](https://simple.wikipedia.org/wiki/Basic_English) is good.

## Branches

* The `master` branch is where the site is automatically built from, and is the place to put changes relevant to the current Hugo version.
* The `next` branch is where we store changes that are related to the next Hugo release. This can be previewed here: https://docs.gethugothemes.com

## Build

To view the documentation site locally, you need to clone this repository:

```bash
git clone https://github.com/gethugothemes/gethugothemes-docs
```

```bash
▶ hugo server

Started building sites ...
.
.
Serving pages from memory
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```
