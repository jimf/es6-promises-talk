'use strict';

/**
 * DummyComponent
 *
 * A fake component for demonstration purposes. This is intended to be
 * framework agnostic, but should resemble the likes of a Backbone view or
 * React component, albeit mostly non-functional.
 */
module.exports = function($) {
    var component = {
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
        getState: function() {
            return this.state;
        },
        setState: function(state) {
            this.state = state;
        },
        showError: function() {
            this.setState({ showError: true });
        },
        onRandomUserClick: function() {
            return this.model.getRandomUser()
                .then(this.setState)
                .catch(this.showError);
        }
    };

    component.setState = component.setState.bind(component);
    component.showError = component.showError.bind(component);

    return component;
};
