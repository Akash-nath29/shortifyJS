const urlInput = document.querySelector("#urlInput");
const generateBtn = document.querySelector("#generateBtn");
const urlOutput = document.querySelector("#urlOutput");
const copyBtn = document.querySelector("#copyBtn");

generateBtn.addEventListener("click", ()=>{
    const url = urlInput.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`)
    .then((res)=>res.json())
    .then((value)=>{
        urlOutput.value = value.result.short_link;
    }).catch((error)=>{
        urlOutput.value = "Something Went Wrong";
    })
})

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(urlOutput.value);
    copyBtn.innerHTML = "Copied!!";
    copyBtn.style.backgroundColor = "green";
    
    setTimeout(()=>{
        copyBtn.innerHTML="Copy";
        copyBtn.style.backgroundColor = "rgb(0, 157, 255)";
    }, 1000);
})