let sign=document.getElementById("login/signup/");
console.log(sign);
let section=document.getElementById("login_model")
sign.onclick=function(){
    let a=section.classList.toggle("move_right");
          if(a){
            section.style.transform="translateX(0%)";
            console.log(work);
           }
        else{
            section.style.transform="translateX(-200%)"
            }
}
let mark=document.getElementById("login_close_mark");
console.log(mark);
mark.onclick=function(){
    section.style.transform="translateX(-200%)";
}