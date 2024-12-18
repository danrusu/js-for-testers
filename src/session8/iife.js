// IIFE (module pattern)
const obj = (() => {
  var name = 'John';

  function message() {
    console.log(name); // function closes over name (closure)
  }

  return { message };
})();

obj.message();
