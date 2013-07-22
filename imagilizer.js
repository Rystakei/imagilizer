alert('hello');

$(document).ready(function() {
firstImage = $('img').first().addClass('fullsize'); 
activatedImage = firstImage.clone().appendTo($('#panel')).removeAttr("width");

$('#sidebar img').click(function() {
  alert("You clicked the sidebar");
  //select former image and fade it out of the panel
  formerImage = $('#panel').find('.fullsize');
  formerImage.fadeOut(); 
  formerImage.removeClass('fullsize');

  //select new image
  ActiveThumbnail = $(this).addClass('active');
  FullSizeImage = $(this).addClass('fullsize');


  // //clone newly clicked image and append it to panel, removing width
  FullSizeImage.clone().appendTo($('#panel')).removeAttr("width");

  // // When user clicks a thumbnail, highlight the thumbnail as 'active'
  // //by adding the active CSS class t the image tag
  // firstImage = $('img').first().addClass('active'
  // //When we click a thumbnail, the class of the previous
  // //thumbnail should change to inactive




});

});
