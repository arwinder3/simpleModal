var simpleModal = (function($) {

    var templates = {
        modal: '<div class="modal-overlay" style="display: none;"><div class="modal-wrapper"><div class="modal"><div class="modal-header"></div><div class="modal-content"></div><div class="modal-footer"></div></div></div></div>'
    };

    var simpleModal = function(options) {
        var settings = $.extend({
            title: '',
            content: '',
            buttonConfig: 'OK',
            modalContainer: 'body'
        }, options);

        this.$modal = _createModal.call(this);

        this.show = function() {
            if (this.$modal.css('display') === 'none') {
                this.$modal.fadeIn();
            }
        };

        this.hide = function() {
            this.$modal.fadeOut();
        };

        function _createModal() {
            var $modal = $(templates.modal);

            $modal.find('.modal-header').text(settings.title);
            $modal.find('.modal-content').text(settings.content);
            $modal.find('.modal-footer').append(_createModalFooter.call(this, settings.buttonConfig));

            $(settings.modalContainer).append($modal);

            return $modal;
        }

        function _createModalFooter(buttons) {
            var $buttonContainer = $('<div/>').addClass('group').css('width', '100%'),
            self = this;

            buttons.split(',').forEach(function(buttonText) {
                var $button = $('<button/>').addClass('modal-button').text(buttonText);
                $button.on('click', function() {
                    settings[buttonText.toLowerCase()](self);
                });
                $buttonContainer.append($button);
            });

            return $buttonContainer;
        }
    };

    return simpleModal;
})(jQuery);
