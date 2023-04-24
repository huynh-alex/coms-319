onmessage = function (e) {
  const millis = Date.now();

  let arr = [];

  for (let i = 100000000; i > 0; i--) {
    arr.push(i);
  }

  arr.sort((a, b) => a - b);

  // postMessage(message);
  postMessage(Date.now() - millis);
};
