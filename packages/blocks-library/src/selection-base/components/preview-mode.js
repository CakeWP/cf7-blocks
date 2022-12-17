/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import PropTypes from 'prop-types';

function PreviewMode( props ) {
	const { id, type, name, isLabelFirst, isRequired } = props;

	return props.items.map( ( item, index ) => {
		const label = <label>{ item.label }</label>;

		return (
			<div className="cf7blocks-selection-field-preview" key={ index }>
				{ isLabelFirst && label }
				<input
					id={ id }
					type={ type }
					name={ name + '[]' }
					checked={ item.checked }
					isRequired={ isRequired }
					value={ item.label }
				/>
				{ ! isLabelFirst && label }
			</div>
		);
	} );
}

PreviewMode.propTypes = {
	/** Selection items */
	items: PropTypes.arrayOf(
		PropTypes.shape( {
			/** Is the item checked? */
			checked: PropTypes.bool.isRequired,

			/** Item label */
			labe: PropTypes.string.isRequired,
		} )
	),
};

export default PreviewMode;
