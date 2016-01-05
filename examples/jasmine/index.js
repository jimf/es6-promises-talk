'use strict';

var $ = require('jquery');
var DummyComponent = require('../../lib/dummy_component');

describe('Dummy component', function() {
    var subject;

    beforeEach(function() {
        subject = new DummyComponent($);
    });

    describe('#model.getRandomUser', function() {

        beforeEach(function() {
            jasmine.Ajax.install();
        });

        afterEach(function() {
            jasmine.Ajax.uninstall();
        });

        describe('when a successful request is made', function() {

            beforeEach(function() {
                jasmine.Ajax.stubRequest('https://randomuser.me/api/')
                    .andReturn({
                        responseText: JSON.stringify({ randomUserData: true })
                    });
            });

            it('should return resolved promise', function(done) {
                subject.model.getRandomUser()
                    .then(function(data) {
                        expect(data).toEqual({ randomUserData: true });
                        done();
                    })
                    .catch(done.fail);
            });
        });

        describe('when an unsuccessful request is made', function() {

            beforeEach(function() {
                jasmine.Ajax.stubRequest('https://randomuser.me/api/')
                    .andReturn({
                        status: 503
                    });
            });

            it('should return rejected promise', function(done) {
                subject.model.getRandomUser()
                    .then(done.fail)
                    .catch(function(err) {
                        expect(err.status).toBe(503);
                        done();
                    });
            });
        });
    });

    describe('#onRandomUserClick', function() {

        describe('when getting user succeeds', function() {

            beforeEach(function(done) {
                spyOn(subject.model, 'getRandomUser').and.returnValue(
                    Promise.resolve({ name: 'Jim' })
                );
                spyOn(subject, 'renderUser');
                subject.onRandomUserClick().then(done);
            });

            it('should render user', function() {
                expect(subject.renderUser).toHaveBeenCalledWith({
                    name: 'Jim'
                });
            });
        });

        describe('when getting user fails', function() {

            beforeEach(function(done) {
                spyOn(subject.model, 'getRandomUser').and.returnValue(
                    Promise.reject({ status: 503 })
                );
                spyOn(subject, 'showError');
                subject.onRandomUserClick().then(done);
            });

            it('should show an error', function() {
                expect(subject.showError).toHaveBeenCalled();
            });
        });
    });
});
