<?php
/**
 * Shortcode.
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks;

/**
 * Handles shortcode.
 */
class Shortcode {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'wpcf7_autop_or_not', '__return_false' );
		add_filter( 'do_shortcode_tag', array( $this, 'process_blocks' ), 10, 2 );
	}

	/**
	 * Process Contact form 7 shortcode blocks.
	 *
	 * @param string $output - Output.
	 * @param string $tag - Shortcode tag.
	 *
	 * @return string Output.
	 */
	public function process_blocks( $output, $tag ) {

		if ( 'contact-form-7' !== $tag ) {
			return $output;
		}

		\CakeWP\CF7Blocks\Assets::enqueue_style(
			'cf7-blocks-frontend-style',
			'blocks-library-frontend.css'
		);

		return apply_filters( 'the_content', $output );
	}
}
