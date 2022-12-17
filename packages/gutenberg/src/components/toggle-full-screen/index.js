/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { fullscreen } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';

function ToggleFullScreen() {
	const [ isFullScreenEnabled, setFullScreenStatus ] = useState( false );

	const toggleFullScreen = () => {
		setFullScreenStatus( ! isFullScreenEnabled );

		// Updating it to the parent frame.
		parent.window.dispatchEvent(
			new CustomEvent( 'cf7blocks-fullscreen-mode', {
				detail: {
					fullscreenStatus: ! isFullScreenEnabled,
				},
			} )
		);
	};

	return (
		<Button
			icon={ fullscreen }
			onClick={ toggleFullScreen }
			isPressed={ isFullScreenEnabled }
			label={ __( 'Toggle Fullscreen', 'cf7-blocks' ) }
		/>
	);
}

export default ToggleFullScreen;
