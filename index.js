$(function() {
    $('ul').on('click', 'li button', function(event) {
        let clickedList = this.closest("li");
        if (this.className === 'shopping-item-toggle') {
            $(clickedList).find(".shopping-item").toggleClass("shopping-item__checked");
        }
        if (this.className === 'shopping-item-delete') {
            clickedList.remove();
        }
    });

    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        let itemName = ($("#shopping-list-entry").val());
        $(".shopping-list").append(
            $(`<li>
                <span class="shopping-item">${itemName}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`));
    });
    
});
