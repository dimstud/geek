/* 
const words = [
	["apple", "яблоко"],
	["go", "вперёд"],
	["weapons", "оружие"],
	["you", "ты"],
];

const hardWords = [
	["food", "еда"],
	["mom", "мама"],
	["king", "король"],
	["dead", "мёртв"],
];

const getTranslateWords = (arr) => {
	while(arr.length != 0) {
		let i = parseInt(Math.random() * arr.length);
	
		let userTranslate = prompt(`Как переводиться слово ${arr[i][0]} ?`, ``);
	
		if (userTranslate == arr[i][1]) {
			alert(`Вы молодец!`)
			arr.splice(i, 1);
		} else {
			alert(`Правильный ответ: ${arr[i][1]}`)
		}
	}
};

getTranslateWords(words);
alert(`Вы прошли 1 этап. Впереди сложный этап`);
getTranslateWords(hardWords);
alert('Выпрошли сложный этап');
*/

// 1. Функции для работы с массивами
// a. Написать функцию, которая принимает в качестве параметра число n. Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
/*
const getArray = (n) => {
  let arr =[];
	for (let i = 1; i <= n; i++) {
				arr.push(i);
	}
	return arr;
};

let arr = getArray(4);
console.log(arr);
*/

//b. Написать функцию, которая принимает массив чисел. Результатом работы функции является сумма чисел этого массива.
/*
let numbers = [25, 6, 7];

const getArr = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum = sum + num;
  }
  return sum;
};

let sum = getArr(numbers);
console.log(sum);
*/

//c. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает максимальное число.
/*
let numbers = [0, 25, 83, 6, 7];
const getMaxNum = (arr) => {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
};

let maxNum = getMaxNum(numbers);
console.log(maxNum);
*/

//d. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает минимальное число.
/*
let numbers = [0, 25, 83, 6, 7];

const getMinNum = (arr) => {

  let min = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
};

let minNum= getMinNum(numbers);
console.log(minNum);
*/

//f. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает только четные числа из этого массива. Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2. Если остаток от деления числа на 2 равен 0, число будет четное
/*
let numbers = [25, 83, 6, 7];

const getEvenNum = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0){
      return arr[i];
    }
  }
};

let evenNum = getEvenNum(numbers);
console.log(evenNum);
*/

//2. *Добавить в программу по слепой печати еще несколько уровней.
//a. Уровень 2: Пользователь видит сообщение: «Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев. Повторяйте за мной». Пользователь получает последовательность из букв Ы и В длиной в 10 символов, и должен её воспроизвести. Если ему это не удалось, попытка повторяется. В случае успеха переходим к следующему уровню.
/*
const words = ["ф", "ы", "в", "а", "ж", "д", "л", "о"];

const generatesRandomArray = (arr, n) => {
  let randomArr = [];
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.trunc(Math.random() * arr.length);
    randomArr.push(arr[randomIndex]);
  }
  return randomArr;
};

const lettersUser = (letter) => {
  let arr = [];
  for(i = 0; i < letter.length; i++) {
    if(letter[i] === "ы" || letter[i] === "в") {
      arr.push(letter[i]);
    }
  }
  console.log(arr);
};
lettersUser(words);
*/

const getRandomNumder = (max) => {
	return Math.round(Math.random() * max);
};

const generateText = (letters, length) => {
	let text = "";
	for (let i = 0; i < length; i++) {
		let n = getRandomNumder(letters.length - 1);
		text = text + letters[n];
	}
	return text;
};

while (true) {
	alert(`Вас приветствует программа по слепой печати`);

	alert(`Положите 4 пальца левой руки - мизинец, безымянный, средний и указательный - на клавиши ф, ы, в, а. Запомните, что буква А находиться под указательным пальцем, а Ф - под мизинцем. \nТеперь неспеша набирайте текст. Постарайтесь не смотреть на клавиатуру.`);

	let text = generateText(["ф", "а"], 10);

	let userText = prompt(text);

	if (userText == text) {
		alert(`Всё верно!`);
		break;
	} else {
		alert(`Вы ошиблись, попробуйте ещё раз.`);
	}
}


//b. Уровень 3: Пользователь видит сообщение: «Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний -— на Л, указательный — на О. Запомните расположение пальцев». Пользователь получает последовательность из букв О и Ж длиной в 10 символов, и должен её воспроизвести. Если ему это не удалось — попытка повторяется. В случае успеха переходим к следующему уровню.
//3. Доработать игру в загадки:
//•	a. Избавиться в игре в загадки от дублирования кода, используя массивы и функции.
//•	b. Сделать так, чтобы программа поддерживала несколько правильных ответов на один и тот же вопрос. Все возможные варианты задаются программистом в коде программы.
