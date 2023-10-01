 const sidebar=document.querySelector(".sidebar");
 const menu=document.querySelector(".menu");
 const Container=document.querySelector(".container");


  menu.addEventListener("click",()=>{
     sidebar.classList.toggle("hello");
     Container.classList.toggle("large-container");
  })