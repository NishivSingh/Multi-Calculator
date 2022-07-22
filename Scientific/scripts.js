let compute_str = document.querySelector('input').value;
let display_str = compute_str;
let btns = document.querySelectorAll('.btn');

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

function prev(str){
    let ans = "";
    var i = str.length-1;
    var cnt = 0;
    flag = false;
    while (i >= 0){
        if (str[i] == ')'){
            flag = true;
            ans += str[i];
        }
        else if (str[i] != '(' || flag){
            ans += str[i];
        }
        else{
            break;
        }
        i--;
        cnt++;
    }
    return [ans.split('').reverse().join(''),cnt];
}
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                try {
                    if (eval(compute_str) < Math.pow(10, -10)) {
                        compute_str = eval(compute_str).toFixed(10);
                        display_str = compute_str;
                    }
                    else {
                        compute_str = eval(compute_str);
                        display_str = compute_str;
                    }
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        alert("Invalid input !");
                        compute_str = "";
                        display_str = "";
                    }
                }
                break;
            case 'e':
                compute_str += "Math.E";
                display_str += e.target.innerHTML;
                break;

            case 'π':
                compute_str += "Math.PI";
                display_str += e.target.innerHTML;
                break;

            case 'sin': case 'cos': case 'tan':
                compute_str += "Math.".concat(e.target.innerHTML) + '(';
                display_str += e.target.innerHTML + '(';
                break;

            case 'x!':
                compute_str = eval(compute_str);
                compute_str = factorial(parseInt(compute_str)).toString();
                display_str = compute_str;
                break;

            case 'ln':
                compute_str += "Math.log" + '(';
                display_str += e.target.innerHTML + '(';
                break;

            case 'log':
                compute_str += "Math.log10" + '(';
                display_str += e.target.innerHTML + '(';
                break;

            case '√':
                compute_str += "Math.sqrt" + '(';
                display_str += e.target.innerHTML + '(';
                break;

            case 'x<sup>y</sup>':
                let val = prev(compute_str)[0]
                let k = prev(compute_str)[1]
                compute_str = compute_str.slice(0,-k);
                compute_str += "Math.pow(" + val + ',';
                display_str += '^(';
                break;
            case 'x':
                compute_str += '*';
                display_str += '*';
                break;

            case 'C':
                compute_str = compute_str.slice(0, -1);
                display_str = display_str.slice(0, -1);
                break;

            case 'AC':
                compute_str = "";
                display_str = "";
                break;
            default:
                compute_str += e.target.innerHTML;
                display_str += e.target.innerHTML;
        }
        console.log(e.target.innerHTML);
        console.log(display_str);
        console.log(compute_str);
        document.querySelector('input').value = display_str;
    })
})