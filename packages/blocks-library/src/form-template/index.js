import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import edit from './edit';

registerBlockType( metadata, {
	apiVersion: 2,
	edit,
	save: () => null,
} );
