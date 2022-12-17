/**
 * WordPress Dependencies
 */
import { clone } from 'lodash';
import { __ } from '@wordpress/i18n';
import { trash, plusCircle } from '@wordpress/icons';
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
	const handleAdd = () => {
		const newItem = {
			label: '',
			checked: false,
		};
		props.onUpdate( [ ...props.items, newItem ] );
	};
	const handleDelete = ( index ) => {
		const newItems = props.items.filter(
			( _, itemIndex ) => index !== itemIndex
		);

		props.onUpdate( newItems );
	};

	return (
		<div>
			{ props.items.map( ( item, index ) => {
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
					<div
						className={ `cf7blocks-selection-field` }
						key={ index }
					>
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
						<Button
							icon={ trash }
							onClick={ () => handleDelete( index ) }
						/>
					</div>
				);
			} ) }
			<Button icon={ plusCircle } onClick={ handleAdd }>
				{ __( 'Add Option', 'cf7-blocks' ) }
			</Button>
		</div>
	);
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
