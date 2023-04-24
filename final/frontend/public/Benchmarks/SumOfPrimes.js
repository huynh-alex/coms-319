onmessage = function (e) {
  const millis = Date.now();

  let sum = 0;
  let numPrimes = 0;
  let currentPrime = 2;
  // let maxPrimes = 100000;
  let maxPrimes = 10000;

  while (numPrimes < maxPrimes) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(currentPrime); i++) {
      if (currentPrime % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += currentPrime;
      numPrimes++;
    }

    currentPrime++;
  }

  postMessage(Date.now() - millis);
};
