function onPageloadFunc()
{
    captcha();
}
window.onload=onPageloadFunc();

function captchaReload()
{
    captcha();
}
function captcha()
{
//CREATING 3 RANDOM NO 0-9
    var num1= Math.floor(Math.random()*10);
    var num2= Math.floor(Math.random()*10);
    var num3= Math.floor(Math.random()*10);

    var arrayLc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var arrayUc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   
//generating 2 random no 0-25
    var i = Math.floor(Math.random()*26);
    var j = Math.floor(Math.random()*26);

//PICKING RANDOM ALPHABETS FROM ARRAY
    var alpha1 = arrayLc[i]; //lower case
    var alpha2 = arrayUc[j]; //upper case
//ARRAY TO GENERATED CHARACTERS
    var arrayCombine=[num1,num2,num3,arrayLc[i],arrayUc[j]];

//Generate 5 random no to use as index to make final array
    var arrayIndex1 = Math.floor(Math.random()*4);
    var arrayIndex2 = Math.floor(Math.random()*4);
    var arrayIndex3 = Math.floor(Math.random()*4);
    var arrayIndex4 = Math.floor(Math.random()*4);
    var arrayIndex5 = Math.floor(Math.random()*4);

//element to be printed

    var ch1 = arrayCombine[arrayIndex1];
    var ch2 = arrayCombine[arrayIndex2];
    var ch3 = arrayCombine[arrayIndex3];
    var ch4 = arrayCombine[arrayIndex4];
    var ch5 = arrayCombine[arrayIndex5];

    var canvas = document.getElementById('canvas');
    var context =canvas.getContext('2d');
    context.font = "30px monospace";
    //clearing canvas
        context.clearRect(0, 0, canvas.Width, canvas.height);
    
//printing text on canvas
    context.fillText(ch1, 9,20);
    context.fillText(ch2, 24,26);
    context.fillText(ch3, 36,20);
    context.fillText(ch4, 50,22);
    context.fillText(ch5, 65,24);

//drawing 3 line on canvas
    context.moveTo(5, 15);
    context.lineTo(90, 10);
    context.moveTo(20, 5);
    context.lineTo(90, 20);
    context.moveTo(15,0);
    context.lineTo(95, 24);
    context.stroke();

    //global Raw string on captcha
    myCodeCaptcha = ch1+""+ch2+""+ch3+""+ch4+""+ch5;

}

function captchaMatch()
{
    var inputCaptcha = document.getElementById("capid").value;
    if(inputCaptcha!==myCodeCaptcha)
    {
        alert("Wrong Captcha !")
        captcha();
    }
    else{
        window.location.href = "#";
    }
}