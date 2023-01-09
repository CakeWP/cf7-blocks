/**
 * Custom Dependencies
 */
import PropTypes from 'prop-types';

import { RawHTML } from '@wordpress/element';

function WithLabel( props ) {
	if ( ! props.showLabel ) {
		return props.children;
	}

	return (
		<label>
			<RawHTML>{ props.label }</RawHTML>
			{ props?.children ?? null }
		</label>
	);
}

WithLabel.propTypes = {
	/** Should display the provided children with label.  */
	showLabel: PropTypes.bool.isRequired,

	/** Label  */
	label: PropTypes.string.isRequired,

	/** Child elements  */
	children: PropTypes.node.isRequired,
};

export default WithLabel;
