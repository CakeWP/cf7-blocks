/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

function ModifyFieldBlocks() {
	return (
		<div className="cf7blocks-welcome-guide-page">
			<h2>{ __( 'Add & Customize Fields as Blocks', 'cf7-blocks' ) }</h2>
			<p>
				{ __(
					'All the CF7 fields are now available as block, making it easier for you to visually design your forms using the block editor. Working with block is more intuitive compared to short-codes.',
					'cf7-blocks'
				) }
			</p>
		</div>
	);
}

export default ModifyFieldBlocks;
