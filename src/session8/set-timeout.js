function message(text) {
  console.log(text);
}

setTimeout(() => {
  message('world');
}, 1); // 1 milli second delay

console.log('hello');
