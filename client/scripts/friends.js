var Friends = {
	storage:{},
  toggleStatus: function(username) {
   	if(!this.storage[username]) {
   		this.storage[username]=username
   	}
   	else{
   		delete this.storage[username]
   	}
   	console.log('friends are',this.storage)
   }

};