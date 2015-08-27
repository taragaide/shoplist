$(document).ready(function(e) {
  editButton();

  $("tbody").on("click", ".cross", function() {
    $(this).closest("tr").remove();
  });

  $("button").on("click", getInput);

  $("tbody").on("click", ".box", function() {
    $(this).closest("tr").find("span").toggleClass("checked");

  });
});

// triggered on Enter
$(document).on("keydown", function(e) {
  if(e.keyCode === 13) {
    getInput();
  }
});

// Toggle delete icon when edit button is clicked
function editButton() {
  $(".edit").on("click", "span", function() {
    $(".cross").toggle();
  });
}

// input and then calling addItem() with the input
function getInput() {
  var custInput = $(".custinput");
  var input = custInput.val();

  if ((input !== "") && ($.trim(input) !== "")) {
    addItem(input);
    custInput.val("");
  }
}

//adding item to the list


function addItem(message) {
  $(".cross").hide(); // hiding the delete icon
  var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + "\" class=\"box\">" + "<label for=\"item" + "\" class=\"check-label\"></label></td>";
  var content = "<td class=\"content\"><span>" + message + "</span></td>";
  

  $("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");
}
