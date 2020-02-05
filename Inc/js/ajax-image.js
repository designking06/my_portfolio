$("form.ajax-image").on('submit', function() {
			//targets the form with the ajax class
      var that = $(this),
      var files = $('#file')[0].files;

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
      data.append('file',files);
			//the ajax request
      $.ajax({
      url:url,
      type: type,
      data: data,
      cache:false,
      contentType: false,
      processData: false,
      asynch:false,
      success: function(response){
      alert(response);
       console.log(response);
      },
      error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError);
    }

		});

		//prevents page from refreshing
		return false;
});
