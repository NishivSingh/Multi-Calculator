const Kilometers = document.getElementById("Kilometers");
const Meters = document.getElementById("Meters");
const Centimeters = document.getElementById("Centimeters");
const Millimeters = document.getElementById("Millimeters");
const Micrometers = document.getElementById("Micrometers");
const Miles = document.getElementById("Miles");
const Yards = document.getElementById("Yards");
const Foots = document.getElementById("Foots");
const Inches = document.getElementById("Inches");


const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "Kilometers":
                Meters.value = value * 1e3;
                Centimeters.value = value * 1e6;
                Millimeters.value = value * 1e9;
                Micrometers.value = value * 1e12;
                Miles.value = value / 1.609;
                Yards.value = value * 1094;
                Foots.value = value * 3280.84;
                Inches.value = value * 39370.1;
                break;
            case "Meters":
                Kilometers.value = value * 1e-3;
                Centimeters.value = value * 1e3;
                Millimeters.value = value * 1e6;
                Micrometers.value = value * 1e9
                Miles.value = value / 1609;
                Yards.value = value * 1.094;
                Foots.value = value * 3.28084;
                Inches.value = value * 39.3701;
                break;
            case "Centimeters":
                Kilometers.value = value * 1e-6;
                Meters.value = value * 1e-3;
                Millimeters.value = value * 1e3;
                Micrometers.value = value * 1e6;
                Miles.value = value / 160900;
                Yards.value = value / 91.44;
                Foots.value = value / 30.48;
                Inches.value = value / 2.54;
                break;
            case "Millimeters":
                Kilometers.value = value * 1e-9;
                Meters.value = value * 1e-6;
                Centimeters.value =  value * 1e-3;
                Micrometers.value = value * 1e3;
                Miles.value = value * 6.2137e-7;
                Yards.value = value / 914.4;
                Foots.value = value / 304.8;
                Inches.value = value / 25.4;
                break;
            case "Micrometers":
                Kilometers.value = value * 1e-12;
                Meters.value = value * 1e-9;
                Centimeters.value = value * 1e-6;
                Millimeters.value = value * 1e-3;
                Miles.value = value * 6.2137e-10;
                Yards.value = value / 914400;
                Foots.value = value / 304800;
                Inches.value = value / 25400;
                break;
            case "Miles":
                Kilometers.value = value * 1.60934;
                Meters.value = value * 1609.34; 
                Centimeters.value = value *  160934;
                Millimeters.value = value * 1609340;
                Micrometers.value =value * 1.609e9;
                Yards.value = value * 1760;
                Foots.value = value * 5280;
                Inches.value = value * 63360;
                break;
            case "Yards":
                Kilometers.value = value / 1094;
                Meters.value =value / 1.094;
                Centimeters.value = value * 91.44;
                Millimeters.value = value * 914.4;
                Micrometers.value = value * 914400;
                Miles.value = value / 1760;
                Foots.value = value * 3;
                Inches.value = value * 36;
                break;                
            case "Foots":
                Kilometers.value = value / 3281;
                Meters.value =value / 3.281;
                Centimeters.value = value * 30.48;
                Millimeters.value = value * 304.8;
                Micrometers.value = value * 304800;
                Miles.value = value / 5280;
                Yards.value = value / 3;
                Inches.value = value * 12;
                break;                
            case "Inches":
                Kilometers.value = value / 39370;
                Meters.value =value / 39.37;
                Centimeters.value = value * 2.54;
                Millimeters.value = value * 25.4;
                Micrometers.value = value * 25400;
                Miles.value = value / 63360;
                Yards.value = value / 36;
                Foots.value = value / 12;
                break;                
        }
    });
}