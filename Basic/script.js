let str = document.querySelector('input').value;
let btns = document.querySelectorAll('.btn');

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '='){
            try {
                str = eval(str); 
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert("Invalid input !");
                    str = "";
                }
            }
        }
        else if (e.target.innerHTML == 'x'){
            str += '*';
        }
        // console.log(e.target);
        else if (e.target.innerHTML == 'C'){
            str = str.slice(0,-1);
        }
        else if (e.target.innerHTML == 'AC'){
            str = "";
        }

        else{
            str = str + e.target.innerHTML;
        }
        document.querySelector('input').value = str;
    })
})