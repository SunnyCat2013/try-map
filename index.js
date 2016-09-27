function* jsRocksIsAwesome() {
  yield "JS Rocks is Awesome";
  yield "JS Rocks says JavaScript Rocks";
  return "because JavaScript really rocks";
}

let jsRocks = jsRocksIsAwesome();

console.log(jsRocks.next());
console.log(jsRocks.next());
console.log(jsRocks.next());
console.log([1, 2, 3].map(n => n + 1));

let a = 1;
console.log('a: ', a);
