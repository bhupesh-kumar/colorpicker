var colorPicker = document.getElementById('colorpicker');
var alphaValuePicker = document.getElementById('alphapicker');
var colorShower = document.getElementById('colorshower');
var alphaShower = document.getElementById('alphashower');

var redPicker = colorPicker[0];
var greenPicker = colorPicker[2];
var bluePicker = colorPicker[4];

var redNum = colorPicker[1];
var greenNum = colorPicker[3];
var blueNum = colorPicker[5];

var alphaPicker = alphaValuePicker[0];
var alphaNum = alphaValuePicker[1];

function setColor(r,g,b){
    redPicker.value = r;
    greenPicker.value = g;
    bluePicker.value = b;
    showColor();
    onchangePickerRange();
}

function setAlpha(a){
    alphaNum.value = a;
    showAlpha();
    onchangeAlphaValue();
}

function onchangePickerRange(){
    redNum.value = redPicker.value;
    greenNum.value = greenPicker.value;
    blueNum.value = bluePicker.value;
    showColor();
    showAlpha();
}

function onchangePickerValue(){
    redPicker.value = redNum.value;
    greenPicker.value= greenNum.value;
    bluePicker.value= blueNum.value;
    showColor();
    showAlpha();
}

function onchangeAlphaRange(){
    alphaNum.value = alphaPicker.value/100;
    showAlpha();
}

function onchangeAlphaValue(){
    alphaPicker.value = alphaNum*100;
    showAlpha();
}
function showColor(){
    colorShower.style.backgroundColor = "rgb("+redNum.value+","+greenNum.value+","+blueNum.value+")";
}

function showAlpha(){
    alphaShower.style.backgroundColor ="rgba("+redNum.value+","+greenNum.value+","+blueNum.value+","+alphaNum.value+")";
    console.log("rgba("+redNum.value+","+greenNum.value+","+blueNum.value+","+alphaNum.value+")");
}


// calling after page loads
setColor(255,165,0);
setAlpha(0.5);