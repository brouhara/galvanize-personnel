
var fields = { firstName, lastName, roles };

var selector = '.form-group#';
function formGroup( name ) { return $( selector + name ); }
function formLabel( name ) { return $( selector + name + ' label' ); }
function formInput( name ) { return $( selector + name + ' input ' ); }
function formSpan( name ) { return $( selector + name + ' span ' ); }
function formText( name ) { return $( selector + name + ' small' ); }

function Field(name) {
    this.id = name;
    this.selector = '.form-group#' + name;

    this.group = formGroup(name);
    this.label = formLabel(name);
    this.input = formInput(name);
    this.span = formSpan(name);

    this.text = $( '.form-group#' + name + ' small' );
}

Field.prototype.success = function() {
    console.log('Success!');

    this.group.removeClass('has-error');
    this.input.removeClass('form-control-danger');
    this.span.removeClass('glyphicon-warning-sign');

    this.group.addClass('has-success');
    this.input.addClass('form-control-success');
    this.span.addClass('glyphicon-ok');
    this.text.text('');
    return true;
}

Field.prototype.error = function( message ) {
    console.log('Failure!');

    this.group.removeClass('has-success');
    this.input.removeClass('form-control-success');
    this.span.removeClass('glyphicon-ok');

    this.group.addClass('has-error');
    this.input.addClass('form-control-danger');
    this.span.addClass('glyphicon-warning-sign');
    this.text.text(message);
    return false;
}

Field.prototype.min = function(min) {
    return this.input.val().length >= min;
}


// Changes State based on results
function inputMin(field, min) {
    return field.min(min) ? field.success() : field.error('Too few characters.');
}

function lastName() {
    var name = new Field('LastName');
    return inputMin(name, 2);
}

function firstName() {
    var name = new Field('FirstName');
    return inputMin(name, 2);
}

function validateForm() {
    console.log('Form Validation');
    var valid = true;

    if( !(firstName()) ) {
        valid = false;
    }
    
    if( !(lastName()) ) {
        valid = false;
    }

    return valid;
}

