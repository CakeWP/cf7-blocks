import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import { check } from '@wordpress/icons';

import edit from './edit';
import save from './save';

registerBlockType( metadata, {
	icon: check,
	apiVersion: 2,
	edit,
	save,
} );
