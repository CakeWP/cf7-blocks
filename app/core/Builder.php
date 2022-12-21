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
	 * Obtains the form id that is being edited currently.
	 *
	 * @return int|string - Form id.
	 */
	public function get_current_form_id() {
		// phpcs:ignore
		$form_id = isset( $_GET['id'] ) ? \sanitize_text_field( \wp_unslash( $_GET['id'] ) ) : null;
		return $form_id;
	}

	/**
	 * Verifies if the user can access the builder.
	 *
	 * @return bool - True if can edit, otherwise false.
	 */
	public function can_edit() {

		// phpcs:ignore
		$nonce = isset( $_GET['nonce'] ) ? \sanitize_text_field( \wp_unslash( $_GET['nonce'] ) ) : '';

		if ( is_null( $nonce ) ) {
			return false;
		}

		$form_id           = $this->get_current_form_id();
		$is_nonce_verified = wp_verify_nonce( $nonce, 'cf7blocks-edit-' . $form_id );

		if ( ! $is_nonce_verified ) {
			return false;
		}

		return true;
	}

	/**
	 * Checks if the current contact form (being edited) is not yet saved to the database.
	 *
	 * @return bool - True if initial, otherwise false.
	 */
	public function is_initial() {
		// phpcs:ignore
		return isset( $_GET['initial'] ) ? \sanitize_text_field( \wp_unslash( $_GET['initial'] ) ) : false;
	}

	/**
	 * Registers a hidden menu page for the builder.
	 *
	 * @return void
	 */
	public function register_hidden_page() {
		add_submenu_page(
			null,
			__( 'Gutenberg Editor', 'cf7-blocks' ),
			__( 'CF7 Block Editor', 'cf7-blocks' ),
			'wpcf7_edit_contact_form',
			'cf7blocks-editor',
			function() {

				if ( ! $this->can_edit() ) {
					echo esc_html__( 'Sorry, You\'re not allowed to access this page.', 'cf7-blocks' );
					return;
				}

				$form_id = $this->get_current_form_id();

				$handler = new \CakeWP\CF7Blocks\Handlers\ContactForm7();

				$handler->load_gutenberg_editor( '#cf7-blocks-root-text-area' );

				$form_content = is_null( $form_id ) ? '' : \WPCF7_ContactForm::get_instance( $form_id )->prop( 'form' );

				?>
					<div class="cf7-editor-root">
						<textarea id="cf7-blocks-root-text-area" data-initial="<?php echo esc_html( $this->is_initial() ? 'initial' : 'saved' ); ?>">
							<?php echo esc_textarea( ( $form_content ) ); ?>
						</textarea>
					</div>
				<?php
			}
		);
	}

}

