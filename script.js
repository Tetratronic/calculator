const screen = document.querySelector('.screen');
const buttons = document.querySelector('.buttons');

operator = false;
buttons.addEventListener('click', (event) =>{
    isnegative = false
    const isButton = event.target.nodeName === 'BUTTON';
    const isOperation = event.target.className === 'operation';
    const clearButton = event.target.id === 'clear'
    const equalButton = event.target.id === 'equal'
    if (clearButton){
        screen.textContent = ''
    };
    if (!isButton){
        return
    };
    if(!isOperation){
        screen.textContent += event.target.value;
    }
    if(isOperation && (screen.textContent == '' || screen.textContent.slice(-1).match(/[+x/-]/))){
        if(isnegative == false && screen.textContent == "" && event.target.value === "-"){
            screen.textContent += event.target.value;
            isnegative == true;
        }   
        return;
    };

    if (isOperation || equalButton){
        if((equalButton && !operator) || (equalButton && operator && screen.textContent.slice(-1).match(/[+x/-]/))){
            return;
        }
        if(!operator){    
            screen.textContent += event.target.value;
            opSymbol = event.target.value;       
            operator = true;
            

        }else{
            operationString = screen.textContent;
            if(operationString[0] == "-"){
                isnegative = true;
            }
            if(isnegative){
                operationString = operationString.substr(1);
                nums = operationString.split(/[+x/-]/);
                screen.textContent = operate( -parseFloat(nums[0]), parseFloat(nums[1]), opSymbol );
                operator = false;
            }else{
            nums = operationString.split(/[+x/-]/);
            screen.textContent = operate( parseFloat(nums[0]), parseFloat(nums[1]), opSymbol );
            operator = false;
            }
            

        }

        if(!nums[1] || nums.lenght > 2 ){
            return;};

    };
});

function operate(a,b,op){
    if(op == "+"){
        return a + b;   
    }else if(op == "-"){
        return a - b
    }else if(op == "x"){
        return a * b
    }else if(op == '/'){
        return a/b
    }
};
