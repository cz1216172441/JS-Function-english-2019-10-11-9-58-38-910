function countWords(message){
  let count = 0;
  if (message && typeof(message) === 'string') {
    let arr = message.trim().split(' ');
    arr.forEach(elem => {
      if (elem.trim() !== '') {
        ++count;
      }
    })
  }
  return count;
}
countWords('Good morning, I love JavaScript.'); // should return 5