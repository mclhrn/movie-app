function bindEvent(){
	//homepage menu click event
	$("#menu_showing").bind("click",function(){
		var id=$(this).attr("id");
		id=id.replace('menu_','');
		if (id!=undefined){
			nav[id]();
		}
	});
	
}


