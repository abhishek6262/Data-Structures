function checkvalue(n) {
  return 2 ** (Math.log2(n) - 1);
}

console.log(checkvalue(1024));
