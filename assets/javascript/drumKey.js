// alert("js is linked");

window.addEventListener("keydown", function(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    console.log(audio);    
   
    if(!audio) 
    return;
    audio.play();

    
    
});



var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 