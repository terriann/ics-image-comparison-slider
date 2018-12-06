/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl;
var Fragment = wp.element.Fragment;


setLocaleData(window.gutenberg_examples_05_esnext.localeData, 'gutenberg-examples');

registerBlockType('gutenberg-examples/example-06-compare-slider', {
	title: __('Compare Slider', 'gutenberg-examples'),
	icon: 'camera',
	category: 'layout',
	attributes: {
		mediaID_left: {
			type: 'number'
		},
		mediaURL_left: {
			type: 'string',
			source: 'attribute',
			selector: 'img.compare-image-left',
			attribute: 'src'
		},
		caption_left: {
			type: 'string',
			default: ''
		},
		mediaID_right: {
			type: 'number'
		},
		mediaURL_right: {
			type: 'string',
			source: 'attribute',
			selector: 'img.compare-image-right',
			attribute: 'src'
		},
		caption_right: {
			type: 'string',
			default: ''
		},
		default_offset_pct: {
			type: 'number',
			default: 50
		}
	},
	edit: function edit(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    mediaID_left = _props$attributes.mediaID_left,
		    mediaURL_left = _props$attributes.mediaURL_left,
		    caption_left = _props$attributes.caption_left,
		    mediaID_right = _props$attributes.mediaID_right,
		    mediaURL_right = _props$attributes.mediaURL_right,
		    caption_right = _props$attributes.caption_right,
		    default_offset_pct = _props$attributes.default_offset_pct,
		    setAttributes = props.setAttributes;


		var onSelectImage_left = function onSelectImage_left(media) {
			setAttributes({
				mediaURL_left: media.url,
				mediaID_left: media.id
			});
		};
		var onSelectImage_right = function onSelectImage_right(media) {
			setAttributes({
				mediaURL_right: media.url,
				mediaID_right: media.id
			});
		};
		function onChangeCaptionLeft(text) {
			setAttributes({
				caption_left: text
			});
		};
		function onChangeCaptionRight(text) {
			setAttributes({
				caption_right: text
			});
		};
		function onStartPercentChange(percent) {
			setAttributes({
				default_offset_pct: percent
			});
		};

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Comparison Slider Settings') },
					wp.element.createElement(TextControl, {
						label: 'Left Caption',
						value: caption_left,
						onChange: onChangeCaptionLeft
					}),
					wp.element.createElement(TextControl, {
						label: 'Right Caption',
						value: caption_right,
						onChange: onChangeCaptionRight
					}),
					wp.element.createElement(RangeControl, {
						label: __('Starting Percentage'),
						value: default_offset_pct,
						onChange: onStartPercentChange,
						min: 0,
						max: 100
					})
				)
			),
			wp.element.createElement(
				'div',
				{ className: className },
				wp.element.createElement(
					'div',
					{ className: 'cslider-image-left' },
					wp.element.createElement(MediaUpload, {
						onSelect: onSelectImage_left,
						className: 'compare-image-left',
						allowedTypes: 'image',
						value: mediaID_left,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								Button,
								{ className: mediaID_left ? 'image-button' : 'button button-large', onClick: open },
								!mediaID_left ? __('Upload Before Image', 'gutenberg-examples') : wp.element.createElement('img', { src: mediaURL_left, alt: __('Before Image', 'gutenberg-examples') })
							);
						}
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'cslider-image-right' },
					wp.element.createElement(MediaUpload, {
						onSelect: onSelectImage_right,
						className: 'compare-image-right',
						allowedTypes: 'image',
						value: mediaID_right,
						render: function render(_ref2) {
							var open = _ref2.open;
							return wp.element.createElement(
								Button,
								{ className: mediaID_right ? 'image-button' : 'button button-large', onClick: open },
								!mediaID_right ? __('Upload After Image', 'gutenberg-examples') : wp.element.createElement('img', { src: mediaURL_right, alt: __('After Image', 'gutenberg-examples') })
							);
						}
					})
				)
			)
		);
	},
	save: function save(props) {
		var className = props.className,
		    _props$attributes2 = props.attributes,
		    mediaURL_left = _props$attributes2.mediaURL_left,
		    caption_left = _props$attributes2.caption_left,
		    mediaURL_right = _props$attributes2.mediaURL_right,
		    caption_right = _props$attributes2.caption_right,
		    default_offset_pct = _props$attributes2.default_offset_pct;

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(
				'div',
				{ 'class': 'ics-slide-wrapper twentytwenty-container', 'data-caption-left': caption_left, 'data-caption-right': caption_right, 'data-offset-percent': default_offset_pct },
				mediaURL_left && wp.element.createElement('img', { className: 'compare-image-left', src: mediaURL_left, alt: __('Before Image', 'gutenberg-examples') }),
				mediaURL_right && wp.element.createElement('img', { className: 'compare-image-right', src: mediaURL_right, alt: __('After Image', 'gutenberg-examples') })
			)
		);
	}
});

/***/ })
/******/ ]);