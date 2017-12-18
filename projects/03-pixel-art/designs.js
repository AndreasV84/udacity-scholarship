// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let canvas = $('#pixel_canvas').empty();
    let rows = $('#input_height').val();
    let columns = $('#input_width').val();

    const data = '<tr>' + '<td></td>'.repeat(columns) + '</td>';

    for (var i = 0; i < rows; i++) {
        canvas.append(data);
    }
}

function paint(pixel) {
    let color = $('#colorPicker').val();
    pixel.css('background-color', color);
}

$(function() {

    $("input[type='submit']").click(function(event) {
        event.preventDefault();
        makeGrid();
    });

    $('#pixel_canvas').on('click', 'td', function() {
        paint($(this));
    });
});