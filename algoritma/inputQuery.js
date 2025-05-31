function countQuery(input, query) {
  const freqMap = {};
  input.forEach(word => {
    freqMap[word] = (freqMap[word] || 0) + 1;
  });

  return query.map(q => freqMap[q] || 0);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(countQuery(INPUT, QUERY)); 
