// Calculates 50,000 digits of pi

onmessage = function (e) {
  let i = 1n;
  let x = 3n * (10n ** 50020n);
  let pi = x;
  while (x > 0) {
          x = x * i / ((i + 1n) * 4n);
          pi += x / (i + 2n);
          i += 2n;
  }
  const message = pi / (10n ** 20n);
  portMessage(message);
};
