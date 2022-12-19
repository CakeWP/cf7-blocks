/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { convertFieldBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';
import { WithLabel } from '../components';

export default function save( props ) {
	const shortcode = convertFieldBlockToCF7Shortcode( props.attributes );

	return (
		<div { ...useBlockProps.save() }>
			<WithLabel
				label={ props.attributes.label }
				showLabel={ props.attributes.showLabel }
			>
				{ props.attributes.showLabel && props.attributes.isRequired
					? props.attributes.requiredText
					: '' }
				<RawHTML>{ shortcode }</RawHTML>
			</WithLabel>
		</div>
	);
}
