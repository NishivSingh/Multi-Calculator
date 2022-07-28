const Tons = document.getElementById("Tons");
const Kilograms = document.getElementById("Kilograms");
const Grams = document.getElementById("Grams");
const Milligrams = document.getElementById("Milligrams");
const Micrograms = document.getElementById("Micrograms");
const Pounds = document.getElementById("Pounds");
const Ounces = document.getElementById("Ounces");


const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "Tons":
                Kilograms.value = value * 1e3;
                Grams.value = value * 1e6;
                Milligrams.value = value * 1e9;
                Micrograms.value = value * 1e12;
                Pounds.value = value * 2204.62;
                Ounces.value = value * 35274;
                break;
            case "Kilograms":
                Tons.value = value * 1e-3;
                Grams.value = value * 1e3;
                Milligrams.value = value * 1e6;
                Micrograms.value = value * 1e9
                Pounds.value = value * 2.20462;
                Ounces.value = value * 35.274;
                break;
            case "Grams":
                Tons.value = value * 1e-6;
                Kilograms.value = value * 1e-3;
                Milligrams.value = value * 1e3;
                Micrograms.value = value * 1e6;
                Pounds.value = value / 453.6;
                Ounces.value = value / 28.35;
                break;
            case "Milligrams":
                Tons.value = value * 1e-9;
                Kilograms.value = value * 1e-6;
                Grams.value =  value * 1e-3;
                Micrograms.value = value * 1e3;
                Pounds.value = value / 453600;
                Ounces.value = value / 28350;
                break;
            case "Micrograms":
                Tons.value = value * 1e-12;
                Kilograms.value = value * 1e-9;
                Grams.value = value * 1e-6;
                Milligrams.value = value * 1e-3;
                Pounds.value = value / 4.536e8;
                Ounces.value = value / 2.835e7;
                break;
            case "Pounds":
                Tons.value = value / 2205;
                Kilograms.value = value / 2.205; 
                Grams.value = value *  453.6;
                Milligrams.value = value * 453600;
                Micrograms.value =value * 4.536e8;
                Ounces.value = value * 16;
                break;
            case "Ounces":
                Tons.value = value / 35270;
                Kilograms.value =value / 35.274;
                Grams.value = value * 28.35;
                Milligrams.value = value * 28350;
                Micrograms.value = value * 2.835e7;
                Pounds.value = value / 16;
                break;                
        }
    });
}