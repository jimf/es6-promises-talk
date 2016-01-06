# ES6 Promises Talk

[Slides][slides]

In this repo you'll find the unit testing code examples used within my
[Bucks County JS][BucksCoJS] meetup talk on [ES6 promises][promise-spec].
The code is divided into two sections. `lib` contains a single `DummyComponent`
module. This module is what is under test, and is intended to be a placeholder
for a real, mostly framework agnostic "view" class. `DummyComponent` doesn't
really function in any practical sense, but one can imagine that it is a
subset of some view that fetches user data on button click and updates the UI
in some meaningful way.

The meat of this repo exists under the `examples` directory. Here I've provided
examples using three different TDD stacks: [jasmine][jasmine], [mocha][mocha]
and [tape][tape].

To get started with this repo, navigate to any of the example directories and
follow the directions specified in the respective README.

## Related Links

### Info

- [MDN Promise Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [callbackhell.com](http://callbackhell.com/)
- [ECMAScript 6 promises (2/2): the API](http://www.2ality.com/2014/10/es6-promises-api.html) (very thorough read)
- [Introduction to ES6 Promises – The Four Functions You Need To Avoid Callback Hell](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)
- [You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/)
- [We have a problem with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [General Promise Resources](https://github.com/kriskowal/q/wiki/General-Promise-Resources)
- [Working with JavaScript promises: practices and mistakes](https://codesi.nz/working-with-javascript-promises/)
- [Embracing Promises in JavaScript](http://javascriptplayground.com/blog/2015/02/promises/)

### Libraries

- [RSVP.js](https://github.com/tildeio/rsvp.js/) offers a superset of the ES6 Promises API
- [es6-promise](https://github.com/jakearchibald/es6-promise), a subset of RSVP, implements just the ES6 API
- [native-promises-only](https://github.com/getify/native-promise-only) (NPO) is an ES6 Promise polyfill
- [lie](https://github.com/calvinmetcalf/lie) is a small, performant, promise library implementing the [Promises/A+ spec Version 1.1][promise-spec]
- [Q.Promise](https://github.com/kriskowal/q#using-qpromise) is an ES6 Promise implementation
- [es6-shim](https://github.com/paulmillr/es6-shim), as the name implies, is a full ES6 shim which includes Promise
- [core-js](https://github.com/zloirock/core-js) includes lots of JavaScript polyfills, including Promise. This is used by babel-polyfill

## License

MIT

[BucksCoJS]: http://www.meetup.com/Bucks-Co-Js/events/227589650/
[promise-spec]: https://promisesaplus.com/
[jasmine]: https://github.com/jasmine/jasmine
[mocha]: https://github.com/mochajs/mocha
[tape]: https://github.com/substack/tape
[slides]: https://speakerdeck.com/jimf/a-look-at-es6-promises
