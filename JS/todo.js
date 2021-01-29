$("ul").on("click","li",function(){
	$(this).toggleClass("connected");
});
/*$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	
	event.stopPropagation();
});*/
$("ul").on("click","span",function(evevt){
    $(this).parent().remove();
    evevt.stopPropagation();
});
$("input").keypress(function(event){

	if(event.which === 13){
		//grabing a new todo text from input 
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li and add to ul 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle();
});