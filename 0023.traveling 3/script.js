const back=document.getElementById('back');
const next=document.getElementById('next');
 const hero=document.getElementById('hero');



  back.addEventListener('click',()=>{
      hero.style.scrollBehavior="smooth";
     hero.scrollLeft -=600;
  })


   next.addEventListener('click',()=>{
    hero.style.scrollBehavior="smooth";
    hero.scrollLeft +=800;
   })
 