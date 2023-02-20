const arr = [
	["apple", "яблоко"],
	["go", "вперёд"],
	["i", "я"],
	["you", "ты"],
];

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