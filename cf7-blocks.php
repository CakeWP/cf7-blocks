<?php
/**
 * Plugin Name: Contact Form 7 Blocks
 * Description: Integrates native gutenberg editor in contact form 7.
 * Author: cakewp
 * Author URI:  https://example.com/
 * Version: 1.0.0
 * Requires at least: 5.8.3
 * Requires PHP: 5.7
 * Text Domain: cf7-blocks
 * Domain Path: /languages
 * Tested up to: 6.0.1
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

if ( ! defined( 'CF7BLOCKS_DIR_PATH' ) ) {
	define( 'CF7BLOCKS_DIR_PATH', \plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'CF7BLOCKS_PLUGIN_URL' ) ) {
	define( 'CF7BLOCKS_PLUGIN_URL', \plugins_url( '/', __FILE__ ) );
}

if ( ! defined( 'CF7BLOCKS_PLUGIN_BASE_NAME' ) ) {
	define( 'CF7BLOCKS_PLUGIN_BASE_NAME', \plugin_basename( __FILE__ ) );
}


if ( is_readable( CF7BLOCKS_DIR_PATH . 'lib/autoload.php' ) ) {
	include_once CF7BLOCKS_DIR_PATH . 'lib/autoload.php';
}


if ( ! class_exists( 'CF7_Blocks' ) ) {
	/**
	 * Main plugin class
	 */
	final class CF7_Blocks {
		/**
		 * Var to make sure we only load once
		 *
		 * @var boolean $loaded
		 */
		public static $loaded = false;

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			if ( ! static::$loaded ) {
				static::$loaded = true;
				require_once CF7BLOCKS_DIR_PATH . 'bootstrap.php';
			}
		}

	}

	new CF7_Blocks();

}
