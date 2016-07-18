$(document).ready(function(){
	$('.color-list')
	.on('keyup', '#1', function(ev){
		$aa = ($(this).val());
		$(this).parent().parent().css("background-color", $aa );
	})
	.on('keyup', '#2', function(ev){
		$ab = ($(this).val());
		$(this).parent().parent().css("background-color", $ab );
	})
	.on('keyup', '#3', function(ev){
		$ac = ($(this).val());
		$(this).parent().parent().css("background-color", $ac );
	})
	.on('keyup', '#4', function(ev){
		$ad = ($(this).val());
		$(this).parent().parent().css("background-color", $ad );
	})
	.on('keyup', '#5', function(ev){
		$ae = ($(this).val());
		$(this).parent().parent().css("background-color", $ae );
	});
	
})

$colId = 0;
var colArray = [];
var arr = [];

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    
	if(keycode == '76' ||keycode == '108' ){
		keyLike();
	}
	
	if(keycode == '68' ||keycode == '100' ){
		keyDislike();
	}
	
	if(keycode == '32' ){
		keyChange();
	}
});


function keyLike(){
	if($colId<5){
	$col = get_color();
	$colId++;
	$color_body = " <li class=\"color\" style=\"background-color: #"+ $col +" ;\"><div class=\"color-container\"><input type=\"text\" class=\"color-code\" id="+$colId+ " value=#"+ $col +"></div></li>";
	
	$("ul").append($color_body);
		
	colArray += ", #"+$col;
	
	arr = colArray.split(',');
	}
}

function keyDislike(){
	$col = get_color();
	if($('.color-list li').length == 1){
		$('ul li:last-child').css("background-color", "#"+$col );
		$('ul li:last-child .color-code:text').val("#"+$col);
		
		colArray = colArray.slice(0,-7);
		
		colArray += "#"+$col;
		arr = colArray.split(',');
	}else{
		$colId--;
		$('ul li:last-child').hide('slow', function(){ $('ul li:last-child').remove(); });
		colArray = colArray.slice(0,-9);
		arr = colArray.split(',');
	}
}

function keyChange(){
	$col = get_color();
	$('ul li:last-child').css("background-color", "#"+$col );
	$('ul li:last-child .color-code:text').val("#"+$col);
	
	colArray = colArray.slice(0,-7);
	
	colArray += "#"+$col;
	arr = colArray.split(',');
}

function get_color(){
	return Math.floor(Math.random()*16777215).toString(16);
}