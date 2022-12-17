<?php
/**
 * Bootstraps the plugin.
 *
 * @package CF7Blocks
 */

// Core.

new \CakeWP\CF7Blocks\Assets();
new \CakeWP\CF7Blocks\Shortcode();
new \CakeWP\CF7Blocks\Core\Builder();

// Handlers.

new \CakeWP\CF7Blocks\Handlers\ContactForm7();
