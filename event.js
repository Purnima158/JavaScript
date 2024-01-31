// btn1.addEventListener("Click",()=>{
//     console.log("button was clicked");
// });


// btn1.addEventListener("Click",()=>{
//     console.log("button was clicked-handler2  ");
// })
let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";

modebtn=addEventListener("click",()=>{ 

    if(currmode==="light")
    {
  currmode="dark";
  body.classList.add("dark");
    }else{
        currmode="light "; 
        body.classList.add("light");

    }
    console.log(currmode);
    //console.log("You are trying to change mode");
})