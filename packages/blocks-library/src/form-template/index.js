import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import edit from './edit';

import { cf7blocks } from '../icons';

registerBlockType( metadata, {
	apiVersion: 2,
	icon: cf7blocks,
	edit,
	save: () => null,
} );
