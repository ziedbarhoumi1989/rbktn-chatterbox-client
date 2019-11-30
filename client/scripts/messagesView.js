var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
  	
  	this.$chats.prepend(MessageView.render(message));
  	$('.username').on('click',function(event){
  		console.log(event.target.innerText)
  		Friends.toggleStatus(event.target.innerText)
  		
  	})
  }


};