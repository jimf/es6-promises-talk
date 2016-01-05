'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var $ = require('jquery');
var DummyComponent = require('../../lib/dummy_component');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

describe('Dummy component', function() {
    var subject;

    beforeEach(function() {
        subject = new DummyComponent($);
    });

    describe('#model.getRandomUser', function() {
        var result;

        beforeEach(function() {
            this.xhr = sinon.useFakeXMLHttpRequest();
            var requests = this.requests = [];
            this.xhr.onCreate = function(xhr) {
                requests.push(xhr);
            };
        });

        afterEach(function() {
            this.xhr.restore();
        });

        describe('when a successful request is made', function() {

            it('should return resolved promise', function() {
                result = subject.model.getRandomUser();
                this.requests[0].respond(200, {
                    'Content-Type': 'application/json'
                }, JSON.stringify({ name: 'Jim' }));

                return expect(result).to.eventually.deep.equal({
                    name: 'Jim'
                });
            });
        });

        describe('when an unsuccessful request is made', function() {

            it('should return rejected promise', function() {
                result = subject.model.getRandomUser();
                this.requests[0].respond(503);
                return expect(result).to.be.rejectedWith(Object);
            });
        });
    });

    describe('#onRandomUserClick', function() {

        beforeEach(function() {
            sinon.stub(subject.model, 'getRandomUser');
        });

        describe('when getting user succeeds', function() {

            beforeEach(function() {
                subject.model.getRandomUser.returns(
                    Promise.resolve({ name: 'Jim' })
                );
                sinon.stub(subject, 'setState');
                return subject.onRandomUserClick();
            });

            it('should update state', function() {
                expect(subject.setState).calledWith({ name: 'Jim' });
            });
        });

        describe('when getting user fails', function() {

            beforeEach(function() {
                subject.model.getRandomUser.returns(
                    Promise.reject({ status: 503 })
                );
                sinon.stub(subject, 'showError');
                return subject.onRandomUserClick();
            });

            it('should show an error', function() {
                expect(subject.showError).called;
            });
        });
    });
});
