$(document).ready(function(){
// Validate text box, then add value in text box to list

  $('#button').click(function() {
    if( $('input#checkList').val().trim().length == 0 ) {
        // alert("put something here");
        $('input#checkList').val("");
    } else { 

    $('ul').append('<li class="todo"><button class="item">Done</button>' + $('input#checkList').val() + '</li>');
    $('input#checkList').val("");


    };  
  
  });

  // Change class when user clicks Done button  

  $('ul').on('click', '.item', function() {
    $(this).closest('li').toggleClass('todo done');
    $(this).remove();
  });

});