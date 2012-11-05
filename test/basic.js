// to be run using nodejs
var json2yaml = require('../src/json2yaml').json2yaml;
function test(obj) {
  console.log('TESTING:');
  console.log(obj);
  console.log('OUTPUT:');
  console.log(json2yaml(obj));
  console.log('------------------------');
}

test([ 'hello', 'world' ]);
test({ hello: 'world' });
test({ hello: 'world', hello2: 'world2' });
test({ hello: 'world', hello2: [ 'hello', 'world' ] });
test({ hello: 'world', hello2: [ 'hello', 'world' ] });
test([ 'hello', { hello: 'world', hello2: [ 'hello', 'world' ] }, 'world' ]);
test([ 'hello', { hello: 'world', hello2: [ 'hello', 'world', { hello3: 'world3' } ] }, 'world' ]);
test({ hello: 1 });
test({ hello: true });
test({ hello: '你好， 世界！'});
test({ hello: '#你好， 世界！'});
test({ hello: '\\你好， 世界！'});
test({ hello: '"你好， 世界！'});
test({ hello: '%你好， 世界！'});