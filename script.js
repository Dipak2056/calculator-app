
//2.press = show the total result
//press AC, Clear tege screen
//press C delete the last number/character
//1. press button, display number to the screen in order from right to left
const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('#result');
const hahaElement = document.querySelector('#haha');
let textToDisplay = '';
const symbols = ['/','*','+','-']
buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const val = btn.innerText;
        displayElement.style.background = '';
        displayElement.style.color = '';
        hahaElement.classList.add('haha');

        //when = clicked
        if(val==="="){
            if(!textToDisplay.length) return;
            if (symbols.includes(textToDisplay[textToDisplay.length-1])){
                textToDisplay = textToDisplay.slice(0,-1);
            }
            
            return onTotal();

        }
        //to not allow two operator at same time
        if(symbols.includes(val) && symbols.includes(textToDisplay[textToDisplay.length-1])){
            const tempStr = textToDisplay.slice(0,-1)+val;

            return display(tempStr);

        }

        //whent the val is AC
        if(val ==='AC'){
            return resetDisplay();
        }
        //whent the val is C
        if (val === "C"){
            // if(textToDisplay.length < 1) return resetDisplay();

            textToDisplay = textToDisplay.slice(0,-1);
            return display(textToDisplay);
        }
        //fixing some bugs like multiple dots
        if(val === '.' && textToDisplay.includes('.')) return;
        //not allowing symbols infront of the number
        if(textToDisplay.length < 1 && symbols.includes(val))return;

        textToDisplay += val;
        display(textToDisplay);

    });
});

//show clicked button to the screen
const display = (toDisplay) => {
    const displayElement = document.querySelector('#result');
    displayElement.innerText = toDisplay || '0.00';
};
//calculate total value
const onTotal = () => {
    const randVal = randomnumber();
    if(randVal > 0){
        displayElement.style.background = 'red';
        displayElement.style.color = 'white';
        displayElement.classList.add('prank');
        hahaElement.classList.add('prank');

        displayElement.addEventListener('animationend',()=>{
            displayElement.classList.remove('prank');
        
        });
        hahaElement.addEventListener('animationend',()=>{
            hahaElement.classList.remove('prank')
        })

    }


    const total = eval(textToDisplay)+randVal;
    display(total);
    textToDisplay='';

}
//to make the result field static
const resetDisplay = () =>{
display('0.00');
textToDisplay=""
}

//randomnumber
const randomnumber =() =>{
    const val = Math.floor(Math.random()*8);
    return 8;
    //return val < 4 ? val :0; 
}