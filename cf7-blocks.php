<?php
/**
 * Plugin Name: CF7 Blocks
 * Plugin URI: https://cf7blocks.com
 * Description: Effortlessly Create Stunning Contact Forms with CF7 Blocks and Contact Form 7
 * Version: 1.0.1
 * Author: munirkamal
 * Author URI: https://www.munirkamal.com/
 * Text Domain: cf7-blocks
 * Domain Path: languages
 *
 * @category Gutenberg
 * @author Munir Kamal
 * @version 1.0
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

				// Core.
				new \CakeWP\CF7Blocks\Assets();
				new \CakeWP\CF7Blocks\Support();
				new \CakeWP\CF7Blocks\Shortcode();
				new \CakeWP\CF7Blocks\Core\Builder();

				// Handlers.
				new \CakeWP\CF7Blocks\Handlers\ContactForm7();

				// Installation notice.
				new \CakeWP\CF7Blocks\Notices\InstallContactFormNotice();

			}
		}

	}

	new CF7_Blocks();

}
