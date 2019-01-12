function drag(id){
	var obj = document.getElementById(id);
	var a = 0;
	var b = 0;
	obj.onmousedown = function(ev){
		a = ev.pageX - obj.offsetLeft;
		b = ev.pageY - obj.offsetTop;
	}
}