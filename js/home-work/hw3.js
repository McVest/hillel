/*
ДЗ 3. Array

Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
* */
// let length = prompt("Введіть довжину масиву:");
//
// let array = [];
//
// for (let i = 0; i < length; i++) {
//   let element = prompt("Введіть елемент масиву №" + (i + 1) + ":");
//   array.push(element);
// }
//
// function printArray(array) {
//   console.log("Масив: " + array.join(", "));
//   array.sort(function(a, b) {
//     return a - b;
//   });
//   console.log("Sort: " + array.join(", "));
//   array.splice(1, 4);
//   console.log("Splice: " + array.join(", "));
// }
//
// printArray(array);
/*
ДЗ 4. Поиск в массиве

Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
+ Знайти суму та кількість позитивних елементів.
+ Знайти мінімальний елемент масиву та його порядковий номер.
+ Знайти максимальний елемент масиву та його порядковий номер.
+ Визначити кількість негативних елементів.
+ Знайти кількість непарних позитивних елементів.
+ Знайти кількість парних позитивних елементів.
+ Знайти суму парних позитивних елементів.
+ Знайти суму непарних позитивних елементів.
+ Знайти добуток позитивних елементів.
Знайти найбільший серед елементів масиву, ост альні обнулити.
* */
// const arrayNum = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//
// const add = (arr)=> {
//   return arr.reduce((a, b) => a + b, 0);
// };
//
// const multiplication = (arr)=> {
//   return arr.reduce((a, b) => a * b, 0);
// };
//
// const minNum = (arrayNum) => {
//   let minValue = arrayNum[0],
//     minIndex = 0;
//   for (let i = 1; i < arrayNum.length; i++) {
//     if (arrayNum[i] < minValue) {
//       minValue = arrayNum[i];
//       minIndex = i;
//     }
//   }
//   console.log('Мінімальний елемент масиву ', minValue);
//   console.log('Його порядковий номер ', minIndex);
// }
//
// const maxNum = (arrayNum) => {
//   let maxValue = arrayNum[0],
//     maxIndex = 0;
//   for (let i = 1; i < arrayNum.length; i++) {
//     if (arrayNum[i] > maxValue) {
//       maxValue = arrayNum[i];
//       maxIndex = i;
//     }
//   }
//   console.log('Максимальний елемент масиву ', maxValue);
//   console.log('Його порядковий номер ', maxIndex);
// }
//
// const arrayMath = (array)=>{
//   let positive = [],
//     negative = [],
//     oddPositive = [],
//     pairedPositive = [];
//   for (let i = 0; i<array.length; i++){
//     if(-1 === Math.sign(array[i])){
//       // console.log('Негативне', array[i]);
//       negative.push(array[i]);
//     } else{
//       // console.log('Позитивне',array[i]);
//       positive.push(array[i]);
//       array[i] % 2 === 0 ? pairedPositive.push(array[i]) : oddPositive.push(array[i]);
//     }
//   }
//
//   console.log('Сума позитивних елементів', add(pairedPositive));
//   console.log('Кількість позитивних елементів', positive.length);
//
//   minNum(arrayNum);
//
//   maxNum(arrayNum);
//
//   console.log('Кількість негативних елементів', negative.length);
//
//   console.log('кількість непарних позитивних елементів', oddPositive.length);
//   console.log('кількість парних позитивних елементів', pairedPositive.length);
//
//   console.log('Суму непарних позитивних елементів', add(oddPositive));
//   console.log('Суму парних позитивних елементів', add(positive));
//
//   console.log('Добуток позитивних елементів', multiplication(positive));
// }
//
// const reset = (array) => {
//   let maxElement = Math.max(...array);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== maxElement) {
//       array[i] = 0;
//     }
//   }
// }
//
// arrayMath(arrayNum);
// reset(arrayNum);
// console.log('Найбільший серед елементів масиву, ост альні обнулити ', arrayNum);


/*
* Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів
* */
let users = [
  {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
]

const balance = (object) => {
  const arrPhone = [];
  let sumBalance = 0;
  for (let i = 0; i < object.length; i++) {
    if (parseFloat(object[i].balance.replace(/[$,]/g, "")) >= 2000)
      arrPhone.push(object[i].phone);
    sumBalance += parseFloat(object[i].balance.replace(/[$,]/g, ""));
  }
  return [arrPhone, sumBalance]
}

const result = balance(users);
console.log('Масив телефонних номерів користувачів, у яких баланс більше 2000 доларів ', result[0]);
console.log('Суму всіх балансів користувачів ', result[1].toFixed(2));
