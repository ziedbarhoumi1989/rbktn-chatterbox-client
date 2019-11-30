var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data)
      data.results.map( message => {
        if(message.username && message.text && message.roomname && !message.text.includes('<') &&!message.username.includes('<') && !message.roomname.includes('<')){
          Messages.addMessage(message);
          message.roomname && Rooms.add(message.roomname);
          //MessagesView.renderMessage(message);
        }
      });
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
