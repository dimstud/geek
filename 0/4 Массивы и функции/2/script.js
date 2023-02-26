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


// 1. Функции для работы с массивами
// a. Написать функцию, которая принимает в качестве параметра число n. Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.

const getArray = (n) => {
	for (let i = 0; i < n; i++) {
				
	}
};

getArray(4);