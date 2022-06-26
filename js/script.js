//alert('Hi!');;





let btn__burger = document.querySelector('.btn__burger');
const MENU = document.querySelector('.header__menu');
const HTML = document.querySelector('html');






btn__burger.onclick = () => {
  console.log(1);
  MENU.classList.toggle('_activeMenu');
  HTML.classList.toggle('hidden');
  btn__burger.classList.toggle('btn__burger_active');
}



;

const TitleSpoller = document.querySelectorAll('.menu-footer__titleWrepper');
const ListSpoller = document.querySelectorAll('.menu-footer__list');

const CrossElem = document.querySelector('.cross-Block__elem');

//console.log(  ListSpoller);

TitleSpoller.forEach(item => {
  item.addEventListener('click', spollerOpen);
});





function closeSpoller(){
    ListSpoller.forEach(item => {
        if(item.classList.contains('acative-spoller')){
            item.classList.remove('acative-spoller');
            item.previousElementSibling.childNodes[3].childNodes[3].classList.toggle('cross-open');
        }
      });
}


function spollerOpen(e) {
  console.log(this.nextElementSibling);
 // closeSpoller();
  this.nextElementSibling.classList.toggle('acative-spoller');
  //console.log(this);
  this.childNodes[3].childNodes[3].classList.toggle('cross-open')
}


;

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


/===================================/
let animItems = document.querySelectorAll('._animItems');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  
  function animOnScroll(){
   
    for(let i = 0; i<animItems.length; i++ ){
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offSet(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight -  animItemHeight/animStart;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight -  window.innerHeight/animStart;
      }
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight  )){

        animItem.classList.add('_active');

      }else{
        if(!animItem.classList.contains('_anim-noHeight')){
          animItem.classList.remove('_active');
        }
       
      }

    }
  }
  function offSet(el){
    const rect =el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,

    }

    setTimeout(()=>{animOnScroll();}, 300);
    


  }


}





