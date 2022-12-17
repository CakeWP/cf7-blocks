<?php
/**
 * Main Contact form Builder.
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks\Core;

/**
 * Main class that handles contact form 7 gutenberg builder.
 */
class Builder {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {

		add_action( 'admin_menu', array( $this, 'register_hidden_page' ) );

	}

	/**
	 * Registers a hidden menu page for the builder.
	 *
	 * @return void
	 */
	public function register_hidden_page() {
		add_menu_page(
			__( 'Gutenberg Editor', 'cf7-blocks' ),
			__( 'CF7 Block Editor', 'cf7-blocks' ),
			'manage_options',
			'cf7-gutenberg',
			function() {

				$handler = new \CakeWP\CF7Blocks\Handlers\ContactForm7();

				$handler->load_gutenberg_editor( '#cf7-blocks-root-text-area' );

				?>
					<div class="cf7-editor-root">
						<textarea id="cf7-blocks-root-text-area"></textarea>
					</div>
				<?php
			}
		);
	}

}

