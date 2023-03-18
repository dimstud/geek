
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


/*
	if (opa == "Капуста" || opa == "капуста") {
		text.
		alert('Это правильный ответ!');
		count++;
	} else {
		alert('Это не правильный ответ');
	}
	
	if (lump == "Лампочка" || lump == "лампочка") {
		alert('Это правильный ответ!');
		count++;
	} else {
		alert('Это не правильный ответ');
	}

	if (onion == "Лук" || onion == "лук") {
		alert('Это правильный ответ!');
		count++;
	} else {
		alert('Это не правильный ответ');
	}
	
	*/