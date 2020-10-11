# Contributing to Gethugothemes

We welcome contributions to this repository of any kind.

## Code Contribution Guidelines

To make the contribution process as seamless as possible, we ask for the following:

* Fork the project and make your changes. We encourage pull requests to allow for review and discussion of code changes.

## Setup repository for local development

We added some tools to help maintain a readable documentation and excellent code quality. You can run `npm install` to retrieve all required packages. 

## Git Commit Message

... To be written ...

## Fetching the Sources From GitHub

... To be written ...

## Check content quality

We use textlint to keep our content readable and the grammar/orthography proper.

Run the following command to check if your text changes conform with our rules:

```shell script
npm run textlint -- content/path/to/file.md
npm run textlint -- content/guide/_index.md 
```

If textlint complains about your changes, then please fix them. In some cases textlint itself can fix those issues. It will state so after running:

```shell script
npm run textlint -- content/guide/_index.md 
...
✖ 5 problems (5 errors, 0 warnings)
✓ 3 fixable problems.
```

In that case run:

```shell script
npm run textlint-fix -- content/guide/_index.md
```
