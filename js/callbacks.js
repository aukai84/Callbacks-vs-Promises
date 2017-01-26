(function(window) {

  const output = $('#output');

  $.get('/api/user.json', (data) => {
    output.html(data.name);
    console.log(data);
  });

})(window);