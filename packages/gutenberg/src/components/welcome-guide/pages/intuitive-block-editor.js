/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

function IntuitiveBlockEditor() {
	return (
		<div className="cf7blocks-welcome-guide-page">
			<h2>{ __( 'Native Block Editor', 'cf7-blocks' ) }</h2>
			<p>
				{ __(
					'Effortlessly create a visually stunning form in just minutes with the block editor. No coding knowledge or learning required as we use the native WP Block Editor.',
					'cf7-blocks'
				) }
			</p>
		</div>
	);
}

export default IntuitiveBlockEditor;
