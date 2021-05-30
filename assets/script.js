const calculator = {
    displayNumber : '0',
    operator : null,
    firstNumber : null,
    secondNumber : false
}

function updateDisplay()
{
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clear()
{
    calculator.displayNumber = '0',
    calculator.operator = null,
    calculator.firstNumber = null,
    calculator.secondNumber = false
}

function inputNumber(digit) 
{
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}

function inverse()
{
    if(calculator.displayNumber === 0){
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator)
{
    if(!calculator.secondNumber){
        calculator.operator = operator;
        calculator.secondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    }else{
        alert('operator sudah diterapkan')
    }
}

function performCalculator()
{
    if (calculator.firstNumber == null || calculator.operator == null){
        alert('Anda belum menetapkan operator');
        return;
    }

    let result = 0;
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }  
    
    const history = {
        firstNumber : calculator.firstNumber,
        secondNumber : calculator.displayNumber,
        operator : calculator.operator,
        result : result
    }

    addHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}


const buttons = document.querySelectorAll('.button');
for(let btn of buttons){
    btn.addEventListener('click',function(){

        if(this.classList.contains('clear')){
            clear();
            updateDisplay();
            return;
        }

        if(this.classList.contains('negative')){
            inverse();
            updateDisplay();
            return;
        }

        if(this.classList.contains('operator')){
            handleOperator(this.innerText);
            updateDisplay();
            return;
        }

        if(this.classList.contains('equals')){
            performCalculator();
            updateDisplay();
            return;
        }


        inputNumber(this.innerText);
        updateDisplay();
    })
}