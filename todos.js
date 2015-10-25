var EnterKey = 13;

$.fn.isBound = function(type, fn) {
    var data = this.data('events')[type];

    if (data === undefined || data.length === 0) {
        return false;
    }

    return (-1 !== $.inArray(fn, data));
};

$(document).ready(function() {
		function runBind() {
        $('.destroy').on('click', function(e) {
          $currentListItem = $(this).closest('li');

          $currentListItem.remove();
        });

            $('.item').dblclick(function(){
                var $Item = $(this).closest('li').find('label');
                var $editItem = $(this).closest('li').find('input').filter('.edit');
                $Item.hide();
                $editItem.show();
                $editItem.keypress(function(e) {
                    if (e.which === EnterKey) {
                        $editItem.hide();
                        $Item.text($editItem.val());
                        $Item.show();
                    }
                });
            });

            $('#all').on('click', function(e) {
                $('.item').show();
            });

            $('#active').on('click', function(e) {
                $('.item').hide().filter('.active').show();
            });

            $('#completed').on('click', function(e) {
                $('.item').hide().filter('.completed').show();
            });


        $('.toggle').on('click', function(e) {
          var $currentListItemLabel = $(this).closest('li').find('label');
		  /*
		   * Do this or add css and remove JS dynamic css.
		   */
		  if ( $currentListItemLabel.attr('data') == 'done' ) {
			  $currentListItemLabel.attr('data', '');
              $currentListItemLabel.attr('class', 'active');
		      $currentListItemLabel.css('text-decoration', 'none');

		  }
		  else {
			  $currentListItemLabel.attr('data', 'done');
              $currentListItemLabel.attr('class', 'completed');
              $currentListItemLabel.css('text-decoration', 'line-through');

		  }
			});
		}
	
	$todoList = $('#todo-list');
	$('#new-todo').keypress(function(e) {
    if (e.which === EnterKey) {
			$('.destroy').off('click');
			$('.toggle').off('click');
			var todos = $todoList.html();
      todos += ""+
				"<li>" +
          "<div class='view'>" +
            "<input class='toggle' type='checkbox'>" +
            "<input class='edit' type='text' style='display:none'>" +
            "<label class='item' class='active' data=''>" + " " + $('#new-todo').val() + "</label>" +
            "<a class='destroy'></a>" +
          "</div>" +
        "</li>";

	  $(this).val('');
		$todoList.html(todos);
		runBind();
		$('#main').show();
        $('#footer').show();

  }}); // end if
});
