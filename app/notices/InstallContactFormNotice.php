<?php
/**
 * Installation Notice.
 *
 * @package CF7Blocks.
 */

namespace CakeWP\CF7Blocks\Notices;

/**
 * Notifies the user to install contact form 7 if not installed.
 */
class InstallContactFormNotice {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_notices', array( $this, 'display' ) );
	}

	/**
	 * Renders the installation notice.
	 *
	 * @return void
	 */
	public function display() {

		if ( $this->is_cf7_installed() ) {
			return;
		}

		$installation_link = add_query_arg(
			array(
				's'    => 'Contact form 7',
				'tab'  => 'search',
				'type' => 'term',
			),
			admin_url( 'plugin-install.php' )
		);

		?>
		<div class="notice notice-warning" style="display: flex; align-items: center; gap:10px;">
			<p>
				<?php
					esc_html_e(
						'In order to use CF7 Blocks, you must have the Contact Form 7 plugin installed. Please install Contact Form 7 to use CF7 Blocks.',
						'cf7-blocks'
					);
				?>
			</p>
			<a class="button" target="__blank" href="<?php echo esc_url( $installation_link ); ?>">Install</a>
		</div>
		<?php
	}

	/**
	 * Checks if the contact form 7 is installed and active.
	 *
	 * @return bool - True if active, otherwise false.
	 */
	public function is_cf7_installed() {
		return class_exists( 'WPCF7_ContactForm' );
	}

}
