$(document).ready(function() {

  if (document.querySelector('.alert')){
    $('.alert').fadeOut(5000);
  }
  $('.delete-article').on('click', function(e){
      $target = $(e.target);
      console.log('$target: ', $target);
      const id = $target.attr('data-id');
      swal({
        title: "Bist Du sicher?",
        text: "Du möchtest die ganze Liste löschen?",
        icon: "info", /* type: "info", */
        buttons: [
          "Nein", 
          "Ja, absolut!" 
        ],
        focusConfirm: false,
        showCloseButton: true
      })
      .then((willDelete) => {
        if(willDelete){
          $.ajax({
            type: 'DELETE',
            url:'/articles/' + id,
            success: function(response) {
              window.location.href='/'
            },
            error: function(err) {
              console.log(err);
            }
          }); 
        } else {
          return false;
        };
      });
  });

  $('.delete-item').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    const did = $target.attr('id');
    swal({
      title: "Bist Du sicher?",
      text: "Du möchtest diesen Eintrag löschen?",
      icon: "info", /* type: "info", */
      buttons: [
        "Nein", 
        "Ja, absolut!" 
      ],
      focusConfirm: false,
      showCloseButton: true
    })
    .then((willDelete) => {
      if(willDelete){
      $.ajax({
      type: 'PUT',
      url:'/articles/delete_item/' + id + '/' + did,
      success: function(response) {
        window.location.href='/articles/'+id; 
        console.log('Deletetd, Asikopp!!!');
      },
      error: function(err) {
        console.log(err); 
      }
      })
    } else {
      return false;
      };
    });

    
  });

  $('.checkbox').on('click', function(e) {
    $target = $(e.target);
    const id = $target.attr('data-id');
    const did = $target.attr('id');
    $.ajax({
      type: 'PUT',
      url:'/articles/edit_check/' + id + '/' + did,
      success: function(response) {
        window.location.href='/articles/' + id;
        console.log('Asikopp!!!');
      },
      error: function(err) {
        console.log(err); 
      }
    });

  });
});