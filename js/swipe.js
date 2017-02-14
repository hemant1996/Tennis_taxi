window.onload=function start()
{
	slide();
}
function slide()
{
	var a=1;
	window.setInterval(function ()
	{
		var concat="img/scroll_"+a.toString()+".png"
		document.getElementById('scroll').src=concat;
	
	if (a>=3) 
	{
		a=0;
	};
	a=a+1;
	
	},200)
}