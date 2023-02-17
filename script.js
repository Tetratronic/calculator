const screen = document.querySelector('.screen');

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) =>{
    const isButton = event.target.nodeName === 'BUTTON';
    const isOperation = event.target.className === 'operation';
    const clearButton = event.target.id === 'clear'
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

    if (isOperation){
        screen.textContent += event.target.value;
        operationString = screen.textContent;
        nums = operationString.split(/[+x/-]/);
        if(!nums[1] || nums.lenght > 2){
            return;
        };
        screen.textContent = add( parseInt(nums[0]), parseInt(nums[1]) )
    };
});

function add(a,b){
    return a + b;
};
