/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { FullscreenMode } from '@wordpress/interface';
import { __unstableEditorStyles as EditorStyles } from '@wordpress/block-editor';

/**
 * Custom Dependencies
 */
import IsolatedBlockEditor, {
	EditorLoaded,
	ToolbarSlot,
} from '@automattic/isolated-block-editor';

/**
 * Updates the content into the given text area node.
 *
 * @param {string} content - Content to update.
 * @param {HTMLTextAreaElement} textArea - Target Text area.
 */
export function handleSave( content, textArea ) {
	textArea.value = content;
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
		>
			<EditorStyles styles={ cf7BlockEditorSettings.editor.styles } />
			<FullscreenMode isActive />
			<EditorLoaded onLoaded={ () => console.log( 'loaded' ) } />
			<ToolbarSlot>
				<Button variant="primary">
					{ __( 'Save', 'cf7-blocks' ) }
				</Button>
			</ToolbarSlot>
		</IsolatedBlockEditor>,
		editorRoot
	);
}
