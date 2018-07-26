function deleteBook(id) {
    $.ajax({
        url: 'http://bootcamp.opole.pl/books/delete-book/' + id + '/mx5t',
        type: 'DELETE',
        success: function (result) {
            alert("Book was deleted\nStatus:" + result.status);
            window.location.reload();
        },
        error: function () {
            window.location.href = 'notfound.html';
        }
    })
};

function getBook(id) {
    window.location.href = 'book.html' + '#' + id;
};

function searchElement() {
    var elementValue = document.getElementById("searchInput").value;
    console.log(elementValue);
    window.location.href = 'search.html' + '#' + elementValue;
};


function sortAuthor() {
    // TODO
}

function sortTitle() {
    // TODO
}