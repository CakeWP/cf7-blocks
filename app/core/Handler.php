<?php
/**
 * Handler Class.
 *
 * @package CF7Blocks
 */

namespace CakeWP\CF7Blocks\Core;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

/**
 * Handler.
 */
abstract class Handler {
	/**
	 * Editor object
	 *
	 * @var \CakeWP\CF7Blocks\Editor
	 */
	protected $editor = null;

	/**
	 * Editor settings
	 *
	 * @var array
	 */
	protected $settings = array();

	/**
	 * Load Gutenberg if a comment form is enabled
	 *
	 * @param string      $textarea - Text area selector.
	 * @param string|null $container - Container selector.
	 *
	 * @return void
	 */
	public function load_editor( $textarea, $container = null ) {
		$this->editor = new \CakeWP\CF7Blocks\Core\Editor();

		// Settings for the editor.
		$default_settings = array(
			'editor'               => $this->editor->get_editor_settings(),
			'iso'                  => array(
				'blocks'      => array(
					'allowBlocks' => array(
						'core/paragraph',
						'core/heading',
						'core/separator',
						'core/spacer',
						'core/columns',
						'core/column',
						'core/quote',
						'core/code',
						'core/shortcode',
						'core/group',
						'core/list',
						'core/list-item',
						'core/html',
						'cf7-blocks/template',
						'cf7-blocks/input-base',
						'cf7-blocks/selection-base',
						'cf7-blocks/submit',
						'cf7-blocks/acceptance',
					),
				),
				'moreMenu'    => array(
					'topToolbar' => true,
				),
				'sidebar'     => array(
					'inserter'  => true,
					'inspector' => true,
				),
				'toolbar'     => array(
					'navigation' => true,
					'inspector'  => true,
				),
				'allowEmbeds' => array(),
			),
			'saveTextarea'         => $textarea,
			'container'            => $container,
			'editorType'           => 'core',
			'allowUrlEmbed'        => false,
			'pastePlainText'       => false,
			'replaceParagraphCode' => false,
			'pluginsUrl'           => plugins_url( '', __DIR__ ),
			'version'              => '1.0.0',
		);

		$settings = $default_settings;

		$this->editor->load( $settings );
		$this->settings = $settings;

		\CakeWP\CF7Blocks\Assets::enqueue(
			'contact-form-7-blocks-gutenberg',
			'gutenberg.asset.php',
			'gutenberg.js',
			'gutenberg-styling.css'
		);

		\CakeWP\CF7Blocks\Assets::enqueue(
			'contact-form-7-blocks-blocks-library',
			'blocks-library.asset.php',
			'blocks-library.js',
			'blocks-library-editor.css'
		);

		\CakeWP\CF7Blocks\Assets::enqueue_style(
			'cf7-blocks-editor-style',
			'style-gutenberg.css'
		);

		\wp_localize_script(
			'contact-form-7-blocks-gutenberg',
			'cf7BlockEditors',
			array(
				$textarea,
			)
		);

		\wp_localize_script(
			'contact-form-7-blocks-gutenberg',
			'cf7BlockEditorSettings',
			$this->settings
		);
	}

}
