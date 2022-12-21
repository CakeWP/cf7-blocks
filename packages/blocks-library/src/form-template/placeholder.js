/**
 * WordPress Dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import {
	BlockIcon,
	useBlockProps,
	useBlockEditContext,
} from '@wordpress/block-editor';
import { Placeholder, Button, Icon } from '@wordpress/components';

/**
 * Custom Dependencies
 */
import templates from './templates';

function FormPlaceholder() {
	const { clientId } = useBlockEditContext();

	const blockProps = useBlockProps( {
		className: 'cf7blocks-form-template-block',
	} );

	const { insertBlocks, removeBlock } = useDispatch( 'core/block-editor' );
	const { createSuccessNotice } = useDispatch( 'core/notices' );

	const handleInsertion = ( template ) => {
		const blocks = wp.blocks.createBlocksFromInnerBlocksTemplate(
			template.template
		);

		insertBlocks( blocks );
		removeBlock( clientId );

		createSuccessNotice(
			sprintf(
				__( 'Form template "%s" inserted successfully.' ),
				template.label
			),
			{
				type: 'snackbar',
			}
		);
	};

	return (
		<div { ...blockProps }>
			<Placeholder
				label={ __( 'Select Form', 'cf7-blocks' ) }
				instructions={ __(
					'Quickly start creating forms with a pre-made form template',
					'cf7-blocks'
				) }
			>
				<div className="cf7blocks-form-template__grid">
					{ templates.map( ( template ) => {
						return (
							<div>
								<Button
									variant="secondary"
									label={ template.help }
									showTooltip
									className="cf7blocks-form-template"
									onClick={ () =>
										handleInsertion( template )
									}
								>
									<Icon icon={ template.icon } size={ 30 } />
									{ template.label }
								</Button>
							</div>
						);
					} ) }
				</div>
			</Placeholder>
		</div>
	);
}

export default FormPlaceholder;
