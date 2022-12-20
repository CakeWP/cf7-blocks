/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ExternalLink } from '@wordpress/components';

function StayUpdated() {
	return (
		<div className="cf7blocks-welcome-guide-page">
			<h2>{ __( 'Stay Updated', 'cf7-blocks' ) }</h2>
			<ExternalLink
				href="https://cf7blocks.substack.com/
"
			>
				{ __( 'Subscribe Now', 'cf7-blocks' ) }
			</ExternalLink>
			<p>
				{ __(
					'There is a lot more to come. Stay up to date on the latest updates, tips, and tricks by subscribing. We promise not to spam.',
					'cf7-blocks'
				) }
			</p>
		</div>
	);
}

export default StayUpdated;
