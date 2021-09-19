$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
        firstDay: 1,
        showDaysInNextAndPreviousMonths: true,
        showClearBtn: true,
        format: 'dd mmmm, yyyy',
        yearRange: 3,
        i18n: {
            done: "Select"
        }
    });
});