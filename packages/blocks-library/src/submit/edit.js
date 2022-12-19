/**
 * WordPress Dependencies
 */
import { isEmpty } from 'lodash';
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

	const { id, label } = props.attributes;

	return (
		<>
			<div { ...blockProps }>
				<input
					id={ id }
					type="submit"
					value={ isEmpty( label ) ? 'Submit' : label }
				/>
			</div>
			<Inspector { ...props } />
		</>
	);
}
