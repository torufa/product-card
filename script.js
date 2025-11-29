let form = document.querySelector("form");
let imgFile = document.querySelector(".pic");
let pic = document.querySelector(".pic-inp");
let bio = document.querySelector(".bio");
let span = document.querySelector("span");
let arrow = document.querySelector(".arrow");
let inps = document.querySelectorAll("input");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
});

pic.addEventListener("click", ()=>{
    imgFile.click()
});
imgFile.addEventListener("change", function (dtls) {
    pic.innerText = dtls.target.value;
});

bio.addEventListener("input", function(e){
    span.innerText = 20 - e.target.value.length;
    let value = span.innerText;   
    if(value < 0){
        bio.style.color = "#af2e2e"
        span.style.color = "#af2e2e";
    }else{
    span.style.color = "#adacacff";
    bio.style.color = "#fff";
    }
});

form.addEventListener("submit", (e)=>{
    arrow.style.display = "grid";

    let container = document.createElement("div"); 
    container.classList.add("container");
    
    let dtls = document.createElement("div"); 
    dtls.classList.add("dtls");

    let img = document.createElement("div"); 
    img.classList.add("img");
    let image = document.createElement("img");
    console.dir(image);

    let file = imgFile.files[0];
    let blobURL = URL.createObjectURL(file);
    image.src = blobURL;



    img.appendChild(image);

    let h2 = document.createElement("h2"); 
    h2.innerText = inps[0].value;
    let h3 = document.createElement("h3"); 
    h3.innerText = inps[1].value;
    let p = document.createElement("p"); 
    p.innerText = inps[3].value;
    let submit = document.createElement("input"); 
    submit.classList.add("submit");
    submit.type = "Submit";

    
    dtls.appendChild(img);
    dtls.appendChild(h2);
    dtls.appendChild(h3);
    dtls.appendChild(p);
    dtls.appendChild(submit);
    container.appendChild(dtls);
    document.body.appendChild(container);
    
});










 


