# Development Guide

- [Development Guide](#development-guide)
	- [How to run & build in your dev environment](#how-to-run--build-in-your-dev-environment)
	- [How to run a release candidate locally](#how-to-run-a-release-candidate-locally)
	- [How to Develop new Blocks in this plugin](#how-to-develop-new-blocks-in-this-plugin)

## How to run & build in your dev environment

1. Install repo like a plugin
   The development plugin will have all sorts of extra files that you often don't want/need in your live server. That's why when you make changes it should be tagges as a release using the information in the [Release] wiki page.
2. From the rood dir of this plugin run `npm run dev:blocks` and it will turn all blocks onto watch mode and they will build their dev files.

## How to run a release candidate locally

**Prerequesite:**

- WP CLI installed and running locally

1. From the root dir of the plugin run `bash bin/plugin-build-dist.sh`
2. What gets copied to the `/dist/` directory could get zipped up into a plugin or comitted to a different repo in that sub directory.

For additional details about releasing see that wiki page.

## How to Develop new Blocks in this plugin

- Add block & assets into a new directory in `/blocks/`
- NPM should be installed in that block's directory and running `npm run build` should build that block's assets
- Add that block's build script to the plugin's `package.json` using the format `"build:block:<BLOCK_SLUG>": "cd blocks/<BLOCK_SLUG> && npm run build",` example: `"build:block:06-compare-slider": "cd blocks/06-compare-slider && npm run build",`
- Add building that block to `dev:blocks` script; preferablu concurently ex. `"build:blocks": "concurrently \"npm run build:block:<PLUGIN_SLUG>\" \"npm run build:block:<PLUGIN_SLUG2>\" ",`
- Restart any active build watches
