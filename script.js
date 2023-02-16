const screen = document.querySelector('.screen');

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) =>{
    const isButton = event.target.nodeName === 'BUTTON';
    const isOperation = event.target.className === 'operation';
    if (!isButton){
        return
    };
    if(isOperation && (screen.textContent == '')){
        alert("NOT ALLOWED, START BY TYPING A NUMBER");
        return;
    };
    screen.textContent += event.target.value;

    if (isOperation){
        operationString = screen.textContent;
        nums = operationString.split(/[+x/-]/);
        if(!nums[1]){
            return;
        }
        screen.textContent = add( parseInt(nums[0]), parseInt(nums[1]) )
    }
});

function add(a,b){
    return a + b;
};
