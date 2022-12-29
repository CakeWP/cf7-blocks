/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { archive, chevronDown } from '@wordpress/icons';
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Custom Dependencies
 */
import { checkbox, radio } from '../icons';

const variations = [
	{
		name: 'checkbox',
		icon: checkbox,
		title: __( 'Checkbox', 'cf7-blocks' ),
		description: __( 'Create basic checkbox field.' ),
		isDefault: true,
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'checkbox',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return blockAttributes.type === variationAttributes.type;
		},
	},
	{
		name: 'radio',
		icon: radio,
		title: __( 'Radio', 'cf7-blocks' ),
		description: __( 'Create basic radio field.' ),
		isDefault: false,
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'radio',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return blockAttributes.type === variationAttributes.type;
		},
	},
	{
		name: 'select',
		icon: chevronDown,
		title: __( 'Select', 'cf7-blocks' ),
		description: __( 'Create basic select field.' ),
		isDefault: false,
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'select',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return blockAttributes.type === variationAttributes.type;
		},
	},
];

variations.forEach( ( variation ) => {
	registerBlockVariation( 'cf7-blocks/selection-base', variation );
} );
