let textsEle = document.getElementById("texts")
let btnEle = document.querySelector(".btn")
textsEle.addEventListener("input",function(){
    btnEle.innerHTML = "Copy"
}

)
btnEle.addEventListener("click", async function(){
   await navigator.clipboard.writeText(textsEle.value);
    btnEle.innerHTML = "Copied"
}
)