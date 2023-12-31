;(function($) {
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ProgreesBar.default',

            function (scope) {
                scope.find('.progress').each(function () {
                    var element = $(this)[0];
                    var bar_color = $(this).data('bar_color');
                    var bar_fill = $(this).data('bar_fill') /100;
                    var bar_height = $(this).data('bar_height');

                    var bar = new ProgressBar.Line(element, {
                            strokeWidth: 4,
                            easing: 'easeInOut',
                            duration: 1400,
                            color: bar_color,
                            trailColor: '#eee',
                            trailWidth: 1,
                            svgStyle: { width: '100%', height: bar_height },
                            text: {
                                style: {
                                    // Text color.
                                    // Default: same as stroke color (options.color)
                                    color: '#999',
                                    position: 'absolute',
                                    right: '0',
                                    top: '0px',
                                    padding: 0,
                                    margin: 0,
                                    transform: null
                                },
                                autoStyleContainer: false
                            },
                            step: (state, bar) => {
                                bar.setText(Math.round(bar.value() * 100) + ' %');
                            },
                        });
                    bar.animate(bar_fill); // 0.0 1.0
                });

            });
    });
})(jQuery);