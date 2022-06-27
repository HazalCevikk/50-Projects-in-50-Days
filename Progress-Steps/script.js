const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const item = document.querySelectorAll('.item');
const line = document.querySelectorAll('.line')
let click = 0;

next.addEventListener('click', (e)=>{
    e.preventDefault();
    click ++;
    if(click > item.length){
        click = item.length;
    }
    nextprevFunc();
}
);

prev.addEventListener('click', (e)=>{
    e.preventDefault();
    click--;
    if(click < 0){
        click = 0;
    }    
    nextprevFunc()
})

function nextprevFunc(){
       item.forEach((step, i)=>{
        if(i<=click){
            step.classList.add('animate')
        }else{
            step.classList.remove('animate')
        }
    })
    line.forEach((step, i)=>{
        if(i<click){
            step.classList.add('animate')
        }else{
            step.classList.remove('animate')
        }
  })
}

