/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';
import { convertSubmitBlockToCF7Shortcode } from '../utils/convert-to-cf7-shortcode';

function Inspector( props ) {
	const { label, id } = props.attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Generated Shortcode', 'cf7-blocks' ) }>
				<TextControl
					style={ { maxWidth: '100%' } }
					value={ convertSubmitBlockToCF7Shortcode(
						props.attributes
					) }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'General', 'cf7-blocks' ) }
				initialOpen={ false }
			>
				<TextControl
					value={ label }
					label={ __( 'Label', 'cf7-blocks' ) }
					help={ __( 'Write a submit label text.', 'cf7-blocks' ) }
					onChange={ ( newValue ) =>
						props.setAttributes( { label: newValue } )
					}
				/>
			</PanelBody>
			<InspectorAdvancedControls>
				<TextControl
					value={ id }
					label={ __( 'Unique Id', 'cf7-blocks' ) }
					help={ __( 'Add a unique id attribute.', 'cf7-blocks' ) }
					onChange={ ( newId ) => {
						const idWithoutSpace = newId.replace( ' ', '' );
						props.setAttributes( { id: idWithoutSpace } );
					} }
				/>
			</InspectorAdvancedControls>
		</InspectorControls>
	);
}

export default Inspector;
