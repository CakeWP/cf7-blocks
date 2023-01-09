/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { WithLabel } from '../components';
import processInputLabel from '../utils/process-input-label';
import { convertFieldBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';

export default function save( props ) {
	const shortcode = convertFieldBlockToCF7Shortcode( props.attributes );

	return (
		<div { ...useBlockProps.save() }>
			<WithLabel
				label={ processInputLabel(
					props.attributes.label,
					props.attributes.isRequired
				) }
				showLabel={ props.attributes.showLabel }
			>
				<RawHTML>{ shortcode }</RawHTML>
			</WithLabel>
		</div>
	);
}
