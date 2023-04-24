onmessage = function (e) {
  const millis = Date.now();
  let size = 512;

  let a = new Array(size).fill().map(() => new Array(size).fill());

  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++) a[i][j] = 3.14159265359;

  let b = new Array(size).fill().map(() => new Array(size).fill());
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++) b[i][j] = 2.71828182846;

  let c = new Array(size).fill().map(() => new Array(size).fill());
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      for (let k = 0; k < size; k++) c[i][j] += a[i][k] * b[k][j];

  postMessage(Date.now() - millis);
};
