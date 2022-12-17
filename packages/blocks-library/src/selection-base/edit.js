/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { plusCircle } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import Toolbar from './toolbar';
import Inspector from './inspector';
import classnames from 'classnames';
import PreviewMode from './components/preview-mode';
import EditMode from './components/edit-mode';

export default function edit( props ) {
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `cf7-block-${ props.attributes.type }` ]: true,
			'cf7-block-selection-field-editing': props.isSelected,
		} ),
	} );

	const addSelectionOption = () => {
		const newItem = {
			label: '',
			isChecked: false,
		};
		props.setAttributes( {
			selectionItem: [ ...props.attributes.selectionItem, newItem ],
		} );
	};

	return (
		<>
			<div { ...blockProps }>
				{ ! props.isSelected &&
					props.attributes.selectionItem.map( ( item, index ) => {
						const itemProps = { item, index };
						return <PreviewMode { ...props } { ...itemProps } />;
					} ) }
				{ props.isSelected && (
					<div>
						{ props.attributes.selectionItem.map(
							( item, index ) => {
								const itemProps = { item, index };
								return (
									<EditMode { ...props } { ...itemProps } />
								);
							}
						) }
						<Button
							icon={ plusCircle }
							onClick={ addSelectionOption }
						>
							{ __( 'Add Option', 'cf7-blocks' ) }
						</Button>
					</div>
				) }
			</div>
			<Toolbar { ...props } />
			<Inspector { ...props } />
		</>
	);
}
