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

		add_filter(
			'wpcf7_editor_panels',
			function( $panels ) {
				$panels['form-panel'] = array(
					'title'    => __( 'Form', 'cf7-blocks' ),
					'callback' => function( $contact_form ) {
						?>
							<div class="cf7-block-editor">
								<iframe style="width: 100%; height: 600px;" src="http://localhost:8888/wp-admin/admin.php?page=cf7-gutenberg"></iframe>
								<!-- <textarea id="wpcf7-form" name="wpcf7-form" data-config-field="form.body">
									<?php echo esc_textarea( $contact_form->prop( 'form' ) ); ?>
								</textarea> -->
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
