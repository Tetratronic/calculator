const screen = document.querySelector('.screen');
const buttons = document.querySelector('.buttons');
operand =''
operator = false;
buttons.addEventListener('click', (event) =>{
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
        return;
    };

    if (isOperation || equalButton){
        if(!operator){        
            screen.textContent += event.target.value;
            operand = event.target.value;       
            console.log(operand)
            operator = true;
            

        }else{
            operationString = screen.textContent;
            nums = operationString.split(/[+x/-]/);
            console.log("hi");
            screen.textContent = add( parseInt(nums[0]), parseInt(nums[1]), operand );
            console.log(add( parseInt(nums[0]), parseInt(nums[1]), operand ));
            operator = false;

        }

        if(!nums[1] || nums.lenght > 2 ){
            return;};

    };
});

function add(a,b,op){
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
