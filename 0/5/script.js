
let mysteryOpa = prompt('Сидит дед во сто шуб одет');
let count = 0;
if (mystery == "Капуста") {
	alert('Это правильный ответ!');
	count++;
} else {
	alert('Это не правильный ответ');
}

let mysteryLump = prompt('Висит груша нельзя скушать');

if (mystery == "Лампочка") {
	alert('Это правильный ответ!');
	count++;
} else {
	alert('Это не правильный ответ');
}

let mysteryOnion = prompt('Кто его раздевает тот слезы проливает');

if (mystery == "Лук") {
	alert('Это правильный ответ!');
	count++;
} else {
	alert('Это не правильный ответ');
}
alert(`Игра окончина. Правилиных ответов ${count}`);
