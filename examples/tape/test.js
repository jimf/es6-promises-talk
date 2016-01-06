'use strict';

var test = require('tape');
var DummyComponent = require('../../lib/dummy_component');

function mock$(options) {
    return {
        ajax: function(opts) {
            if (options.assertAjaxOptions) {
                options.assertAjaxOptions(opts);
            }
            return opts[(options.success ? 'success' : 'error')](
                options.respondWith
            );
        }
    };
}

test('DummyComponent#model.onRandomUserClick', function(t) {
    var subject;

    t.plan(6);

    subject = new DummyComponent(mock$({
        assertAjaxOptions: function(ajaxOptions) {
            t.equal(ajaxOptions.url, 'https://randomuser.me/api/',
                    'ajax request has expected url');
            t.equal(ajaxOptions.dataType, 'json',
                    'ajax request has expected dataType');
        },
        success: true,
        respondWith: { name: 'Jim' }
    }));

    subject.model.getRandomUser()
        .then(function(user) { t.deepEqual(user, { name: 'Jim' }); })
        .catch(function()    { t.fail('should resolve'); });

    subject = new DummyComponent(mock$({
        assertAjaxOptions: function(ajaxOptions) {
            t.equal(ajaxOptions.url, 'https://randomuser.me/api/',
                    'ajax request has expected url');
            t.equal(ajaxOptions.dataType, 'json',
                    'ajax request has expected dataType');
        },
        success: false,
        respondWith: { status: 503 }
    }));

    subject.model.getRandomUser()
        .then(function()     { t.fail('should reject'); })
        .catch(function(err) { t.deepEqual(err, { status: 503 }); });
});

test('DummyComponent#onRandomUserClick', function(t) {
    t.plan(2);

    var subjectSuccess = new DummyComponent(mock$({
        success: true,
        respondWith: { name: 'Jim' }
    }));

    var subjectFail = new DummyComponent(mock$({
        success: false,
        respondWith: { status: 503 }
    }));

    subjectSuccess.onRandomUserClick()
        .then(function() {
            t.deepEqual(subjectSuccess.getState(), { name: 'Jim' },
                        'should update state on success');
        })
        .catch(function() { t.fail('should resolve'); });

    subjectFail.onRandomUserClick()
        .then(function() {
            t.deepEqual(subjectFail.getState(), { showError: true },
                        'should be in error state on failure');
        })
        .catch(function() { t.fail('should resolve'); });
});
