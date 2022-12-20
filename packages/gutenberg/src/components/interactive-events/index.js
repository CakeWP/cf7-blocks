/**
 * WordPress Dependencies
 */
import { parse } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

function InteractiveEvents() {
	const { insertBlocks } = useDispatch( 'core/block-editor' );

	const listenShortcodeEvent = ( e ) => {
		insertBlocks( parse( e.detail.shortcode ) );
	};

	useEffect( () => {
		window.addEventListener(
			'cf7blocks-insert-block',
			listenShortcodeEvent
		);

		return () =>
			window.removeEventListener(
				'cf7blocks-insert-block',
				listenShortcodeEvent
			);
	} );

	return null;
}

export default InteractiveEvents;
