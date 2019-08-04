const fn = n => (n > 1) ? n * fn(n - 1) : n

console.log(fn(5))