function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return `${longestWord} : ${longestWord.length} character`;
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
