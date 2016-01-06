# ES6 Promises Talk

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

## License

MIT

[BucksCoJS]: http://www.meetup.com/Bucks-Co-Js/events/227589650/
[promise-spec]: https://promisesaplus.com/
[jasmine]: https://github.com/jasmine/jasmine
[mocha]: https://github.com/mochajs/mocha
[tape]: https://github.com/substack/tape
