
window.addEventListener("keydown", function(e) {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play();
   //key.addClass('playing');
   
    key.classList.add('playing');
    
});


$('.key').click(function() {
    var keyCode = $(this).data('key');      
    //alert(keyCode);  
    const audio = document.querySelector(`audio[data-key ="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    console.log(audio);    
   // if any other keys are pressed exit the function
    if(!audio) 
    return;
    // When key is pressed,play sound of each key from the start
    audio.currentTime = 0;
    audio.play(); 
    key.classList.add('playing');
} );

function removeTransition(e) {

    if(e.propertyName !== 'transform')
    return;
    //console.log(e.propertyName);
    console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));