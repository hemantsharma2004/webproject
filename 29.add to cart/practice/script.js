
 var x=0;
  document.getElementById("total").innerText =x;

  function add(val){
     document.getElementById("hello").innerHTML +="<li>"+ val+ "<input type='button' id='remove' value='X' onclick='remove()'> </li>";;
     x=x+1;

     document.getElementById("total").innerText =x;

  }

   function remove(){

      var listItem=document.getElementsByTagName("li");

       for(var i=0; i<listItem.length ;i++)
       {
         listItem[i].onclick=function(){
            this.parentNode .removeChild(this);
         }
       }
     
       x=x-1;
          document.getElementById("total").innerText =x;
   }


     var right=document.querySelector(".right");
   var item=document.getElementById("items");


   
    item.addEventListener("click",function(){
         right.style.display="block";
    
         item.innerHTML="buy now";
          item.style.borderRadius="10px";
          
    });
      


    // for( var i=0; i<=item.length ;i++)
    // {
    //    item[i].addEventListener('click', function(){
    //       console.log("hello");
    //    });
    // }
