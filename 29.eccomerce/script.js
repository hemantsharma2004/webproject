 var FullImage=document.getElementById("image");
  var login=doxument.getElementById("login");
   var register=document.getElementById("register");

  function MyFunction(SmallImage){
     FullImage.src=SmallImage.src;
  }


   var LoginForm=document.getElementById(" loginform");
   var RegisterForm=document.getElementById(" registerform");
   var indicator=document.getElementById(" indicator");


   function Register(){
        LoginForm.style.transform= "translateX(0px)";
        RegisterForm.style.transform=" translateX(0px)";
       
   }

    function Login(){
      LoginForm.style.transform = "translateX(200px)"; 
      RegisterForm.style.transform = "translateX(200px)"; 
       
    }

   



   