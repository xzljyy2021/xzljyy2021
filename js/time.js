function get_time()
{
	var a=[31,28,31,30,31,30,31,31,30,31,30,31];
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	var month,day,year;
	m=precess(m);
	s=precess(s);
	year=today.getFullYear();
	month=today.getMonth();
	day=today.getDate()-3;
	 for(var i=0;i<month;i++)
	 	day+=a[i];
	day+=(2021-year)*365;
	document.getElementById("tian").innerHTML=day+"日";
	document.getElementById("shi").innerHTML=h+"时";
	document.getElementById("fen").innerHTML=m+"分";
	document.getElementById("miao").innerHTML=s+"秒";
	setTimeout(function(){get_time()},500);
}

function precess(i)
{
	if(i<10) i="0"+i;
	return i;
}