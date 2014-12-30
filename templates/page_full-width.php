<?php
/**
 *
 * Template name: Full width page
 * Description: For pages that span the full width of the browser. Use class "container" to contain content to a readable width.
 *
 * @package Hello
 */

get_header(); ?>

	<div id="primary" class="content-area full-width-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
