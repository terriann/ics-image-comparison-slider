# Release Documentation

Notes about how to package up a release.

- [Release Documentation](#release-documentation)
	- [How to build a realease of the code & version bumping](#how-to-build-a-realease-of-the-code--version-bumping)
	- [Releasing to WordPress Repo](#releasing-to-wordpress-repo)
	- [How to Add new Blocks to the build](#how-to-add-new-blocks-to-the-build)
	- [Build & Release Ideas](#build--release-ideas)

## How to build a realease of the code & version bumping

1. Run `npm run build`
2. Run `bash bin/plugin-build-dist.sh`
3. Zip up contents of `/dist/`
   **Additionally** when you run that script it mcopies your new distribution plugin to the plugin directory and swaps out the development plugin with the release one to make it easy to validate that the new feature is working.
    1. If the feature does not work, make sure the newly added files are correct in the whitelist hardcoded in the script. See also: [How to Add new Blocks to the build](#how-to-add-new-blocks-to-the-build).

## Releasing to WordPress Repo

1. TBD.

## How to Add new Blocks to the build

This requires steps for adding new blocks in dev to be completed successfully; this repo, in development, should function as a plugin. The distribution build just strips the unnecessary deelopment files like the SASS and package maintenance.

- Add block directory to `bash bin/plugin-build-dist.sh`

## Build & Release Ideas

- Finish integrating the `release-it` work that's integrated into `npm run release`
- It may even be better if I have to whitelist/blacklist files in a config - can I parse references out of the code to compile the list? See how WordPress repo uses `.distignore`
- Add setting up the WordPress SVN repo in the /dist directory as part of the `bash bin/plugin-build-dist.sh` script.
- Should the build script inject an `index.php` into all the directories? Is that overkill? Is that even still a best practice?
