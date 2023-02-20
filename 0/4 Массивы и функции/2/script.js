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