/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import { required } from '../icons';

function Toolbar( props ) {
	const { isRequired } = props.attributes;

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={ required }
					isPressed={ isRequired }
					label={ __( 'Required', 'cf7-blocks' ) }
					onClick={ () =>
						props.setAttributes( { isRequired: ! isRequired } )
					}
				/>
			</ToolbarGroup>
		</BlockControls>
	);
}

export default Toolbar;
