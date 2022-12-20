/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder, Button, Icon } from '@wordpress/components';
import { BlockIcon } from '@wordpress/block-editor';

import { addCard } from '@wordpress/icons';

/**
 * Custom Dependencies
 */
import { mail, calender, bell, addUser, feedback, cf7blocks } from '../icons';

function FormPlaceholder() {
	const blockProps = useBlockProps( {
		className: 'cf7blocks-form-template-block',
	} );

	return (
		<div { ...blockProps }>
			<Placeholder
				icon={ <BlockIcon icon={ cf7blocks } /> }
				label={ __( 'Select Form', 'cf7-blocks' ) }
				instructions={ __(
					'Quickly start creating forms with a pre-made form template',
					'cf7-blocks'
				) }
			>
				<div className="cf7blocks-form-template__grid">
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ addCard } size={ 30 } />
							{ __( 'Basic Contact Form', 'cf7-blocks' ) }
						</Button>
					</div>
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ mail } size={ 30 } />
							{ __( 'Newsletter Form', 'cf7-blocks' ) }
						</Button>
					</div>
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ calender } size={ 30 } />
							{ __( 'RSVP', 'cf7-blocks' ) }
						</Button>
					</div>
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ bell } size={ 30 } />
							{ __( 'Subscribe Form', 'cf7-blocks' ) }
						</Button>
					</div>
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ addUser } size={ 30 } />
							{ __( 'Appointment Form', 'cf7-blocks' ) }
						</Button>
					</div>
					<div>
						<Button
							variant="secondary"
							className="cf7blocks-form-template"
						>
							<Icon icon={ feedback } size={ 30 } />
							{ __( 'Feedback Form', 'cf7-blocks' ) }
						</Button>
					</div>
				</div>
			</Placeholder>
		</div>
	);
}

export default FormPlaceholder;
