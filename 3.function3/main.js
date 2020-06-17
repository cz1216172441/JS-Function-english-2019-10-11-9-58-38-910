function alphabetSort(message){
  if (message && typeof(message) === 'string') {
    let arr = [], res = '';
    for (let i = 0; i < message.length; i++) {
      arr.push(message[i]);
    }
    arr.sort();
    arr.forEach(elem => res += elem);
    return res;
  }
}
alphabetSort('hello'); // should return 'ehllo'