var Rooms = {
storage: {},
counter:0,
add :function(room) {
	if(!this.storage[room]){
		this.storage[room] = room;
		RoomsView.renderRoom(room);
	}
}


};