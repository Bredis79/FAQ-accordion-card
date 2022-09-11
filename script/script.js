$(function(){

$("h2").on("mouseenter", function(event){
    
    $(".secondImg").animate({
        marginLeft: "-517px"
    }, 100)

$("h2").on("mouseout", function(event){
    $(".secondImg").animate({
        marginLeft: "-480px"
    },100)
})    
   
})

})

let arrow = document.querySelectorAll("span")
let p = document.querySelectorAll("p")
let h2 = document.querySelectorAll("h2")


for(let i = 0; i < arrow.length; i++){  //loop for arrow
    for(let j = 0; j < p.length; j++){ //loop for paragraph
        for(let k = 0; k < h2.length; k++){ //loop for h2
    
    h2[i].addEventListener("click", function(event){
        
        if(arrow[i].id === p[j].id) {
            p[j].classList.toggle("active")
        } else {
             p[j].classList.remove("active")
             arrow[i].classList.remove("arrow")
        }

        if(arrow[i].id === h2[k].id){
            h2[k].classList.toggle("bold")
            arrow[i].classList.toggle("arrow")
        } else {
            h2[k].classList.remove("bold")
            
        }


    })
  }
 }
}








