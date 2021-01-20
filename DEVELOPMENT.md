## Developer's Notes

### Setup Development

Run `npm install` to install all development tools that come with this repository.

The following NPM scripts are available:

- `npm run hugo` - compile the website with most verbose output.
- `npm run serve` - starts a Hugo development server with paranoid settings: compile expired, future and draft pages, notify about i18n and layout issues, debug cacheability of layouts, most verbose output with logging into `hugo.log`
- `npm run hugo-update` - update modules recursive and cleanup. This might not be required in normal circumstances. The release scripts (see next section) will take care of that.
- `npm run lint` - (currently) check SCSS files for format errors
- `npm run lint:fix` - correct fixable errors in the SCSS files

### Release Management

Make sure that you ran `npm install` after checking out the repository. After that three release scripts are available:

- `npm run release` - patch version from v1.0.0 to v1.0.1
- `npm run release-next` - minor version from v1.0.0 to v1.1.0
- `npm run relase-major` - major version from v1.0.0 to v2.0.0

The release will create a tag and push the tag to the repository. The script will fail, if you try to run it outside of the master branch.

We use [Semver](https://nodesource.com/blog/semver-a-primer/) for version numbers. Little changes that do not break the site creation process are done in patch releases. If we expect a required cleanup of Hugo modules or additional configuration steps on redeploys we create a minor release. Complete rewrites of the codebase allow for a major version increase.

### Troubleshooting

Sometimes Hugo caches modules too excessive. In that case run `hugo mod clean` to force Hugo to re-download all modules at the start of the next building process (or server start).
