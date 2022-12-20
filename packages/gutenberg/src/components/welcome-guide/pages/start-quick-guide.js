/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

function StartQuickGuide() {
	return (
		<div className="cf7blocks-welcome-guide-page">
			<h2>{ __( 'Welcome to CF7 Blocks', 'cf7-blocks' ) }</h2>
			<p>
				{ __(
					'Hello to the Block Editor for Contact Form 7. CF7 Blocks makes it easy & intuitive to create forms in WordPress, thanks to the block editor.',
					'cf7-blocks'
				) }
			</p>
		</div>
	);
}

export default StartQuickGuide;
