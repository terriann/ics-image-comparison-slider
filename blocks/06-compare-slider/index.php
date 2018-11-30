<?php

/**
 * Plugin Name: Gutenberg Compare Slider
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.0.2
 * Author: Terri Swallow
 * Author URI: http://terriswallow.com
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'gutenberg_examples_06_compareload_textdomain' );

function gutenberg_examples_06_compareload_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_06_compare_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	/** Editor block style */
	wp_register_style(
		'gutenberg-examples-06-compare-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	/** Editor block script */
	wp_register_script(
		'gutenberg-examples-06-compare-editor',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	register_block_type( 'gutenberg-examples/example-06-compare', array(
		//'style' => '', // editor & frontend.
		//'script' => '', // editor & frontend.
		'editor_style' => 'gutenberg-examples-06-compare-editor', // editor only.
		'editor_script' => 'gutenberg-examples-06-compare-editor', // editor only.
	) );

	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's too late.
	 */
	wp_add_inline_script(
		'gutenberg-examples-06-compare',
		sprintf(
			'var gutenberg_examples_06_compare = { localeData: %s };',
			json_encode( ! function_exists( 'wp_get_jed_locale_data' ) ? gutenberg_get_jed_locale_data( 'gutenberg-examples' ) : wp_get_jed_locale_data( 'gutenberg-examples' ) )
		),
		'before'
	);

}
add_action( 'init', 'gutenberg_examples_06_compare_register_block' );


/**
 * Enqueue frontend and editor JavaScript and CSS
 *
 * @return void
 */
function gutenberg_examples_06_frontend_block_assets() {

	// only enqueue for frontend requessts.
	if ( is_admin() ) {
		return;
	}

	/** JS :: jQuery event move library */
	wp_register_script(
		'gutenberg-examples-06-jqueryeventmove',
		plugins_url( 'libs/twentytwenty/js/jquery.event.move.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'libs/twentytwenty/js/jquery.event.move.js' )
	);

	/** JS :: Virb's twentytwenty JS library */
	wp_register_script(
		'gutenberg-examples-06-jquerytwentytwenty-lib',
		plugins_url( 'libs/twentytwenty/js/jquery.twentytwenty.js', __FILE__ ),
		array( 'jquery', 'gutenberg-examples-06-jqueryeventmove' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'libs/twentytwenty/js/jquery.twentytwenty.js' )
	);

	/** JS :: Listener to hook  */
	wp_register_script(
		'gutenberg-examples-06-compare',
		plugins_url( 'script.js', __FILE__ ),
		array( 'jquery', 'gutenberg-examples-06-jqueryeventmove', 'gutenberg-examples-06-jquerytwentytwenty-lib' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'script.js' )
	);

	/** CSS :: Virb's twentytwenty library */
	wp_register_style(
		'gutenberg-examples-06-compare',
		plugins_url( 'libs/twentytwenty/css/twentytwenty-no-compass.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'libs/twentytwenty/css/twentytwenty-no-compass.css' )
	);

    // Enqueue block JS.
    wp_enqueue_script( 'gutenberg-examples-06-compare' );

    // Enqueue block styles.
    wp_enqueue_style( 'gutenberg-examples-06-compare' );
}

// Hook the enqueue functions into the frontend and editor
add_action( 'enqueue_block_assets', 'gutenberg_examples_06_frontend_block_assets' );
