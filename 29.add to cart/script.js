

 var x=0;
  document.getElementById("items").innerText= x;

 function add(val){
     document.getElementById("hello").innerHTML += "<li>" +val+ "<input type='button'  value='X' onclick='remove()'> </li>";
      x=x+1;

       document.getElementById('items').innerText=x;
 }

  function remove()
  {
     var listItems=document.getElementsByTagName("li");

      for( var i=0; i<listItems.length ;i++)
      {
         listItems[i].onclick=function(){
             this.parentNode .removeChild(this);
         }
      }
  }