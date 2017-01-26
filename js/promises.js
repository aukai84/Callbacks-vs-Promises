(function(window) {

  const output = $('#output');

$('#get_user').click( e => {
   //get user by api user.json
  $.get('/api/user.json').then( (user) => {
    console.log(user);
    const friendId = user.friends[100];
    return $.get(`/api/friend/${friendId}.json`);
  })
  .catch( (err) => {
    console.log(err);
    output.html("something went wrong...");
  })
  .then((friend) => {
    const friendPhoto = $('<img>', {
      src: friend.picture
    });
    output.append(friendPhoto);
  });

  // async tasks can be promise objects or "thenables"
  //anything that has a promsie can be resolved or rejected
});



})(window);