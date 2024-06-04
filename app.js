const menue = document.querySelector('#mobile-menue');
const menue_link = document.querySelector('.navbar__menu');

menue.addEventListener('click', function(){
    menue.classList.toggle('is-active');
    menue_link.classList.toggle('active');
});

/*
this is for the main page buttons
*/
document.getElementById('button1').addEventListener('click', function() {
    // Code to be executed when button1 is clicked
    event.preventDefault();
    event.stopPropagation(); //
    window.location.href = '/my/contactbox.html';
    //alert('Button 1 clicked!');
    });
    
    document.getElementById('button2').addEventListener('click', function() {
    // Code to be executed when button2 is clicked
    event.preventDefault();
    event.stopPropagation(); //
    window.location.href = '/my/education.html';
    //alert('Button 2 clicked!');
    });
//this is for the contact "snackbar"
    function myFunction() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }