const compose = require('./composer');

test('composer test', () => {
    var p1Method=function(p1){return p1}
    var p2Method=function(p2){return p2}

    expect(compose(p1Method, p2Method)("app")).toBe("app");
});