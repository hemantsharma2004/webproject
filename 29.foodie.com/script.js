 const hello=document.getElementById('secondary');


  for(let i=0;i<=hello.length;i++){
  hello.addEventListener('click',()=>{
     card.innerHTML="$2.0";
     card.style.color="red";
  })
}