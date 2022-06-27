const image = document.querySelectorAll('.img');
const h3= document.querySelectorAll('h3');
const image1 = document.querySelector('.image-1');
const image2 = document.querySelector('.image-2');
const image3 = document.querySelector('.image-3');
const image4 = document.querySelector('.image-4');
const image5 = document.querySelector('.image-5');

image.forEach(img => {
    img.addEventListener("click", ()=>{
    daralt();
    img.classList.add('genislet');

    if(img === image1){
        image1.style.gridColumn='1/9'
    }else if(img === image2){ 
        image2.style.gridColumn='2/10'
    }else if(img === image3){ 
        image3.style.gridColumn='3/11'
    }else if(img === image4){ 
        image4.style.gridColumn='4/12'
    }else if(img === image5){ 
        image5.style.gridColumn='5/13'
    }
    });
})

function daralt(){
    image.forEach(img=>{
        img.classList.remove('genislet')
        if(img === image1){
            image1.style.gridColumn=''
        }else if(img === image2){ 
            image2.style.gridColumn=''
        }else if(img === image3){ 
            image3.style.gridColumn=''
        }else if(img === image4){ 
            image4.style.gridColumn=''
        }else if(img === image5){ 
            image5.style.gridColumn=''
        }
    })
}
