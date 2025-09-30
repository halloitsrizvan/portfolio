$(document).ready(function() {
    $('.view-more-btn').click(function(e) {
        e.preventDefault();
        const post = $(this).closest('.blog_details');
        const preview = post.find('.article-preview');
        const full = post.find('.article-full');
        
        if (preview.is(':visible')) {
            preview.hide();
            full.show();
            $(this).find('span').text('View Less');
        } else {
            preview.show();
            full.hide();
            $(this).find('span').text('View More');
        }
    });
});