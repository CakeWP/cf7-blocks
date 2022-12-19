const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );

const path = require( 'path' );
const CssoWebpackPlugin = require( 'csso-webpack-plugin' ).default;
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );

const camelCaseDash = ( string ) =>
	string.replace( /-([a-z])/g, ( _match, letter ) => letter.toUpperCase() );

const externals = [
	'api-fetch',
	'block-editor',
	'blocks',
	'components',
	'compose',
	'data',
	'date',
	'htmlEntities',
	'hooks',
	'edit-post',
	'element',
	'editor',
	'i18n',
	'plugins',
	'viewport',
	'ajax',
	'codeEditor',
	'rich-text',
	'primitives',
];

const globals = externals.reduce(
	( external, name ) => ( {
		...external,
		[ `@wordpress/${ name }` ]: `wp.${ camelCaseDash( name ) }`,
	} ),
	{}
);

const config = {
	...defaultConfig,
	entry: {
		gutenberg: './packages/gutenberg/src/index.js',
		'gutenberg-styling': './packages/gutenberg/src/style.scss',

		'blocks-library': './packages/blocks-library/src/index.js',
		'blocks-library-editor-style':
			'./packages/blocks-library/src/editor.scss',
		'blocks-library-frontend-style':
			'./packages/blocks-library/src/style.scss',

		'cf7-blocks-integrate': './packages/cf7-integrate/src/index.js',
		'cf7-blocks-integrate-style': './packages/cf7-integrate/src/style.scss',
	},
	output: {
		clean: false,
		path: path.join( __dirname, './dist' ),
	},
	plugins: [
		...defaultConfig.plugins,

		new MiniCssExtractPlugin( {
			filename: ( pathData ) => {
				const filename = pathData.chunk.name.replace(
					/(style-|-style)/g,
					''
				);

				return `${ filename }.css`;
			},
		} ),

		// new FixStyleOnlyEntriesPlugin(),

		// TODO: can we implement a better logic, other than surpressing the build chunks?
		new IgnoreEmitPlugin( /(-style)/i ),
	],
	externals: {
		wp: 'wp',
		lodash: 'lodash',
		react: 'React',
		'react-dom': 'ReactDOM',
		...globals,
	},
};

module.exports = config;
