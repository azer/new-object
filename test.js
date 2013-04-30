var newObject = require('./');

it('creates a new object', function(){

  var obj = newObject();
  obj('foo', 3.14);
  obj('bar', 156);

  expect(obj('foo')).to.equal(3.14);
  expect(obj('bar')).to.equal(156);

});

it('may take initial content', function(){

  var obj = newObject({ a: 1, b: 2 });

  expect(obj('a')).to.equal(1);
  expect(obj('b')).to.equal(2);

});

it('publishes changes', function(){

  var obj = newObject({ foo: 123, corge: 101 });
  obj('bar', 456);
  obj.rm('corge');
  obj('qux', 789);
  obj('quux', 112);
  obj.rm('qux');

  obj.subscribe(function(update){
    expect(update.set).to.deep.equal({ bar: 456, quux: 112 });
    expect(update.rm).to.deep.equal(['corge']);
  });

});
