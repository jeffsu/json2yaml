(function () { 
  function convert(obj, ret, indent) {
    var ret = [];
    var type = typeof obj; 

  }
  
  return function(obj) {
    var ret = [];
    convert(obj, ret, 0);
    return ret.join("\n");
  };
})();
