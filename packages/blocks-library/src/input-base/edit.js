/**
 * WordPress Dependencies
 */
import { isEmpty } from 'lodash';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import Toolbar from './toolbar';
import Inspector from './inspector';
import generateFieldName from '../utils/generate-name';

export default function edit( props ) {
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `cf7-block-${ props.attributes.type }` ]: true,
			'cf7-block-field': true,
		} ),
	} );

	const {
		id,
		type,
		name,
		label,
		showLabel,
		isRequired,
		initialValue,
		autogeneratedName,
		useDefaultValueAsPlaceholder,
	} = props.attributes;

	useEffect( () => {
		// Generating a new field name, if needed.
		if (
			isEmpty( autogeneratedName ) ||
			! autogeneratedName.startsWith( type )
		) {
			const newAutogeneratedName = generateFieldName( type );
			props.setAttributes( { autogeneratedName: newAutogeneratedName } );
		}
	}, [ type ] );

	const InputTag = props.attributes.tagName;

	return (
		<>
			<div { ...blockProps }>
				{ showLabel && (
					<RichText
						tagName="label"
						value={ label }
						placeholder={ __( 'Add Label', 'cf7-blocks' ) }
						onChange={ ( newLabel ) =>
							props.setAttributes( { label: newLabel } )
						}
					/>
				) }
				<InputTag
					id={ id }
					name={ isEmpty( name ) ? autogeneratedName : name }
					required={ isRequired }
					type={ props.attributes.type }
					placeholder={
						useDefaultValueAsPlaceholder ? initialValue : ''
					}
					value={ useDefaultValueAsPlaceholder ? '' : initialValue }
				/>
			</div>
			<Toolbar { ...props } />
			<Inspector { ...props } />
		</>
	);
}
