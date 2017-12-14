(function () {
  function sub(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError("Sub requires numbers");
    }
    return x - y;
  }

  exports.sub = sub;

})();