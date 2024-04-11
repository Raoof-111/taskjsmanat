function addRow() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cellNum = newRow.insertCell(0);
    var cellName = newRow.insertCell(1);
    var cellSurname = newRow.insertCell(2);
    var cellAge = newRow.insertCell(3);
    var cellActions = newRow.insertCell(4);
    
    cellNum.innerHTML = table.rows.length;
    cellName.innerHTML = '<input type="text">';
    cellSurname.innerHTML = '<input type="text">';
    cellAge.innerHTML = '<input type="number">';
    cellActions.innerHTML = '<button onclick="editRow(this)">Düzəliş Et</button>' +
                            '<button onclick="deleteRow(this)">Sil</button>';
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateRowNumbers();
}

function updateRowNumbers() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerHTML = i + 1;
    }
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.cells;
    for (var i = 1; i < cells.length - 1; i++) {
        var oldValue = cells[i].innerText;
        cells[i].innerHTML = '<input type="text" value="' + oldValue + '">';
    }
    var editButton = row.querySelector('button:nth-of-type(1)');
    editButton.innerHTML = 'Yadda Saxla';
    editButton.setAttribute('onclick', 'saveChanges(this)');
}

function saveChanges(button) {
    var row = button.parentNode.parentNode;
    var cells = row.cells;
    for (var i = 1; i < cells.length - 1; i++) {
        var newValue = cells[i].querySelector('input').value;
        cells[i].innerHTML = newValue;
    }
    var editButton = row.querySelector('button:nth-of-type(1)');
    editButton.innerHTML = 'Düzəliş Et';
    editButton.setAttribute('onclick', 'editRow(this)');
}