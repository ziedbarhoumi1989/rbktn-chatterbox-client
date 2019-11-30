var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	this.$button.on('click', function(){
  		Rooms.add($('#message').val());
  		$('#message').val('');
  	})
    this.$select.on('change',() => {
      Messages.filterMessages(this.$select.val())
      // var href = $('option:selected', this).attr('data-href');
      //  window.du(href, '../index.html');
    })
  },

  renderRoom:function(room) {
  	this.$select.append(`<option>${room}</option>`)
  }

};
