function reverseString(message){
  if (message && typeof(message) === 'string') {
    let res = '';
    for (let i = message.length - 1; i >= 0; i--) {
      res += message[i]
    }
    return res;
  }
}

reverseString('hello');
