/**
 * WordPress Dependencies
 */
import { Guide } from '@wordpress/components';
import { withSelect, useDispatch } from '@wordpress/data';

/**
 * Custom Dependencies
 */
import {
	startQuickGuide,
	blockEditorLayout,
	modifyFields,
	stayUpdated,
} from '../../illustrations';

import StartQuickGuidePage from './pages/start-quick-guide';
import IntuitiveBlockEditorPage from './pages/intuitive-block-editor';
import ModifyFieldBlocksPage from './pages/modify-field-blocks';
import StayUpdatedPage from './pages/stay-updated';

function WelcomeGuide( props ) {
	const { toggleFeature } = useDispatch( 'core/interface' );

	return (
		props.isActive && (
			<Guide
				onFinish={ () => toggleFeature( 'cf7BlocksWelcomeGuide' ) }
				pages={ [
					{
						image: startQuickGuide,
						content: <StartQuickGuidePage />,
					},
					{
						image: blockEditorLayout,
						content: <IntuitiveBlockEditorPage />,
					},
					{
						image: modifyFields,
						content: <ModifyFieldBlocksPage />,
					},
					{
						image: stayUpdated,
						content: <StayUpdatedPage />,
					},
				] }
			/>
		)
	);
}

export default withSelect( ( select ) => {
	return {
		isActive: select( 'core/interface' ).isFeatureActive(
			'cf7BlocksWelcomeGuide'
		),
	};
} )( WelcomeGuide );
