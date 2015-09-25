// $(document).ready(function(){
// Validate text box, then add value in text box to list
document.onload(){
  // $('#button').click(function() {
    document.getElementById('button').onclick(){
      var checkList = document.getElementById('checkList');
    // if( $('input#checkList').val().trim().length === 0 ) {
      if(checkList === '')
      alert("Please enter something");
    
        // alert("put something here");
        // $('input#checkList').val("");
    } else { 

    $('ul').append('<li class="todo"><button class="item">Done</button>' + $('input#checkList').val() + '</li>');
    $('input#checkList').val("");


    };  
  
  });

  // Change class when user clicks Done button  

  $('ul').on('click', '.item', function() {
    //$(this).closest('li').toggleClass('todo done');
    //$(this).remove();
    this.parentElement.remove();
  });

});