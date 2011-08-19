json2yaml
=========
Converts json or simple javascript objects into a yaml format.

Installation
------------

Include json2yaml.js (in src directory) via script tag and then run:

    var obj  = { hello: 'world', hello2: [ 'hello', 'world' ] };
    var yaml = json2yaml(obj);
    console.log(yaml);

This outputs

    hello: world
    hello2:
      - hello
      - world
