// Calculates digits of pi

onmessage = function (e) {
  const millis = Date.now();

  const million = 1000000;
  const unsortedArray = new Array();
  let messageToPost = "";

  for(let i = 0; i < million; i++){

    unsortedArray.push(Math.floor(Math.random() * 10));
    messageToPost += unsortedArray[i];
  }

  for (let i = 0; i < unsortedArray.length; i++) {
  
    // Last i elements are already in place  
    for (let j = 0; j < (million); j++) {

        // Checking if the item at present iteration 
        // is greater than the next iteration
        // if (unsortedArray[j] > unsortedArray[j + 1]) {

        //     // If the condition is true
        //     // then swap them
        //     var temp = unsortedArray[j]
        //     unsortedArray[j] = unsortedArray[j + 1]
        //     unsortedArray[j + 1] = temp
        // }
    }
    messageToPost += unsortedArray[i];
}
  postMessage(messageToPost);
  postMessage(Date.now() - millis);
};
