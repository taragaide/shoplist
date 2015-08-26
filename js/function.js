$(document).ready(initializeForm);

function initializeForm() {

// initialize the app
    var itemCount = 0;
    var itemInput = $("input#item");
    itemInput.val("");

    // define what happens when we click the "Add Item" link
    $("a#add-item").click(shoppingList);
    $("#item").keydown(function (enter) {
        if (enter.keyCode == 13) {
            shoppingList();}
    });

    function shoppingList() {
        if (itemInput.val() === '') {
            return;
        }
        // get the items list and item to add
        var items = $("ul#items");
        var itemToBuy = itemInput.val();
        itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        var listItem = $("<li><input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> " + itemToBuy + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
        listItem.attr("id", "item[" + itemCount+++"]");
        addItem(listItem);

        //delete items
        listItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });

        // add the item to the list, slide in slowly
        function addItem(listItem) {
            listItem.hide();
            items.append(listItem);
            listItem.show('slow');
        }
    
        // clear input and refocus
        itemInput.focus();

}
}