/**
 * WordPress Dependencies
 */
import { isEmpty, omit, pick } from 'lodash';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
/**
 *  Custom Dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';

export default function edit( props ) {
	const blockProps = useBlockProps( {
		className: classnames( 'cf7-submit-field' ),
	} );

	const blockPropsWithoutStyles = omit( blockProps, [ 'style' ] );

	const { id, label } = props.attributes;

	const buttonStyleProps = [
		'paddingTop',
		'paddingRight',
		'paddingBottom',
		'paddingLeft',
		'padding',
		'fontSize',
		'lineHeight',
	];

	return (
		<>
			<div
				{ ...blockPropsWithoutStyles }
				style={ omit( blockProps?.style, buttonStyleProps ) }
			>
				<input
					id={ id }
					type="submit"
					value={ isEmpty( label ) ? 'Submit' : label }
					style={ pick( blockProps?.style, buttonStyleProps ) }
				/>
			</div>
			<Inspector { ...props } />
		</>
	);
}
