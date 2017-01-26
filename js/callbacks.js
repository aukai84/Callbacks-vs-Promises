(function(window) {

  const output = $('#output');

  $('#get_user').click(e => {

    $.get('/api/user.json', (user) => {
      const friendId = user.friends[0];

      $.get(`/api/friend/${friendId}.json`, (friend) => {

        const friendPicture = $('<img>', {
          src: friend.picture,
        });
        output.append(friendPicture);

      });
    });
  });





})(window);