#!/usr/bin/env bash

echo $(pwd)

## Clear dist directory
rm -rf dist

## Make directories
mkdir dist
mkdir -p dist/blocks/06-compare-slider/

## Copy files into distribution path
cp readme.txt dist/
cp ics-image-comparison-slider.php dist/
cp -r languages/ dist/languages

cp blocks/06-compare-slider/index.php dist/blocks/06-compare-slider/
cp blocks/06-compare-slider/editor.css dist/blocks/06-compare-slider/
cp blocks/06-compare-slider/block.build.js dist/blocks/06-compare-slider/
cp blocks/06-compare-slider/script.js dist/blocks/06-compare-slider/
cp -r blocks/06-compare-slider/libs dist/blocks/06-compare-slider/

## Copy distribution to plugins dir for final test that all necessary files are included.
cp -R dist ../ics-slider
wp plugin disable ics-image-comparison-slider
wp plugin enable ics-slider
