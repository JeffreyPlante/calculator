const display = document.querySelector('.output')
	  storedValue = document.querySelector('.stored-val')
	  storedOperand= document.querySelector('.stored-op')
	  clearBtn = document.querySelector('.func-container').children[0],
	  deleteBtn = document.querySelector('.func-container').children[1],
	  numsBtns = document.querySelectorAll('.nums-ops .number'),
	  divideBtn = document.querySelector('.button.divide'),
	  multiplyBtn = document.querySelector('.button.multiply'),
	  subtractBtn = document.querySelector('.button.subtract'),
	  decimalBtn = document.querySelector('.button.decimal'),
	  equalsBtn = document.querySelector('.button.equals'),
	  addBtn = document.querySelector('.button.add');
	  operands = [addBtn, subtractBtn, multiplyBtn, divideBtn]

const formatNum = (num) => {
		  if (num % 1 === 0 && num.toString().length > 12) {
			return num.toExponential(6);
		  } else if (num % 1 === 0 && num.toString().length <= 12) {
		  	return num.toString();
		  } else if (num % 1 !== 0 && num.toFixed(2).length > 12){
			return num.toExponential(6);
		  } else {
		  	return num.toFixed(2);
		  }
	  },
	  errorDivideByZero = () => {
	      let val = display.textContent;
		  display.textContent = "xx-DBZERO-xx";
		  setTimeout(() =>{display.textContent = val}, 1500)
	  },
	  calculate = ()=> {
		let x = parseFloat(storedValue.textContent);
		let y = parseFloat(display.textContent);
		let op = storedOperand.textContent;
		
		switch(op) {
			case "+":
				return formatNum(add(x,y));
				break;
			case "−":
				return formatNum(subtract(x,y));
				break;
			case "×":
				return formatNum(multiply(x,y));
				break;
			case "÷":
				return formatNum(divide(x,y));
				break;
		}
	  },
	  inputNum = (num) => {
		if (display.textContent === "0"){
			display.textContent = num;
		} else if (display.textContent.length < 12) {
			display.textContent += num;
		}
	  },
	  inputOperand = (op) => {
		if (storedOperand.textContent === ""){
			storedValue.textContent = display.textContent;
			display.textContent = '0';
			storedOperand.textContent = op;
		} else {
			storedValue.textContent = calculate();
			display.textContent = '0';
			storedOperand.textContent = op;
		}
	  	
	  },
	  inputDecimal = () => {
		  if(!display.textContent.includes('.')) { display.textContent += '.'};
	  },
	  inputClear = () => {
		display.textContent = '0';
		storedValue.textContent = '';
		storedOperand.textContent = '';
	  },
	  inputDelete = () => {
		if (display.textContent.length > 1){ 
			display.textContent = display.textContent.slice(0,-1);
		} else {
			display.textContent = '0';
		}
	  },
	  inputEquals = () => {
		if (display.textContent === "0" && storedOperand.textContent === "÷"){
			errorDivideByZero();	
		} else if (storedOperand.textContent !== "") {
			display.textContent = calculate();
			storedOperand.textContent = '';
			storedValue.textContent = '';
		}
	  };
	
numsBtns.forEach((button) =>{
		button.addEventListener('click', () => {
			num = button.textContent.toString();
			inputNum(num);
		});

});

operands.forEach((button) =>{
	button.addEventListener('click', () => {
		op = button.textContent
		inputOperand(op);

	});
});

decimalBtn.addEventListener('click', () => inputDecimal());

clearBtn.addEventListener('click', () => inputClear());

deleteBtn.addEventListener('click', () => inputDelete());

equalsBtn.addEventListener('click', () => inputEquals());

const opTranslateHash = {'/':'÷','x':'×','-':'−','+':'+'};

window.addEventListener('keydown', (e) => {
	if (e.key === '.') { inputDecimal() }
	else if (e.key === 'c' || e.key === "Delete") { inputClear() }
	else if (e.key === 'd' || e.key === "Backspace") { inputDelete() }
	else if (e.key === 'e' || e.key === "=") { inputEquals() }
	else if (e.key >= 0 && e.key <= 9) { inputNum(e.key) }
	else if (['/', 'x', '-', '+'].includes(e.key)) { inputOperand(opTranslateHash[e.key]) };
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
