const display = document.querySelector('.output')
	  storedValue = document.querySelector('.stored-val')
	  storedOperand= document.querySelector('.stored-op')
	  clearBtn = document.querySelector('.func-buttons').children[0],
	  deleteBtn = document.querySelector('.func-buttons').children[1],
	  numsBtns = document.querySelectorAll('.nums-ops .number'),
	  divideBtn = document.querySelector('.button.divide'),
	  multiplyBtn = document.querySelector('.button.multiply'),
	  subtractBtn = document.querySelector('.button.subtract'),
	  decimalBtn = document.querySelector('.button.decimal'),
	  equalsBtn = document.querySelector('.button.equals'),
	  addBtn = document.querySelector('.button.add');
	  operands = [addBtn, subtractBtn, multiplyBtn, divideBtn]

const updateDisplay = (num) => display.textContent = num.toString(),
	  updateStoredValue = (num) => storedValue.textContent = num.toString(),
	  updateStoredOperand = (str) => storedOperand.textContent = str;

numsBtns.forEach((button) =>{
		button.addEventListener('click', () => {
			value = button.textContent.toString();

			if (display.textContent === "0"){
				display.textContent = value;
			} else {
				display.textContent += value;
			}
		});

});

operands.forEach((button) =>{
	button.addEventListener('click', () => {
		if (storedOperand.textContent === ""){
			storedValue.textContent = display.textContent;
			display.textContent = '0';
			storedOperand.textContent = button.textContent;
		}
	});
});

decimalBtn.addEventListener('click', () => {
	if(!display.textContent.includes('.')) { display.textContent += '.'};
});

clearBtn.addEventListener('click', () => {
	display.textContent = '0';
	storedValue.textContent = '';
	storedOperand.textContent = '';
});

deleteBtn.addEventListener('click', () => {
	if (display.textContent.length > 1){ 
		display.textContent = display.textContent.slice(0,-1);
	} else {
		display.textContent = '0';
	}
});



function add(x,y){
	return x + y;
}

function subtract(x,y){
	return x - y;
}

function multiply(x,y){
	return x * y;
}

function divide(x,y){
	return x / y;
}

function operate(operation, x,y){
	return operation(x,y);
}
