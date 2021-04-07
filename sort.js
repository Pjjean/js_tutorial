a = [8, 17, 42, 99];
a.sort(function(a, b) { return a - b; });
// returns [8,17,42,99]

a.forEach(function(item) {
  console.log(item)
});
