import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

/**
 * Generates a new field name based on the given type.
 *
 * @param {string} label - Label to process.
 * @param {boolean} isRequired - Is the label required.
 */
export default function processInputLabel( label, isRequired ) {
	let finalLabel = label;

	if ( isRequired ) {
		const escapedLabel = stripHTML( label );

		finalLabel = finalLabel.replace( escapedLabel, escapedLabel + '*' );
	}

	return finalLabel;
}
