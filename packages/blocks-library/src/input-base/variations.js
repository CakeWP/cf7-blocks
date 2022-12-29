/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { globe, upload, comment } from '@wordpress/icons';
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Custom Dependencies
 */
import {
	mail,
	textInput,
	numberInput,
	calender,
	range,
	telephone,
} from '../icons';

const variations = [
	{
		name: 'text',
		icon: textInput,
		title: __( 'Text', 'cf7-blocks' ),
		description: __( 'Create basic input text field.' ),
		isDefault: true,
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'text',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'url',
		icon: globe,
		title: __( 'Url', 'cf7-blocks' ),
		description: __( 'Create basic input url field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'url',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'date',
		icon: calender,
		title: __( 'Date', 'cf7-blocks' ),
		description: __( 'Create basic input date field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'date',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'number',
		icon: numberInput,
		title: __( 'Number', 'cf7-blocks' ),
		description: __( 'Create basic input number field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'number',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'tel',
		icon: telephone,
		title: __( 'Telephone', 'cf7-blocks' ),
		description: __( 'Create basic input telephone field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'tel',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'textarea',
		icon: comment,
		title: __( 'Textarea', 'cf7-blocks' ),
		description: __( 'Create a basic textarea field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'textarea',
			tagName: 'textarea',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return blockAttributes.tagName === variationAttributes.tagName;
		},
	},
	{
		name: 'email',
		icon: mail,
		title: __( 'Email', 'cf7-blocks' ),
		description: __( 'Create basic input email field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'email',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'range',
		icon: range,
		title: __( 'Range', 'cf7-blocks' ),
		description: __( 'Create basic input range field.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'range',
			tagName: 'input',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
	{
		name: 'file',
		icon: upload,
		title: __( 'File', 'cf7-blocks' ),
		description: __( 'Create basic file input.' ),
		scope: [ 'inserter', 'transform' ],
		attributes: {
			type: 'file',
		},
		isActive: ( blockAttributes, variationAttributes ) => {
			return (
				blockAttributes.type === variationAttributes.type &&
				blockAttributes.tagName === variationAttributes.tagName
			);
		},
	},
];

variations.forEach( ( variation ) => {
	registerBlockVariation( 'cf7-blocks/input-base', variation );
} );
