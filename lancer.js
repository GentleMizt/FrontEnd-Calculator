    // Theme Switching Buttons

    const btn1 = document.getElementById('btn1'); //theme1 button
    const btn2 = document.getElementById('btn2'); //theme2 button
    const btn3 = document.getElementById('btn3'); //theme3 button

    // Function that allows the button to change the theme
    btn1.addEventListener('click', ()=>{
        document.getElementById('themes').href = 'css/theme1.css'
    })

    btn2.addEventListener('click', ()=>{
        document.getElementById('themes').href = 'css/theme2.css'
    })

    btn3.addEventListener('click', ()=>{
        document.getElementById('themes').href = 'css/theme3.css'
    })

    // Calculations and Implementations.
    const display = document.getElementById('display');

    const buttons = Array.from(document.getElementsByClassName('button'));

    buttons.map( button =>{
        button.addEventListener('click',calculate)
    });
    
    function calculate(e){
        switch (e.target.innerText) {
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
            break;
            case '=': 
            try{
                display.innerText = eval(display.innerText)
            } catch {
                display.innerText = "Error!"
            }
            break;
            default:
                display.innerText += e.target.innerText;
        }
    }
