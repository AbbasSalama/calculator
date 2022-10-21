let screen = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case'c':
                screen.innerText = "";
                break;
            case"←":
                if(screen.innerText){
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            case"=":
                try{
                    screen.innerText = eval(screen.innerText);
                }catch{
                    screen.innerText = 'Invalid Expration !!';
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    });
});