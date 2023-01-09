/**
 * Generates a new field name based on the given type.
 *
 * @param {string} label - Label to process.
 * @param {boolean} isRequired - Is the label required.
 */
export default function processInputLabel( label, isRequired ) {
	return label + ( isRequired ? '*' : '' );
}
