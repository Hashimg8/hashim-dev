// Back to top button 
let btn = document.getElementById("btn");
onscroll = function(){
    if(scrollY >= 300){
        btn.style.display = "block"
    }
    else{
        btn.style.display = "none"
    }
}
btn.onclick = function(){
    scroll({
        top: 0 ,
        behavior: "smooth"
    })
}