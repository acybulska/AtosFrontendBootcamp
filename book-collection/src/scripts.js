function deleteListedBook(id) {
    var del = confirm("Are you sure you want to delete this book?");
    if(del == true) {
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
    }
};

function getBook(id) {
    window.location.href = 'book.html' + '#' + id;
};

function searchElement() {
    var elementValue = document.getElementById("searchInput").value;
    console.log(elementValue);
    window.location.href = 'search.html' + '#' + elementValue;
};

function sortAuthor(data) {
    $("#sortedBy").text("Sorted by author");
    $("#myBooks tr").remove();
    var titleRow = "<tr><th>Author</th><th>Title</th><th></th></tr>";
    $("#myBooks").append(titleRow);
    $(function () {

        data.sort(function (a, b) {
            if (a.description < b.description) return -1;
            if (b.description < a.description) return 1;
            return 0;
        })
        var table = document.getElementById("myBooks");
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = data[i].description;
            cell2.innerHTML = data[i].title;
            cell3.innerHTML = "<button type='button' class='btn btn-link' onclick='getBook("
                + data[i].id + ")'><i class='far fa-edit'></i></button><button"
                + "type='button' class='btn btn-link' onclick='deleteBook("
                + data[i].id + ")'><i class='far fa-trash-alt'></i></button>";
        }
    });
}

function sortTitle(data) {
    $("#sortedBy").text("Sorted by title");
    $("#myBooks tr").remove();
    var titleRow = "<tr><th>Author</th><th>Title</th><th></th></tr>";
    $("#myBooks").append(titleRow);
    $(function () {

        data.sort(function (a, b) {
            if (a.title < b.title) return -1;
            if (b.title < a.title) return 1;
            return 0;
        })
        var table = document.getElementById("myBooks");
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = data[i].description;
            cell2.innerHTML = data[i].title;
            cell3.innerHTML = "<button type='button' class='btn btn-link' onclick='getBook("
                + data[i].id + ")'><i class='far fa-edit'></i></button><button"
                + "type='button' class='btn btn-link' onclick='deleteBook("
                + data[i].id + ")'><i class='far fa-trash-alt'></i></button>";
        }
    });
}