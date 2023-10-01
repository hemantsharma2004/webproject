const  animes=document.getElementById('animes');
const image=document.getElementById('image');
const  para=document.getElementById('secondary');

   let APIURL="https://api.catboys.com/img";


 animes.addEventListener('click', async ()=>{
  para.innerHTML="loading.....";
   
     let risk = await fetch(APIURL);
     let data= await risk.json();


      image.style.display="block";
      para.style.display="block";

     image.src=data.url;
     para.innerHTML=data.artist;

 })