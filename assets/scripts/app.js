// Your code here!
var _roles = [{}];

function setRoleImage( index ) {
    var imageUrl = "." + _roles[index].img;
    $('img#roles').attr("src", imageUrl);
}

function newOption( { img, title }, index ) {
    var $select = $('#select-role > optgroup ');
    var $option = $( document.createElement('option') )
                        .addClass("role")
                        .attr("name", title)
                        .text(title)
                        .val(index);

    $select.append( $option );

$option.on("click", function() {
    $option.selected();
})

    return $option;
}


function loadRoles(options) {
    var index = 0;
    _roles = options;

    _roles.forEach( function(role) {
        newOption(role, index);
        index++;
    });

    return _roles;
}

function ajaxRolesQuery() {

    $.ajax({
        url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/roles",
        success: loadRoles
    })

}

$(document).ready(function() {

    ajaxRolesQuery();

    $('select').on("change", function(event) {
        console.log($(this));
        setRoleImage( this.value );
    })

    $('optgroup[label="roles"] #role').click(function() {
        this.selected;
    });


})

