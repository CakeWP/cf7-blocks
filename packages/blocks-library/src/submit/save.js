/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { convertSubmitBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';

export default function save( props ) {
	const shortcode = convertSubmitBlockToCF7Shortcode( props.attributes );

	return (
		<div { ...useBlockProps.save() }>
			<RawHTML>{ shortcode }</RawHTML>
		</div>
	);
}
