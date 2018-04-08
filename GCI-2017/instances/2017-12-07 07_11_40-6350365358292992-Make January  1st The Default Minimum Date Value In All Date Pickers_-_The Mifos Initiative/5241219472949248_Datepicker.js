$(function() {
            var d = new Date();
    var y = new Date(d.getFullYear(), 0, 1, 0, 0, 0, 0);
    $( "#datepicker" ).datepicker({ 
        changeYear: true,
        minDate: y,
        maxDate: d,
    });
});