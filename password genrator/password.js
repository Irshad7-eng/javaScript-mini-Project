let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let Number = document.getElementById("Number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>
{
    sliderValue.textContent = inputSlider.value;
});
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let allNumber = "123456789";
let allSymbols = "~!@$%^&*";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// function that is use to genrate password

function generatePassword()
{
    let genPassword = "";
    let allChar = "";

    allChar += lowercase.checked ? lowerChar :"";
    allChar += uppercase.checked ? upperChars :"";
    allChar += Number.checked ? allNumber :"";
    allChar += symbols.checked ? allSymbols :"";

    if(allChar == "" || allChar.length == 0)
    {
        return genPassword;
    }
    
    let i = 1;
    while(i <= inputSlider.value)
    {
        genPassword += allChar.charAt(Math.floor(Math.random()* allChar.length));
        i++;
    }
   
    
    return genPassword;
}
genBtn.addEventListener('click',() => 
{
    passBox.value = generatePassword();

});

copyIcon.addEventListener('click', () =>
{
    if(passBox.value != "" || passBox.length >= 1)
    {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "password Copyied";
        setTimeout(()=>
        {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000);
    }

});