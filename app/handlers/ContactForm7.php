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

		add_filter( 'wpcf7_autop_or_not', '__return_false' );

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

						$editor_page = \add_query_arg(
							array(
								'id'    => $contact_form->id(),
								'nonce' => wp_create_nonce( 'cf7blocks-edit-' . $contact_form->id() ),
							),
							admin_url( '/admin.php?page=cf7blocks-editor' )
						);

						$default_callback( $contact_form );

						?>
							<div class="cf7-block-editor">
								<iframe 
									style="width: 100%; height: 600px;" 
									src="<?php echo esc_url( $editor_page ); ?>"
								>
								</iframe>
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
