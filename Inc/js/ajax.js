$("form.ajax").on('submit', function() {
			//targets the form with the ajax class
      var that = $(this),
			//targets the forms action
      url = that.attr('action'),
			//targets the forms method
      type = that.attr('method'),
      data = {};
			//loops through form input names and attaches values to name
      that.find('[name]').each(function(index, value){
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
      });
			//the ajax request
      $.ajax({
      url:url,
      type: type,
      data: data,
      success: function(response){
      alert(response);
       console.log(response);
      },

		});

		//prevents page from refreshing
		return false;
});
