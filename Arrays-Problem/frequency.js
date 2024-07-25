// find the frequency and index of numbers in an array(if 5 appear 3 times list the indices)

const findFrequencyAndIndices = (arr) => {
    const frequency = {};
    const indices = {};
  
    arr.forEach((num, index) => {
      if (!frequency[num]) {
        frequency[num] = 0;
        indices[num] = [];
      }
      frequency[num]++;
      indices[num].push(index);
    });
  
    return { frequency, indices };
  };
  
  const arr = [5, 2, 3, 5, 5, 2, 1, 5];
  const result = findFrequencyAndIndices(arr);
  
  console.log('Frequency:', result.frequency);
  console.log('Indices:', result.indices);