var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('select').val()
    }
    Parse.create(message ,(data)=> {
      console.log({...message,...data})
      Messages.addMessage({...message,...data})
    })
    $('#message').val('');
   // console.log($('#message').val());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};