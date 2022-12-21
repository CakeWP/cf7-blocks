<?php
/**
 * CF7 Supports
 *
 * @package CF7Blocks.
 */

namespace CakeWP\CF7Blocks;

/**
 * Handles the contact form 7 support.
 */
class Support {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {

		// Adding a new property.
		add_filter( 'wpcf7_pre_construct_contact_form_properties', array( $this, 'add_property' ), 10, 2 );

	}

	/**
	 * Adds necessary properties.
	 *
	 * @param array  $properties - Current properties.
	 * @param object $instance - CF7 Class instance.
	 *
	 * @return array - Overrided properties.
	 */
	public function add_property( $properties, $instance ) {

		$key = '_is_using_cf7blocks-block-editor';

		$properties[ $key ] = $instance->initial() ? true : false;
		return $properties;
	}

}
