$(document).ready(function(){
	
	var imgRow;
	var selectedImg;
	$('div.img-overlay').click(function(){
		
//		imgRow = $(this).attr('data-row');
//		switch(imgRow) {
//			case 'top':
//        		$('.img-modal-wrapper').addClass('img-modal-overlay--top');
//        	break;
//			case 'bottom':
//				$('.img-modal-wrapper').addClass('img-modal-overlay--bottom');
//			break;
//		}
		
		$("body").addClass('modal-open');
		selectedImg = $(this).siblings().attr('src');
		console.log(selectedImg);
		$('#img-modal').attr('src', selectedImg);
		$('.img-modal-wrapper').show();
		$('#img-modal-overlay').show();
		
	})
	
	$('#img-modal-overlay, #img-modal-wrapper').click(function(){
		$('#img-modal-overlay').hide();
		$('.img-modal-wrapper').hide();
		$("body").removeClass('modal-open');
	})
	
})