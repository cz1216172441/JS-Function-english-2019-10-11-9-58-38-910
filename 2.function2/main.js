function palindrome(message){
  if (message && typeof(message) === 'string') {
    let res = '';
    for (let i = message.length - 1; i >= 0; i--) {
      res += message[i];
    }
    if (res === message) {
      return true;
    }
  }
  return false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
