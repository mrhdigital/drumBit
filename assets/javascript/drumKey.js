
window.addEventListener("keydown", function(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play();
    
});


$('.key').click(function() {
    var keyCode = $(this).data('key');      
    //alert(keyCode);  
    const audio = document.querySelector(`audio[data-key ="${keyCode}"]`);
    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play(); 
} );

