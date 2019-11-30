var Messages = {
	storage: {},
	count: 0,
	addMessage: function(message) {
		this.storage[this.count++] = message;
		// $('#chats').append(MessageView.render(message));
		MessagesView.renderMessage(message) 
		//console.log(this.storage)

	},
	filterMessages: function(query) {
		MessagesView.$chats.html('');
		for(key in this.storage) {
			if(this.storage[key].roomname ===query) {
				MessagesView.renderMessage(this.storage[key]);
			}
		}
	}
};