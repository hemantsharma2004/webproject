  const menu=document.getElementById("menu");
  const Sidebar=document.getElementById("sidebar");
  const container=document.querySelector(".container");
 const logo=document.querySelector(".logo");

  logo.addEventListener('click',()=>{
         console.log(" hello");
  })

   
   menu.addEventListener('click',()=>{
      Sidebar.classList.toggle("hello");
    container.classList.toggle("large-container");
    
   })