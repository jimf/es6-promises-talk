# ES6 Promise Examples - Unit Testing with Mocha

Example code that tests our DummyComponent module with [Mocha][mocha] +
[Chai][chai] via [Karma][karma], utilizing [Sinon.JS][sinon] to stub out
`XMLHttpRequest` and component methods for isolating units of work. This
example showcases how Mocha provides built-in promise support by allowing
`it` blocks to return promises. [chai-as-promised][chai-as-promised] is
included as well for some additional sugar.

## Try it out

    $ npm install
    $ npm test

## License

MIT

[mocha]: https://github.com/mochajs/mocha
[chai]: https://github.com/chaijs/chai
[karma]: https://github.com/karma-runner/karma
[sinon]: https://github.com/sinonjs/sinon
[chai-as-promised]: https://github.com/domenic/chai-as-promised/
