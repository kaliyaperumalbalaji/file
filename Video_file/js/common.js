$('#back-img').css('display','none');
$('body').css('background','#fff');

$('#myvideo').on('ended',function(){
	$('body').css('background','');
	$('#myvideo').css('display','none');
	$('#back-img').css('display','block');
});