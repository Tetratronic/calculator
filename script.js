const screen = document.querySelector('.screen');

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) =>{
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton){
        return;
    }
    screen.textContent += event.target.value;
});

