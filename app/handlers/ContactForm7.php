<?php
/**
 * Contact form 7 handler.
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks\Handlers;

use CakeWP\CF7Blocks\Core\Handler;

/**
 * Custom contact form 7 handler.
 */
class ContactForm7 extends Handler {

	/**
	 * Constructor
	 */
	public function __construct() {

		add_action(
			'init',
			function() {
				\CakeWP\CF7Blocks\Assets::enqueue(
					'cf7-blocks-integrate',
					'cf7-blocks-integrate.asset.php',
					'cf7-blocks-integrate.js',
					'cf7-blocks-integrate.css',
				);
			}
		);

		add_filter(
			'wpcf7_editor_panels',
			function( $panels ) {
				$panels['form-panel'] = array(
					'title'    => __( 'Form', 'cf7-blocks' ),
					'callback' => function( $contact_form ) use ( $panels ) {

						$default_callback = $panels['form-panel']['callback'];
						$_is_using_cf7_block_editor = $contact_form->prop( '_is_using_cf7blocks-block-editor' );

						$should_render_editor = false !== $_is_using_cf7_block_editor && ! empty( $_is_using_cf7_block_editor ) && 'true' !== $contact_form->pref( 'cf7_blocks_disable' );

						if ( is_int( $contact_form->id() ) && ! $should_render_editor ) {
							$default_callback( $contact_form );
							return;
						}

						$editor_page = \add_query_arg(
							array(
								'id'      => $contact_form->id(),
								'initial' => $contact_form->initial(),
								'nonce'   => wp_create_nonce( 'cf7blocks-edit-' . $contact_form->id() ),
							),
							admin_url( '/admin.php?page=cf7blocks-editor' )
						);

						if ( 'true' === $contact_form->pref( 'cf7_blocks_enable_shortcodes_picker' ) ) {
							$this->tags_manager( $default_callback, $contact_form );
						}

						?>
							<div class="cf7-block-editor is-loading">
								<iframe 
									style="width: 100%; height: 600px;" 
									src="<?php echo esc_url( $editor_page ); ?>"
								></iframe>
								<textarea id="wpcf7-form" style="display:none;" name="wpcf7-form" data-config-field="form.body">
									<?php echo esc_textarea( $contact_form->prop( 'form' ) ); ?>
								</textarea>
							</div>
						<?php
					},
				);

				return $panels;
			}
		);
	}

	/**
	 * Parses the tag manager from cf7 default output.
	 *
	 * @param  mixed  $callback - CF7 Callback.
	 * @param object $contact_form - CF7 instance.
	 *
	 * @return void - Tags manager.
	 */
	public function tags_manager( $callback, $contact_form ) {

		ob_start();
		$callback( $contact_form );

		$content = ob_get_contents();

		ob_end_clean();

		// Disable the display of libxml errors.
		libxml_use_internal_errors( true );

		// Create a new DOMDocument object.
		$doc = new \DOMDocument();

		// Load the HTML string into the DOMDocument object.
		$doc->loadHTML( $content );

		$element = $doc->getElementById( 'tag-generator-list' );

		$tag_generator = $doc->saveHTML( $element );

		// Clear the libxml error buffer.
		libxml_clear_errors();

		// Re-enable the display of libxml errors.
		libxml_use_internal_errors( false );

		echo $tag_generator;

		echo '<br />';
		echo '<br />';
	}

	/**
	 * Loads the gutenberg editor.
	 *
	 * @param string $selector - Selector.
	 *
	 * @return void
	 */
	public function load_gutenberg_editor( $selector ) {
		$this->load_editor( $selector );
	}

}
