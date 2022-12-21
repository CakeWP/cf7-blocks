/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';
import { FullscreenMode } from '@wordpress/interface';
import { __unstableEditorStyles as EditorStyles } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import IsolatedBlockEditor, {
	ToolbarSlot,
	EditorLoaded,
} from '@automattic/isolated-block-editor';
import { HeaderToolbarPortal } from './portals';
import {
	ToggleFullScreen,
	Branding,
	MoreMenu,
	WelcomeGuide,
	InteractiveEvents,
} from './components';

/**
 * Updates the content into the given text area node.
 *
 * @param {string} content - Content to update.
 * @param {HTMLTextAreaElement} textArea - Target Text area.
 */
function handleSave( content, textArea ) {
	textArea.value = content;

	parent.window.dispatchEvent(
		new CustomEvent( 'cf7blocks-content-updated', {
			detail: {
				content,
			},
		} )
	);
}

/**
 * Handles the loading state of the editor.
 * And dispatches a custom load event to the parent frame.
 *
 * @return {void}
 */
function handleLoad() {
	parent.window.dispatchEvent( new CustomEvent( 'cf7blocks-editor-loaded' ) );
}

/**
 * Creates the new gutenberg editor.
 *
 * @param {string} textAreaSelector - Selector.
 *
 * @return {void}
 */
export function createGutenbergEditor( textAreaSelector ) {
	const textArea = document.querySelector( textAreaSelector );

	if ( ! textArea ) {
		return;
	}

	textArea.style.display = 'none';
	const editorRoot = document.createElement( 'div' );

	editorRoot.className = 'cf7-blockeditor-root';

	const container = textArea.parentNode;

	container.appendChild( editorRoot );

	render(
		<IsolatedBlockEditor
			settings={ cf7BlockEditorSettings }
			onSaveContent={ ( content ) => handleSave( content, textArea ) }
			onLoad={ ( parser ) => {
				return textArea ? parser( textArea.value ) : [];
			} }
			onError={ () => document.location.reload() }
			renderMoreMenu={ () => <MoreMenu /> }
		>
			<EditorLoaded onLoaded={ () => handleLoad() } />
			<EditorStyles styles={ cf7BlockEditorSettings.editor.styles } />
			<FullscreenMode isActive />
			<WelcomeGuide />
			<InteractiveEvents />
			<ToolbarSlot>
				<ToggleFullScreen />
				<HeaderToolbarPortal>
					<Branding />
				</HeaderToolbarPortal>
			</ToolbarSlot>
		</IsolatedBlockEditor>,
		editorRoot
	);
}
