
document.getElementById('editButton').addEventListener('click', function () {
    console.log("Edit button clicked"); // Test output
    var cells = document.querySelectorAll('table td');
    cells.forEach(function (td) {
        td.setAttribute('contenteditable', 'true');
    });
    this.style.display = 'none';
    document.getElementById('saveButton').style.display = 'block';
});

document.getElementById('saveButton').addEventListener('click', function () {
    console.log("save button clicked"); // Test output
    var cells = document.querySelectorAll('table td');
    cells.forEach(function (td) {
        td.removeAttribute('contenteditable');
    });
    this.style.display = 'none';
    document.getElementById('editButton').style.display = 'block';
    // add code here to handle the saving of data (backend)
});


