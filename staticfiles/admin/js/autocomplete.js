'use strict';
{
    const $ = django.jQuery;
<<<<<<< HEAD

    $.fn.djangoAdminSelect2 = function() {
        $.each(this, function(i, element) {
            $(element).select2({
                ajax: {
                    data: (params) => {
                        return {
                            term: params.term,
                            page: params.page,
                            app_label: element.dataset.appLabel,
                            model_name: element.dataset.modelName,
                            field_name: element.dataset.fieldName
                        };
                    }
                }
            });
=======
    const init = function($element, options) {
        const settings = $.extend({
            ajax: {
                data: function(params) {
                    return {
                        term: params.term,
                        page: params.page
                    };
                }
            }
        }, options);
        $element.select2(settings);
    };

    $.fn.djangoAdminSelect2 = function(options) {
        const settings = $.extend({}, options);
        $.each(this, function(i, element) {
            const $element = $(element);
            init($element, settings);
>>>>>>> 1c18e0e49f77a80d73ea45ef5644f6102c0a78ee
        });
        return this;
    };

    $(function() {
        // Initialize all autocomplete widgets except the one in the template
        // form used when a new formset is added.
        $('.admin-autocomplete').not('[name*=__prefix__]').djangoAdminSelect2();
    });

    $(document).on('formset:added', (function() {
        return function(event, $newFormset) {
            return $newFormset.find('.admin-autocomplete').djangoAdminSelect2();
        };
    })(this));
}
