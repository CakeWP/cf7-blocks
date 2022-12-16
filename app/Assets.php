<?php
/**
 * Assets Class.
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

/**
 * Main class for handling related assets and functionalities.
 */
class Assets {

	/**
	 * Helper method to ease the process of enqueuing build chunks.
	 *
	 * @param string $name - Asset identifier.
	 * @param string $asset_file - Asset file.
	 * @param string $js_file - Javascript file.
	 * @param string $css_file - CSS file.
	 *
	 * @return string Version.
	 */
	public static function enqueue( $name, $asset_file, $js_file, $css_file ) {

		$asset_file = CF7BLOCKS_DIR_PATH . '/dist/' . $asset_file;
		$asset      = file_exists( $asset_file ) ? require_once $asset_file : array(
			'dependencies' => array(),
		);
		$version    = isset( $asset['version'] ) ? $asset['version'] : time();

		wp_register_script(
			$name,
			CF7BLOCKS_PLUGIN_URL . 'dist/' . $js_file,
			$asset['dependencies'],
			$version,
			true
		);

		wp_enqueue_script( $name );

		wp_register_style(
			$name,
			CF7BLOCKS_PLUGIN_URL . 'dist/' . $css_file,
			array(),
			$version
		);

		wp_enqueue_style( $name );

		return $version;
	}

	/**
	 * Enqueues a single style file.
	 *
	 * @param string $name - Style name.
	 * @param string $css_file_path - Path to css file.
	 *
	 * @return void
	 */
	public static function enqueue_style( $name, $css_file_path ) {
		wp_enqueue_style(
			$name,
			CF7BLOCKS_PLUGIN_URL . 'dist/' . $css_file_path,
			array(),
			'initial'
		);
	}
}

new Assets();
