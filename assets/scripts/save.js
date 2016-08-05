
var $save = $(document.createElement('div'));

function displaySave( object ) {
        $save.text(object.message)
        $save.fadeIn(500, function() {
            $save.delay(2000).fadeOut(500);
        });
            
}

function ajaxSaveQuery() {
    var firstName = $('#inputFirstName').val();
    var lastName = $('#inputLastName').val();
    var role = $('#roles :selected').attr('name');

    $.ajax({
        type: "POST",
        url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/users",
        data: { firstName, lastName, role },
        success: function(data) { 
            displaySave(data);
        }
    }).error(function(object) {
        $save.text(object.message);
    })

}

function savePerson() {

    if(validateForm() === true) {
        console.log('Valid Form Fields');
        ajaxSaveQuery();
    }
}

$(document).ready(function() {

    if($('#save-status').children().length === 0) {
        $('#save-status').append($save);
        $save.addClass('alert alert-success fade in')
        $save.hide();
    }

    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('form submitted');
        savePerson();
    })

})
