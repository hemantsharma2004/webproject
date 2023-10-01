 var slide= document.getElementById('slide');

 var images=new Array(

 "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/2835547/pexels-photo-2835547.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/3873951/pexels-photo-3873951.jpeg?auto=compress&cs=tinysrgb&w=600",

 )

  var len=images.length;
   var i=0;

    function slider()
    {
         if(i>len-1){
            i=0;
         }
         slide.src=images[i];
         i++;
    }

     setTimeout('slider()',3000)