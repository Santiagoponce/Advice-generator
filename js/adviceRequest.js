
const adviceGeneratorButton=document.querySelector(".advice-generator");
const adviceContainer=document.querySelector(".advice");

adviceGeneratorButton.addEventListener("click",()=>
{
    makeAdviceRequest();
}
)


function makeAdviceRequest()
{
    const xhr=new XMLHttpRequest();
    xhr.onload=()=>
    {
        showAdvice(xhr.responseText,adviceContainer);
    }
    xhr.open('GET','https://api.adviceslip.com/advice');
    xhr.send();
  
}

function showAdvice(adviceResponse,adviceElement)
{
    var adviceObj1=JSON.parse(adviceResponse);
    let adviceText=adviceElement.querySelector(".advice__text");
    let adviceId=adviceElement.querySelector(".advice__id");

    adviceId.classList.toggle("advice__text--fadeIn");
    adviceId.textContent=adviceObj1.slip.id;

    adviceId.addEventListener("animationend",()=>
    {
        adviceId.classList.toggle("advice__text--fadeIn");
    });


    adviceText.textContent=adviceObj1.slip.advice;

    adviceText.addEventListener("animationend",()=>
    {
        adviceText.classList.toggle("advice__text--fadeIn");
    });

    adviceText.classList.toggle("advice__text--fadeIn");



}


