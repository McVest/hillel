/*
Переписати використовуючи switch case

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}
* */

let numOrStr = prompt('Введіть число або рядок');
console.log(numOrStr);

if (numOrStr === null) {
  console.log('Ви скасували.');
} else {
  switch (true) {
    case numOrStr.trim() === '':
      console.log('Порожній рядок.');
      break;
    case isNaN(+numOrStr):
      console.log('Введене значення не є числом.');
      break;
    default:
      console.log('OK!');
  }
}

