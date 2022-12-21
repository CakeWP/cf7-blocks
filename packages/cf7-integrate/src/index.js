window.addEventListener( 'cf7blocks-content-updated', ( e ) => {
	const newContent = e.detail.content;
	const targetTextarea = document.querySelector( '#wpcf7-form' );

	if ( targetTextarea ) {
		targetTextarea.value = newContent;
	}
} );

window.addEventListener( 'cf7blocks-fullscreen-mode', ( e ) => {
	let isActive = e.detail.fullscreenStatus;

	let cf7BlockEditor = document.querySelector( '.cf7-block-editor' );

	if ( isActive ) {
		document.body.classList.add( 'is-fullscreen-mode' );
		cf7BlockEditor.classList.add( 'is-fullscreen' );
	} else {
		document.body.classList.remove( 'is-fullscreen-mode' );
		cf7BlockEditor.classList.remove( 'is-fullscreen' );
	}
} );

window.addEventListener( 'load', () => {
	wpcf7.taggen.insert = ( content ) => {
		const cf7BlockEditor = document.querySelector(
			'.cf7-block-editor iframe'
		);

		cf7BlockEditor.contentWindow.dispatchEvent(
			new CustomEvent( 'cf7blocks-insert-block', {
				detail: {
					shortcode: `<!-- wp:shortcode -->${ content }<!-- /wp:shortcode -->`,
				},
			} )
		);
	};
} );

window.addEventListener( 'cf7blocks-editor-loaded', () => {
	const cf7BlockEditor = document.querySelector( '.cf7-block-editor' );

	cf7BlockEditor.classList.remove( 'is-loading' );
} );
