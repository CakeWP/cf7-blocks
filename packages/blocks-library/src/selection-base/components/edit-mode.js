/**
 * WordPress Dependencies
 */
import { clone } from 'lodash';
import { __ } from '@wordpress/i18n';
import { trash } from '@wordpress/icons';
import { useEffect } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import PropTypes from 'prop-types';

function EditMode( props ) {
	const { id, type, name, isLabelFirst, isRequired } = props;

	const handleChange = ( updatedItem, index ) => {
		const newItems = clone( props.items );

		newItems[ index ] = updatedItem; // Updating.

		props.onUpdate( newItems );
	};

	return props.items.map( ( item, index ) => {
		const label = (
			<TextControl
				value={ item.label }
				placeholder={ __( 'Add Label', 'cf7-blocks' ) }
				onChange={ ( newLabel ) =>
					handleChange( { ...item, label: newLabel }, index )
				}
			/>
		);

		return (
			<div className={ `cf7blocks-${ type }` } key={ index }>
				{ isLabelFirst && label }
				<input
					id={ id }
					type={ type }
					name={ name }
					checked={ item.checked }
					isRequired={ isRequired }
				/>
				{ ! isLabelFirst && label }
				<Button icon={ trash } />
			</div>
		);
	} );
}

EditMode.propTypes = {
	/** Selection items */
	items: PropTypes.arrayOf(
		PropTypes.shape( {
			/** Is the item checked? */
			checked: PropTypes.bool.isRequired,

			/** Item label */
			labe: PropTypes.string.isRequired,
		} )
	),

	/** Callback that will be called with updated items on change. */
	onUpdate: PropTypes.func.isRequired,
};

export default EditMode;
