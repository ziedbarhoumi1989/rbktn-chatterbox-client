var MessagesView = {

  $chats: $('#chats'),

  initialize: function(message) {
  	// this.$chats.append(MessageView.render(message));
  },

  renderMessage: function(message) {
  	this.$chats.append(MessageView.render(message));
  }

};