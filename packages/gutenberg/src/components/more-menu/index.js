/**
 * WordPress Components
 */
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { MenuGroup, MenuItem } from '@wordpress/components';
import { help, external, starEmpty, sparkles, info } from '@wordpress/icons';

/**
 * Custom Dependencies
 */
import { coffee, github } from '../../icons';

function MoreMenu( props ) {
	const { toggleFeature } = useDispatch( 'core/interface' );

	return (
		<MenuGroup label={ __( 'Support', 'cf7-blocks' ) }>
			<MenuItem
				icon={ help }
				onClick={ () => toggleFeature( 'cf7BlocksWelcomeGuide' ) }
			>
				{ __( 'Show Guide', 'cf7-blocks' ) }
			</MenuItem>

			<MenuItem
				iconSize={ 25 }
				target="__blank"
				icon={ sparkles }
				href="https://wordpress.org/support/plugin/cf7-blocks/reviews/#new-post"
			>
				{ __( 'Submit a Review', 'cf7-blocks' ) }
			</MenuItem>

			<MenuItem
				icon={ info }
				iconSize={ 25 }
				target="__blank"
				href="https://wordpress.org/support/plugin/cf7-blocks/"
			>
				{ __( 'Report a bug', 'cf7-blocks' ) }
			</MenuItem>
			<MenuItem
				icon={ github }
				iconSize={ 25 }
				target="__blank"
				href="https://github.com/CakeWP/cf7-blocks"
			>
				{ __( 'Contribute', 'cf7-blocks' ) }
			</MenuItem>
			<MenuItem
				target="__blank"
				icon={ external }
				href="https://cf7blocks.com/"
			>
				{ __( 'Visit Website', 'cf7-blocks' ) }
			</MenuItem>

			<hr />

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
