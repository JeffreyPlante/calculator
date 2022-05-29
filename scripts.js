const display = document.querySelector('.output')
	  clearBtn = document.querySelector('.func-buttons').children[0],
	  deleteBtn = document.querySelector('.func-buttons').children[1],
	  numsOpsBtns = document.querySelectorAll('.nums-ops .number'),
	  divideBtn = document.querySelector('.button.divide'),
	  multiplyBtn = document.querySelector('.button.multiply'),
	  subtractBtn = document.querySelector('.button.subtract'),
	  decimalBtn = document.querySelector('.button.decimal'),
	  equalsBtn = document.querySelector('.button.equals'),
	  addBtn = document.querySelector('.button.add');

numsOpsBtns.forEach((button) =>{
		button.addEventListener('click', () => console.log(button.textContent))

});
const updateDisplay = (num) => display.textContent = num.toString();

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
