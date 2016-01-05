'use strict';

module.exports = function($) {
    return {
        model: {
            getRandomUser: function() {
                return new Promise(function(resolve, reject) {
                    $.ajax({
                        url: 'https://randomuser.me/api/',
                        dataType: 'json',
                        success: resolve,
                        error: reject
                    });
                });
            }
        },
        renderUser: function() {
            // Not implemented. Assume this method takes data for a user and
            // renders that data in some way to the DOM.
        },
        showError: function() {
            // Not implemented. Assume this shows a useful error message to the
            // user.
        },
        onRandomUserClick: function() {
            return this.model.getRandomUser()
                .then(this.renderUser)
                .catch(this.showError);
        }
    };
};
