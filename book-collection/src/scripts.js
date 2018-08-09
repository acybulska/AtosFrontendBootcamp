var titleRow = '<tr><th>' +
    '<div class="dropdown">' +
    '<button class="btn btn-outline-dark dropdown-toggle" type="button" id="chooseAction"' +
    'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action' +
    '</button><div class="dropdown-menu" aria-labelledby="dropdownMenu2">' +
    '<button class="dropdown-item" type="button" onclick="bulkDelete(getIds(resultData))">Delete</button>' +
    '</div></div>' +
    '</th><th>Author</th><th>Title</th><th></th></tr>';

var ratingData = [];

function deleteListedBook(id) {
    var del = confirm("Are you sure you want to delete this book?");
    if (del == true) {
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
    $("#myBooks").append(titleRow);
    $(function () {

        data.sort(function (a, b) {
            if (a.description < b.description) return -1;
            if (b.description < a.description) return 1;
            return 0;
        })
        var table = document.getElementById("myBooks");
        for (var i = 0; i < data.length; i++) {
            addRow(data, i, table);
        }
    });
}

function sortTitle(data) {
    $("#sortedBy").text("Sorted by title");
    $("#myBooks tr").remove();
    $("#myBooks").append(titleRow);
    $(function () {
        data.sort(function (a, b) {
            if (a.title < b.title) return -1;
            if (b.title < a.title) return 1;
            return 0;
        })
        var table = document.getElementById("myBooks");
        for (var i = 0; i < data.length; i++) {
            addRow(data, i, table);
        }
    });
}

function bulkDelete(ids) {
    var del = confirm("Are you sure you want to delete these books?");
    if (del == true) {
        var i = 0;
        for (const i of ids) {
            $.ajax({
                url: 'http://bootcamp.opole.pl/books/delete-book/' + i + '/mx5t',
                type: 'DELETE',
                success: function (result) {
                    console.log("Delete book result:" + result.status);
                },
                error: function () {
                    console.log("Delete book ERROR");
                }
            })
        }
        alert("Books deleted");
        window.location.href = "index.html";
    }
}

function getIds(data) {
    var ids = [];
    for (let i = 0; i < data.length; i++) {
        if (document.getElementById("bulkCheckbox" + data[i].id).checked === true) {
            ids.push(data[i].id);
        }
    }
    console.log(ids);
    return ids;
}

function addRow(books, i, table) {
    var row = table.insertRow(i + 1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = "<input type='checkbox' id='bulkCheckbox" + books[i].id + "' style='margin-left: 30px'>";
    cell1.innerHTML = books[i].description;
    cell2.innerHTML = books[i].title;
    cell3.innerHTML = getRating(books[i].id) + "<button type='button' class='btn btn-link' onclick='getBook("
        + books[i].id + ")'><i class='far fa-edit'></i></button><button "
        + "type='button' class='btn btn-link' onclick='deleteListedBook("
        + books[i].id + ")'><i class='far fa-trash-alt'></i></button>";
}

function addFilteredRow(books, i, k, table) {
    var row = table.insertRow(k);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = "<input type='checkbox' id='bulkCheckbox" + books[i].id + "' style='margin-left: 30px'>";
    cell1.innerHTML = books[i].description;
    cell2.innerHTML = books[i].title;
    cell3.innerHTML = getRating(books[i].id) + "<button type='button' class='btn btn-link' onclick='getBook("
        + books[i].id + ")'><i class='far fa-edit'></i></button><button"
        + "type='button' class='btn btn-link' onclick='deleteListedBook("
        + books[i].id + ")'><i class='far fa-trash-alt'></i></button>";
    resultData.push(books[i]);
}


function getRatings() {
    $.ajax({
        url: 'http://bootcamp.opole.pl/books/my-rates/mx5t',
        type: 'GET',
        success: function (result) {
            console.log("GET Status: " + result.rates[0].book);
            ratingData = result.rates;
        },
        error: function () {
            // window.location.href = 'notfound.html';
            console.log("Error with ratings");
        }
    });
}

function getRating(bookId) {
    var rating = 0;
    for (var i = 0; i < ratingData.length; i++) {
        if (ratingData[i].book === bookId) {
            rating = parseFloat(ratingData[i].sum / ratingData[i].rates);
        }
    }
    console.log("rating="+rating);
    switch (true) {
        case rating >= 1 && rating<2:
            return "<div>" +
                "<span class='icon star'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "</div>";
        case rating >= 2 && rating < 3:
            return "<div>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "</div>";
        case rating >= 3 && rating < 4:
            return "<div>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "</div>";
        case rating >= 4 && rating < 5:
            return "<div>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star-empty'></span>" +
                "</div>";
        case rating == 5:
            return "<div>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "<span class='icon star'></span>" +
                "</div>";
        default:
            return "<div>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "<span class='icon star-empty'></span>" +
                "</div>";
    }
}