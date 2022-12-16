/**
 * Custom Dependencies
 */
import { createGutenbergEditor } from './editor';

window.addEventListener( 'load', () => {
	const blockEditors = window?.cf7BlockEditors ?? [];
	blockEditors.forEach( ( blockEditor ) =>
		createGutenbergEditor( blockEditor )
	);
} );
