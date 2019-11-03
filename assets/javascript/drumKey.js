// alert("js is linked");
// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });
window.addEventListener("keydown", function(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play();

    
    
});
// document.getElementById("demo").innerHTML = myFunction();
//  function myFunction() {
//     var d = $(this).data('key'); 
     
      
//         alert(d);   
//     //document.getElementById("65").innerHTML = "red";
//     // var x = document.getElementsByid("65").getAttribute("class");
//     // console.log = x;
//     // document.getElementById("demo").innerHTML = x;
//     const audio = document.querySelector(`audio[data-key ="83"]`);
//     audio.play();

    
    
// };

$('.key').click(function() {
    var keyCode = $(this).data('key');      
    alert(keyCode);  
    const audio = document.querySelector(`audio[data-key ="${keyCode}"]`);
    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play(); 
} );


var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

onclick="myFunction()"