onmessage = function (e) {
  const millis = Date.now();

  let arr = [];
  // let size = 100000000;
  let size =  1000000;
  for (let i = size; i > 0; i--) {
    arr.push(i);
  }

  arr.sort((a, b) => a - b);

  // postMessage(message);
  postMessage(Date.now() - millis);
};
