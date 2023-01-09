/**
 * WordPress Dependencies
 */
import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import { convertSelectionBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';
import { WithLabel } from '../components';

import processInputLabel from '../utils/process-input-label';

export default function save( props ) {
	const shortcode = convertSelectionBlockToCF7Shortcode( props.attributes );

	return (
		<div { ...useBlockProps.save() }>
			<WithLabel
				label={ processInputLabel(
					props.attributes.mainLabel,
					props.attributes.isRequired
				) }
				showLabel={ props.attributes.showLabel }
			/>
			<RawHTML>{ shortcode }</RawHTML>
		</div>
	);
}
