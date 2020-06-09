// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ №1
// Есть обьект car! пробежаться по обьекту через for in и подсчитать количество свойств в обьекте,
// РЕШЕНИЕ 

// Способ №1
const car = {
  model: 'BMW',
  price: 45000,
  year: 2019,
  country: 'Germany',
};

let counter = 0;

for (key in car) {
  counter++;
}

console.log(counter);

// Способ №2
const car = {
  model: 'BMW',
  price: 45000,
  year: 2019,
  country: 'Germany',
};

Object.keys(car).length;

// ЗАДАНИЕ №2
// Есть функция getClaims которая прнимает массив из обьектов claims! Фунция должна вернуть массив только из тех
// которые  имеют status Closed
// РЕШЕНИЕ

claims = [
  {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 6343,
    model: 'Gran Tour',
    status: 'Closed',
  },
  {
    id: 7644,
    status: 'In Progress',
  },
  {
    id: 7686,
    model: 'City Bike',
    status: 'Closed',
  },
  {
    id: 8356,
    model: 'Bike',
    status: 'Closed',
  },
  {
    id: 9745,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 10253,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 14234,
    model: 'Bike',
    status: 'Closed',
  }
];

function getStatusClosed(arr) {
  return arr.filter(item => item.status === 'Closed');
}

getStatusClosed(claims);

// ЗАДАНИЕ №3
// Дан массив arr! Необходимо найти самое большое по модулю!!! Решить минимум 2-мя способами!! Один из  них с помощью find!!
// РЕШЕНИЕ 

// Способ №1
const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let maxValue = 0;

arr.find(item => {
  if (Math.abs(item) > maxValue) {
    maxValue = Math.abs(item);
  }
})

console.log(maxValue);

// Способ №2
const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let initial = arr[0]; // let initial = 0;

arr.reduce( (prev, curr) => Math.abs(prev) < Math.abs(curr) ? curr : prev, initial );

// const arr = [5, 6, 23, 64, -23, -92, 23, 3];

// arr.reduce( (prev, curr) => Math.abs(prev) < Math.abs(curr) ? curr : prev, 0 );

// Способ №3
const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let maxValue = arr[0]; // let maxValue = 0;

for (let i = 1; i < arr.length; i++) {
  if ( Math.abs(maxValue) < Math.abs( arr[i] ) ) maxValue = arr[i];
}

console.log(maxValue);

// ЗАДАНИЕ №4
// Используя claims переменную выше!! добавить свойство isClosed: true если status - Closed
// РЕШЕНИЕ 

claims = [
  {
    id: 1234,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 3453,
    model: 'MC7',
    status: 'Open',
  },
  {
    id: 6343,
    model: 'Gran Tour',
    status: 'Closed',
  },
  {
    id: 7644,
    status: 'In Progress',
  },
  {
    id: 7686,
    model: 'City Bike',
    status: 'Closed',
  },
  {
    id: 8356,
    model: 'Bike',
    status: 'Closed',
  },
  {
    id: 9745,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 10253,
    model: 'Bicycle',
    status: 'Closed',
  },
  {
    id: 14234,
    model: 'Bike',
    status: 'Closed',
  }
];

claims.map(item => {
  if (item.status === 'Closed') item.isClosed = true;
  return item;
});

// claims.map(item => {
//   if (item.status === 'Closed') {
//     item.isClosed = true;
//     return item;
//   }
//   return item;
// });

// ЗАДАНИЕ №5
// Есть массив arr1 отсортировать этот вложенный массив [5, 1, 7,3 ,4, 6]
// РЕШЕНИЕ 

// Способ №1
const arr1 = [ [5, 2, 5,1, [5, 1, 7,3 ,4, 6] ], 6, 23, 64, -23, -92, 23, 3 ]

let openSubarray = arr1.flat();

function getInsertedArr( [,,,, insertedArr] ) {
  return insertedArr.sort( (a, b) => a - b );
}

getInsertedArr(openSubarray);

// Способ №2

const arr1 = [ [5, 2, 5,1, [5, 1, 7,3 ,4, 6] ], 6, 23, 64, -23, -92, 23, 3 ]

let openSubarray = arr1.reduce( (prev, item) => prev.concat(item) );

function getInsertedArr ( [,,,, insertedArr] ) {
  return insertedArr.sort( (a, b) => a - b );
}

getInsertedArr(openSubarray);

// ЗАДАНИЕ №6
// Есть массив arr2 разложить положительные в один массив а отрицательные в другой!!
// РЕШЕНИЕ 

const arr2 = [5, 2, 5, -1,  6, -3, 64, -23, -92, 23, 3];

let positive = [];

let negative = [];

arr2.filter( item => item > 0 ? positive.push(item) : negative.push(item) )

console.log(positive);

console.log(negative);

// ЗАДАНИЕ №7
// Написать функцию которая принимает только поле array обьекта person и сортирует по убыванию по id и возвращает массив!!
// РЕШЕНИЕ 

const person = {
  name: 'Vasia',
  gender: 'male',
  array: [ { id: 1, name: 'Vasia' }, { id: 6, name: 'Boria' }, { id: 2, name: 'Petia' }, { id: 3, name: 'Misha' } ] 
};

function getPerson({array}) {
  return array.sort( (a, b) => b.id - a.id );
}

getPerson(person);

// ЗАДАНИЕ №8
// Написать функцию которая принимает массив arr3! И если среднее арифметическое всех меньше самого большого числа в массиве вернуть тру иначе фолс!!!

const arr3 = [5, 2, 5, -1, 6, 3, 64, 23, -92, 23, 3];

function getAvarage(array) {
  let maxValue = array.reduce( (prev, curr) => Math.abs(prev) < Math.abs(curr) ? curr : prev, 0 );
  let avarage = array.reduce( (prev, item) => prev + Math.abs(item) / array.length, 0 );
  return avarage < maxValue ? true : false;
}

getAvarage(arr3);

// ЗАДАНИЕ №9
// Есть обьект claim вернуть конкатенация modelName, subject!
// РЕШЕНИЕ

const claim = {
  id: 542354,
  subject: 'Bike',
  modelName: 'Mc7',
  modelId: 3213,
  getModelNameAndSubject: () => {
    return `${claim.modelName} ${claim.subject}`;
  }
};

claim.getModelNameAndSubject();