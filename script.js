// const DOL = 64;
// const EU = 74;
// let rub = prompt("Сколько рублей вы хотите сконцентрировать?");
// let rubDol = rub × DOL;
// alert(`Долларов ${rubDol}`);
// let rubEu = rub × EU;
// alert(`Евро ${rubEu}`);


/*for(let i = 0; i < 5; i++) {
	console.log("Привет");
}

let i = 0;

while (i < 5) {
 console.log("Привет");
 i =+ 1;
} 

let ans = Math.trunc(Math.random() * 100),
 ansUser = +prompt(`Угадайте чило от 0 до 100`),
 countAttempt = 4;

for (let indexCount = 1; indexCount < countAttempt; indexCount++) {
 if (ansUser == ans) {
	 alert(`Вы угадали!`);
	 break;
 } else if (ansUser < ans) {
	 alert (`Слишком маленькое число.`);
 } else if (ansUser > ans) {
 alert (`Слишком большое число.`);
 }
 ansUser = +prompt(`Угадайте чило от 0 до 100. Осталось ${(countAttempt - indexCount)} попытки`);
}

alert(`Правильное число ${ans}`);


const count = 5;
 let randomNum = Math.trunc(Math.random() * 100);

 for (let i = 1; i < count; i++) {
 let userNum = +prompt("Введите число");
	 if(userNum === randomNum) {
		 document.write("Вы уголали <br>");
		 break;
	 } else if (userNum < randomNum) {
		 document.write("Вы ввели слишкол маленькое число <br>");
	 } else if (userNum > randomNum) {
		 document.write("Вы ввели слишкол большое число <br>");
	 }
 } */
// 4.Загадка
/*a. Загадать загадку. Если ответ верен – поздравить пользователя. Затем сообщить, что игра окончена.
b. Если ответ неверный – написать пользователю, что он не угадал.
c. Добавить еще 3 загадки. Подсчитать количество правильных ответов, сообщить пользователю.
d. (По желанию). В качестве верного ответа принимать несколько вариантов ответов. Например, «Стул», «стул», «табуретка» и так далее.*/

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