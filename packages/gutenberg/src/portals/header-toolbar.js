/**
 * WordPress Dependencies
 */
import { createPortal, useEffect, useRef } from '@wordpress/element';

function HeaderToolbarPortal( props ) {
	const elementRef = useRef( document.createElement( 'div' ) );

	useEffect( () => {
		let toolbar = document.querySelector(
			'.edit-post-header-toolbar__left'
		);

		toolbar.prepend( elementRef.current );

		return () => {
			toolbar.removeChild( elementRef.current );
		};
	}, [] );

	return createPortal( props.children, elementRef.current );
}

export default HeaderToolbarPortal;
