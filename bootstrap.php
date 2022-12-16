<?php
/**
 * Bootstraps the plugin.
 *
 * @package CF7Blocks
 */

// Core.

new \CakeWP\CF7Blocks\Assets();
new \CakeWP\CF7Blocks\Shortcode();

// Handlers.

new \CakeWP\CF7Blocks\Handlers\ContactForm7();
