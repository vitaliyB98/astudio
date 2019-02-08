(function ($, Drupal) {
    Drupal.behaviors.pageContactsFormInputEffect = {
        attach: function () {
            // Focus for input
            let parent_input = $('.path-contacts').find('.block-webform #edit-wrapper').find('.form-item');
            parent_input.find('input').on('focus', function () {
                $(this).parent().addClass('active');
            });
            parent_input.find('input').blur(function () {
                if ($(this).val() !== "") {
                    $(this).parent().addClass('active')
                } else {
                    $(this).parent().removeClass('active')
                }
            });
            // Focus for textareaastu
            let parent_textarea = $('.path-contacts').find('.block-webform #edit-wrapper').find('.form-item');
            parent_textarea.find('textarea').on('focus', function () {
                $(this).parent().parent().addClass('active');
            });
            parent_textarea.find('textarea').blur(function () {
                if ($(this).val() !== "") {
                    $(this).parent().parent().addClass('active')
                } else {
                    $(this).parent().parent().removeClass('active')
                }
            })
        }
    }

})(jQuery, Drupal);

(function ($, Drupal) {
    Drupal.behaviors.blockHeaderMediaRequestSmall = {
        attach: function () {
            let body_weight = $('body').width();
            if (body_weight < 768) {
                $('header').find('.navbar-header button').on('click', function () {
                    console.log('123');
                    $(this).parent().toggleClass('active');
                })
                // $('.navbar-header').once().on('focus', function () {
                //     $(this).parent().addClass('active');
                // });
            }
        }
    }

})(jQuery, Drupal);