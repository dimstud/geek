
let text = document.querySelector(".head");
let box = document.querySelector(".puzzle__box");

let count = 0;

const checkMystery = (input, ans) => {
	let inputId = document.getElementById(input).value;
	inputId = inputId.toLowerCase();
	for (let i = 0; i < ans.length; i++) {
		if (inputId == ans[i]) {
			count++;
			break;
		}	
	}
};

const checkMysterys = () => {
	checkMystery("opa", ["Капуста", "капуста"]);
	checkMystery("lump", ["Лампочка", "лампочка"]);
	checkMystery("onion", ["Лук", "лук"]);

	text.textContent = `Игра окончина. Правилиных ответов: ${count}`;
	box.style.display = "none";

	// alert(`Игра окончина. Правилиных ответов ${count}`);
};



let ans = Math.trunc(Math.random() * 100),
ansUser = document.getElementById("ans"),
textGuess = document.querySelector("#text");
const countAttempt = 5;

const guessStart = () => {
	for (let indexCount = 1; indexCount <= countAttempt; indexCount++) {
		if (ansUser.value == ans) {
			textGuess.textContent = `Вы угадали!`;
			break;
		} else if (ansUser.value < ans) {
			textGuess.textContent = `Слишком маленькое число. Попыток осталось ${countAttempt - indexCount}.`;
			guessStart();
		} else if (ansUser.value > ans) {
			textGuess.textContent = `Слишком большое число. Попыток осталось ${countAttempt - indexCount}.`;
			guessStart();
		}
	}
	textGuess.textContent = `Правильный ответ ${ans}.`;
};

// 
// alert(`Правильное число ${ans}`);
// 
// 
// const count = 5;
//  let randomNum = Math.trunc(Math.random() * 100);
// 
//  for (let i = 1; i < count; i++) {
//  let userNum = +prompt("Введите число");
// 	 if(userNum === randomNum) {
// 		 document.write("Вы уголали <br>");
// 		 break;
// 	 } else if (userNum < randomNum) {
// 		 document.write("Вы ввели слишкол маленькое число <br>");
// 	 } else if (userNum > randomNum) {
// 		 document.write("Вы ввели слишкол большое число <br>");
// 	 }
//  }
 