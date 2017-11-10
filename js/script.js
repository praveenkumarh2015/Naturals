

/*
Gallery
*/

$(document).ready(function(){
   $('img').on('click', function(){
var src=$(this).attr('src');
$("#modal-img").attr('src',src);
$("#myModal").modal('show');
});
});


/*
Signin & Signup
*/

$('#logonLink').on('click', function(e) {
	$('#logonBox').modal({
		keyboard: false,
		backdrop: 'static'
	});
});

	$('#doLogon').on('click', function(e) {
		alert('Thank you for Signing In');
		$('#logonBox').modal('hide');
	});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var data = $(e.target).data('caption');
	var modal = $('#logonBox');
	modal.find('.modal-title').text(data);
			  
});
	
/*
Smooth Srolll
*/

function scrollNav() {
  $('.scroll').click(function(){  
   $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top 
    		}, 1400);
    return false;
  	});
  $('.scrollTop a').scrollTop();
	}
	scrollNav();

/*
Hover Text
*/
	
$(document).ready(function(e) {
	$('.with-hover-text, .regular-link').click(function(e){
		e.stopPropagation();
	});
	

	$('.with-hover-text').hover(
		function(e) {
			$(this).css('overflow', 'visible');
			$(this).find('.hover-text')
				.show()
				.css('opacity', 0)
				.delay(200)
				.animate(
					{
						paddingTop: '25px',
						opacity: 1
					},
					'fast',
					'linear'
				);
		},
		function(e) {
			var obj = $(this);
			$(this).find('.hover-text')
				.animate(
					{
						paddingTop: '0',
						opacity: 0
					},
					'fast',
					'linear',
					function() {
						$(this).hide();
						$( obj ).css('overflow', 'hidden');
					}
				);
		}
	);
	
	var img_loaded = 0;
	var j_images = [];
	
});


/*
Map
*/

function initMap() {
        var chennai = {lat: 13.067439, lng: 80.237617};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: chennai
        });
        var marker = new google.maps.Marker({
          position: chennai,
          map: map
        });
}