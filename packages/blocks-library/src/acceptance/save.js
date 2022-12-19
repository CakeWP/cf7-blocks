/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { convertAcceptanceBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';
import { WithLabel } from '../components';

export default function save( props ) {
	const shortcode = convertAcceptanceBlockToCF7Shortcode( props.attributes );

	return (
		<div { ...useBlockProps.save() }>
			<WithLabel
				label={ props.attributes.label }
				showLabel={ props.attributes.showLabel }
			>
				<RawHTML>{ shortcode }</RawHTML>
			</WithLabel>
		</div>
	);
}
