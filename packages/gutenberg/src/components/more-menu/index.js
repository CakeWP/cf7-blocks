/**
 * WordPress Components
 */
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { MenuGroup, MenuItem, Icon } from '@wordpress/components';
import { help, external, starEmpty, bug, sparkles } from '@wordpress/icons';

/**
 * Custom Dependencies
 */
import { coffee } from '../../icons';

function MoreMenu() {
	const { toggleFeature } = useDispatch( 'core/interface' );

	return (
		<MenuGroup label={ __( 'Support', 'cf7-blocks' ) }>
			<MenuItem
				icon={ help }
				onClick={ () => toggleFeature( 'cf7BlocksWelcomeGuide' ) }
			>
				{ __( 'Show Guide', 'cf7-blocks' ) }
			</MenuItem>

			<MenuItem icon={ starEmpty }>
				{ __( 'Submit a Review', 'cf7-blocks' ) }
			</MenuItem>
			<MenuItem icon={ bug }>
				{ __( 'Report a bug', 'cf7-blocks' ) }
			</MenuItem>
			<MenuItem
				target="__blank"
				icon={ external }
				href="https://cf7blocks.com/"
			>
				{ __( 'Visit Website', 'cf7-blocks' ) }
			</MenuItem>
			<MenuItem
				icon={ coffee }
				target="__blank"
				iconSize={ 18 }
				style={ {
					backgroundColor: 'rgb(254 221 3 / 38%)',
				} }
				href="https://www.buymeacoffee.com/munirkamal"
			>
				{ __( 'Buy me a Coffee', 'cf7-blocks' ) }
			</MenuItem>
		</MenuGroup>
	);
}

export default MoreMenu;
