/**
 * WordPress Dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function edit( props ) {
	const blockProps = useBlockProps( {
		className: classnames( 'cf7-submit-field' ),
	} );

	const { id, label } = props.attributes;

	return (
		<>
			<div { ...blockProps }>
				<input id={ id } type="submit" />
			</div>
		</>
	);
}
