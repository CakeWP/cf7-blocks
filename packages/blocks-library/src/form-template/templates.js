/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { addCard } from '@wordpress/icons';

/**
 * Custom Dependencies
 */
import { calender, bell, addUser, feedback, appointment } from '../icons';

function makeColumns( blocks ) {
	const columns = [];

	blocks.forEach( ( block ) => {
		columns.push( [ 'core/column', {}, [ block ] ] );
	} );

	return [ 'core/columns', {}, columns ];
}

const templates = [
	{
		icon: addCard,
		label: __( 'Basic Contact Form', 'cf7-blocks' ),
		help: __( 'Create a basic contact form on your page.', 'cf7-blocks' ),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						id: 'name',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						id: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),
			[
				'cf7-blocks/input-base',
				{
					type: 'textarea',
					id: 'message',
					initialValue: 'Enter your message (optional)',
					isRequired: false,
					label: 'Message',
					name: 'message',
					showLabel: true,
					tagName: 'textarea',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
	{
		icon: bell,
		label: __( 'Newsletter Form', 'cf7-blocks' ),
		help: __( 'Creates a basic newsletter form.', 'cf7-blocks' ),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						id: 'name',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'your-name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						id: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'your-email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),

			[
				'core/paragraph',
				{
					content: __(
						'You will recieve email updates by subscribing to this newsletter.',
						'cf7-blocks'
					),
				},
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
	{
		icon: calender,
		label: __( 'RSVP', 'cf7-blocks' ),
		help: __(
			'Create a basic RSVP form on your page for invitation purpose',
			'cf7-blocks'
		),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'your-name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'your-email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),

			[
				'cf7-blocks/selection-base',
				{
					type: 'radio',
					mainLabel: 'Are you coming?',
					isRequired: true,
					showLabel: true,
					name: 'are-you-coming',
					requiredText: '*',
					items: [
						{
							label: 'Yes',
							checked: true,
						},
						{
							label: 'No',
							checked: false,
						},
					],
				},
				[],
			],
			[
				'cf7-blocks/input-base',
				{
					type: 'textarea',
					initialValue: 'Add some details (optional)',
					isRequired: false,
					label: 'Other Details',
					name: 'other-details',
					showLabel: true,
					tagName: 'textarea',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
	{
		icon: appointment,
		label: __( 'Appointment Form', 'cf7-blocks' ),
		help: __(
			'Create a basic appointment form on your page',
			'cf7-blocks'
		),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'appointment-name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'appointment-email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),

			[
				'cf7-blocks/input-base',
				{
					type: 'tel',
					initialValue: 'Enter your number',
					isRequired: true,
					label: 'Phone',
					name: 'appointment-phone',
					requiredText: '*',
					showLabel: true,
					tagName: 'input',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[
				'cf7-blocks/input-base',
				{
					type: 'date',
					initialValue: 'Enter appointment date',
					isRequired: true,
					label: 'Date',
					name: 'appointment-date',
					requiredText: '*',
					showLabel: true,
					tagName: 'input',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[
				'cf7-blocks/input-base',
				{
					type: 'textarea',
					initialValue: 'Add any additional notes (optional)',
					isRequired: false,
					label: 'Additional Notes',
					name: 'appointment-notes',
					showLabel: true,
					tagName: 'textarea',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
	{
		icon: feedback,
		label: __( 'Feedback Form', 'cf7-blocks' ),
		help: __(
			'Create a basic contact form on your page which is helpful to collect user feedback.',
			'cf7-blocks'
		),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'user-name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'user-email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),

			[
				'cf7-blocks/selection-base',
				{
					type: 'radio',
					mainLabel: 'Please rate our website?',
					isRequired: true,
					showLabel: true,
					name: 'user-rating',
					requiredText: '*',
					items: [
						{
							label: '1 - Very Bad',
							checked: false,
						},
						{
							label: '2 - Poor',
							checked: false,
						},
						{
							label: '3 - Average',
							checked: false,
						},
						{
							label: '4 - Good',
							checked: false,
						},
						{
							label: '5 - Excellent',
							checked: false,
						},
					],
				},
				[],
			],
			[
				'cf7-blocks/input-base',
				{
					type: 'textarea',
					initialValue: 'Add your suggestion (optional)',
					isRequired: false,
					label: 'Any Suggestion?',
					name: 'user-suggestion',
					showLabel: true,
					tagName: 'textarea',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
	{
		icon: addUser,
		label: __( 'Registeration Form', 'cf7-blocks' ),
		help: __(
			'Create a basic registeration form on your page',
			'cf7-blocks'
		),
		template: [
			makeColumns( [
				[
					'cf7-blocks/input-base',
					{
						type: 'text',
						initialValue: 'Enter your name',
						isRequired: true,
						label: 'Name',
						name: 'user-name',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
				[
					'cf7-blocks/input-base',
					{
						type: 'email',
						initialValue: 'Enter your email',
						isRequired: true,
						label: 'Email',
						name: 'user-email',
						requiredText: '*',
						showLabel: true,
						tagName: 'input',
						useDefaultValueAsPlaceholder: true,
					},
					[],
				],
			] ),

			[
				'cf7-blocks/selection-base',
				{
					type: 'select',
					mainLabel: 'How did you hear about us?',
					isRequired: true,
					showLabel: true,
					name: 'user-awareness-reason',
					requiredText: '*',
					items: [
						{
							label: 'Search Engine',
							checked: false,
						},
						{
							label: 'Social Media',
							checked: false,
						},
						{
							label: 'Television',
							checked: false,
						},
						{
							label: 'Radio',
							checked: false,
						},
						{
							label: 'Friend or Family',
							checked: false,
						},
					],
				},
				[],
			],
			[
				'cf7-blocks/input-base',
				{
					type: 'textarea',
					initialValue: 'Add some additional details (optional)',
					isRequired: false,
					label: 'Additional Details',
					name: 'user-additional-details',
					showLabel: true,
					tagName: 'textarea',
					useDefaultValueAsPlaceholder: true,
				},
				[],
			],
			[ 'cf7-blocks/submit', {}, [] ],
		],
	},
];

export default templates;
